/* eslint-disable no-underscore-dangle */
import React from 'react';
import Rating from './star_rating';

const Experience = (review) => (
  <div className="experience">

    <div>Play Experience stars</div>
    <div><Rating rating={review.review.play_experience} /></div>

    <div>Level of difficulty</div>
    <div><Rating rating={review.review.difficulty_level} /></div>

    <div>Value for Money</div>
    <div><Rating rating={review.review.value_for_money} /></div>

  </div>
);

export default Experience;
