import React from 'react';

const Movie = (props) => {
   return (
      <div className="col s12 m6 l3">
         <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
               {
                  props.image == null ? <img src="https://via.placeholder.com/300" alt="card image" style={{width:"100%", height:360}} /> : <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="card image" style={{width:"100%", height:360}} />
               }
            </div>
            <div className="card-content">
               <p><a href="">View Details</a></p>
            </div>
         </div>
      </div>
   )
}
export default Movie;
