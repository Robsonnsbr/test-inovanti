import { useState, ChangeEvent } from 'react';
import { Color } from 'src/types/itemType';
import { useItemsContext } from 'src/contexts/itemsProvider';
export const useFilterControls = () => {
  const { setFilters } = useItemsContext();

  const [searchTitle, setSearchTitle] = useState<string>('');
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined);
  const [color, setColor] = useState<Color | undefined>(undefined);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTitle(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      title: value,
      isFavorite,
      color
    }));
  };

  const handleFavoriteChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsFavorite(checked);
    setFilters((prevFilters) => ({
      ...prevFilters,
      title: searchTitle,
      isFavorite: checked,
      color
    }));
  };

  const handleColorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = event.target.value as Color;
    setColor(selectedColor);
    setFilters((prevFilters) => ({
      ...prevFilters,
      title: searchTitle,
      isFavorite,
      color: selectedColor
    }));
  };

  return {
    isFavorite,
    color,
    handleTitleChange,
    handleFavoriteChange,
    handleColorChange
  };
};
