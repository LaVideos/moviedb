import React, {FC} from 'react';

import { FaStar } from "react-icons/fa";

interface StarProps{ color : string,
    handleSelect : () => void,
    handleHover : () => void,
    size:number }

const StarComponent:FC<StarProps>=({handleSelect,handleHover,color,size})=>{
    return (
        <FaStar size={size} className="star-rating-star"
                color={color}
                onMouseOver={handleHover}
                onClick={handleSelect}
        />
    );
}

export {StarComponent}
