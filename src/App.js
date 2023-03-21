import Header from './header/Header';
import Promotions from './promotions/Promotions';
import './style.sass';

function App() {
  return (
    <div className="App">
      <Header />
      <h2 className="heading-1">
        Search for sugestive golas for the financial year, type in the search
        box
      </h2>
      <p className="heading-2">
        Search for suggestive goals for your role here.
        <br />
        Type in the search bar your role name and an excel sheet with your role
        name will appear.
        <br />
        Use the same as a suggestion to begin goal setting for the financial
        year.
      </p>
      <Promotions />
    </div>
  );
}

export default App;
