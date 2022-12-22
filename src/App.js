import logo from './logo.svg';
import './App.css';
import InitialValue from './components/InitialValue';
import Counter from './components/Counter';
import {useSelector} from "react-redux"


function App() {
  const count =useSelector(state=>state.counter)

  return (
    <div className="App">
      {count}
      <InitialValue />
      <Counter />
    </div>
  );
}

export default App;
