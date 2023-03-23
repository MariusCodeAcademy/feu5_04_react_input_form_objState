import './styles/reset.css';
import './styles/App.css';
import InputBlock from './components/InputBlock';
import PassBlock from './components/PassBlock';
import LoginForm from './components/Login/LoginForm';
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <div className='container'>
      <h1>Inputs</h1>
      <TodoList />
      {/* <LoginForm /> */}
      {/* <InputBlock /> */}
      {/* <PassBlock /> */}
    </div>
  );
}
export default App;
