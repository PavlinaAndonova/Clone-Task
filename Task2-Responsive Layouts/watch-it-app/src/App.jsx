
import './App.css';

function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#" aria-label="watch.it home">
        watch.it
      </a>

      <nav className="main-nav" aria-label="Movie genres">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

      <button className="search-button" type="button">
        Search
      </button>
    </header>
  );
}


const movies = [
  {
    title: 'Who Framed Roger Rabbit',
    year: 1988,
    image: 'who-framed-roger-rabbit.jpg',
    description: 
    `In a world where cartoons and humans coexist,
      a detective must solve a zany, high-stakes mystery.
      Packed with wild humor, groundbreaking animation, 
      and noir twists, this unique film will pull you into a world 
      where anything is possible!`,
  },
  {
    title: 'Hook',
    year: 1991,
    image: 'hook.jpg',
    description: 
    `Rediscover Neverland in this thrilling twist on Peter Pan! 
    Robin Williams stars as a grown-up Peter, 
    who must rediscover his inner child to rescue his kids 
    from the clutches of Captain Hook. Adventure, magic, 
    and nostalgia blend in this timeless family classic.`,
  },
  {
    title: 'La La Land',
    year: 2016,
    image: 'la-la-land.jpg',
    description: 
    `Love, dreams, and the magic of LA take center stage in this musical masterpiece. 
    Watch as two starry-eyed artists navigate passion and ambition
    in a world where every moment feels like a cinematic spectacle!`,
  },
  {
    title: 'Hidden Figures',
    year: 2016,
    image: 'hidden-figures.jpg',
    description: 
    `Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. 
    Battling discrimination and defying the odds, 
    these brilliant African-American women prove that intelligence, 
    perseverance, and unity can change history and break barriers.`,
  },
  {
    title: 'Palm Springs',
    year: 2020,
    image: 'palm-springs.jpg',
    description:
    `A never-ending wedding day turns into an unforgettable time-loop romance! 
    Stuck in the same day, two strangers find love, chaos, 
    and meaning in the most unexpected ways.`
  },
  {
    title: 'Barbie',
    year: 2023,
    image: 'barbie.jpg',
    description:
    `Step into the dazzling world of Barbie as she embarks on an unexpected journey 
    from her perfect doll life to the real world. 
    Filled with humor, heart, and empowering messages, 
    this vibrant adventure redefines what it means to dream big!`
  },
];

function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img
        className="movie-poster"
        src={`/assets/${movie.image}`}
        alt={`${movie.title} movie poster`}
      />

      <div className="movie-info">
        <h2>{movie.title} ({movie.year})</h2>

        <p>{movie.description}</p>

        <button className="watch-button" type="button">
          Watch Now
        </button>
      </div>
    </article>
  );
}


function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content" id="movies">
        <section className="movie-grid" aria-label="Available movies">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
