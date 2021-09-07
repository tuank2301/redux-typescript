import { dataType } from 'features/accordion/accordion';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

const Question = ({ title, info }: dataType) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <header>
        <h4>{title}</h4>
        <button
          className='question__btn--showInfo'
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
