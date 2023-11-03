//Create a funtion component

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "dark" | "light" | "info"; //This ? means the property is optional
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <>
      <button type="button" className={`btn btn-${color}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
