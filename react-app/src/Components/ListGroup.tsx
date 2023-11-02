import { MouseEvent } from "react";

function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0; //tracks which item is selected in order to highlight it

  //Event handler
  //Type annotation to specify the oobject type(only in typescript)
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List title</h1>
      {cities.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

//Ctrl + D for multicursor
export default ListGroup;
