import { FormEvent, useRef } from "react";

const Form = () => {
  // In here we tell the useRef to be of type input element because the compiler doesn't know
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  // Create an object to manage all the user data easily
  const Person = {
    name: "",
    age: 0,
  };

  //
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // If the current name ref object is defined then access its value
    if (nameRef.current !== null) Person.name = nameRef.current.value;
    if (ageRef.current !== null) Person.age = parseInt(ageRef.current.value); //turn the string into a number
    console.log(Person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" className="form-control" type="text" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" className="form-control" type="number" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
