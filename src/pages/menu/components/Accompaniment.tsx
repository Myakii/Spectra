import React, { useEffect, useState } from 'react';
import data from '../../../json/Data.json';


interface MenuItem {
  id: number;
  name: string;
  description: string;
}

const DataAccompaniment: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    if (data && data.accompaniment) {
      setMenuItems(data.accompaniment);
    }
  }, []);

  return (
    <div className='Accompaniment-container'>
      <h2>Accompagnements</h2>
      {menuItems && menuItems.map((item) => (
        <div className='Accompaniment-menu' key={item.id}>
            <p className='FoodName'>{item.name}</p>
            <p className='item-description'>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DataAccompaniment;
