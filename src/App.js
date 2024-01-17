import { useReducer } from "react";
import Reducer from "./reducers/TodoReducer";
function App() {
  const [state, dispatch] = useReducer(Reducer, {
    todos: [],
    todo: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo,
    });
  }

  const onChange = e => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value,
    });
  }

  const removeTodo = id => {
    dispatch({
      type: 'REMOVE_TODO',
      id: id,
    });
  };


  // eğer ki bir function yazacaksan o fonksiyonda bir dispatch oluştur. Gerekli şeyleri gönder. Sonrasında reducer fonksiyonunun içinde kontrol vs yap.


  const colorChange = id => {
    dispatch({
      type: 'COLOR_CHANGE',
      id: id
    })
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.todo}  onChange={onChange}/>
        <button type="submit" disabled={!state.todo}>Ekle</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index} style={{margin: '30px', color: todo.color}}>
            {todo !== '' && todo.text}{' '}
            <p onClick={() => {
              removeTodo(todo.id);}}>Remove</p>

              <p onClick={() => colorChange(todo.id)}>RENK DEĞİŞTİR</p>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
