import React from 'react';

import './css/home.css';
import './css/wallpaper.css';

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button.tsx';
import DataThreeTime from './components/DataThreeTime.tsx';
import DataSixtTime from './components/DataSixtTime.tsx';
import OpeningHours from './components/OpeningHours.tsx';


interface HomeProps {
  className?: string;
}


const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  function handleClickMenu(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    navigate('../menu/menu');
  }

  return (
    <div id='HomeContainer'>
      <div id='WallpaperContainer'>
        <div className='WallpaperHome'></div>
        <div className='IntroducingHome'>
          <h2>LA CUISINE PAR EXCELLENCE</h2>
          <Button onClick={handleClickMenu} className='ButtonMenu'>
            Menu
          </Button>
        </div>
      </div>
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
  );
}
export default Home;
