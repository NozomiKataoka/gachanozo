import React from 'react';

function GachaResult({ item }) {
  return <div>{item ? `結果: ${item}` : 'ガチャを引いてください'}</div>;
}

export default GachaResult;
