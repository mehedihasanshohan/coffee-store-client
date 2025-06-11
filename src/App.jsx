import { useLoaderData } from 'react-router'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
   <div className='m-20'>
    <h1 className='text-6xl text-center my-20 text-[#c9aabc]'>Cold Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <CoffeeCard
         key={coffees.id}
         coffee={coffee}
        >
        </CoffeeCard>)
      }
      </div>
  </div>
  )
}

export default App
