import './App.scss';
import teams from "./data/team";
import OuterCard from "./components/OuterCard/OuterCard";

function App() {
  const nameJSX = teams.map((team, index) =>(
    <OuterCard team={team}/>
  ))

    return (
        <div className="App">
            <div className="App__heading">
                Ticket Tracker
            </div>

            <div>
                {nameJSX}
            </div>
        </div>
    );
}

export default App;
