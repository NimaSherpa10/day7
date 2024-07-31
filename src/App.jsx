import Navbar from "./components/navbar.comp";
import MovieCard from "./components/movieCard.comp.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <div className="bg-base-100">
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <MovieCard
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            title="SpiderMan"
          />
          <MovieCard
            src="https://demonslayer-anime.com/assets_portal/img/main/img_mugentrainarc.jpg"
            title="Demon Slayer"
          />
          <MovieCard
            src=" https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg "
            title="Avatar"
          />
          <MovieCard
            src=" https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p163191_p_v8_al.jpg"
            title="300"
          />
          <MovieCard
            src="https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF894,1000_QL80_.jpg"
            title="Matrix"
          />
          <MovieCard
            src="https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg"
            title="Peaky Blinders"
          />
          <MovieCard
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/4/4/r/jujutsu-kaisen-vol-4-original-imahy5kghugbjkmt.jpeg?q=90&crop=false"
            title="jujutsu kaisen"
          />
          <MovieCard
            src="https://m.media-amazon.com/images/M/MV5BN2EyMmIyMWItZTRiYy00MmE1LTkyOTAtMTliMzYwZGJlYmFjXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
            title="Scooby-Doo"
          />
          <MovieCard
            src="https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
            title="HunterxHunter"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
