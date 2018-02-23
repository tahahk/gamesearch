// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { students } from '../store/action/action';
// // import history from '../History'
// import * as firebase from 'firebase';

// class AllStudents extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             studentsList: []
//         }
//     }


//     componentWillMount() {
//         firebase.database().ref('/').child('users/').on('child_added', (ss) => {
//             let students = ss.val();
//             if (students.company === 'false') {
//                 this.props.students(students)
//             }
//             let studentObj = this.props.studentsList;
//             if (studentObj) {
//                 this.state.studentsList.push(studentObj)
//                 this.setState({
//                     studentsList: this.state.studentsList
//                 })
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.studentsList.map((title, ind) => {
//                     return <div key={ind} id={title.uid}>
//                         {title.username}
//                     </div>
//                 })}
//             </div>
//         )
//     }
// }

// function mapStateToProp(state) {
//     return ({
//         studentsList: state.root.studentsList
//     })
// }
// function mapDispatchToProp(dispatch) {

//     return ({
//         students: (details) => {
//             dispatch(students(details))
//         }
//     })
// }

// // export default AllStudents;
// export default connect(mapStateToProp, mapDispatchToProp)(AllStudents);