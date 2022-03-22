import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComment></LoadComment>
     
    </div>
  );
}
// useEffect( ()=>{},[])

function LoadComment(){
  const [comments, setComments] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(data => setComments(data))

  return(
    <div>
      <h3> Comments : {comments.length}</h3>
      {
        comments.map(comment => <li name={comment.name}></li>)
      }
    </div>
  )
}



function Counter(){
  const [count, setCount] = useState(0)
  const handleIncreses = () =>setCount(count + 1);
  const handleDecreses = () => setCount(count - 1);

  return(
    <div>
      <h1>Counter : {count} </h1>
      <button onClick={handleIncreses}>Increase</button>
      <button onClick={handleDecreses}>Decrease</button>
    </div>
  )
}

export default App;
