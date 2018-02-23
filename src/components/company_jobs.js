// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { companyPostJobs } from '../store/action/action';
// import history from '../History'
// let uid = localStorage.getItem('uid')

// class CompanyJobs extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: '',
//             description: '',
//             package: '',
            
//         }
//     }
//     componentDidMount() {
//         this.props.companyPostJobs(this.props.job);
//     }

    
//     onChangeHandler(e) {
//         this.setState({[e.target.name]: e.target.value}
//         )
//     }


//     submit(e){
//         e.preventDefault()
//         let job = {
//             title: this.state.title,
//             description: this.state.description,
//             package: this.state.package,
//             uid: uid,
//             applied: [0]
//         }

//         this.setState({
//             title: '',
//             description: '',
//             package: ''
//         })
//         this.props.companyPostJobs(job)
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.submit.bind(this)}>
//                     <label htmlFor="">Title: <input value={this.state.title} onChange={this.onChangeHandler.bind(this)} name='title' type="text" /></label>
//                     <br />
//                     <label htmlFor="">Description: <input value={this.state.description} name='description' onChange={this.onChangeHandler.bind(this)} type="text" /></label>
//                     <br />
//                     <label htmlFor="">Package <input value={this.state.package} type="text" name='package' onChange={this.onChangeHandler.bind(this)} /></label>
//                 <button>Submit</button>
//                 </form>
//                 <div>
//                     <button onClick ={()=>{
//                         history.push('/posted_jobs')
//                     }} >View or edit your posted jobs</button>
//                 </div>
//                 or<div>
//                     <button onClick ={()=>{
//                         history.push('/AllStudents')
//                     }} >View All Students</button>
//                 </div>
//             </div>
//         )
//     }
// }

// function mapStateToProp(state) {
//     return ({
//         companyJobs: state.root.jobDescription
//     })
// }
// function mapDispatchToProp(dispatch) {

//     return ({
//         companyPostJobs: (postJobs) => { 
//             dispatch(companyPostJobs(postJobs))
//          }
//     })
// }

// export default connect(mapStateToProp,mapDispatchToProp)(CompanyJobs);