import React from 'react'
import data from './data.json';
import ServiceCard from './components/ServiceCard';
function App() {
  return (
    <div>
      {data.map((service)=>(
        <ServiceCard key={service.id}{...service}/>
      ))}
    </div>
  )
}

export default App;
