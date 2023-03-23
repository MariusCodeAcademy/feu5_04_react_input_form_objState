import './styles/reset.css';
import './styles/App.css';
import InputBlock from './components/InputBlock';
import PassBlock from './components/PassBlock';

function App() {
  return (
    <div className='container'>
      <h1>Inputs</h1>

      {/* <InputBlock /> */}
      <PassBlock />
    </div>
  );
}
export default App;
