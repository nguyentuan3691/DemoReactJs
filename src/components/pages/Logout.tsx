import React, { useState } from 'react';

interface Item {
  id: number;
  text: string;
}

const DEFAULT_ITEMS: Item[] = [
  { id: 1, text: 'Convert my App to TypeScript' },
  { id: 2, text: 'Get a coffee' },
];

const Logout = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>(DEFAULT_ITEMS);
  const [inputVal, setInputVal] = useState<string>('');

  const deleteItem = (id: number): void =>
    setItems([...items.filter(i => i.id !== id)]);
  return (
   <div></div>
  );
};

export default Logout;