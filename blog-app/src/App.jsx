/* // Import the fonts used throughout the blog  */
import '@fontsource/protest-guerrilla';
import '@fontsource/josefin-sans';
import '@fontsource/josefin-sans/700.css';

/* // Import the CSS file for styling */
import './App.css'; 

/* Header with logo and navigation links.*/

function Header() { 
  return (
    // Main header section with a class name for styling
    <header className="blog-header">  

    {/* Displays the logo from the assets folder with an alt text for accessibility */}
      <img 
        className="blog-logo"
        src="/assets/logo.svg"
        alt="Erased Tapes Records"
      />

      {/* Navigation menu with links to different sections of the blog */}

      <nav className="main-navigation">
        <a href="#article">Our Blog</a>
        <a href="#albums">Our Artists</a>
        <a href="#author">Our Story</a>
      </nav>
    </header>
  );
}

/* Blog article with introduction and three-column text */

function Article() {
  return (
    <section className="article-content" id="article">

      {/* Article introduction*/}
      <div className="article-introduction">
        <h1>Erased Tapes:</h1>
        <h2>Exploring the Sonic Frontier</h2>

        <p> {/* Represents a paragraph*/}
        Lorem ipsum odor amet, consectetuer adipiscing elit.
        Mi eu scelerisque turpis posuere tempor?
        Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla.
        Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus.
        Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.
        </p>
      </div>

      {/* Main article content */}
      <div className="article-columns">
        <h3>Heading</h3>

        <p>
        Montes ridiculus mus tellus nunc vulputate.
        Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor.
        Sollicitudin cubilia scelerisque diam taciti lacus.
        Dapibus penatibus augue dapibus sagittis; rhoncus accumsan.
        Accumsan urna et, ultrices placerat justo rutrum.
        Tristique mattis ante cras accumsan convallis phasellus fermentum magna.
        Rhoncus curabitur pharetra proin ante nam adipiscing accumsan hac.
        Rutrum efficitur nullam integer ut ex id.
        Pulvinar vel at vestibulum vivamus sed nascetur eget.
        </p>

        <p>
        Laoreet volutpat hendrerit est aliquam;
        fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et.
        Aptent maximus vehicula nullam odio tempor.
        Placerat dis facilisis potenti iaculis, primis vivamus nec at magnis.
        Aadipiscing curabitur vestibulum imperdiet dolor primis.
        Inceptos penatibus inceptos eu habitasse aptent vehicula platea litora congue.
        Ultricies mauris fringilla rhoncus pharetra iaculis vitae.
        Venenatis himenaeos eget molestie dignissim consectetur tellus litora.
        Porta a iaculis mi primis rhoncus.
        </p>

        <p>
        Curae habitasse elementum amet nunc, natoque at.
        Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat. 
        Eros phasellus platea mauris condimentum natoque hendrerit tellus id.
        Ex imperdiet vitae maximus adipiscing neque quam tempor orci.
        Lobortis porta lacinia cubilia tellus vel placerat; facilisis mi euismod.
        Neque eu orci nulla penatibus elit nec.
        </p>

        <p>
        Parturient habitasse facilisis purus donec, enim platea maximus.
        Primis class varius augue sed class ultricies.
        Posuere curabitur tristique penatibus montes hac ac imperdiet.
        Risus per sociosqu, cursus leo condimentum ac fringilla.
        Nibh curabitur eros tempus nec; nam curae hendrerit.
        Mattis placerat maximus mollis praesent, eros adipiscing dui. 
        </p>

        <h3>Heading</h3>

        <p>
        Habitasse ornare fames facilisis montes pulvinar habitasse fringilla.
        Risus porta cursus duis vivamus quam adipiscing nec.
        Ante at posuere eget aptent natoque vivamus ante.
        Aenean enim dapibus viverra sem efficitur.
        Felis nam semper integer justo in.
        Facilisi augue urna torquent lacinia facilisi inceptos.
        Natoque varius feugiat massa scelerisque natoque, cras tempor inceptos.
        </p>

        <p>
        Amet ac leo, imperdiet hac litora auctor.
        Suscipit congue duis sociosqu auctor euismod vivamus urna diam.
        Nunc enim himenaeos litora facilisi, tincidunt torquent.
        Eros sapien laoreet duis, volutpat rutrum pulvinar.
        Natoque semper sapien aptent quis habitant aliquam condimentum luctus.
        Tempus pellentesque congue varius dapibus pharetra.
        Fermentum diam auctor bibendum rhoncus leo.
        Vestibulum tincidunt fames convallis ligula semper porttitor.
        </p>

        <p>
        Magnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra.
        Platea congue orci sagittis purus scelerisque.
        Velit taciti maecenas praesent nam lobortis metus vehicula habitasse porttitor.
        Porta gravida placerat lobortis litora elit feugiat venenatis.
        Cras magna himenaeos consequat aliquet ad nec pharetra.
        Ligula eleifend imperdiet aptent primis placerat.
        Nec magnis tempus vulputate ipsum ad sagittis mus.
        </p>

        <h3>Heading</h3>

        <p>
        Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar.
        Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius lobortis iaculis metus.
        Netus sem imperdiet hendrerit vehicula netus est gravida tortor.
        Nunc ridiculus per montes nulla, facilisis lacinia per leo.
        Hendrerit scelerisque nulla in suspendisse sit tortor sagittis.
        Suscipit dictumst ipsum laoreet cras egestas suscipit orci.
        Per molestie felis erat platea blandit commodo.
        </p>

        <p>
        Ad venenatis sapien habitant posuere donec porttitor vel nisi.
        Sodales laoreet donec diam rhoncus lectus euismod orci torquent curae.
        Fames rhoncus torquent sed convallis; potenti cras.
        Dictumst arcu libero nulla malesuada mi ridiculus platea.
        Interdum ullamcorper fringilla himenaeos mollis; in arcu pharetra massa.
        Nunc mauris taciti montes sapien molestie orci ac quis.
        </p>
      </div>
    </section>
  );
}

