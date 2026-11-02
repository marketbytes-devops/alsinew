'use client';

import React, { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = forwardRef(({ onChange }, ref) => {
  const handleVerify = (token) => {
    const verified = !!token;
    onChange(verified, token);
  };

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lf_TOQqAAAAAD3PGDryVnbbvXp8MJBL2XtZqKIQ";

  return (
    <div className="mb-4">
      <ReCAPTCHA
        ref={ref}
        sitekey={siteKey}
        onChange={handleVerify}
      />
    </div>
  );
});

ReCaptcha.displayName = "ReCaptcha";

export default ReCaptcha;