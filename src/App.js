import React, { Component } from "react";
import { MDBContainer} from "mdbreact";
import CarouselPage from "./components/Carousel"
import NavbarPage from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        <CarouselPage />
      </div>
    );
  }
}

export default App;