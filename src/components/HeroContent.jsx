import { useTranslations } from '../utils/translations';

function HeroContent() {
  const t = useTranslations();

  return (
    <div data-aos="fade-up" className="mx-auto py-4 lg:py-4">
      <div className="w-40 text-center mx-auto">
        <img 
          className="rounded-full text-center stroke-slate-50 stroke-2 bg-gray-300 pt-4" 
          src="/profilephoto.webp" 
          alt="Jaime Villanueva Alcon" 
          loading="eager" 
        />
      </div>
      <div className="text-center">
        <h1 className="font-light py-4 tracking-tight text-primary flex flex-col md:flex-row items-center gap-2 justify-center">
          <span>{t('hero.greeting')}</span>
          <span className="font-bold">{t('hero.name')}</span>
        </h1>
        <p className="text-3xl font-bold text-primary text-transparent bg-clip-text bg-gradient-to-r from-[#d7d7d7] to-[#616161] sm:text-3xl md:text-5xl pb-2">
          {t('hero.title')}
        </p>
        <p className="w-5/6 mx-auto mt-2 text-gray-400 font-medium">
          {t('hero.description')}
        </p>
        <a href="/#about" className="cursor-pointer w-full h-full z-50">
          <svg 
            viewBox="0 0 24 24" 
            className="animate-bounce stroke-primary h-8 flex justify-center w-full mt-3 sm:mt-6 sm:h-10" 
            height="1em" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path 
                d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default HeroContent;