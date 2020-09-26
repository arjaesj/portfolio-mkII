import React from "react";
import { MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBNavItem, MDBNavLink } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

const FooterPage = () => {
  return (
    <MDBFooter color="white" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
            <h5 className="title black-text">Connect with me on:</h5>
            <Router>
                <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light black-text" to="#!">
                <MDBIcon icon="https://www.facebook.com/arjae.sanjose/" href="https://www.facebook.com/arjae.sanjose/" target="_blank" className="mr-1" /></MDBNavLink>
                <MDBNavLink className="waves-effect waves-light black-text" to="#!">
                <MDBIcon icon="linkedin-in" href="https://www.facebook.com/arjae.sanjose/" target="_blank" className="mr-1" /></MDBNavLink>
                <MDBNavLink className="waves-effect waves-light black-text" to="#!">
                <MDBIcon icon="linkedin-in" href="https://www.facebook.com/arjae.sanjose/" target="_blank" className="mr-1" /></MDBNavLink>
            </MDBNavItem>
            {/* <ul>
              <li className="list-unstyled">
                <a className="black-text" href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a className="black-text" href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a className="black-text" href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a className="black-text" href="#!">Link 4</a>
              </li>
            </ul> */}
            </Router>
            
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;