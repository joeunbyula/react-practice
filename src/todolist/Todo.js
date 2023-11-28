import {useState} from "react";

function Todo() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event)=> setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === "") {
            return;
        }
        setTodo("");
        /**
         * Array삽입
         * setTodos((현재 array) => [입력 값, ...현재 array])
         */
        setTodos((currentArray) => [toDo, ...currentArray]); //array삽입
        console.log("toDo==>",toDo);
        console.log("toDos==>",toDos);
    }
    return (
      <div>
          <h1>My TO-DO List ({toDos.length})</h1>
          <form onSubmit={onSubmit}>
              <input
                  value={toDo}
                  type="text"
                  onChange={onChange}
                  placeholder="Write your to do...."/>
              <button>Add To Do</button>
          </form>
          <hr/>
          <ul>
              {toDos.map((item,index) => (
                  <li key={index}>{item}</li>
              ))}
          </ul>
      </div>
    );
}

export default Todo;