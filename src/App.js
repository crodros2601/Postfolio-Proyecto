import React from 'react';
import Slider from './components/Slider';
import { Analytics } from '@vercel/analytics/react';

function App() {
 
  return (
    <div>
      <Slider />
      <Analytics/>
    </div>
  );
}

export default App;
