import React, { useEffect, useState } from 'react';
import data from '../../../json/Data.json';
import './css/Dessert.css'

interface MenuItem {
  id: number;
  name: string;
  description: string;
}

const DataSauce: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    if (data && data.sauce) {
      setMenuItems(data.sauce);
    }
  }, []);

  return (
    <div className='Sauce-container'>
      <h2>Sauces</h2>
      {menuItems && menuItems.map((item) => (
        <div className='Sauce-menu' key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DataSauce;
