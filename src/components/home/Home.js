import React from 'react';
import { Card, CardImg } from 'reactstrap';
import Banner from '../banner/Banner';
import Menu from '../menu/Menu';
import { MOVIES } from '../movies';

const Home = (props) => {
    const movies = MOVIES;
    const menu = movies.map(movie => {
        return (
            <div className="col-6 col-md-3 " key={movie.id}>
                <Card key={movie.id} >
                    <CardImg width="100%" src={movie.image} alt={movie.title} />
                </Card>  
            </div>            
        )
    });
    return (
        <div>
            <Banner/>
            <br/>
            <div className="container">
            <Menu 
            movies={movies}
            new={movies.filter((movie) => movie.new)[0]}
            popular={movies.filter((movie) => movie.popular)[0]}
            trend={props.movies.filter((movie) => movie.trend)[0]}
            favorite={props.movies.filter((movie) => movie.favorite)[0]}
            recommendation={props.movies.filter((movie) => movie.recommendation)[0]}
            
            />  
            </div> 
        </div> 
    )
}


export default Home;