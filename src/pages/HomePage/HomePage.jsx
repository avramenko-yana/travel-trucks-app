import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.hero}>
      <div className={s.overlay}></div>
      <div className={s.content}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.subtitle}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <Button>View Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
