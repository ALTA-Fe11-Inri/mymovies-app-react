import { useNavigate } from "react-router-dom";
import { FC } from "react";
import Button from "./Button";

interface CardProps {
  title: any;
  poster_path: any;
  vote_average: any;
  id: any;
  labelButton: string;
  onClickFav?: () => void;
  //   navigate?: any;
  //   params?: any;
}

const Card: FC<CardProps> = ({
  id,
  poster_path,
  title,
  vote_average,
  labelButton,
  onClickFav,
}) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="grid grid-cols-1 bg-white gap-y-4 rounded-lg m-auto z-10 backdrop-blur-2xl shadow-xl">
      <div className="flex justify-center items-center px-2 pt-2 cursor-pointer ">
        <img
          onClick={() => onClickDetail()}
          className=" w-full object-cover rounded-lg "
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>
      <div className="flex justify-between items-center px-4 mt-3">
        <div>
          <h5
            className="mb-2 text-2xl text-black md:text-sm font-semibold cursor-pointer"
            onClick={() => onClickDetail()}
          >
            {title}
          </h5>
          <p className="text-black text-[12px] md:text-xs pb-2">
            Rating {vote_average}
          </p>
        </div>

        <Button label={labelButton} onClick={onClickFav} />
      </div>
    </div>
  );
};

export default Card;
