import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id,cover_img, title, summary, year, genres}) {
    
    return (
        <div>
            <img src={cover_img} alt={title}/>
            <h2>
                <Link to={`/movie/detail/${id}`}>
                    {title}
                </Link>
            </h2>
            <ul>
                <li>title : {title}</li>
                <li>summary : {summary}</li>
                <li>year : {year}</li>
                <li>genres :
                    <ul>
                        {genres.map((genre, idx) =>
                            <li key={idx}>{genre}</li>
                        )}
                    </ul>
                </li>
            </ul>
            <hr/>
        </div>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    cover_img : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;