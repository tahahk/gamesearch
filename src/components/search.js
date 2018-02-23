import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getGames } from '../store/action/action';
// import { Link } from 'react-router-dom'
import '../App.css'
// import history from '../History'


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: '',
            endDate: '',
            request: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    // componentWillMount() {
    //     this.props.getGames();
    // }
    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value,
            // request: this.state.startDate+'|'+this.state.endDate

        })
    }
    search(ev) {
        let startDate = this.state.startDate
        let endDate = this.state.endDate

        let sd = new Date(startDate).getTime()
        let ed = new Date(endDate).getTime()
        if (sd >= ed) {
            alert('please note end date should be greater than start date try a later date')
            return false
        }
        else {
            console.log(sd, ed)
            this.props.getGames(startDate, endDate);
        }
    }

    render() {


        return (
            <div className='search'>
                <input type="date" name="startDate" id="start" value={this.state.startDate} onChange={this.handleChange} />
                <input value={this.state.endDate} type="date" name="endDate" id="end" onChange={this.handleChange} />
               <br/>
               <br/>
                <button onClick={this.search.bind(this)} > Search</button>
            </div>
        )
    }
}

// function mapStateToProp(state) {
//     return ({
//         gamesResult: state.root.gamesResult
//     })
// }
function mapDispatchToProp(dispatch) {

    return ({
        getGames: (start, end) => { dispatch(getGames(start, end)) }
    })
}

// export default Search;
export default connect(null, mapDispatchToProp)(Search);