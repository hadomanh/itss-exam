import './App.css';
import useStorage from './hooks/storage';

function App() {

  const [data, index, next, previous] = useStorage();

  function showStudentList() {
    let result = '[ '
    data.forEach((item, index) => {
      result += item.name
      if (index + 1 < data.length) {
        result += ', '
      }
    })
    result += ' ]'
    return result
  }

  return (
    <div className="App">
      <div>
        <b>Student list: </b> {showStudentList()}
      </div>

      <div>
        <b>Position: </b> {index + 1}
      </div>

      <div>
        <b>Name: </b> {data[index].name}
      </div>

      <div>
          <button onClick={() => next()}>Next</button>
          <button onClick={() => previous()}>Previous</button>
      </div>

    </div>
  );
}

export default App;
