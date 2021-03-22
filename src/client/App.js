import Content from '../client/components/Content/Content';
import Side from '../client/components/Side/Side';
import './App.css';

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <Side />
      <Content />
    </div>
  );
}

export default App;
