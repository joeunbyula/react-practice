import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Movies() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);


    /**
     * CoinTracker.js의 fetch형식 대신 밑의 방식으로 사용!
     */
    const getMovies = async() => {
        const json = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year")
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log("movie===>",json.data.movies);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? <h1>Loading....</h1> :
                <div>
                    <h1>Movie List ({movies.length})</h1>
                    <ul>
                        {movies.map((movie, index)=>
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                cover_img={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                year={movie.year}
                                genres={movie.genres}/>
                        )}
                    </ul>
                </div>
            }

        </div>
    );
}

export default Movies;