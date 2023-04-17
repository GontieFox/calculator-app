import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./index.css";

const CalculateCard = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  let card = "";
  let btn = "";
  let deleteBtn = "";
  let resetBtn = "";
  let resultBtn = "";

  switch (theme) {
    case 1:
      card = "card_first";
      btn = "card__btn_first";
      deleteBtn = "card__delete-btn_first";
      resetBtn = "card__reset-btn_first";
      resultBtn = "card__result-btn_first";
      break;
    case 2:
      card = "card_second";
      btn = "card__btn_second";
      deleteBtn = "card__delete-btn_second";
      resetBtn = "card__reset-btn_second";
      resultBtn = "card__result-btn_second";
      break;
    case 3:
      card = "card_third";
      btn = "card__btn_third";
      deleteBtn = "card__delete-btn_third";
      resetBtn = "card__reset-btn_third";
      resultBtn = "card__result-btn_third";
      break;
  }

  return (
    <div className={`card ${card}`}>
      <div className="card__first-section">
        <button className={`button card__btn ${btn}`}>7</button>
        <button className={`button card__btn ${btn}`}>8</button>
        <button className={`button card__btn ${btn}`}>9</button>
        <button className={`button card__delete-btn ${deleteBtn}`}>DEL</button>
        <button className={`button card__btn ${btn}`}>4</button>
        <button className={`button card__btn ${btn}`}>5</button>
        <button className={`button card__btn ${btn}`}>6</button>
        <button className={`button card__btn ${btn}`}>+</button>
        <button className={`button card__btn ${btn}`}>1</button>
        <button className={`button card__btn ${btn}`}>2</button>
        <button className={`button card__btn ${btn}`}>3</button>
        <button className={`button card__btn ${btn}`}>-</button>
        <button className={`button card__btn ${btn}`}>.</button>
        <button className={`button card__btn ${btn}`}>0</button>
        <button className={`button card__btn ${btn}`}>/</button>
        <button className={`button card__btn ${btn}`}>x</button>
      </div>
      <div className="card__second-section">
        <button className={`button card__reset-btn ${resetBtn}`}>RESET</button>
        <button className={`button card__result-btn ${resultBtn}`}>=</button>
      </div>
    </div>
  );
};

export default CalculateCard;
