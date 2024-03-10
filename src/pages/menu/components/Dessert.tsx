import React, { useEffect, useState } from 'react';
import data from '../../../json/Data.json';
import './css/Main_Dish.css'

interface MenuItem {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

const DataDessert: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    if (data && data.dessert) {
      setMenuItems(data.dessert);
    }
  }, []);

  return (
    <div className='Dessert-container'>
      <h2>Desserts</h2>
      {menuItems && menuItems.map((item) => (
        <div className='Dessert-menu' key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DataDessert;
