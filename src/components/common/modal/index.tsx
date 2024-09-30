import { useRef } from 'react';
import { useItemsContext } from 'src/contexts/itemsProvider';
import { useOutsideEvents } from 'src/hooks';
import { Color, IItemProps } from 'src/types/itemType';

interface IColorPickerProps {
  isModalOpen: boolean;
  onClose: () => void;
  itemId: string | null;
}

const ColorPickerModal: React.FC<IColorPickerProps> = ({
  isModalOpen,
  onClose,
  itemId
}) => {
  const { setItems, setEditedTask } = useItemsContext();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleColorSelect = (color: Color) => {
    if (itemId) {
      setItems((prevItems: IItemProps[]) =>
        prevItems.map((item) =>
          item._id === itemId ? { ...item, color } : item
        )
      );
      setEditedTask((prev: any) => ({ ...prev, color }));
      onClose();
    }
  };

  useOutsideEvents(modalRef, onClose);

  if (!isModalOpen) return null;

  return (
    <div
      ref={modalRef}
      className="z-30 fixed bottom-10 -translate-x-8 bg-whiteSnow rounded shadow-md flex flex-wrap justify-center gap-1 p-2"
    >
      {Object.values(Color)
        .filter(
          (color) => color !== Color.None && color.toLowerCase() !== 'none'
        )
        .map((color) => (
          <div
            key={color}
            className="w-8 h-8 rounded-full cursor-pointer border"
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
    </div>
  );
};

export default ColorPickerModal;
