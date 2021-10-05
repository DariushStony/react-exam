import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import CardDetails from "./components/CardDetails";
import Notfound from "./components/Notfound";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about" >
                            <AboutUs />
                        </Route>
                        <Route path="/cards/:id">
                            <CardDetails />
                        </Route>
                        <Route path="*">
                            <Notfound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>

    );
}

export default App;
