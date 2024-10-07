import logo from './logo.svg';
import './App.css';

function Print(params){
  return (
      <div>
        <h1>{params.Title}</h1>
        <p>{params.Text}</p>
      </div>
  );
}

function App() {
  return (
    <div>
      <Print Title="Hello World!" Text="This is first component in react for me :)"/>
    </div>
  );
}

export default App;
