import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface CardProps {
  id: any;
  name: any;
  type: any;
}

const Card: FC<CardProps> = ({ id, name, type, ...props }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`detail/${name}`);
  }

  return (
    <div
      className="container grow grid grid-cols-2 w-3/4 h-5/6 my-5 p-5  border border-3 rounded-lg border-red-600 dark:border-white shadow-lg shadow-gray-700 cursor-pointer"
      onClick={() => onClickDetail()}
    >
      <div className="flex flex-col justify-start">
        <img
          alt={id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </div>
      <div className="flex-1 place-content-end p-10 mt-20">
        <h1 className="font-chackra font-extrabold text-md uppercase text-white">
          {name}
        </h1>
        {/* <h3 className="text-white ">Type: {type}</h3> */}
      </div>
    </div>
  );
};

export default Card;
