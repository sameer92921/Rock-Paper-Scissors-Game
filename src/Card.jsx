function Card({ icon, name }) {
    return (
      <div className="card">
        <div>
            <button className="icon">{icon}</button>
        </div>
        <div>
            <p className="icon-name">{name}</p>
        </div>
      </div>
    );
}

export default Card;