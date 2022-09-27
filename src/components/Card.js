import "./Card.css"


function Card({name, img, status}) {
  return (
    <div className={status === 'Alive' ? 'alive card' : status === 'unknown' ? 'unknown card' :  'dead card'}>
      <ul>
        <li>
          <h2>{name}</h2>
          <img src={img}></img>
        </li>
      </ul>
    </div>
  );
}

export default Card;
