import React, { createContext, useContext, useState, useEffect } from 'react';
import { FilterPropsCustom, ITaskProps } from 'src/types/itemType';
import { setTimeout } from 'timers';

interface ItemsContextProps {
  items: ITaskProps[];
  filteredItems: ITaskProps[];
  editTaskId: string | null;
  editedTask: Partial<ITaskProps>;
  msgItemsEmpty: boolean;
  setItems: React.Dispatch<React.SetStateAction<ITaskProps[]>>;
  handleEdit: (itemId: string) => void;
  setEditedTask: (item: Partial<ITaskProps> | any) => void;
  handleDelete: (itemId: string) => void;
  updateTask: () => void;
  handleInputChange: (field: keyof ITaskProps, value: any) => void;
  filters: FilterPropsCustom;
  setFilters: React.Dispatch<React.SetStateAction<FilterPropsCustom>>;
}

const ItemsContext = createContext<ItemsContextProps | undefined>(undefined);

async function fetchItems(): Promise<ITaskProps[]> {
  const response = await fetch('/api/itemsList', {
    method: 'GET'
  });
  if (!response.ok) {
    throw new Error(`Erro ao buscar tarefas: ${response.statusText}`);
  }
  return await response.json();
}

export const ItemsProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [items, setItems] = useState<ITaskProps[]>([]);
  const [filters, setFilters] = useState<FilterPropsCustom>({});
  const [filteredItems, setFilteredItems] = useState<ITaskProps[]>([]);
  const [msgItemsEmpty, setMsgItemsEmpty] = useState<boolean>(false);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  const [editedTask, setEditedTask] = useState<Partial<ITaskProps>>({});
  const [inAction, setInAction] = useState(false);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchItems();
        setItems([...data]);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    loadItems();
  }, []);

  useEffect(() => {
    setMsgItemsEmpty(false);
    const filtered = items.filter((item) => {
      const itemTitle = item.title.toLowerCase();
      const filterTitle = filters.title ? filters.title.toLowerCase() : '';

      const matchesTitle = filters.title
        ? itemTitle.includes(filterTitle)
        : true;
      const matchesFavorite =
        filters.isFavorite === true ? item.isFavorite === true : true;
      const matchesColor = filters.color ? item.color === filters.color : true;

      return matchesTitle && matchesFavorite && matchesColor;
    });

    setFilteredItems(filtered);
    if (filtered.length <= 0) {
      setTimeout(() => {
        setMsgItemsEmpty(true);
      }, 7000);
    }
  }, [items, filters]);

  const updateTask = async () => {
    if (inAction) return;
    setInAction(true);

    if (editTaskId) {
      try {
        const response = await fetch(`/api/itemsList`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ _id: editTaskId, ...editedTask })
        });

        if (!response.ok) {
          throw new Error('Erro ao salvar tarefa');
        }

        const updatedTask = await response.json();

        setItems((prevItems) =>
          prevItems.map((item) =>
            item._id === editTaskId ? { ...item, ...updatedTask } : item
          )
        );

        setEditTaskId(null);
      } catch (error) {
        console.error('Erro ao salvar tarefa:', error);
      } finally {
        setInAction(false);
      }
    }
  };

  const handleEdit = (itemId: string) => {
    setEditTaskId(itemId);
  };

  const handleDelete = async (itemId: string) => {
    if (inAction) return;
    setInAction(true);
    try {
      const response = await fetch(`/api/itemsList?_id=${itemId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar tarefa');
      }

      setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    } finally {
      setInAction(false);
    }
  };

  const handleInputChange = (field: keyof ITaskProps, value: any) => {
    setEditedTask((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <ItemsContext.Provider
      value={{
        msgItemsEmpty,
        items,
        filteredItems,
        editTaskId,
        editedTask,
        handleEdit,
        updateTask,
        setEditedTask,
        handleDelete,
        handleInputChange,
        filters,
        setFilters,
        setItems
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      'useItemsContext deve ser usado dentro de um ItemsProvider'
    );
  }
  return context;
};
