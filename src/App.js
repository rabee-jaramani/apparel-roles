import Header from './header/Header';
import Promotions from './promotions/Promotions';
import './style.sass';

function App() {
  return (
    <div className="App">
      <Header />
      <h2 className="heading-1">Sugestive Golas For The Financial Year</h2>
      <p className="heading-2">
        Search for sugestive golas for the financial year, type in the search
        box
      </p>
      <Promotions />
    </div>
  );
}

export default App;
