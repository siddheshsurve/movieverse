import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef } from '../firebase/firebase';
import { addDoc } from 'firebase/firestore';

const Reviews = () => {
    const [rating, setRating] = useState(0);

  return (
    <div className="mt-4 border-t-2 border-gray-700 w-full">
      <ReactStars 
            size={30} 
            half={true} 
            onChange={(rate) => setRating(rate)}    
       />

      <input
        className="w-full p-2 outline-none header"
        placeholder="Share your thoughts..."
      />
      <button className="bg-green-600 w-full p-1">Share</button>
    </div>
  );
}

export default Reviews