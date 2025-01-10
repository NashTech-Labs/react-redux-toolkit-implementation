import logo from './logo.svg';
import './App.css';
import ItemsComponent from './Components/ItemsComponent';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { itemAction } from './store';

function App() {
  const dispatch = useDispatch();
  const inputRef = useRef();  

  const addItem = () => {
    if(inputRef.current.value === '') return;
      dispatch(itemAction.addItem({ id: crypto.randomUUID(), name: inputRef.current.value }));  
      inputRef.current.value = '';
  }


  return (
    <div className="App">
      <div className='container'>
        <div>
          <label>ADD ITEMS</label>
          <input ref={inputRef} type="text" />
        </div>
        <button onClick={addItem}>Add </button>
      </div>
     
     <ItemsComponent />
    </div>
  );
}

export default App;
