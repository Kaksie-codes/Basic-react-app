import React from 'react'
import Card from '../card/Card'
import './cardwrapper.css'

const CardWrapper = () => {
  return (
    <div className='wrapper'>
      <Card 
        name='Moses' 
        food='yam and egg' 
        isEmployed={true}
        age={10}/>
        
      <Card 
        name='Messiah' 
        food='beans and egg'
        isEmployed={false} 
        age={110}/>
      <Card 
        name='Monday' 
        food='afang and egg' 
        isEmployed={true}
        age={20}/>
      <Card 
        name='Mohammed' 
        food='yam and bread'
        isEmployed={false} 
        age={35}/>      
    </div>
  )
}

export default CardWrapper