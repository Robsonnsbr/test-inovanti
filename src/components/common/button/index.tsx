import React from 'react';

export const Button = ({ title }: any) => {
  return (
    <button className="bg-[#50C2C9] absolute top-[799px] left-[23px] items-center justify-center w-[380px] h-[60px] bg-slate-70  0">
      <p className="text-white text-center font-normal text-lg  bg-transparent">
        {title ? title : ''}
      </p>
    </button>
  );
};
