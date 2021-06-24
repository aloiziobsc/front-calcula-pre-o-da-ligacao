import Home from './pages/home';
import TelvizContext from './provider/provider';

function App() {
  return (
    <TelvizContext>
      <div>
        <Home/>
      </div>
    </TelvizContext>
      
  );
}

export default App;
