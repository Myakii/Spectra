import React, { useEffect, useState } from 'react';
import data from '../../../json/data.json';

import LinerTitleLiner from '../../../components/LinerTitleLiner';


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
      <div className='headerSelectFood'>
        <LinerTitleLiner>
          Nos Dessert
        </LinerTitleLiner>
      </div>
      {menuItems && menuItems.map((item) => (
        <div className='menu-container' key={item.id}>
          <div className='LeftContainer'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
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

export default DataDessert;
