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

const DataStarter: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    if (data && data.starter) {
      setMenuItems(data.starter);
    }
  }, []);

  return (
    <div className='Starter-container'>
      <h2>Entrées</h2>
      {menuItems && menuItems.map((item) => (
        <div className='Starter-menu' key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DataStarter;
