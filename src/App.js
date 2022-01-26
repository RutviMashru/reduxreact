// import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index";

const App=() => {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();

  return (
<>
<div className="container">
  <h1>Increament/Decreament counter</h1>
  <h4>using React and Redux</h4>
  <div className="quantity">
    <button className ="quantity__minus" title='Decreament' onClick={() => dispatch(decNumber())}><span>-</span></button>
    <input name="quantity" type="text" className="quantity__input" value={myState}/>
    <button className="quantity__plus" title='Increament' onClick={() => dispatch(incNumber())}><span>+</span></button>
  </div>
</div>
</>
        
  );
}

export default App;
