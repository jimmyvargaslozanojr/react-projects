import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const checkNumber = (number) => {
    if (number > people.length -1)  {
      return 0;
    }
    if (number < 0){
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  };

  const randomPerson = () => {
   let randomNumber = Math.floor(Math.random() * people.length);
   setIndex(randomNumber);
  };



  return (
  <article className='review'>
    <p>No. of Review {people.length}</p>
    <div className="img-container">
      <img src={image} className='person-img' alt={name}/>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='text'>{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>
        suprise me
      </button>
    </article>
    );
};

export default Review;
