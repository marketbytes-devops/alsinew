import React from 'react';
import specialBgImg from '../../assets/images/Services/cargo-mixed.webp'; 

const BackgroundSpecial = ({ count = 1 }) => {
  const bgUrl = specialBgImg?.src || specialBgImg;

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className='relative w-full top-[230px]'>
          <div
            style={{
              backgroundImage: `url(${bgUrl})`,
              height: "450px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="pb-[165px]"></div>
        </div>
      ))}
    </>
  );
};

export default BackgroundSpecial;
