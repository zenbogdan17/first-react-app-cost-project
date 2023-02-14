import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';
import CostList from './CostList';
import CostDiagram from './CostDiagram';

function Cost(props) {
  const [selectedYear, setSelectedYear] = useState('2023');

  const ChangeYearHandler = (value) => {
    setSelectedYear(value);
  };

  const filteredCost = props.cost.filter(
    (cost) => cost.date.getFullYear() == selectedYear
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={ChangeYearHandler} />
        <CostDiagram cost={filteredCost} />
        <CostList cost={filteredCost} />
      </Card>
    </div>
  );
}

export default Cost;
