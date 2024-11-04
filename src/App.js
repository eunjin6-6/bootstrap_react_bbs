import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BoardList from './BoardList';
import Write from './Write';

function App() {
  return (
    <div className="container">
      <h1 className="my-3">React Board</h1>
      <BoardList />
      <hr />
      <Write />
    </div>
    
  );
}

export default App;
