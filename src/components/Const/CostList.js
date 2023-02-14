import CostItem from './CostItem';
import './CostList.css';

const CostList = (props) => {
  if (props.cost.length === 0) {
    return <h2 className="cost-list_fallback">В этом году нету разходов</h2>;
  }
  return (
    <ul className="cost-list">
      {props.cost.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
