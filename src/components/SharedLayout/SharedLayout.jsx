import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SvgSprite from '../common/SvgSprite/SvgSprite';

const SharedLayout = () => {
  return (
    <>
      
      <SvgSprite />
      <Header />
      <main>
        
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
