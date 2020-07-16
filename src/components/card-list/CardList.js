import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Button } from 'reactstrap';
import './CardList.scss'


const CardList = ({movies}) => {
  const [cardOver, setCardOver] = useState(null);
  return (
    <>
      { movies.map((movie) => {
        return(               
          <div key={movie.id}
            className="card-movie col-6 col-md-3 mb-4"
            onMouseOver={() => { setCardOver(movie.id) }}
            onMouseLeave={() => { setCardOver(null) }}>
            <img src={movie.image} alt={movie.title} className="card-movie__image" />
            <div className={`card-movie__overlay-container ${cardOver !== movie.id ? 'd-none' : ''}`}>
              <div className="card-movie__overlay mt-7 pt-7" />
              <div className="card-movie__info mt-7 pt-7">
                <h4 className="card-movie__info__title mb-2 mt-4" >{movie.title}</h4>
                <div className="card-movie__info__actions">
                  <Button className="mb-2" color="warning" size="md" block>WATCH NOW</Button>
                  <Button outline color="secondary" size="md" block>MORE INFO</Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}  
    </>
  )
}

CardList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string
    }))
}

export default CardList;