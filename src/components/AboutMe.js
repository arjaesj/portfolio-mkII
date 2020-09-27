import React from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody
} from 'mdbreact';

class AboutMePage extends React.Component {

    render() {
        return (
            <div id='about-me'>
                <MDBView>
                    <MDBMask overlay='white-strong' />
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                            <div className='black-text text-center text-md-left col-md-6 mt-xl-5 mb-5'>
                                <h1 className='display-4 font-weight-bold'>About Me </h1>
                                <hr className='hr-dark' />
                                <h6 className='mb-4'>
                                    I was born and raised in the Philippines and migrated here in Perth, WA twelve years ago.
                                    I have a Bachelor's degree in Architecture but not a licensed Architect.
                                    I am currently a Full Stack Development Bootcamp student of University of Western Australia.
                                    I am a creative professional specialising in house designs but wanted to delve in Web design & development.
                                    I have developed skills and knowledge in HTML, CSS, Javascript, Jquery, AJAX and JSON with focus on UI/UX and responsive web design.
                                    I am eager to learn, focused and driven, a problem solver and an ally and cannot wait to join your team and share my skills with you to achieve a top quality product.
                                </h6>
                            </div>
                            <MDBCol md='6' xl='5' className='mb-4'>
                                <MDBCard className='dark-grey-text'>
                                    <MDBCardBody className='z-depth-2'>
                                        <img
                                            src={require("../images/prof-pic.jpg")}
                                            alt="Profile Pic"
                                        />
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>

                <MDBContainer>
                    <MDBRow className='py-5'>
                        <MDBCol md='12' className='text-center'>
                            <h2 className='display-4 font-weight-bold'>Skills </h2>
                            <hr className='hr-dark' />
                            <img style={{ width: 150 }} src={require("../images/logo-AC.png")} alt="Archicad Logo" />
                            <img style={{ width: 150 }} src={require("../images/logo-PS.png")} alt="Photoshop Logo" />
                            <img style={{ width: 150 }} src={require("../images/logo-nikon.png")} alt="Nikon Camera Logo" />
                            <img style={{ width: 130 }} src={require("../images/logo-XD.png")} alt="Adobe XD Logo" />
                            <img style={{ width: 100 }} src={require("../images/logo-html.png")} alt="HTML Logo" />
                            <img style={{ width: 160 }} src={require("../images/logo-CSS.png")} alt="CSS Logo" />
                            <img style={{ width: 150 }} src={require("../images/logo-JS.png")} alt="Javascript Logo" />
                            <img style={{ width: 150 }} src={require("../images/logo-jquery.png")} alt="JQuery Logo" />
                            <img style={{ width: 150, height: 150, padding: 10 }} src={require("../images/logo-mysql.png")} alt="MySQL Logo" />
                            <img style={{ width: 150 }} src={require("../images/logo-mongo.png")} alt="MongoDB Logo" />
                            <img style={{ width: 150 }} src={require("../images/logo-React.png")} alt="React.js Logo" />
                            <img style={{ width: 150 }} src={require("../images/logo-node.png")} alt="Node.js Logo" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default AboutMePage;