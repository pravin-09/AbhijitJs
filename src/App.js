import './App.css';
// import Demo from './Demo';
import Car from './Function2';
import Fun from './Function';
import Fun3 from './Function3';
import Incdec from './IncDec';
import ClassIncDec from './IncDecFun';


function App() {
  return (

    <div className="App">
    {<Fun/>}
    <Incdec/>
    <ClassIncDec/>
    {<Fun3/>}
    </div>
  );
}

export default App;
