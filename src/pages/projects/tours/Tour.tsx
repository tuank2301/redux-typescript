import { useAppDispatch } from 'app/hooks';
import { dataType, removeTour } from 'features/tours/tourSlice';
import { useState } from 'react';

const Tour = ({ id, name, info, image, price }: dataType) => {
  const [readMore, setReadMore] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <article className='tour'>
      <img src={image} alt={name} />
      <div className='tour__info'>
        <div className='tour__header'>
          <h4>{name}</h4>
          <h5>${price}</h5>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className='btn tour__btn--read-more'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <div className='delete-btn__container'>
          <button
            className='btn tour__info--delete-btn'
            onClick={() => dispatch(removeTour(id))}
          >
            not interested
          </button>
        </div>
      </div>
    </article>
  );
};

export default Tour;
