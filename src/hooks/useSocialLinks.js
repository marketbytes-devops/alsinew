'use client';

import { useEffect, useState } from 'react';

const DEFAULT_SOCIAL_LINKS = {
  id: 1,
  facebook: "https://www.facebook.com/alsigloballlc/",
  instagram: "https://www.instagram.com/alsiglobal/",
  linkedin: "https://www.linkedin.com/company/alsi-official/",
  twitter: "https://x.com/ALSI_OFFICIAL/",
  pinterest: "https://in.pinterest.com/alsiglobal/",
  thread: "https://www.threads.net/@alsiglobal/",
  youtube: "https://www.youtube.com/@alsiglobal/"
};

export const useSocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState(DEFAULT_SOCIAL_LINKS);

  useEffect(() => {
    fetch('/api/social-media/social-media-entries/')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setSocialLinks(data[0]);
        }
      })
      .catch(() => {
        // Graceful fallback to default
      });
  }, []);

  return socialLinks;
};
