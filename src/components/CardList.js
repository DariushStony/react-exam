import { Link } from 'react-router-dom';

const CardList = ({ cards, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="card-list">
                {
                    cards.map(card => (
                        <div className="card-preview">
                            <Link to={`/cards/${card.id}`}>
                                <div key={card.id}>
                                    <img src={card.image_url} alt="user" style={{ width: "100%" }} />
                                    <h2>{card.name}</h2>
                                </div>
                            </Link>
                            <p><button>Remove</button></p>
                        </div>

                    ))
                }
            </div>

        </div>
    );
}

export default CardList;