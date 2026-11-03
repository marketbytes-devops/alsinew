'use client';

import React, { forwardRef, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const DynamicReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
  loading: () => (
    <div className="w-[304px] h-[78px] bg-white/5 rounded border border-gray-400/30 flex items-center justify-center text-xs text-gray-300">
      Loading security check...
    </div>
  ),
});

const ReCaptcha = forwardRef(({ onChange }, ref) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (shouldLoad) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const triggerLoad = () => {
      setShouldLoad(true);
      observer.disconnect();
    };

    window.addEventListener("focusin", triggerLoad, { once: true, passive: true });
    window.addEventListener("pointerdown", triggerLoad, { once: true, passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("focusin", triggerLoad);
      window.removeEventListener("pointerdown", triggerLoad);
    };
  }, [shouldLoad]);

  const handleVerify = (token) => {
    const verified = !!token;
    onChange(verified, token);
  };

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lf_TOQqAAAAAD3PGDryVnbbvXp8MJBL2XtZqKIQ";

  return (
    <div ref={containerRef} className="mb-4 min-h-[78px]">
      {shouldLoad ? (
        <DynamicReCAPTCHA
          ref={ref}
          sitekey={siteKey}
          onChange={handleVerify}
        />
      ) : (
        <div className="w-[304px] h-[78px] bg-transparent rounded" />
      )}
    </div>
  );
});

ReCaptcha.displayName = "ReCaptcha";

export default ReCaptcha;
