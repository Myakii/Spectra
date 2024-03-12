import React from 'react'
import DataMainDishMenu from './components/Main_Dish';
import DataDrink from './components/Drink';
import './css/MenuCard.css'
import DataDessert from './components/Dessert';
import DataStarter from './components/Starter';
import DataSauce from './components/Sauce';
import DataAccompaniment from './components/Accompaniment';
import Menu from './components/Menu';

export default function MenuCard() {
  return (
    <div className='MenuCards-container'>
      {/* <Menu/> */}
      <DataStarter/>
      <DataMainDishMenu/>
      <DataDrink/>
      <DataDessert/>
      <div className='bottom-unlimited'>
        <DataSauce/>
        <DataAccompaniment/>
      </div>
    </div>
  )
}
