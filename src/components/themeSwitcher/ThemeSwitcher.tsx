import { useState } from "react";
import "./index.css";

const ThemeSwitcher = () => {
  const [value, setValue] = useState(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className="switcher">
      <div className="switcher__section">
        <span className="switcher__number">1</span>
        <span className="switcher__number">2</span>
        <span className="switcher__number">3</span>
      </div>
      <input
        className="switcher__range"
        type="range"
        min="1"
        max="3"
        value={value}
        onInput={handleInputChange}
      />
    </div>
  );
};

export default ThemeSwitcher;
