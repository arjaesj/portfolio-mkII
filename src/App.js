import React, { Component } from "react";
import CarouselPage from "./components/Carousel"
import NavbarPage from "./components/Navbar"
import FooterPage from "./components/Footer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <CarouselPage />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default App;