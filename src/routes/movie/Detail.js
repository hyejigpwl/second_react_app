import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Movie from "../../components/Movie";

function Detail(){
    const {id} = useParams();
    const [movie,setMovie] = useState();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json);
        setMovie(json.data.movie);   
    };

    useEffect(()=>{
        getMovie();
    },[])
        
    return(
        <div>
            {movie ? ( // movie 데이터가 존재할 때만 Movie 컴포넌트 렌더링
                <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            ) : (
                <div>Loading...</div> // movie 데이터가 없을 때 로딩 표시
            )}
        </div>
    )
};

export default Detail;