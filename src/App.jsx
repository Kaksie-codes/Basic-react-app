import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import CardWrapper from './components/cardwrapper/CardWrapper'
import Home from './pages/home'
import Usestate from './components/hooks/usestate/Usestate'

function App() {
  const car = {
    _name: 'Toyota',
    color: 'green',
    doors: 2
  }

  const {_name:model, color, doors } = car;
  // const _name = car._name;
  // const color = car.color;
  // const doors = car.doors;

  // console.log(car.doors);
  // console.log(model);
  return (
    <>
      {/* <Navbar/>
      <CardWrapper/>      */}
      {/* <Home /> */}
      <Usestate/>
    </>
  )
}

export default App
