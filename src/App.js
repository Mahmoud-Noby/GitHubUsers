import CardList from './CardList';
import Form from './Form';
	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];
function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Form />
      <CardList testData={testData} />
    </div>
  );
}

export default App;
