import React, { useEffect, useState } from 'react';
import data from '../../../json/Data.json';
import './css/Drink.css';

interface MenuItem {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

const DataDrink: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    if (data && data.drink) {
      setMenuItems(data.drink);
    }
  }, []);

  return (
    <div className='Drink-container'>
      <h2>Boissons</h2>
      {menuItems && menuItems.map((item) => (
        <div className='Drink-menu' key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DataDrink;
