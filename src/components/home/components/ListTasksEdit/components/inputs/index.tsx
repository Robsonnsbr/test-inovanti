import React from 'react';

interface InputStarCheckListBoxProps {
  itemId: string;
  editTaskId: string;
  checkboxState: boolean;
  onCheckboxChange: (itemId: string, checked: boolean) => void;
}

const InputStarCheckListBox: React.FC<InputStarCheckListBoxProps> = ({
  itemId,
  editTaskId,
  checkboxState,
  onCheckboxChange
}) => {
  return (
    <label
      title="Favorito"
      style={{
        cursor: editTaskId !== itemId ? 'default' : 'pointer'
      }}
      className="w-fit bg-transparent absolute top-2 right-4"
      tabIndex={0}
    >
      <input
        style={{ display: 'none' }}
        className="bg-transparent w-fit"
        type="checkbox"
        checked={checkboxState}
        disabled={editTaskId !== itemId}
        onChange={(e) => onCheckboxChange(itemId, e.target.checked)}
      />
    </label>
  );
};

export default InputStarCheckListBox;
