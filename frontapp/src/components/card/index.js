const Card = (props) => (
  <div className="card">
    <h2>
      {props.title}
    </h2>
    <p>
      {props.text}
    </p>
  </div>
);

export default Card;