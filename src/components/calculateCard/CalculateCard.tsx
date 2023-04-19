import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../redux/store";
import "./index.css";

const CalculateCard = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [calcValue, setCalcValue] = useState("0");

  const handleButtonClick = (value: string) => {
    const lastChar = calcValue.charAt(calcValue.length - 1);

    if (value === "DEL") {
      setCalcValue(calcValue.slice(0, -1));
    } else if (value === "RESET") {
      setCalcValue("0");
    } else if (value === "=") {
      setCalcValue(eval(calcValue));
    } else if (
      ["+", "-", "/", "*", "."].includes(value) &&
      ["+", "-", "/", "*", "."].includes(lastChar)
    ) {
      setCalcValue(calcValue.slice(0, -1) + value);
    } else {
      setCalcValue(calcValue === "0" ? value : calcValue + value);
    }
  };

  let card = "";
  let btn = "";
  let deleteBtn = "";
  let resetBtn = "";
  let resultBtn = "";

  let background = "";
  let result = "";

  switch (theme) {
    case 1:
      background = "background-result_first";
      result = "result_first";
      break;
    case 2:
      background = "background-result_second";
      result = "result_second";
      break;
    case 3:
      background = "background-result_third";
      result = "result_third";
      break;
  }

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
    <>
      <div className={`background-result ${background}`}>
        <h1 className={`result ${result}`}>{calcValue}</h1>
      </div>
      <div className={`card ${card}`}>
        <div className="card__first-section">
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className={`button card__delete-btn ${deleteBtn}`}
            onClick={() => handleButtonClick("DEL")}
          >
            DEL
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
          <button
            className={`button card__btn ${btn}`}
            onClick={() => handleButtonClick("*")}
          >
            x
          </button>
        </div>
        <div className="card__second-section">
          <button
            className={`button card__reset-btn ${resetBtn}`}
            onClick={() => handleButtonClick("RESET")}
          >
            RESET
          </button>
          <button
            className={`button card__result-btn ${resultBtn}`}
            onClick={() => handleButtonClick("=")}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default CalculateCard;
