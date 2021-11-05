import './App.css';
import Pie from './components/Pie';
import Bar from './components/Bar';
import Line from './components/Line';

function App() {
  return (
    <div style={{ height: 500 }} className="App">
      <Pie />
      <Bar />
      <Line />
    </div>
  );
}

export default App;
