import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
    return (
        <section className="contact-section my-5" id="contact-me">
            <MDBCard>
                <MDBRow>
                    <MDBCol lg="8">
                        <MDBCardBody className="form">
                            <h3 className="mt-4">
                                <MDBIcon icon="envelope" className="pr-2" />
                Contact Me:
              </h3>
                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="form-contact-name"
                                            label="Your name"
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="form-contact-email"
                                            label="Your email"
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="form-contact-phone"
                                            label="Your phone"
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="form-contact-company"
                                            label="Your company"
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="textarea"
                                            id="form-contact-message"
                                            label="Your message"
                                        />
                                        <MDBBtn rounded color="black">
                                            <MDBIcon icon="paper-plane" />
                                        </MDBBtn>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCol>
                    <MDBCol lg="4">
                        <MDBCardBody className="contact text-center h-100 black-text">
                            <h3 className="my-4 pb-2">Contact information</h3>
                            <ul className="text-lg-left list-unstyled ml-4">
                                <li>
                                    <p><MDBIcon icon="map-marker-alt" className="pr-2" />Kewdale, Western AUstralia, 6107
                                    </p>
                                </li>
                                <li>
                                    <p><MDBIcon icon="phone" className="pr-2" />+63402 723 859
                                    </p>
                                </li>
                                <li>
                                    <p><MDBIcon icon="envelope" className="pr-2" action="mailto:arjae.sj@gmail.com" method="post" />arjae.sj@gmail.com
                                    </p>
                                </li>
                            </ul>
                            <button type="button" className="btn btn-lg">
                                <i className="fas fa-cloud-download-alt fa-lg"></i>
                                <a href="https://drive.google.com/file/d/1fK4Fn3iaQ_gMdzC5UupJmN6swG65SwfH/view?usp=sharing" target="_blank" rel="noopener noreferrer" id="download" style={{ color: "black" }}>  Download my Resume</a>
                            </button>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </section>
    );
}

export default ContactPage;