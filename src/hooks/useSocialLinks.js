'use client';

import { useEffect, useState } from 'react';

export const useSocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState({});

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
        // Graceful fallback
      });
  }, []);

  return socialLinks;
};