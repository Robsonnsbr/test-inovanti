import React, { useState } from 'react';
import ColorPickerModal from 'src/components/common/modal';

interface OpenModalButtonProps {
  isEditing?: boolean;
  itemId: string;
}

const OpenModalButton: React.FC<OpenModalButtonProps> = ({
  isEditing,
  itemId
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => handleModal()}
        disabled={!isEditing}
        className="flex items-center h-fit"
      ></button>
      <ColorPickerModal
        isModalOpen={isModalOpen}
        onClose={() => handleModal()}
        itemId={itemId}
      />
    </div>
  );
};

export default OpenModalButton;
