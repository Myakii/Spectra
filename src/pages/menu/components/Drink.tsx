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

const DataDrink: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    if (data && data.drink) {
      setMenuItems(data.drink);
    }
  }, []);

  return (
    <div className='Drink-container'>
      <div className='headerSelectFood'>
        <LinerTitleLiner>
          Nos boissons
        </LinerTitleLiner>
      </div>
      {menuItems && menuItems.map((item) => (
        <div className='Drink-menu' key={item.id}>
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

export default DataDrink;
