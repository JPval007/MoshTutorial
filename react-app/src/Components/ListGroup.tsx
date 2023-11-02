function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List title</h1>
      {cities.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {cities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

//Ctrl + D for multicursor
export default ListGroup;
