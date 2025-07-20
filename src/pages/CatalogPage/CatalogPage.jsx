import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers, loadMoreCampers } from '../../redux/campersSlice';
import Filters from '../../components/Filters/Filters';
import CamperCard from '../../components/CamperCard/CamperCard';
import Loader from '../../components/common/Loader/Loader';
import Button from '../../components/common/Button/Button';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error, page, hasMore, filters } = useSelector(
    (state) => state.campers
  );

  useEffect(() => { 
    if (items.length === 0) {
      dispatch(fetchCampers(filters));
    }
  }, [dispatch, filters, items.length]);

  const handleLoadMore = () => {
    dispatch(loadMoreCampers({ page, filters }));
  };

  return (
    <div className={s.page}>
      <aside className={s.aside}>
        <Filters />
      </aside>
      <main className={s.mainContent}>
        {error && <p className={s.error}>Error: {error}</p>}
        <div className={s.list}>
          {Array.isArray(items) && items.map((camper) => (
  <CamperCard key={camper._id} camper={camper} />
))}
        </div>
        {isLoading && <Loader />}
        {!isLoading && items.length === 0 && (
          <p className={s.noResults}>
           No campers matching your ctiteria.
          </p>
        )}
        {hasMore && !isLoading && items.length > 0 && (
          <div className={s.loadMoreWrapper}>
            <Button onClick={handleLoadMore} secondary>
              Load More
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CatalogPage;
