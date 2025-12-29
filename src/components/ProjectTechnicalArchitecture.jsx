import React, { useState } from 'react';

export default function ProjectTechnicalArchitecture({ architecture }) {
  const [expandedSection, setExpandedSection] = useState(null);

  if (!architecture || architecture.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 mb-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-2">Technical Architecture</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Deep-dive into system design and implementation decisions
      </p>

      <div className="space-y-3">
        {architecture.map((arch, index) => (
          <div
            key={arch.key || index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
              aria-expanded={expandedSection === index}
              aria-controls={`section-${arch.key || index}`}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                {arch.title}
              </h3>
              <svg
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 text-gray-500 dark:text-gray-400 ${
                  expandedSection === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {expandedSection === index && (
              <div
                id={`section-${arch.key || index}`}
                className="px-6 py-5 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              >
                {arch.diagram && (
                  <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                    <img
                      src={arch.diagram.src}
                      alt={`${arch.title} diagram`}
                      className="w-full max-w-4xl mx-auto rounded-lg"
                      loading="lazy"
                    />
                  </div>
                )}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {arch.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
