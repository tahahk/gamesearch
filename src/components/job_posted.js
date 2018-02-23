// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getPostedJobs } from '../store/action/action';
// import * as firebase from 'firebase'
// // import history from '../History'
// let uid = localStorage.getItem('uid')
// let myObj
// class PostedJobs extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             job: []
//         }

//     }

//     componentWillMount() {
//         firebase.database().ref(`/jobs/${uid}`).on('child_added', (ss) => {
//             let postedJobsObj = ss.val()
//             postedJobsObj.id = ss.key
//             this.props.getPostedJobs(postedJobsObj);
//             // this.listOfJobs(this.props.companyPostedJobs)
//             myObj = this.props.companyPostedJobs
//             this.state.job.push(myObj);
//             this.setState({
//                 job: this.state.job
//             })
//         })
//     }

//     render() {
//         let spanStyle = {
//             fontSize: '16px',
//             fontWeight: 'none'
//         }

//         return (
//             <div>
//                 {(this.state.job) ?
//                     this.state.job.map((item, index) => {
//                         return (
//                             <div key={index} id={item.id}>
//                                 <h3>Job Title: <span style={spanStyle}> {item.title}</span></h3>
//                                 <h3>Description : <span style={spanStyle}>{item.description}</span></h3>
//                                 <h3>Package: <span style={spanStyle}>{item.package}</span></h3>
//                                 <h3>Applied By: <span style={spanStyle}>{item.applied}</span> </h3>
//                             </div>
//                         )


//                     }) : 'Loading....'
//                 }




//             </div>
//         )
//     }
// }

// function mapStateToProp(state) {
//     return ({
//         companyPostedJobs: state.root.jobsPosted
//     })
// }
// function mapDispatchToProp(dispatch) {

//     return ({
//         getPostedJobs: (postedJobs) => {
//             dispatch(getPostedJobs(postedJobs))
//         }
//     })
// }


// export default connect(mapStateToProp, mapDispatchToProp)(PostedJobs);