import './App.css';
import './styles/style.css';
import HomePageComponent from './components/HomePageComponent.js';
import SayHelloComponent from './components/SayHelloComponent.js';
import AddingComponent from './components/AddingComponent.js';
import AskingQuestionsComponent from './components/AskingQuestionsComponent.js';
import GreaterOrLessComponent from './components/GreaterOrLessComponent.js';
import MadlibComponent from './components/MadlibComponent.js';
import OddOrEvenComponent from './components/OddOrEvenComponent.js';
import AlphaNumericComponent from './components/AlphaNumericComponent.js';
import NumbersOnlyComponent from './components/NumbersOnlyComponent.js';
import Magic8BallComponent from './components/Magic8BallComponent.js';
import RestaurantPickerComponent from './components/RestaurantPickerComponent.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=B612&display=swap');
      </style>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageComponent/>}/>
          <Route path='SayHello' element={<SayHelloComponent/>}/>
          <Route path='Adding' element={<AddingComponent/>}/>
          <Route path='AskingQuestions' element={<AskingQuestionsComponent/>}/>
          <Route path='GreaterOrLess' element={<GreaterOrLessComponent/>}/>
          <Route path='Madlib' element={<MadlibComponent/>}/>
          <Route path='OddOrEven' element={<OddOrEvenComponent/>}/>
          <Route path='ReverseIt(alphaNumeric)' element={<AlphaNumericComponent/>}/>
          <Route path='ReverseIt(numbersOnly)' element={<NumbersOnlyComponent/>}/>
          <Route path='Magic8Ball' element={<Magic8BallComponent/>}/>
          <Route path='RestaurantPicker' element={<RestaurantPickerComponent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
