import React from "react";

import Nav from "./components/layouts/Nav";
import Body from "./components/layouts/Body";
import ErrorBody from "./components/layouts/Body";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Body />
    </React.Fragment>
  );
}

function Error() {
  return (
    <React.Fragment>
      <Nav />
      <ErrorBody />
    </React.Fragment>
  );
}

export { App, Error };
