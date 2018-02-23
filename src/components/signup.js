// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getGames } from '../store/action/action';
// class Signup extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             email: '',
//             userName: '',
//             password: '',
//             Gender: '',
//             company: false
//         }


//         this.signup = this.signup.bind(this);
//         this._onChangeEventHandler = this._onChangeEventHandler.bind(this);
//         this._onChangeRadioHandler = this._onChangeRadioHandler.bind(this);


//     }
// componentWillMount(){
//     getGames()
//     // setInterval(()=>{

//     //     console.log(this.props.gamesList)
//     // },10000)
// }
//     signup() {
//         let user = {
//             email: this.state.email,
//             username: this.state.userName,
//             password: this.state.password,
//             company: this.state.company,
//             Gender: this.state.Gender
//         }

//         this.setState({
//             email: '',
//             userName: '',
//             password: '',
//         })
//         this.props.signupwithEmailPassword(user);
//         console.log(this.state)
//     }
//     _onChangeRadioHandler(event) {
//         this.setState({
//             [event.target.name]: event.target.value,
//             company: event.target.value
//         })
//         console.log(event.target.value)
//         // console.log(this.state.company)
//     }

//     _onChangeEventHandler(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//         // console.log(event.target.value)
//     }

//     render() {
//         return (
//             <div>
//                 <label>Email:<input type='text' name='email' value={this.state.email} onChange={this._onChangeEventHandler} /></label>
//                 <br />
//                 <label>User Name:<input type='text' name='userName' value={this.state.userName} onChange={this._onChangeEventHandler} /></label>
//                 <br />
//                 <label>Password:<input type='password' name='password' value={this.state.password} onChange={this._onChangeEventHandler} /></label>
//                 <br />
//                 <span>Gender: </span>
//                 <label> <input type='radio' name="Gender" value='male' onChange={this._onChangeRadioHandler} />Male</label>
//                 <label><input type='radio' name='Gender' value='female' onChange={this._onChangeRadioHandler} />Female</label>

//                 <br />

//                 <span>Register As:</span>


//                 <label><input type='radio' name='status' value={false} onChange={this._onChangeRadioHandler} />Student</label>
//                 <label><input type='radio' name='status' value={true} onChange={this._onChangeRadioHandler} />Company</label>
//                 <br />

//                 <button onClick={this.signup}>Signup</button>

//             </div>
//         )
//     }
// }

// function mapStateToProp(state) {
//     console.log(state)
//     return ({
//         gamesList: state.root.result
//     })
// }
// // function mapDispatchToProp(dispatch) {
// //     return ({
// //         getGames: () => {
// //             dispatch(getGames());
// //         }
// //     })
// // }

// export default connect(mapStateToProp, null)(Signup);

