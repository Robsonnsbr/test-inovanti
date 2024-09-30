import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useItemsContext } from 'src/contexts/itemsProvider';
import { GiPotionBall } from 'react-icons/gi';

const LoadingSkeleton = () => {
  const { msgItemsEmpty } = useItemsContext();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="0"
      className="font-inter text-base text-deepGray"
    >
      {msgItemsEmpty ? (
        <div className="flex flex-col items-center justify-center">
          <GiPotionBall color="purple" size={30} />
          <p className="bg-transparent">
            Nenhuma nota atende aos critérios de pesquisa
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center animate-pulse">
          <AiOutlineLoading3Quarters className="size-4 animate-spin" />
          <p className="bg-transparent">Obtendo resultados...</p>
        </div>
      )}
    </div>
  );
};

export default LoadingSkeleton;
