const Movie = (props) => {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <h3>Release Date: {props.release_date}</h3>
      <p>Overview: {props.overview}</p>
      <img src={props.poster_path} />
    </div>
  )
};

export default Movie;