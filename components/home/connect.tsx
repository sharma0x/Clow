"use client";
import { getCalApi } from "@calcom/embed-react";

import * as React from "react";
import { DIcons } from "dicons";
import { useAnimate } from "framer-motion";

import { Button } from "@/components/ui/button";

import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

function Connect() {
  const [scope, animate] = useAnimate();
  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#branding", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#branding", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#graphic", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#graphic", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#webapp", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#webapp", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#uiux", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#uiux", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);
  
  return (
    <section className="relative mx-auto mb-20 mt-6 max-w-6xl">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-purple-50 dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-purple-950">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#9333ea"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <DIcons.Designali className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-purple-600" />
                    <div
                      id="uiux"
                      className="absolute bottom-12 left-14 rounded-3xl border border-purple-200 bg-purple-100 px-2 py-1.5 text-xs text-purple-700 opacity-50 shadow-sm dark:border-purple-800 dark:bg-purple-900 dark:text-purple-300"
                    >
                      UI-UX Design
                    </div>
                    <div
                      id="graphic"
                      className="absolute left-2 top-20 rounded-3xl border border-blue-200 bg-blue-100 px-2 py-1.5 text-xs text-blue-700 opacity-50 shadow-sm dark:border-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                      Graphic Design
                    </div>
                    <div
                      id="webapp"
                      className="absolute bottom-20 right-1 rounded-3xl border border-emerald-200 bg-emerald-100 px-2 py-1.5 text-xs text-emerald-700 opacity-50 shadow-sm dark:border-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
                    >
                      Web Application
                    </div>
                    <div
                      id="branding"
                      className="absolute right-12 top-10 rounded-3xl border border-amber-200 bg-amber-100 px-2 py-1.5 text-xs text-amber-700 opacity-50 shadow-sm dark:border-amber-800 dark:bg-amber-900 dark:text-amber-300"
                    >
                      Branding
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-purple-600"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="relative -top-1 left-3 rounded-3xl bg-gradient-to-r from-purple-600 to-purple-500 px-2 py-1 text-xs font-medium text-white shadow-md">
                        Design
                      </span>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center md:-mt-4">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 pb-1 font-bold">
                        <span className="text-2xl md:text-4xl">
                          Need professional design services?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">
                      From branding to web design, I&apos;m here to elevate your visual identity!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                          data-cal-namespace="30min"
                          data-cal-link="clowwork/30min"
                          data-cal-config='{"layout":"month_view"}'
                      >
                        Book a consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}

export default Connect;