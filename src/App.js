import './App.css';
import {useState, useEffect} from 'react'
import { getActivity } from './Api';
import { getPlayer } from './ApiNBA';

function App() {
  
  const [activity, setActivity] = useState([])

  const [player, setPlayer] = useState([])

  useEffect(() => {
    getActivity(activity)
     .then(data => setActivity(data))

     getPlayer(player)
    .then(data => setPlayer(data))
  }, []) 

  return (
    <>
      <p>{JSON.stringify(activity.activity)}</p>
      <p>{JSON.stringify(activity.type)}</p>
      <p>£{JSON.stringify(activity.price)}</p>
      <p>{JSON.stringify(player)}</p>
    </>
  )

}

export default App;
