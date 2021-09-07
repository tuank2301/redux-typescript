import { useAppSelector } from 'app/hooks';
import { selectAccordionData } from 'features/accordion/accordion';
import Question from './Question';

const AccordionApp = () => {
  const { data } = useAppSelector(selectAccordionData);
  return (
    <main className='accordion'>
      <div className='accordion__container'>
        <h3>questions and answers about login</h3>
        <div className='question'>
          {data.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AccordionApp;
