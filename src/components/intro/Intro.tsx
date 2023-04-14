import "./index.css";

const Intro = () => {
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
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
