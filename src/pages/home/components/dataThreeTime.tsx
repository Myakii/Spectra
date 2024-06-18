import React, { useEffect, useState } from 'react';
import data from '../../../json/data.json';
import './css/dataThreeTime.css';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

const DataThreeTime: React.FC = () => {
  const [chefSpecial, setChefSpecial] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    const selectedIndex: number[] = [];
    const getRandomDish = (): MenuItem => {
      let index: number;
      do {
        index = Math.floor(Math.random() * data.main_dish.length);
      } while (selectedIndex.includes(index));
      selectedIndex.push(index);
      return data.main_dish[index];
    };

    const specialDishes: MenuItem[] = [];

    for (let i = 0; i < 3; i++) {
      specialDishes.push(getRandomDish());
    }
    setChefSpecial(specialDishes);
  }, []);

  return (
    <>
      <div className='headerChefSpecialSuggestion'>
        <h2>Proposition du chef</h2>
      </div>
      <div className='chefspecialSuggestion'>
        {chefSpecial &&
          chefSpecial.map((item) => (
            <Link to='/carte' key={item.id}>
              <div className='ThreeDish'>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
      </div>;
    </>)
};

export default DataThreeTime;
