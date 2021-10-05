import CardList from "./CardList";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { cardsAdd } from "../store/actions/actions";

const Home = () => {

    const { data: cards, isPending, error } = useFetch("http://localhost:8000/cards");
    const dispatch = useDispatch();

    if (cards) {
        dispatch(cardsAdd(cards));
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {cards && <CardList title="All Cards!" />}
            {/* {cards && <CardList cards={cards} title="All Cards!" />} */}
        </div>
    );
}

export default Home;