/*
This component displays five album covers.*/

function AlbumGallery() {
  return (
    <section className="album-gallery" id="albums">

      {/* Main featured album */}
      <div className="album-placeholder featured-album">
        <img src="/assets/all-encores.jpg" alt="All Encores" />
      </div>

      {/* First smaller album */}
      <div className="album-placeholder album-one">
        <img src="/assets/articulation.jpg" alt="Articulation" />
      </div>

      {/* Second smaller album */}
      <div className="album-placeholder album-two">
        <img src="/assets/blurred.jpg" alt="Blurred" />
      </div>

      {/* Third smaller album */}
      <div className="album-placeholder album-three">
        <img src="/assets/encores-2.jpg" alt="Encores" />
      </div>

      {/* Fourth smaller album */}
      <div className="album-placeholder album-four">
        <img
          src="/assets/eulogy-for-evolution.jpg"
          alt="Eulogy for Evolution"
        />
      </div>

    </section>
  );
}


/* Author information, profile picture and social icons */

function Author() {
  return (
    <section className="author-section" id="author">
      
      {/* Author description with a heading */}
      <div className="author-description">
        <h2>The Author</h2>
        <p> {/* Raragraph containing information about the author*/}
        Sapien leo scelerisque per convallis torquent nunc.
        Lobortis eleifend a nam sit turpis nostra.
        Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent!
        Eget quam magna, diam commodo interdum sapien magnis. 
        </p>
      </div>

      {/* Display the author's profile picture. */}
      <img
        className="author-photo"
        src="/assets/profile_picture.jpg"
        alt="Author"
      />
     {/* Displays social icons besides the author*/}

      <SocialIcons className="author-socials" />
    </section>
  );
}

/* Reusable social media icons for author and footer */

function SocialIcons({ className = '' }) {
  return (
    <div className={`social-icons ${className}`}>
      <img src="/assets/facebook-icon.png" alt="Facebook" className="social-icon" />
      <img src="/assets/instagram-icon.svg" alt="Instagram" className="social-icon" />
      <img src="/assets/twitter-icon.svg" alt="Twitter" className="social-icon" />
    </div>
  );
}


/* Display three user comments */

function Comments() {
  return (
    <section className="comments-section">
      <h2>Comments</h2>
       <div className="comments-list">

        {/* First comment */}
        <article className="comment">
          <h3>soundseeker92</h3>
          <p>
            This article beautifully captures the essence of experimental sound.
            Erased Tapes is truly pushing boundaries.
            Makes me want to revisit Nils Frahm's early work.
            I wonder what you think about their older stuff?
          </p>
        </article>

        {/* Second comment */}
        <article className="comment">
          <h3>Ted Baker</h3>
          <p>
            I've been following the label for years—so glad someone's
            finally writing about their impact.
          </p>
        </article>

        {/* Third comment */}
        <article className="comment">
          <h3>Queen_of_noise</h3>
          <p>
            I discovered Erased Tapes through Ólafur Arnalds—this article
            brought back memories and be and my friends listening together.
            A bit too poetic for my taste, but still compelling.
          </p>
        </article>

      </div>
    </section>
  );
}

/* Footer with navigation, copyright and social icons */

function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-navigation">
        <a href="#article">Our Blog</a>
        <a href="#albums">Our Artists</a>
        <a href="#author">Our Story</a>
      </nav>

      {/* Display copyright information */}  
      <p className="copyright">Copyright © 2024 Ahmed Webb.</p>
      <SocialIcons className="footer-socials" />
    </footer>
  );
}

/* Main component combining all blog sections */

function App() {
  return (
    <div className="app">

      {/* Display the header containing the logo and navigation */}
      <Header />

      {/* Main content area of the webpage */}
      <main className="main-content">

        {/* Display the blog article and three-column text */}
        <Article />

        {/* Display the five album covers using CSS Grid */}
        <AlbumGallery />

        {/* Display the author's information and profile picture */}
        <Author />

        {/* Display the comments below the article */}
        <Comments />
      </main>

      {/* Display the footer with navigation and social icons */}
      <Footer />
    </div>
  );
}

export default App;

