import React from 'react';
import { useItemsContext } from 'src/contexts/itemsProvider';
import { useFilterPhrase } from 'src/hooks';

const BreadcrumbsFilter = () => {
  const { filters, filteredItems } = useItemsContext();
  const { phrase, qtFiltered } = useFilterPhrase(filters, filteredItems);

  return (
    <nav
      title="filter"
      className="flex flex-wrap sm:justify-between sm: gap-1 font-inter text-xs text-deepGray font-medium"
    >
      <span>{phrase}</span>
      <span>
        {qtFiltered > 0
          ? qtFiltered === 1
            ? `${qtFiltered} Nota`
            : `${qtFiltered} Notas`
          : 'Nenhuma'}
      </span>
    </nav>
  );
};

export default BreadcrumbsFilter;
