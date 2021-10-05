import { useParams, userHistory } from "react-router";
import useFetch from "../hooks/useFetch";

const CardDetails = () => {

    const { id } = useParams();
    const { data: card, isPending, error } = useFetch(`http://localhost:8000/cards/${id}`);

    return (
        <div className="card-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {card && (
                <div>
                    <h2>{card.name}</h2>
                    <p>This is {card.name} card page.</p>
                </div>
            )}
        </div>
    );

}

export default CardDetails;