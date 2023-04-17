import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../redux/reducers/themeSlice";
import { RootState } from "../../redux/store";
import "./index.css";

const ThemeSwitcher = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTheme(parseInt(event.target.value)));
  };

  let number = "";

  switch (theme) {
    case 1:
      number = "switcher__number_first";
      break;
    case 2:
      number = "switcher__number_second";
      break;
    case 3:
      number = "switcher__number_third";
      break;
  }

  return (
    <div className="switcher">
      <div className="switcher__section">
        <span className={`switcher__number ${number}`}>1</span>
        <span className={`switcher__number ${number}`}>2</span>
        <span className={`switcher__number ${number}`}>3</span>
      </div>
      <input
        className="switcher__range"
        type="range"
        min="1"
        max="3"
        value={theme}
        onInput={handleInputChange}
      />
    </div>
  );
};

export default ThemeSwitcher;
