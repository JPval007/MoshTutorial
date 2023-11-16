import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [show, setShow] = useState(false);

  //   Click handler
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      {maxChars && !show ? children.slice(0, maxChars + 1) : children}
      <button onClick={handleClick}>{show ? "Less" : "More"}</button>
    </div>
  );
};

export default ExpandableText;
