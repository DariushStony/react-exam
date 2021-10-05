import CardList from "./CardList";
import useFetch from "../hooks/useFetch"
import { useSelector, useDispatch } from "react-redux";
import { cardRemove, cardsAdd } from "../store/actions/actions";

const Home = () => {

    const { data: cards, isPending, error } = useFetch("http://localhost:8000/cards");
    // const state = useSelector((state) => state);
    const dispatch = useDispatch();

    if (!error && !isPending && cards) {
        dispatch(cardsAdd(cards));
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {cards && <CardList cards={cards} title="All Cards!" />}
        </div>
    );
}

export default Home;