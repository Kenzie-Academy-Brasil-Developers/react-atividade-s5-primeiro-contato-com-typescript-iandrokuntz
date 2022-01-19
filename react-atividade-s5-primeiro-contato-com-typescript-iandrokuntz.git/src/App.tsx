import {Input} from './components/Input';
import {Card} from './components/Card';
import {useState} from "react"
import './App.css';


interface User {
  name: string;
  age: string;
  hobby: string;
}

function App() {

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [personList, setPersonList] = useState<User[]>([] as User[]);

  const AddPerson = () => {

    const person = { name, age, hobby };

    setPersonList([...personList, person]);
  };

  return (
    <div className="App">

      <header className="App-header">
        <div className="inputs">
        <Input label="Name" placeholder="Name" onChange={e => setName(e.target.value)}/>
        <Input label="Age"  type="number" placeholder="Age" onChange={e => setAge(e.target.value)}/>
        <Input label="Hobby" placeholder="Hobby" onChange={e => setHobby(e.target.value)}/>
        </div>

        <button onClick={AddPerson}>Add Person</button>

        <ul>
        {personList &&
          personList.map((person) => (
            <li>
              <Card name={person.name} age={person.age} hobby={person.hobby} />

            </li>
          ))}
        </ul>

      </header>

    </div>
  );
}

export default App;
