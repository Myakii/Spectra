import React from 'react';

import './css/home.css';
import './css/wallpaper.css';

import { useNavigate } from 'react-router-dom';
import Button from '../components/buttons';
import DataThreeTime from './components/dataThreeTime';
import DataSeventTime from './components/dataSeventTime';


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
          <DataSeventTime />
      </div>
    </div>
  );
}
export default Home;
