import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/AuthPage/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/home" render={() => <Home />} />
      </Switch>
    </div>
  );
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     prop: state.prop
//   }
// }


// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch1: () => {
//       dispatch(actionCreator)
//     }
//   }
// }

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
