import React,{useRef} from 'react'
import './App.css';
import Modal from './Modal'



function App() {

  const modalRef = useRef()
  return (
    <div className="App">
      <button onClick={()=>modalRef.current.open()}>Open Modal</button>
      <Modal ref={modalRef}>Hello</Modal>
    </div>
  );
}

export default App;
