
function Card({ icon, name, onClick}) {
    return (
      <div className="card">
        <div>
            <button onClick={onClick} className="icon">{icon}</button>
        </div>
        <div>
            <p className="icon-name">{name}</p>
        </div>
      </div>
    );
}

export default Card;