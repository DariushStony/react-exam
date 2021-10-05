import { Link } from 'react-router-dom';

const CardList = ({ cards, title }) => {
    return (
        <div className="card-list">
            <h2>{title}</h2>
            {
                cards.map(card => (
                    <Link to={`/cards/${card.id}`}>
                        <div className="card-preview" key={card.id}>
                            <img src={card.image_url} alt="user" style={{ width: "100%" }} />
                            <h1>{card.name}</h1>
                            <p><button>Remove</button></p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default CardList;