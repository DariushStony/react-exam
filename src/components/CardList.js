import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const CardList = ({ cards, title }) => {

    const [stateCards, setCards] = useState(cards);

    const handleClick = (id) => {
        fetch(`http://localhost:8000/cards/${id}`, {
            method: "DELETE"
        }).then(() => {
            const newCards = stateCards.filter(card => card.id != id);
            setCards(newCards);
        });
    };

    return (
        <div>
            <h2>{title}</h2>
            <div className="card-list">
                {
                    stateCards.map(card => (
                        <div className="card-preview">
                            <Link to={`/cards/${card.id}`}>
                                <div key={card.id}>
                                    <img src={card.image_url} alt="user" style={{ width: "100%" }} />
                                    <h2>{card.name}</h2>
                                </div>
                            </Link>
                            <p><button onClick={() => handleClick(card.id)}>Remove</button></p>
                        </div>

                    ))
                }
            </div>

        </div>
    );
}

export default CardList;