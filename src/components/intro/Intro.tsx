import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import "./index.css";

const Intro = () => {
  return (
    <div className="first-section">
      <h3 className="first-section__title">calc</h3>
      <div className="first-section__theme">
        <span className="first-section__span">theme</span>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Intro;
