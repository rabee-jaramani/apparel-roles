import Header from './header/Header';
import Goals from './goals/Goals';
import './style.sass';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="heading-1">Suggestive Goals for Roles</h1>
      <br />
      <p className="heading-2">
        Search for suggestive goals for your role here.
        <br />
        Type in the search bar your role name and an excel sheet with your role
        name will appear.
        <br />
        Use the same as a suggestion to begin goal setting for the financial
        year.
      </p>
      <Goals />
    </div>
  );
}

export default App;
