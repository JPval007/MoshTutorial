import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setliked] = useState(false);

  const toggle = () => {
    setliked(!liked);
    onClick(); //Call the function in the props
  };

  return (
    <div>
      {liked ? (
        // Filled heart
        <FaHeart color={"#ff00ff"} size={100} onClick={toggle} />
      ) : (
        // Empty heart
        <AiOutlineHeart color={"#ff00ff"} size={100} onClick={toggle} />
      )}
    </div>
  );
};

export default Like;
