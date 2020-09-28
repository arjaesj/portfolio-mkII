// import React from "react";
// import { MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBNavItem, MDBNavLink } from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';

// const FooterPage = () => {
//   return (
//     <MDBFooter color="black" className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <h5 className="title">Connect with me on:</h5>
//           <Router>
//             <MDBNavItem>
//               <MDBNavLink className="waves-effect waves-light" to="#!">
//                 <MDBIcon icon="facebook" href="https://www.facebook.com/arjae.sanjose/" target="_blank" className="mr-1" /></MDBNavLink>
//               <MDBNavLink className="waves-effect waves-light black-text" to="#!">
//                 <MDBIcon icon="linkedin-in" href="https://www.facebook.com/arjae.sanjose/" target="_blank" className="mr-1" /></MDBNavLink>
//               <MDBNavLink className="waves-effect waves-light black-text" to="#!">
//                 <MDBIcon icon="linkedin-in" href="https://www.facebook.com/arjae.sanjose/" target="_blank" className="mr-1" /></MDBNavLink>
//             </MDBNavItem>
//             {/* <ul>
//               <li className="list-unstyled">
//                 <a className="black-text" href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a className="black-text" href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a className="black-text" href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a className="black-text" href="#!">Link 4</a>
//               </li>
//             </ul> */}
//           </Router>

//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; {new Date().getFullYear()} Copyright © <a href="https://github.com/arjaesj">Rommel Jay San Jose</a> <br />
//           Meade with <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//         </MDBContainer>
//       </div>
//     </MDBFooter>
//   );
// }

// export default FooterPage;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic" href="https://www.facebook.com/arjae.sanjose/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic" href="https://www.linkedin.com/in/rommel-jay-san-jose-7b47829" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gh-ic" href="https://github.com/arjaesj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:© <a href="https://github.com/arjaesj">Rommel Jay San Jose</a> <br />
          Made with <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;