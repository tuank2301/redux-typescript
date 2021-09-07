import { useState } from 'react';
import { birthdayData } from '../../../data';

interface data {
  id: number;
  name: string;
  age: number;
  image: string;
}

const BirthdayReminder = () => {
  const [data, setData] = useState<data[]>(birthdayData);

  return (
    <main className='birthday'>
      <div className='birthday__container'>
        <h3>{data.length} birthdays today</h3>
        {data.map((item) => {
          const { id, name, age, image } = item;
          return (
            <article key={id} className='birthday__item'>
              <img src={image} alt={name} />
              <div className='birthday__item--info'>
                <h4>{name}</h4>
                <p>{age} years old</p>
              </div>
            </article>
          );
        })}
        <button className='btn birthday__btn' onClick={setData.bind(this, [])}>
          clear all
        </button>
      </div>
    </main>
  );
};

export default BirthdayReminder;
