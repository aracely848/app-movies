import React, {Component} from 'react';
import Banner from '../banner/Banner';
import Menu from '../movies/Movies';
import { MOVIES } from '../../data/movies';

class Home extends Component {
    constructor(props) {
        super(props);    
        this.state = {
          movies: MOVIES        
        };
    }
    render() {        
        return (
            <React.Fragment>
                <Banner/>
                <br/>
                <div className="container">
                <Menu movies={this.state.movies} /> 
                </div> 
            </React.Fragment> 
        )
    }
}


export default Home;