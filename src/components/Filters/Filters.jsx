import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, fetchCampers } from '../../redux/campersSlice';
import Button from '../common/Button/Button';
import Icon from '../common/Icon/Icon';
import s from './Filters.module.css';

const equipmentOptions = [
  { id: 'ac', label: 'AC', icon: 'ac' },
  { id: 'transmission', label: 'Automatic', icon: 'transmission' },
  { id: 'kitchen', label: 'Kitchen', icon: 'kitchen' },
  { id: 'tv', label: 'TV', icon: 'tv' },
  { id: 'shower', label: 'Shower/WC', icon: 'shower' },
];

const typeOptions = [
  { id: 'panelTruck', label: 'Van', icon: 'van' },
  { id: 'fullyIntegrated', label: 'Fully Integrated', icon: 'fully-integrated' },
  { id: 'alcove', label: 'Alcove', icon: 'alcove' },
];

const Filters = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector((state) => state.campers.filters);
  const [localFilters, setLocalFilters] = useState(currentFilters);

  const handleInputChange = (e) => {
    setLocalFilters({ ...localFilters, location: e.target.value });
  };

  const handleEquipmentChange = (e) => {
    const { value, checked } = e.target;
    const newEquipment = checked
      ? [...localFilters.equipment, value]
      : localFilters.equipment.filter((item) => item !== value);
    setLocalFilters({ ...localFilters, equipment: newEquipment });
  };

  const handleTypeChange = (e) => {
    setLocalFilters({ ...localFilters, form: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilters(localFilters));
    dispatch(fetchCampers(localFilters));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="location" className={s.label}>
          Location
        </label>
        <div className={s.inputWrapper}>
          <Icon id="map-pin" className={s.locationIcon} />
          <input
            type="text"
            id="location"
            value={localFilters.location}
            onChange={handleInputChange}
            placeholder="City"
            className={s.input}
          />
        </div>
      </div>

      <div>
        <p className={s.label}>Filters</p>
        <h3 className={s.sectionTitle}>Equipment</h3>
        <div className={s.checkboxGrid}>
          {equipmentOptions.map((option) => (
            <label
              key={option.id}
              className={`${s.checkboxLabel} ${
                localFilters.equipment.includes(option.id) ? s.checked : ''
              }`}
            >
              <input
                type="checkbox"
                value={option.id}
                checked={localFilters.equipment.includes(option.id)}
                onChange={handleEquipmentChange}
                className={s.checkboxInput}
              />
              <Icon id={option.icon} className={s.checkboxIcon} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className={s.sectionTitle}>Vehicle type</h3>
        <div className={s.radioGrid}>
          {typeOptions.map((option) => (
            <label
              key={option.id}
              className={`${s.checkboxLabel} ${
                localFilters.form === option.id ? s.checked : ''
              }`}
            >
              <input
                type="radio"
                name="type"
                value={option.id}
                checked={localFilters.form === option.id}
                onChange={handleTypeChange}
                className={s.checkboxInput}
              />
              <Icon id={option.icon} className={s.checkboxIcon} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Button type="submit">Search</Button>
    </form>
  );
};

export default Filters;
