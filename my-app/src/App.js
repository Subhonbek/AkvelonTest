import logo from './logo.svg';
import './App.css';
import SliderImage from "./Components/SliderImage";

function App(props) {
  return (
    <div >
      <SliderImage slide={ props.slide }/>
    </div>
  );
}

export default App;
