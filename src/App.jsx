import { Link, useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
   <div className='mt-4'>
    <div className='text-center'>
      <Link to={'/addcoffee'}><button className='btn btn-info ml-4'>Add a Coffee</button></Link>
    </div>
    <h1 className='text-6xl text-center my-6 text-[#c9aabc]'>Cold Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 m-6 gap-4'>
      {
        coffees.map(coffee => <CoffeeCard
         key={coffee._id}
         coffee={coffee}
         coffees = {coffees}
         setCoffees={setCoffees}
        >
        </CoffeeCard>)
      }
      </div>
  </div>
  )
}

export default App
