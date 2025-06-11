import { useLoaderData } from 'react-router'
import './App.css'

function App() {
  const coffees = useLoaderData();
  return (
   <>
     <button className="btn btn-soft btn-accent">Accent</button>
      <h2 className='text-green-400'>coffee store client side</h2>
      <h1>my coffee: {coffees.length}</h1>
  </>
  )
}

export default App
