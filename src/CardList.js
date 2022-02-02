import Card from "./Card";

const CardList = (props) => {
  const users = props.testData;
  console.log(users);
  return ( 
    <div>
      { props.testData.map(card => <Card {...card} key={Math.random()} />  ) }
    </div>
  )
};

export default CardList;

