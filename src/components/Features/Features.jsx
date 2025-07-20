import Icon from '../common/Icon/Icon';
import BookingForm from '../BookingForm/BookingForm';
import s from './Features.module.css';

const Features = ({ camper }) => { 
  const {
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    kitchen,
    beds,
    AC,
    TV,
    bathroom,
    water,
    gas,
    microwave,
    radio,
    refrigerator
  } = camper;
 
  const featureTags = [
    { key: 'adults', value: adults, icon: 'users' },
    { key: 'transmission', value: transmission, icon: 'transmission' },
    { key: 'AC', value: AC, icon: 'ac' },
    { key: 'engine', value: engine, icon: 'engine' },
    { key: 'kitchen', value: kitchen, icon: 'kitchen' },
    { key: 'beds', value: beds, icon: 'beds' },
    { key: 'TV', value: TV, icon: 'tv' },
    { key: 'bathroom', value: bathroom, icon: 'shower' },
    { key: 'water', value: water, icon: 'water' },
    { key: 'gas', value: gas, icon: 'gas' },
    { key: 'microwave', value: microwave, icon: 'microwave' },
    { key: 'radio', value: radio, icon: 'radio' },
    { key: 'refrigerator', value: refrigerator, icon: 'refrigerator' },
  ];

  const vehicleDetails = [
    { label: 'Form', value: form },
    { label: 'Length', value: length },
    { label: 'Width', value: width },
    { label: 'Height', value: height },
    { label: 'Tank', value: tank },
    { label: 'Consumption', value: consumption },
  ];

  const getTagText = (key, value) => {
    if (key === 'adults' || key === 'beds') return `${value} ${key}`;
    if (typeof value === 'string')
      return value.charAt(0).toUpperCase() + value.slice(1);
    if (key === 'AC') return 'AC';
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className={s.container}>
      <div className={s.featuresColumn}>
        <div className={s.tags}>
          {featureTags
            .filter((tag) => tag.value > 0 || typeof tag.value === 'string')
            .map((tag) => (
              <div key={tag.key} className={s.tag}>
                <Icon id={tag.icon} className={s.tagIcon} />
                {getTagText(tag.key, tag.value)}
              </div>
            ))}
        </div>
        <h3 className={s.title}>Vehicle details</h3>
        <ul className={s.detailsList}>
          {vehicleDetails.map((detail) => (
            <li key={detail.label} className={s.detailItem}>
              <span>{detail.label}</span>
              <span>{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.formColumn}>
        <BookingForm />
      </div>
    </div>
  );
};

export default Features;
