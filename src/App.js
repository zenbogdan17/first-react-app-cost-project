import Cost from './components/Const/Cost';
import NewCost from './components/NewCost/NewCost';
import React, { useState } from 'react';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'Холодильник',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2022, 6, 2),
    description: 'MacBook',
    amount: 1999.99,
  },
  {
    id: 'c3',
    date: new Date(2023, 1, 4),
    description: 'Часы',
    amount: 100,
  },
];

function App() {
  const [cost, setCost] = useState(INITIAL_COSTS);

  const addCostHandler = (costs) => {
    setCost((prev) => [costs, ...prev]);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />

      <Cost cost={cost} />
    </div>
  );
}

export default App;
