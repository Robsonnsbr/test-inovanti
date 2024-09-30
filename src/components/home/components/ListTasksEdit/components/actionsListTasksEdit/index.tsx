import React from 'react';
import EditButton from './EditButton';
import OpenModalButton from './OpenModalButton';
import DeleteButton from './DeleteButton';
import { useItemsContext } from 'src/contexts/itemsProvider';

interface UserActionsProps {
  itemId: string;
  isEditing: boolean;
}

const UserActions: React.FC<UserActionsProps> = ({ itemId, isEditing }) => {
  const { editTaskId } = useItemsContext();

  return (
    <div className="flex items-center justify-between w-full py-2 px-6">
      <div className="flex items-center gap-2">
        <EditButton isEditing={isEditing} itemId={itemId} />
        <OpenModalButton itemId={itemId} isEditing={isEditing} />
      </div>

      <DeleteButton isEditing={editTaskId === itemId} itemId={itemId} />
    </div>
  );
};

export default UserActions;
