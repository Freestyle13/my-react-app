import Backdrop from "./Components/Backdrop";
import Modal from "./Components/Modal";
import Todo from "./Components/Todo";


function App() {
  return <div>
    <h1>My Todos</h1>
    <Todo text='Learn React'/>
    <Todo text='Master React'/>
    <Todo text='Explore the full React course'/>
    <Modal/>
    <Backdrop/>
  </div>
  ;
}

export default App;
