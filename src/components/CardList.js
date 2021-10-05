import { Link } from 'react-router-dom';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { cardRemove } from '../store/actions/actions';

const CardList = ({ title }) => {

    const cards = useSelector(state => state);
    const dispatch = useDispatch();

    const [stateCards, setCards] = useState(cards);

    const handleClick = (id) => {
        fetch(`http://localhost:8000/cards/${id}`, {
            method: "DELETE"
        }).then(() => {
            const newCards = stateCards.filter(card => card.id !== id);
            setCards(newCards);
            dispatch(cardRemove(id));
        });
    };

    return (
        <div>
            <h2>{title}</h2>
            <div className="card-list">
                {
                    stateCards.map(card => (
                        <div className="card-preview" key={card.id}>
                            <Link to={`/cards/${card.id}`}>
                                <div>
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