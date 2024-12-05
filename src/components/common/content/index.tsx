import React from 'react';
import Image from 'node_modules/next/image';
import shape from 'public/assets/image/shape.png';
import undraw_done from 'public/assets/image/undraw_done_checking.png';
export const ContentMain = () => {
  return (
    <div id="content-main">
      <Image
        alt="shape"
        src={shape}
        height={300}
        width={270}
        className="items-start justify-start"
      />
      <Image
        alt="undraw_done"
        src={undraw_done}
        height={194}
        width={254}
        className="absolute top-[261px] left-[82px]"
      />
      <h1 className="absolute top-[520px] left-[114px] text-center bg-transparent w-[201px] h-[27px] font-bold text-lg">
        Gets things with TODs
      </h1>
      <p className="absolute top-[563px] left-[112px] text-center bg-transparent w-[203px] h-[100px] font-normal text-sm">
        Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
        Consequat urna quam felis interdum quisque. Malesuada adipiscing
        tristique ut eget sed.
      </p>
    </div>
  );
};
