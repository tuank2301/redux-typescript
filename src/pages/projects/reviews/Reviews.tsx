import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  selectReviewsData,
  prev,
  next,
  random,
} from 'features/reviews/reviewsSlice';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const { reviewsData, index } = useAppSelector(selectReviewsData);
  const { name, image, job, text } = reviewsData[index];
  const dispatch = useAppDispatch();

  return (
    <main className='reviews'>
      <div className='title'>
        <h3>our reviews</h3>
        <div className='underline' />
      </div>
      <div className='reviews__container'>
        <div className='reviews__img'>
          <img src={image} alt={name} />
          <span className='reviews__icons--quote'>
            <FaQuoteRight />
          </span>
        </div>
        <h4>{name}</h4>
        <h5>{job}</h5>
        <p>{text}</p>
        <div className='reviews__btn--select'>
          <button
            className='reviews__btn--prev'
            onClick={() => dispatch(prev())}
          >
            <FaChevronLeft />
          </button>
          <button
            className='reviews__btn--next'
            onClick={() => dispatch(next())}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className='reviews__btn--random'
          onClick={() => dispatch(random())}
        >
          surprise me
        </button>
      </div>
    </main>
  );
};

export default Reviews;
