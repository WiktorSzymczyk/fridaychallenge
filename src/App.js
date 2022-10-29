import './App.css';
import {useState, useEffect} from 'react'
import { getActivity } from './Api';

function App() {
  
  const [activity, setActivity] = useState([])
  
  useEffect(() => {
    getActivity(activity)
     .then(data => setActivity(data))
  }, []) 

  return (
    <>
      <p>{JSON.stringify(activity.activity)}</p>
      <p>{JSON.stringify(activity.type)}</p>
      <p>£{JSON.stringify(activity.price)}</p>
    </>
  )
}

export default App;
