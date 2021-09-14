import './App.scss';
import team from "./data/team";
import OuterCard from "./components/OuterCard/OuterCard";

function App() {
    return (
        <div className="App">
            <div className="App__heading">
                Ticket Tracker
            </div>

            <div>
                <OuterCard name={team[1].name}/>
                <OuterCard role={team[1].role}/>
            </div>
        </div>
    );
}

export default App;
