import React, { createContext, useContext, useState, ReactNode } from 'react';

type List = {
  name: string;
  items: string[];
};

type ListContextType = {
  lists: List[];
  selectedLists: List[];
  addList: (name: string) => void;
  addItemToList: (listName: string, item: string) => void;
  getItems: (listName: string) => string[];
  addSelectedList: (list: List) => void;
  removeSelectedList: (listName: string) => void;
};

const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [lists, setLists] = useState<List[]>([]);
  const [selectedLists, setSelectedLists] = useState<List[]>([]);

  const addList = (name: string) => {
    setLists((prev) => [...prev, { name, items: [] }]);
  };

  const addItemToList = (listName: string, item: string) => {
    setLists((prev) =>
      prev.map((list) =>
        list.name === listName
          ? { ...list, items: [...list.items, item] }
          : list
      )
    );
  };

  const getItems = (listName: string) => {
    const list = lists.find((list) => list.name === listName);
    return list ? list.items : [];
  };

  const addSelectedList = (list: List) => {
    setSelectedLists((prev) => {
      if (!prev.some((selected) => selected.name === list.name)) {
        return [...prev, list];
      }
      return prev;
    });
  };

  const removeSelectedList = (listName: string) => {
    setSelectedLists((prev) => prev.filter((list) => list.name !== listName));
  };

  return (
    <ListContext.Provider
      value={{
        lists,
        selectedLists,
        addList,
        addItemToList,
        getItems,
        addSelectedList,
        removeSelectedList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useLists = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useLists must be used within a ListProvider');
  }
  return context;
};
