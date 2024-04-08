import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:movieId" component={Details} />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
