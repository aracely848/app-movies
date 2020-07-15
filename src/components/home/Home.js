import React, {Component} from 'react';
import Banner from '../banner/Banner';
import Menu from '../menu/Menu';
import { MOVIES } from '../movies';

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
                <Menu 
                    movies={this.state.movies}
                    new={this.state.movies.filter((movie) => movie.new, 10)}
                    popular={this.state.movies.filter((movie) => movie.popular, 10)}
                    trend={this.state.movies.filter((movie) => movie.trend, 10)}
                    favorite={this.state.movies.filter((movie) => movie.favorite, 10)}
                    recommendation={this.state.movies.filter((movie) => movie.recommendation,10)}
                /> 
                </div> 
            </React.Fragment> 
        )
    }
}


export default Home;