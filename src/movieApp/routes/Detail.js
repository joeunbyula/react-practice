import {useParams} from "react-router-dom";
import async from "async";
import {useEffect, useState} from "react";

function Detail() {
    // 전체 params
    const params = useParams();
    console.log("params==>",params);
    // params 안에 특정 param
    const {id} = useParams();
    console.log("id param==>",id);

    const [loading, setLoading] = useState(true);
    const [movie,setMovie] = useState({});

    const getDetail= async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie)
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getDetail()
    }, []);


    return (
        <div>
            {loading ? <h1>Detail Loading....</h1> :
                <div>
                    <h1>Movie</h1>
                    <img src={movie.large_cover_image} alt={movie.title}/>
                    <h2>{movie.title}</h2>
                    <ul>
                        <li>year : {movie.year}</li>
                        <li>runtime : {movie.runtime}</li>
                        <li>description : {movie.description_full}</li>
                        <li>genres :
                            <ul>
                                {movie.genres.map((genre) => <li>{genre}</li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
            }

        </div>
    )
}

export default Detail;