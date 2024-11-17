import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {APIProvider} from '@vis.gl/react-google-maps';
import VancMap from './components/Map';
import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
      <Navbar />
      <VancMap />
    </APIProvider>
  )
}

export default App