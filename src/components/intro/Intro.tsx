import { useState } from "react";
import "./index.css";

const Intro = () => {
  const [value, setValue] = useState(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className="first-section">
      <h3 className="first-section__title">calc</h3>
      <div className="first-section__theme">
        <span className="first-section__span">theme</span>
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
      </div>
    </div>
  );
};

export default Intro;
