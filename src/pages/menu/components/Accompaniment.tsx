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
        <div className='unlimited-container' key={item.id}>
        <h3>{item.name}</h3>
            <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DataAccompaniment;
