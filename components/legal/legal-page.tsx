import React from "react";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

type Section = {
  /** h2 heading shown in the left rail */
  title: string;
  /** Optional badge shown above the heading */
  badge?: string;
  /** Body content (rendered as plain text). Optional — a section may be list/table-only. */
  body?: string | string[];
  /** Optional blockquote-style "highlight" callout */
  callout?: {
    label: string;
    text: string;
  };
  /** Optional structured data rendered as a 2-column table */
  table?: {
    headers: string[];
    rows: (string | React.ReactNode)[][];
  };
  /** Optional list of bullet items */
  list?: string[];
};

type LegalPageProps = {
  /** "Privacy Policy", "Terms of Service", etc. */
  title: string;
  /** Short subtitle under the title */
  subtitle?: string;
  /** "Last Updated: June 13, 2026" */
  lastUpdated: string;
  /** "Effective Date: January 12, 2026" (optional) */
  effectiveDate?: string;
  /** Section list — drives both the TOC sidebar and the body */
  sections: Section[];
  /** Page slug used for the table-of-contents anchor links */
  slug: string;
  /** Optional CTA shown at the bottom */
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
};

/**
 * Shared layout for all three legal pages on clow.work.
 * Mirrors the visual style of /why-us and /contact: max-w-6xl, generous
 * padding, header at the top, and a CTA at the bottom.
 *
 * Sections are declared once in `sections` and rendered twice:
 *   1. As a left-rail table of contents (sticky on desktop)
 *   2. As the main body, one block per section
 */
export const LegalPage: React.FC<LegalPageProps> = ({
  title,
  subtitle,
  lastUpdated,
  effectiveDate,
  sections,
  slug,
  cta,
}) => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
            {effectiveDate && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100">
                Effective: {effectiveDate}
              </span>
            )}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700">
              Last Updated: {lastUpdated}
            </span>
          </div>
        </div>

        {/* Body: TOC + sections */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of contents — sticky on desktop */}
          <aside className="lg:col-span-1">
            <nav className="lg:sticky lg:top-8">
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                On this page
              </h2>
              <ul className="space-y-2 border-l-2 border-gray-200">
                {sections.map((section, idx) => (
                  <li key={section.title}>
                    <a
                      href={`#${slug}-${idx}`}
                      className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600 hover:border-l-2 hover:border-blue-600 hover:-ml-0.5 transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <article className="lg:col-span-3 space-y-12">
            {sections.map((section, idx) => (
              <section
                key={section.title}
                id={`${slug}-${idx}`}
                className="scroll-mt-8"
              >
                {section.badge && (
                  <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                    {section.badge}
                  </span>
                )}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {idx + 1}. {section.title}
                </h2>

                {/* Body paragraphs */}
                {section.body && (
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    {(Array.isArray(section.body) ? section.body : [section.body]).map(
                      (p, i) => (
                        <p key={i}>{p}</p>
                      )
                    )}
                  </div>
                )}

                {/* Bullet list */}
                {section.list && section.list.length > 0 && (
                  <ul className="mt-4 space-y-2 text-gray-600">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Table */}
                {section.table && (
                  <div className="mt-6 overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {section.table.headers.map((h, i) => (
                            <th
                              key={i}
                              className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className="px-4 py-3 text-sm text-gray-700"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Highlight callout */}
                {section.callout && (
                  <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="font-medium text-blue-700">
                      <strong>{section.callout.label}</strong>: {section.callout.text}
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Bottom CTA — mirrors why-us page */}
            {cta && (
              <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border border-gray-100">
                <h3 className="text-2xl font-extrabold text-gray-900">
                  {cta.title}
                </h3>
                <p className="mt-4 text-md text-gray-600 max-w-2xl mx-auto">
                  {cta.description}
                </p>
                <div className="mt-8">
                  <Link href={cta.buttonHref} passHref>
                    <div className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 cursor-pointer transition-colors">
                      {cta.buttonText}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </div>
                  </Link>
                </div>
              </div>
            )}

            {/* Inter-policy links — keeps users on-site */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Related policies:</p>
              <div className="flex flex-wrap gap-3">
                {slug !== "privacy-policy" && (
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    Privacy Policy →
                  </Link>
                )}
                {slug !== "terms-of-service" && (
                  <Link
                    href="/terms-of-service"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    Terms of Service →
                  </Link>
                )}
                {slug !== "refund-policy" && (
                  <Link
                    href="/refund-policy"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    Refund & Cancellation Policy →
                  </Link>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
