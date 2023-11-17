import {useState, useEffect} from "react";


function TodoList() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);

  // 키보드 이벤트 받기
  const onChange = (event) => {
    setTodo(event.target.value);
  }

  // submit 이벤트 막기
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    };

    // 배열 이전값 가져오기
    setTodos((currentArray) => [toDo, ...currentArray]);

    // toDo 써준 것 초기화
    setTodo("");
  };


  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
