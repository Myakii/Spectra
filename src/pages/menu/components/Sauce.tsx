import React, { useEffect, useState } from 'react';
import data from '../../../json/Data.json';


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
        <div className='unlimited-container' key={item.id}>
        <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DataSauce;
