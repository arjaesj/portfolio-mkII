import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const WEbDesignPage = () => {
    return (
        <section className="text-center my-5" id="design-web">
            <h2 className="h1-responsive font-weight-bold my-5">
                &lt;Design . Web . Projects/&gt;
            </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
                Here are a list of some of my web development projects,
                mostly full stack but I give utmost importance to the
                UI/UX aspect to keep my app intersting to my prospective users.
                Click on the each project image to go tot he deployed app.
            </p>

            <MDBRow className="text-center">
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="https://github.com/arjaesj/timeless-recipes/blob/master/public/images/user-dashboard.png?raw=true"
                            alt="Timeless Recipes App"
                            className="img-fluid"
                            style={{ height: 250, width: 460 }}
                        />
                        <a href="https://fast-reaches-40282.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <h4 className="font-weight-bold my-3">Timeless Recipes</h4>
                        <p className="grey-text">
                            An online recipe book where you can create, edit or delete our own recipes,
                            or view other users' recipes developed in collaboration with
                            <a href="https://github.com/robynheslop" target="_blank" rel="noopener noreferrer">Robyn Heslop</a>
                            & <a href="https://github.com/nitinmuk" target="_blank" rel="noopener noreferrer">Nitin Mukesh</a>.
                        </p>
                        <MDBBtn color="indigo" size="sm" href="https://github.com/arjaesj/timeless-recipes" target="_blank" rel="noopener noreferrer">
                            <MDBIcon far icon="clone" className="left" /> Github Repo
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>

                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="https://github.com/arjaesj/mara-validator/blob/master/assets/images/readme/enter-code.png?raw=true"
                            alt="Mara Validator App"
                            className="img-fluid"
                            style={{ height: 250, width: 460 }}
                        />
                        <a href="https://arjaesj.github.io/mara-validator/" target="_blank" rel="noopener noreferrer">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <h4 className="font-weight-bold my-3">Mara Validator</h4>
                        <p className="grey-text">
                            A HTML, CSS & Javascript source code validator created in
                            collaboration with <a href="https://github.com/robynheslop"
                                target="_blank" rel="noopener noreferrer">Robyn Heslop</a> & <a href="https://github.com/nitinmuk"
                                    target="_blank" rel="noopener noreferrer">Nitin Mukesh</a>.
                        </p>
                        <MDBBtn color="indigo" size="sm" href="https://github.com/arjaesj/mara-validator" target="_blank" rel="noopener noreferrer">
                            <MDBIcon far icon="clone" className="left" /> Github Repo
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>

                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="https://github.com/arjaesj/Javascript-Quiz-Game/blob/master/Assets/arjae_js_quiz_preview.gif?raw=true"
                            alt="App Demo GIF"
                            className="img-fluid"
                            style={{ height: 250, width: 460 }}
                        />
                        <a href="https://arjaesj.github.io/Javascript-Quiz-Game/">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <h4 className="font-weight-bold my-3">Javascript Quiz Game</h4>
                        <p className="grey-text">
                            Test your knowledge with this Javascript Quiz Game. You
                            will be asked 5 questions about some fundamentals of Javascript.
                        </p>
                        <MDBBtn color="indigo" size="sm" href="https://github.com/arjaesj/Javascript-Quiz-Game" target="_blank" rel="noopener noreferrer">
                            <MDBIcon far icon="clone" className="left" /> Github Repo
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>

            <MDBRow className="text-center">
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="https://github.com/arjaesj/Weather-Dashboard/blob/master/Assets/images/read-me/demo-read-me.gif?raw=true"
                            alt="App Demo GIF"
                            className="img-fluid"
                            style={{ height: 250, width: 460 }}
                        />
                        <a href="https://arjaesj.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <h4 className="font-weight-bold my-3">Weather Dashboard</h4>
                        <p className="grey-text">
                            A website showing that allows you to search for a City's
                            current weather & 5 day forecast.
                        </p>
                        <MDBBtn color="indigo" size="sm" href="https://github.com/arjaesj/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
                            <MDBIcon far icon="clone" className="left" /> Github Repo
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>

                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="https://github.com/arjaesj/financial-transactions-auditor/blob/master/public/images/demo.gif?raw=true"
                            alt="App Demo GIF"
                            className="img-fluid"
                            style={{ height: 250, width: 460 }}
                        />
                        <a href="https://wers-mah-money.herokuapp.com" target="_blank" rel="noopener noreferrer">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <h4 className="font-weight-bold my-3">Financial Transactions Auditor</h4>
                        <p className="grey-text">
                            An online/offline financial transactions auditing app created using Node,
                            Express and MongoDB that lets users track their finances ie, gains and losses,
                            so they can budget their money properly.
                        </p>
                        <MDBBtn color="indigo" size="sm" href="https://github.com/arjaesj/mara-validator" target="_blank" rel="noopener noreferrer">
                            <MDBIcon far icon="clone" className="left" /> Github Repo
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>

                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="https://github.com/arjaesj/workout-tracker/blob/master/public/images/Fitness-Tracker.gif?raw=true"
                            alt="App Demo GIF"
                            className="img-fluid"
                            style={{ height: 250, width: 460 }}
                        />
                        <a href="https://lets-work-it-out.herokuapp.com/">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <h4 className="font-weight-bold my-3">Javascript Quiz Game</h4>
                        <p className="grey-text">
                            A workout tracking app created using Node,
                            Express and MongoDB that lets users track the
                            time, exercises perfomed, total weight lifted,
                            total sets & reps performed & distance covered
                            from their daily workout.
                        </p>
                        <MDBBtn color="indigo" size="sm" href="https://github.com/arjaesj/workout-tracker" target="_blank" rel="noopener noreferrer">
                            <MDBIcon far icon="clone" className="left" /> Github Repo
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default WEbDesignPage;