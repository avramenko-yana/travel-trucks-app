import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCamperById,
  resetCurrentCamper,
} from '../../redux/campersSlice';
import Loader from '../common/Loader/Loader';
import Icon from '../common/Icon/Icon';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import s from './CamperDetails.module.css';

const CamperDetails = ({ camperId }) => {
  const dispatch = useDispatch();
  const { currentCamper: camper, isLoading, error } = useSelector(
    (state) => state.campers
  );
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    if (camperId) {
      dispatch(fetchCamperById(camperId));
    } 
    return () => {
      dispatch(resetCurrentCamper());
    };
  }, [camperId, dispatch]);
 
  if (isLoading || !camper) return <Loader />;
  if (error) return <p className={s.error}>Error: {error}</p>;

  const formatPrice = (price) => `€${price.toFixed(2)}`;

  return (
    <div className={s.content}>
      <header className={s.header}>
        <h1 className={s.title}>{camper.name}</h1>
        <div className={s.meta}>
          <div className={s.rating}>
            <Icon id="star" className={s.starIcon} />
            <span>
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
          </div>
          <div className={s.location}>
            <Icon id="map-pin" className={s.mapIcon} />
            <span>{camper.location}</span>
          </div>
        </div>
        <p className={s.price}>{formatPrice(camper.price)}</p>
      </header>

      <div className={s.gallery}>
        {camper.gallery.slice(0, 3).map((img, index) => (
          <div key={index} className={s.imageWrapper}>
            <img
              src={img.original}
              alt={`${camper.name} view ${index + 1}`}
              className={s.galleryImage}
            />
          </div>
        ))}
      </div>

      <p className={s.description}>{camper.description}</p>

      <div className={s.tabs}>
        <button
          onClick={() => setActiveTab('features')}
          className={`${s.tabButton} ${
            activeTab === 'features' ? s.activeTab : ''
          }`}
        >
          Features
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`${s.tabButton} ${
            activeTab === 'reviews' ? s.activeTab : ''
          }`}
        >
          Reviews
        </button>
      </div>

      <div className={s.tabContent}>
        {activeTab === 'features' && <Features camper={camper} />}
        {activeTab === 'reviews' && <Reviews camper={camper} />}
      </div>
    </div>
  );
};

export default CamperDetails;
