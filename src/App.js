import './App.css';
import ExercisePlanner from './components/ExercisePlanner/ExercisePlanner';
import Faq from './components/FAQ/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <ExercisePlanner></ExercisePlanner>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
