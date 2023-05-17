import React from "react";

class MovieCard extends React.Component{
    render(){
        const {movies,addStar,minStar,changeFev,changeAddCard} = this.props
        let {title,plot,price,rating,fav,incart,star} = this.props.movies
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={()=>minStar(movies)} />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                    onClick={()=>addStar(movies)}
                                />
                                <span className="starCount">{star}</span>
                            </div>
                            {fav?<button className="unfavourite-btn" onClick={()=>{changeFev(movies)}}>Un-Favourite</button>:<button className="favourite-btn" onClick={()=>changeFev(movies)}>Favourite</button>}

                            {incart?<button className="cart-btn-remove" onClick={()=>{changeAddCard(movies)}}>Remove from the card</button>:<button className="cart-btn" onClick={()=>{changeAddCard(movies)}}>Add to card</button>}
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default MovieCard;