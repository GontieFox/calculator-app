import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import "./index.css";

const Intro = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  let title = "";
  let span = "";

  switch (theme) {
    case 1:
      title = "first-section__title_first";
      span = "first-section__span_first";
      break;
    case 2:
      title = "first-section__title_second";
      span = "first-section__span_second";
      break;
    case 3:
      title = "first-section__title_third";
      span = "first-section__span_third";
      break;
  }

  return (
    <div className="first-section">
      <h3 className={`first-section__title ${title}`}>calc</h3>
      <div className="first-section__theme">
        <span className={`first-section__span ${span}`}>theme</span>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Intro;
