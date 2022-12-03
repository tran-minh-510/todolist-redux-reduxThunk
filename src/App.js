import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList/TodoList';
import { Provider } from 'react-redux'
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <TodoList />
        </Provider>
      </header>
    </div>
  );
}

export default App;
