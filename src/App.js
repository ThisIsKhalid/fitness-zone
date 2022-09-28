import './App.css';
import Details from './components/Details/Details';
import Exercises from './components/Exercises/Exercises';

function App() {
  return (
    <div className="grid grid-cols-3">
      <Exercises></Exercises>
      <Details></Details>
    </div>
  );
}

export default App;
