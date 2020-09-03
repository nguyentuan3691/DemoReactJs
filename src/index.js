import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
import store from "./store/store"

ReactDOM.render(
  <Provider store={store}>
=======

ReactDOM.render(
  <Provider>
>>>>>>> 799f97ea373c9d3a27b11121d61d5906d0a3d949
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

//How to connect redux from reactjs component
//with class component use connect() 
//with functional component use useSelector() and useDispatch()
