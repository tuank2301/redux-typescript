import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchToursData, selectTourData } from 'features/tours/tourSlice';
import Loading from 'components/loading/Loading';
import Tour from './Tour';

const Tours = () => {
  const dispatch = useAppDispatch();
  const { status, data } = useAppSelector(selectTourData);

  useEffect(() => {
    dispatch(fetchToursData());
  }, [dispatch]);

  return (
    <main className='tours'>
      <div className='title'>
        <h3>our tours</h3>
        <div className='underline' />
      </div>
      <section className='tours__container'>
        {status === 'loading' && <Loading />}
        {data.length === 0 && status !== 'loading' && (
          <button
            className='btn tour__btn--refresh'
            onClick={() => dispatch(fetchToursData())}
          >
            refresh
          </button>
        )}
        {data.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </section>
    </main>
  );
};
export default Tours;
