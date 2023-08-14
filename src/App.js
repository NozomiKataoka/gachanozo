import React, { useState } from 'react';
import './App.css';
import GachaButton from './components/GachaButton';
import GachaResult from './components/GachaResult';

function App() {
  const [item, setItem] = useState(null);
  const items = ['アイテム1', 'アイテム2', 'アイテム3', 'アイテム4', 'アイテム5'];

  const drawGacha = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setItem(randomItem);
  };

  return (
    <div className="App">
      <GachaButton onDraw={drawGacha} />
      <GachaResult item={item} />
    </div>
  );
}

export default App;
