import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./index.css";

const ResultCard = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

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

  return (
    <div className={`background-result ${background}`}>
      <h1 className={`result ${result}`}>399,981</h1>
    </div>
  );
};

export default ResultCard;
