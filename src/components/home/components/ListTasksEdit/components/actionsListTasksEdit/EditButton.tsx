import React from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { VscSaveAs } from 'react-icons/vsc';
import { useItemsContext } from 'src/contexts/itemsProvider';

interface EditButtonProps {
  isEditing: boolean;
  itemId: string;
}
const EditButton = ({ isEditing, itemId }: EditButtonProps) => {
  const { handleEdit, updateTask } = useItemsContext();

  return (
    <button
      type="button"
      onClick={!isEditing ? () => handleEdit(itemId) : () => updateTask()}
    >
      {isEditing ? (
        <VscSaveAs title="salvar" className="size-6 fill-deepGray" />
      ) : (
        <MdOutlineModeEdit title="editar" className="size-6 fill-deepGray" />
      )}
    </button>
  );
};

export default EditButton;
