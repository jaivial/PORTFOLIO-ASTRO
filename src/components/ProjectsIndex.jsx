import { useState, useEffect } from "react";
import { useTranslations } from "../utils/translations";

function ProjectsIndex({ projects, allTechnologies }) {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeTechs, setActiveTechs] = useState([]);
  const [showAllTechs, setShowAllTechs] = useState(true);

  const t = useTranslations();

  // Helper function to get short description
  const getShortDescription = (description) => {
    if (description.length <= 120) return description;
    return description.substring(0, 120) + "...";
  };

  // Tech categories for styling
  const techCategories = {
    frontend: ["HTML", "Javascript", "Css", "Tailwind css", "Astro", "React", "Vue", "Angular"],
    backend: ["PHP", "NodeJS", "Express", "Python", "Java", "Ruby"],
    database: ["MySQL", "MongoDB", "PostgreSQL"],
    other: ["Markdown"],
  };

  const getTechCategory = (tech) => {
    if (techCategories.frontend.includes(tech)) return "frontend";
    if (techCategories.backend.includes(tech)) return "backend";
    if (techCategories.database.includes(tech)) return "database";
    return "other";
  };

  // Hide loader on mount
  useEffect(() => {
    const hideLoader = () => {
      const pageLoader = document.getElementById("page-loader");
      if (pageLoader) {
        pageLoader.style.opacity = "0";
        setTimeout(() => {
          pageLoader.style.display = "none";
          setIsLoading(false);
        }, 500);
      } else {
        setIsLoading(false);
      }
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", hideLoader);
    } else {
      setTimeout(hideLoader, 100);
    }

    // Fallback
    setTimeout(hideLoader, 1000);

    return () => {
      document.removeEventListener("DOMContentLoaded", hideLoader);
    };
  }, []);

  // Filter projects based on selected technologies
  useEffect(() => {
    if (showAllTechs || activeTechs.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        activeTechs.some((tech) =>
          project.tech.some((projectTech) =>
            projectTech.toLowerCase() === tech.toLowerCase()
          )
        )
      );
      setFilteredProjects(filtered);
    }
  }, [activeTechs, showAllTechs, projects]);

  const handleTechFilter = (tech) => {
    if (tech === "all") {
      setShowAllTechs(true);
      setActiveTechs([]);
    } else {
      setShowAllTechs(false);
      setActiveTechs((prev) => {
        if (prev.includes(tech)) {
          const newTechs = prev.filter((t) => t !== tech);
          if (newTechs.length === 0) {
            setShowAllTechs(true);
          }
          return newTechs;
        } else {
          return [...prev, tech];
        }
      });
    }

    // Show filter feedback
    showFilterFeedback();
  };

  const showFilterFeedback = () => {
    const filterFeedback = document.getElementById("filter-feedback");
    if (filterFeedback) {
      filterFeedback.classList.remove("opacity-0", "invisible", "translate-y-[-20px]");
      filterFeedback.classList.add("opacity-100", "visible", "translate-y-0");

      setTimeout(() => {
        filterFeedback.classList.add("opacity-0", "invisible", "translate-y-[-20px]");
        filterFeedback.classList.remove("opacity-100", "visible", "translate-y-0");
      }, 2000);
    }
  };

  const resetFilters = () => {
    setShowAllTechs(true);
    setActiveTechs([]);
  };

  const getProjectCountText = () => {
    const visible = filteredProjects.length;
    const total = projects.length;
    
    if (visible === total) {
      return t("projects.showing_all").replace("{total}", total.toString());
    } else {
      return t("projects.showing_filtered")
        .replace("{count}", visible.toString())
        .replace("{total}", total.toString());
    }
  };

  return (
    <main className="relative w-5/6 mx-auto pt-16">
      {/* Page loader */}
      <div
        id="page-loader"
        className="fixed inset-0 bg-gray-900 bg-opacity-80 z-50 flex items-center justify-center transition-opacity duration-500"
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-white text-lg">{t("projects.loading")}</p>
        </div>
      </div>

      {/* Breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="mt-6">
        <ol className="flex text-sm text-gray-400">
          <li>
            <a href="/" className="hover:text-primary transition-colors">
              {t("breadcrumb.home")}
            </a>
          </li>
          <li className="mx-2">/</li>
          <li aria-current="page" className="text-primary">
            {t("breadcrumb.projects")}
          </li>
        </ol>
      </nav>

      <section>
        <h1 className="text-primary text-3xl font-extrabold mt-8 text-center sm:text-start">
          {t("projects.page_title")}
        </h1>
        <p className="text-gray-400 text-lg py-4 text-center sm:text-start">
          {t("projects.page_description")}
        </p>

        {/* Filters */}
        <div className="my-8 bg-gray-800 p-6 rounded-xl bg-opacity-30 backdrop-blur-sm">
          <h2 className="text-xl text-primary font-bold mb-4">
            {t("projects.filter_title")}
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Technology filters */}
            <div>
              <h3 className="text-gray-300 font-semibold mb-2">
                {t("projects.filter_technologies")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleTechFilter("all")}
                  className={`px-3 py-1 rounded-md text-sm transition-all hover:bg-opacity-80 ${
                    showAllTechs
                      ? "bg-primary text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                  aria-pressed={showAllTechs}
                >
                  {t("projects.filter_all")}
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => handleTechFilter(tech)}
                    className={`px-3 py-1 rounded-md text-sm transition-all hover:bg-gray-600 ${
                      activeTechs.includes(tech)
                        ? "bg-primary text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                    aria-pressed={activeTechs.includes(tech)}
                    data-tech={tech}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project count */}
          <div className="mt-4 text-sm text-gray-400">
            {getProjectCountText()}
          </div>
        </div>

        {/* Filter feedback */}
        <div
          id="filter-feedback"
          className="fixed top-24 right-8 bg-primary text-white px-4 py-2 rounded-md shadow-lg transform translate-y-[-20px] opacity-0 invisible transition-all duration-300 z-40"
        >
          {t("projects.filter_applied")}
        </div>

        {/* Projects grid */}
        <div className="mb-8">
          <h2 className="text-2xl text-primary font-bold mb-6">
            {t("projects.all_projects")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((item) => (
              <div
                key={item.slug}
                className="project-card flex flex-col bg-gray-800 bg-opacity-20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-[1.01]"
                data-type={item.type}
                data-techs={item.tech.join(",")}
                data-slug={item.slug}
              >
                <a href={`/projects/${item.slug}`} className="block overflow-hidden">
                  <img
                    className="w-full object-cover h-80 xl:h-[700px] hover:opacity-90 transition-opacity object-top"
                    src={item.image.src}
                    alt={item.name}
                    loading="lazy"
                  />
                </a>

                <div className="flex flex-col gap-3 p-5">
                  <div>
                    <a
                      href={`/projects/${item.slug}`}
                      className="inline-block hover:text-gray-300 transition-colors"
                    >
                      <h2 className="text-2xl font-bold text-primary mb-1">
                        {item.name}
                      </h2>
                    </a>
                    <p className="project-type text-gray-400 text-sm mb-2">
                      {t(`projects.${item.slug}.type`) !== `projects.${item.slug}.type`
                        ? t(`projects.${item.slug}.type`)
                        : item.type}
                    </p>
                    <p className="project-description text-gray-400 line-clamp-3 mb-3">
                      {getShortDescription(
                        t(`projects.${item.slug}.description`) !== `projects.${item.slug}.description`
                          ? t(`projects.${item.slug}.description`)
                          : item.description
                      )}
                    </p>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {item.tech.map((tech) => {
                      const category = getTechCategory(tech);
                      return (
                        <span
                          key={tech}
                          className={`px-2 text-xs font-semibold py-1 rounded-md ${
                            category === "frontend"
                              ? "bg-blue-500 bg-opacity-20 text-blue-400"
                              : category === "backend"
                              ? "bg-green-500 bg-opacity-20 text-green-400"
                              : category === "database"
                              ? "bg-yellow-500 bg-opacity-20 text-yellow-400"
                              : "bg-purple-500 bg-opacity-20 text-purple-400"
                          }`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    <a
                      href={`/projects/${item.slug}`}
                      className="flex items-center gap-1 rounded-md font-bold px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-primary h-4 w-4 sm:h-5 sm:w-5"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                      </svg>
                      <span>{t("projects.view_details")}</span>
                    </a>

                    {item.github && item.github !== "/" && (
                      <a
                        className="flex items-center gap-1 rounded-md font-bold px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 transition-all"
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="fill-primary h-4 w-4 sm:h-5 sm:w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                        <span>{t("projects.github_repo")}</span>
                      </a>
                    )}

                    {item.url && (
                      <a
                        className="flex items-center gap-1 rounded-md font-bold px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 transition-all"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="fill-primary h-4 w-4 sm:h-5 sm:w-5"
                          height="1em"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.5,12c0,1,0,2,.12,3L8.39,15a12.36,12.36,0,0,0-3.08,1.35,10.06,10.06,0,0,0-1.61,1.2,10,10,0,0,1,0-11.14,10.06,10.06,0,0,0,1.61,1.2A12.29,12.29,0,0,0,8.38,9L8.62,9C8.54,10,8.5,11,8.5,12ZM4.3,5.62A9.55,9.55,0,0,0,5.91,6.83,11.11,11.11,0,0,0,8.66,8h0a24.72,24.72,0,0,1,.6-3.55,11,11,0,0,1,.79-2.3A10.05,10.05,0,0,0,4.3,5.62Zm9.61-3.44a11,11,0,0,1,.79,2.3A24.72,24.72,0,0,1,15.3,8h0a11.18,11.18,0,0,0,2.76-1.19A9.55,9.55,0,0,0,19.7,5.62,10.05,10.05,0,0,0,13.91,2.18ZM9.68,15.73a24.3,24.3,0,0,0,.74,4.12A7.82,7.82,0,0,0,11.31,22L12,22l.69,0a7.82,7.82,0,0,0,.89-2.13,24.3,24.3,0,0,0,.74-4.12A11.69,11.69,0,0,0,9.68,15.73ZM14.4,9.27A12.6,12.6,0,0,1,12,9.5a12.6,12.6,0,0,1-2.4-.23c-.07.85-.1,1.77-.1,2.73s0,1.88.1,2.74a12.7,12.7,0,0,1,4.8,0c.07-.85.1-1.77.1-2.73S14.47,10.12,14.4,9.27Zm-.82-5.12A7.82,7.82,0,0,0,12.69,2L12,2l-.69,0a7.82,7.82,0,0,0-.89,2.13,24.3,24.3,0,0,0-.74,4.12,11.69,11.69,0,0,0,4.64,0A24.3,24.3,0,0,0,13.58,4.15ZM20.3,6.43a10.06,10.06,0,0,1-1.61,1.2A12.36,12.36,0,0,1,15.61,9L15.38,9c.08,1,.12,2,.12,3s0,2-.12,3l.24.06a12.29,12.29,0,0,1,3.07,1.35,10.06,10.06,0,0,1,1.61,1.2,10,10,0,0,0,0-11.14ZM18.09,17.17A11.11,11.11,0,0,0,15.34,16h0a24.72,24.72,0,0,1-.6,3.55,11,11,0,0,1-.79,2.3,10.05,10.05,0,0,0,5.79-3.44A9.55,9.55,0,0,0,18.09,17.17ZM9.3,19.52A24.72,24.72,0,0,1,8.7,16h0a11.18,11.18,0,0,0-2.76,1.19A9.55,9.55,0,0,0,4.3,18.38a10.05,10.05,0,0,0,5.79,3.44A11,11,0,0,1,9.3,19.52Z" />
                        </svg>
                        <span>{t("projects.live_demo")}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12" role="alert" aria-live="polite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-400 text-lg">{t("projects.no_results")}</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-80 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              {t("projects.reset_filters")}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default ProjectsIndex;