import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
// import SigninSignup from './components/signin_signup'
// import CompanyJobs from './components/company_jobs'
// import AllStudents from './components/all_students'
// import About from './components/about';
// import PostedJobs from './components/job_posted';
// import Signup from './components/signup';

// import Chat from './components/chat';

import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    {/* <Route exact path="/" component={Signup} /> */}
                     <Route exact path="/" component={Home} />
                    {/*<Route exact path="/jobs" component={CompanyJobs} />
                     <Route exact path="/posted_jobs" component={PostedJobs} />
                    <Route exact path="/AllStudents" component={AllStudents} /> */}
                    {/*
                    <Route exact path="/chat" component={Chat} /> */}
                </div>
            </Router>
        )
    }
}

export default Routers;