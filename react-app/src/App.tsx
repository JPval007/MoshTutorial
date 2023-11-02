import ListGroup from "./Components/ListGroup";

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectedItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
