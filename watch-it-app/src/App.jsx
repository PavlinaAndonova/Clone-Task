/* Import the Teko and Lato fonts installed using npm.
These fonts are used to style the website's text. */

import '@fontsource/teko';
import '@fontsource/lato';

/* Import the CSS file containing the website's styling. */
import './App.css';

/* Header with logo, navigation and search button */

function Header() {
  return (
    <header className="site-header">

       {/* Website logo. */}
      <a className="logo" href="#" aria-label="watch.it home">
        watch.it
      </a>

      {/* Movie genre navigation */}

      <nav className="main-nav" aria-label="Movie genres">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

 {/* Search button.*/}

      <button className="search-button" type="button">
        Search
      </button>
    </header>
  );
}

/* Reusable component to display each movie */

function Movies() {
  return (
    <div className="movie-grid">

      {/* First movie - "Who framed Roger rabbit" */}
      <article className="movie-card">
        <img
          className="movie-poster"
          src="/assets/who-framed-roger-rabbit.jpg"
          alt="Who Framed Roger Rabbit movie poster"
        />
      <div className="movie-info">
        <h2>Who Framed Roger Rabbit (1988)</h2>

          <p>
            In a world where cartoons and humans coexist,
            a detective must solve a zany, high-stakes mystery.
            Packed with wild humor, groundbreaking animation, 
            and noir twists, this unique film will pull you into a world 
            where anything is possible!
          </p>

          <button className="watch-button" type="button">
            Watch Now
          </button>
        </div>
      </article>
  
      {/* Second movie - "Hook" */}
      <article className="movie-card">
        <img
          className="movie-poster"
          src="/assets/hook.jpg"
          alt="Hook"
        />
        <div className="movie-info">
          <h2>Hook (1991)</h2>

          <p>
          Rediscover Neverland in this thrilling twist on Peter Pan! 
          Robin Williams stars as a grown-up Peter, 
          who must rediscover his inner child to rescue his kids 
          from the clutches of Captain Hook. Adventure, magic, 
          and nostalgia blend in this timeless family classic.
          </p>

          <button className="watch-button" type="button">
            Watch Now
          </button>
        </div>
      </article>

      {/* Third movie - "La La Land" */}
      <article className="movie-card">
        <img
          className="movie-poster"
          src="/assets/la-la-land.jpg"
          alt="La La Land"
        />
        <div className="movie-info">
          <h2>La La Land (2016)</h2>

          <p>
          Love, dreams, and the magic of LA take center stage in this musical masterpiece. 
          Watch as two starry-eyed artists navigate passion and ambition
          in a world where every moment feels like a cinematic spectacle!
          </p>

          <button className="watch-button" type="button">
            Watch Now
          </button>
        </div>
      </article>

      {/*Fourth movie - "Hidden Figures" */}
      <article className="movie-card">
        <img
          className="movie-poster"
          src="/assets/hidden-figures.jpg"
          alt="Hidden Figures"
        />
        <div className="movie-info">
          <h2>Hidden Figures (2016)</h2>

          <p>
          Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. 
          Battling discrimination and defying the odds, 
          these brilliant African-American women prove that intelligence, 
          perseverance, and unity can change history and break barriers.
          </p>

          <button className="watch-button" type="button">
            Watch Now
          </button>
        </div>
      </article>

      {/* Fifth movie - "Palm Springs" */}
      <article className="movie-card">
        <img
          className="movie-poster"
          src="/assets/palm-springs.jpg"
          alt="Palm Springs"
        />
        <div className="movie-info">
          <h2>Palm Springs (2020)</h2>

          <p>
          A never-ending wedding day turns into an unforgettable time-loop romance! 
          Stuck in the same day, two strangers find love, chaos, 
          and meaning in the most unexpected ways.
          </p>

          <button className="watch-button" type="button">
            Watch Now
          </button>
        </div>
      </article>
  
      {/* Sixth movie - Barbie" */}
      <article className="movie-card">
        <img
          className="movie-poster"
          src="/assets/barbie.jpg"
          alt="Barbie"
        />
        <div className="movie-info">
          <h2>Barbie (2023)</h2>

          <p>
          Step into the dazzling world of Barbie as she embarks on an unexpected journey 
          from her perfect doll life to the real world. 
          Filled with humor, heart, and empowering messages, 
          this vibrant adventure redefines what it means to dream big!
          </p>

          <button className="watch-button" type="button">
            Watch Now
          </button>
        </div>
      </article>
    </div>
  );
}

/* Main component displaying the header and movies */

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content" id="movies">
        <Movies />
      </main>
    </div>
  );
}


/* Export the main App component */

export default App;
