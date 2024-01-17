import { v4 as uuidv4 } from 'uuid';
function Reducer(state, action) {

    function getRandomColor() {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }

    if (action.type === 'SET_TODO') {
      return {
        ...state,
        todo: action.value,
      };
    }
    if (action.type === 'ADD_TODO') {
      return {
        ...state,
        todo: '',
        todos: [...state.todos, { id: uuidv4(), text: action.todo }],
        color: '#fff'
      };
    }
    if (action.type === 'REMOVE_TODO') {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    }
    if(action.type === 'COLOR_CHANGE'){
        return {
            ...state,
            todos: state.todos.map((todo) => {
                if (todo.id === action.id) {
                  return { ...todo, color: getRandomColor() };
                }
                return todo;
              }),
        }
    }
}

export default Reducer