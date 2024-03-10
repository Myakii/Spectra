import React from 'react'
import DataMainDishMenu from './components/Main_Dish';
import DataDrink from './components/Drink';
import './css/MenuCard.css'
import DataDessert from './components/Dessert';
import DataStarter from './components/Starter';
import DataSauce from './components/Sauce';

export default function Menu() {
  return (
    <div className='Menu-container'>
      <p>Menu</p>
      <DataStarter/>
      <DataMainDishMenu/>
      <DataDrink/>
      <DataDessert/>
      <DataSauce/>
    </div>
  )
}
