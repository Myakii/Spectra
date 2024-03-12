import React, { useEffect, useState } from 'react';
import data from '../../../json/Data.json';

import LinerTitleLiner from '../../../components/LinerTitleLiner';

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
      <div className='headerSelectFood'>
        <LinerTitleLiner>
          Nos Plats principaux
        </LinerTitleLiner>
      </div>
      {menuItems && menuItems.map((item) => (
        <div className='Main_Dish-menu' key={item.id}>
          <div className='LeftContainer'>
            <p className='FoodName'>{item.name}</p>
            <p className='item-description'>{item.description}</p>
          </div>
          <div className='RightContainer'>
            <p>{item.price} €</p>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default DataMainDishMenu;
