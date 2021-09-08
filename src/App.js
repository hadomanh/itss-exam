import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import list from './data.json'

function App() {

  const [index, setIndex] = useState(0)
  const [students, setStudents] = useState(list)

  function showStudentList() {
    let result = '[ '
    list.forEach((item, index) => {
      result += item.name
      if (index + 1 < list.length) {
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
        <b>Name: </b> {students[index].name}
      </div>

      <div>
        {
          index + 1 < students.length && <button onClick={() => setIndex(index + 1)}>Next</button>
        }
        {
          index > 0 && <button onClick={() => setIndex(index - 1)}>Previous</button>
        }
      </div>

    </div>
  );
}

export default App;
