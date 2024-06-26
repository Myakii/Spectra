import React from 'react';

import './css/home.css';;

import DataThreeTime from './components/dataThreeTime.tsx';
import DataSixtTime from './components/dataSixtTime.tsx';
import OpeningHours from './components/OpeningHours.tsx';
import ButtonMenu from './components/ButtonMenu.tsx';


interface HomeProps {
  className?: string;
}


const Home: React.FC<HomeProps> = () => {
  return (
    <div id='HomeContainer'>
      <div id='WallpaperContainer'>
        <div className='WallpaperHome'></div>
        <div className='IntroducingHome'>
          <h2>LA CUISINE PAR EXCELLENCE</h2>
          <ButtonMenu />
        </div>
      </div>
      <div id='food-container'>
        <div id='chefSpecialContainer'>
          <DataThreeTime />
        </div>
        <div id='selectFoodContainer'>
          <DataSixtTime />
        </div>
        <div id='OpeningHoursContainer'>
          <OpeningHours />
        </div>
      </div>
    </div>
  );
}
export default Home;
