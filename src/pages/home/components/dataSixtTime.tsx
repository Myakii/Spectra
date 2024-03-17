import React, { useEffect, useState } from 'react';
import data from '../../../json/Data.json';

import './css/dataSixTime.css';

import LinerTitleLiner from '../../../components/LinerTitleLiner';
import { Link } from 'react-router-dom';

interface MenuItem {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
}

const DataSeventTime: React.FC = () => {
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

        for (let i = 0; i < 6; i++) {
            specialDishes.push(getRandomDish());
        }
        setChefSpecial(specialDishes);
    }, []);

    return (

        <div className='selectFood'>
            <div className='headerSelectFood'>
                <LinerTitleLiner>
                    Sélection spéciale
                </LinerTitleLiner>
            </div>
            <div className='fiveFoodList'>
                {chefSpecial &&
                    chefSpecial.map((item) => (
                        <Link to='/carte' key={item.id}>
                            <div className='SixDish'>
                                <div className='LeftContainer'>
                                    <p className='FoodName'>{item.name}</p>
                                    <p className='item-description'>{item.description}</p>
                                </div>
                                <div className='RightContainer'>
                                    <p>{item.price}€</p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default DataSeventTime;
