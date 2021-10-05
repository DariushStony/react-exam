import CardList from "./CardList";
import useFetch from "../hooks/useFetch"

const Home = () => {

    const { data: cards, isPending, error } = useFetch("http://localhost:8000/cards");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {cards && <CardList cards={cards} title="All Cards!" />}
        </div>
    );
}

export default Home;