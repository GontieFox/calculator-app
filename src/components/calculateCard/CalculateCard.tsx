import "./index.css";

const CalculateCard = () => {
  return (
    <div className="card">
      <div className="card__first-section">
        <button className="button card__btn">7</button>
        <button className="button card__btn">8</button>
        <button className="button card__btn">9</button>
        <button className="button card__delete-btn">DEL</button>
        <button className="button card__btn">4</button>
        <button className="button card__btn">5</button>
        <button className="button card__btn">6</button>
        <button className="button card__btn">+</button>
        <button className="button card__btn">1</button>
        <button className="button card__btn">2</button>
        <button className="button card__btn">3</button>
        <button className="button card__btn">-</button>
        <button className="button card__btn">.</button>
        <button className="button card__btn">0</button>
        <button className="button card__btn">/</button>
        <button className="button card__btn">x</button>
      </div>
      <div className="card__second-section">
        <button className="button card__reset-btn">RESET</button>
        <button className="button card__result-btn">=</button>
      </div>
    </div>
  );
};

export default CalculateCard;
