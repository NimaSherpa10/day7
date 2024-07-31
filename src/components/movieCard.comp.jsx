function MovieCard({ src, title }) {
  return (
    <div className="card card-side bg-base-200 shadow-2xl shadow-black">
      <figure>
        <img src={src} alt="Movie" className="h-30 w-36" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to watch on Netflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
