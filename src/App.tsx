import { useState } from 'react'

import {APIProvider} from '@vis.gl/react-google-maps';
import VancMap from './components/Map';
import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
        <VancMap />
      </APIProvider>
    </>
  )
}

export default App