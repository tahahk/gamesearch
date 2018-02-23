import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGames } from '../store/action/action';
import { Link } from 'react-router-dom'
import Search from '../components/search'
import '../App.css'
// import history from '../History'


class Home extends Component {

    // componentWillMount() {
    //     this.props.getGames();
    // }
    render() {

        return (
            <div>
                <Search />
                {(this.props.gamesResult) ?
                    this.props.gamesResult.map((item, ind) => {
                        console.log(item)
                        return (<div key={ind} className='card text-center center' >
                            <img src={item.image.original_url} alt={item.name} className='titleImage' />
                            <div className="card-header">
                                <h4> Game Name: <span className='description' >
                                    {item.name}
                                </span>
                                </h4>
                            </div>
                            <div className="card-body">
                                <h4> Release Date: <span className='description'>

                                    <p className="card-text">
                                        {item.original_release_date}
                                    </p>
                                    <h4> Game Link:

                                    <Link to={item.site_detail_url} target="_blank"> <span className='description'>
                                        {item.site_detail_url}
                                    </span>
                                    </Link>
                                    </h4>

                                </span>
                                </h4>
                            </div>
                        </div>
                        )
                    }) : console.log('loading...')
                }

            </div>
        )
    }
}

function mapStateToProp(state) {
    console.log(state)
    return ({
        gamesResult: state.root.gamesResult
    })
}
function mapDispatchToProp(dispatch) {

    return ({
        getGames: () => { dispatch(getGames()) }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Home);