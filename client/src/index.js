import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import "./style.scss";

import "popper.js";
import "bootstrap";
import jQuery from "jquery";
import Swal from "sweetalert2";

// Toast Configuration
const Toast = Swal.mixin({
  toast: true,
  timer: 3000,
  position: "top-end",
  timerProgressBar: false,
  showConfirmButton: false,
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});

window.$ = global.$ = jQuery;
window.Swal = global.Swal = Swal;
window.Toast = global.Toast = Toast;

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
