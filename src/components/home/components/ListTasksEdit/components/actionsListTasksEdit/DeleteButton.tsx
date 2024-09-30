import React from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useItemsContext } from 'src/contexts/itemsProvider';

interface DeleteButtonProps {
  isEditing: boolean;
  itemId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ itemId, isEditing }) => {
  const { handleDelete } = useItemsContext();

  return (
    <button onClick={() => handleDelete(itemId)} disabled={!isEditing}>
      <RiCloseLargeFill
        className={`size-6 ${isEditing ? 'fill-errorRed' : 'fill-deepGray'}`}
        title="deletar"
      />
    </button>
  );
};

export default DeleteButton;
