import React from 'react'
import './card.css'

const Card = ({name, food, isEmployed, age}) => {
    // console.log(props);
  return (
    <div className='card'>
        <p>Good Morming {name}</p>
        <p>your are {age} years old</p>
        <p>your favorite food is {food}</p>
        {isEmployed ? (
            <button>Get Promoted</button>
            ) : (
                <button>Apply for job</button>
            )}
        <button>{isEmployed ? 'Make Donation' : 'Collect Palliatives'}</button>
        {isEmployed && <button>Contest</button>}
        {!isEmployed && <button>Vote</button>}
    </div>
  )
}

export default Card