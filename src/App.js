import './App.css';
import HeaderContainer from "../src/container/header/HeaderContainer";
import PageRouter from "../src/components/router/PageRouter";
/**
 * This is root app
 * Here i have include Header and PageRouter componnet 
 */
const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="container">
        <PageRouter />
      </div>
    </div>
  );
}

export default App;
