import logo from './logo.svg';
import './App.css';
import ViewerComponent from './ViewerComponent';

function App() {
  return (
    <div className="App">
      <div className="PDF-viewer">
        <ViewerComponent document={"test.xlsx"} />
      </div>
    </div>
  );
}

export default App;
