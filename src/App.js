import { persons } from "./assets/persons";
import './App.css';
import Card from "./components/Card";


function App() {
  return (
    <div className="App">
      {persons.map((person) => {
       return <Card name={person.name} img={person.image} status={person.status} />
      })

      }

    </div>
  );
}

export default App;
