import React, { useEffect, useState } from 'react';
import data from '../../../json/data.json';

import '../css/dataSeventTime.css';

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

        for (let i = 0; i < 7; i++) {
            specialDishes.push(getRandomDish());
        }
        setChefSpecial(specialDishes);
    }, []);

    return (
        <div className='selectFood'>
            <div className='fiveFoodList'>
                {chefSpecial &&
                    chefSpecial.map((item, index) => (
                        <div className='ThreeDish' key={index}>
                            <div className='LeftContainer'>
                            <p key={index} className='FoodName'>{item.name}</p>
                            <p key={index} className='FoodDescription'>{item.description}</p>
                            </div>
                            <div className='RightContainer'>
                            <p key={index}>{item.price}€</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>

    );
};

export default DataSeventTime;
