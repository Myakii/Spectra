import React, { useEffect, useState } from 'react';
import data from '../../../json/Data.json';
import './css/Dessert.css'

interface MenuItem {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

const DataMainDishMenu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    if (data && data.main_dish) {
      setMenuItems(data.main_dish);
    }
  }, []);

  return (
    <div className='Main_Dish-container'>
      <h2>Plats principaux</h2>
      {menuItems && menuItems.map((item) => (
        <div className='Main_Dish-menu' key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DataMainDishMenu;
