import { useSelector } from 'react-redux';
import CamperCard from '../../components/CamperCard/CamperCard';
import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const { favorites } = useSelector((state) => state.campers);

  return (
    <div className={s.page}>
      <main className={s.mainContent}>
        <h1 className={s.title}>Your favorite campers</h1>
        {favorites.length > 0 ? (
          <div className={s.list}>
            {favorites.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>
        ) : (
          <p className={s.noResults}>
           No campers in favourites yet.
            <br />
            Go to catalog to find your dream.
          </p>
        )}
      </main>
    </div>
  );
};

export default FavoritesPage;
