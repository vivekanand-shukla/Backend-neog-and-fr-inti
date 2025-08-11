import useFetch from "../useFetch";
const MovieByTitle =({title})=>{

    const {data ,loading,error} = useFetch(`http://localhost:3000/movies/${title}`)
    console.log(data)
    return data ? (
        <div>
            <h2>title :{data.title}</h2>
             <p>Director :{data.director}</p>
             <p>Country : {data.country}</p>
             <p>Rating : {data.rating}</p>
             <p>Actors :  {data.actors.join(", ")}</p>
             <p>Awards: {data.Awards}</p>
             <p>Plot :  {data.plot}</p>
             <img src={data.posterUrl} alt="poster Image" />
        </div>
      ): (loading && <p>Loading</p>)

  
         

}
        
 
    


export default MovieByTitle
