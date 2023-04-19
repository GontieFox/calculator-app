import { useSelector } from "react-redux";
import CalculateCard from "../../components/calculateCard/CalculateCard";
import Intro from "../../components/intro/Intro";
import "./index.css";
import { RootState } from "../../redux/store";

const Home = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  let background = "";

  switch (theme) {
    case 1:
      background = "background_first";
      break;
    case 2:
      background = "background_second";
      break;
    case 3:
      background = "background_third";
      break;
  }

  return (
    <div className={`background ${background}`}>
      <Intro />
      <CalculateCard />
    </div>
  );
};

export default Home;
