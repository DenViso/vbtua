import React, { useEffect, useState } from 'react';
import './filter.css';

import ReactSlider from 'react-slider';

export const RangeSlider = () => {
//   const [combinedValueMin, setCombinedValueMin] = useState(0);
//   const [combinedValueMax, setCombinedValueMax] = useState(180);

//   const handleCombinedChangeMin = (event) => {
  
//     const newValue = parseInt(event.target.value);
//     setCombinedValueMin(newValue + 1);
//     if (parseInt(combinedValueMax)-parseInt(combinedValueMin)<=15){ 
//       setCombinedValueMin(parseInt(combinedValueMax)-15);
//     }
//   };
//   const handleCombinedChangeMax = (event) => {
//     const newValue = parseInt(event.target.value);
//     setCombinedValueMax(newValue - 1);
//     if (parseInt(combinedValueMax)-parseInt(combinedValueMin)<=15){ 
//       setCombinedValueMin(parseInt(combinedValueMax)-15);
//     }
//   };

//  useEffect(() => {
   
//  })

//   return (
//     <div className="slider-container">
//       <label htmlFor="combinedRange">Combined Range:</label>

//       <div className='sliders' >
//         <div className="slider-roll"></div>
//         <input type="range" min ='0' max ='180' id="slider-1" value={combinedValueMin} onChange={handleCombinedChangeMin} />
//         <input type="range" min ='0' max ='180' id="slider-2" value={combinedValueMax} onChange={handleCombinedChangeMax} />
//       </div>

//       <div className="values">
//         <span>${combinedValueMin}</span>
//         <span>&ndash;</span>
//         <span>${combinedValueMax}</span>
//       </div>
//     </div>
//   );

};

