import './App.scss';
import teams from "./data/team";
import OuterCard from "./components/OuterCard/OuterCard";

function App() {
const nameJSX = teams.map((team) =>(
    <OuterCard team={team}/>
))

    return (
        <div className="App">
            <div className="App__heading">
                <h1>Ticket Tracker</h1>
            </div>
            <div className="App__card">
                {nameJSX}
            </div>
        </div>
    );
}

export default App;
