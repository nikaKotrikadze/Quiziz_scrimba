import StartPage from './StartPage'
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import TheQuiz from './TheQuiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element ={<StartPage/>}/>
      <Route path='/theQuiz' element ={<TheQuiz/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
