import React, { Component } from "react";
import NavbarPage from "./components/Navbar"
import CarouselPage from "./components/Carousel"
import AboutMePage from "./components/AboutMe"
import FooterPage from "./components/Footer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <CarouselPage />
        <AboutMePage />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default App;