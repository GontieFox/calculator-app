import CalculateCard from "../../components/calculateCard/CalculateCard";
import Intro from "../../components/intro/Intro";
import ResultCard from "../../components/resultCard/ResultCard";
import "./index.css";

const Home = () => {
  return (
    <div className="background">
      <Intro />
      <ResultCard />
      <CalculateCard />
    </div>
  );
};

export default Home;
