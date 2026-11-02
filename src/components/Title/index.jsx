import React from "react";

const stripHeadingTags = (str) => {
  if (!str) return "";
  return str.replace(/<\/?h[1-6][^>]*>/gi, "");
};

const Title = ({ title, subtitle, color = "#212529" }) => {
  return (
    <>
      <h2
        style={{ color: color }} 
        className="mb-4 text-center" 
        dangerouslySetInnerHTML={{ __html: stripHeadingTags(title) }} 
      />
      {subtitle && (
        <p 
          style={{ color: color }} 
          className="px-8 sm:px-8 md:px-0 lg:px-0" 
          dangerouslySetInnerHTML={{ __html: stripHeadingTags(subtitle) }} 
        />
      )}
    </>
  );
};

export default Title;
