import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/campersSlice';
import Button from '../common/Button/Button';
import Icon from '../common/Icon/Icon';
import Modal from '../common/Modal/Modal';
import CamperDetails from '../CamperDetails/CamperDetails';
import s from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.some((fav) => fav.id === camper.id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper));
  };

  const formatPrice = (price) => {
    return `€${price.toFixed(2)}`;
  };

  const getTag = (key, value, icon) => {
    if (!value) return null;
    let text = '';
    if (key === 'adults' || key === 'beds') {
        text = `${value} ${key}`;
    } else if (key === 'engine' || key === 'transmission') {
      text = value.charAt(0).toUpperCase() + value.slice(1);
    } else if (key === 'AC') {
        text = 'AC';
    } else {
      text = key.charAt(0).toUpperCase() + key.slice(1);
    }
    return (
      <div key={key} className={s.tag}>
        <Icon id={icon} className={s.tagIcon} />
        {text}
      </div>
    );
  };

  const tags = [
    getTag('adults', camper.adults, 'users'),
    getTag('transmission', camper.transmission, 'transmission'),
    getTag('engine', camper.engine, 'engine'),
    getTag('kitchen', camper.kitchen, 'kitchen'),
    getTag('beds', camper.beds, 'beds'),
    getTag('AC', camper.AC, 'ac'),
  ].filter(Boolean);

  return (
    <>
      <div className={s.card}>
        <img 
          src={camper.gallery[0]?.original}
          alt={camper.name}
          className={s.image}
        />
        <div className={s.content}>
          <div className={s.titleLine}>
            <h2 className={s.title}>{camper.name}</h2>
            <div className={s.priceLine}>
              <p className={s.price}>{formatPrice(camper.price)}</p>
              <button
                onClick={handleToggleFavorite}
                className={`${s.favButton} ${isFavorite ? s.activeFav : ''}`}
                aria-label="Toggle favorite"
              >
                <Icon id="heart" className={s.favIcon} />
              </button>
            </div>
          </div>
          <div className={s.ratingLine}>
            <div className={s.rating}>
              <Icon id="star" className={s.starIcon} />
              <span className={s.ratingText}>
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
            </div>
            <div className={s.location}>
              <Icon id="map-pin" className={s.mapIcon} />
              <span>{camper.location}</span>
            </div>
          </div>
          <p className={s.description}>{camper.description}</p>
          <div className={s.tags}>{tags.slice(0, 6)}</div>
          <Button onClick={() => setIsModalOpen(true)}>Show more</Button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CamperDetails camperId={camper.id} />
      </Modal>
    </>
  );
};

export default CamperCard;
