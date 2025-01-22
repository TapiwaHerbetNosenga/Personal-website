import "/headshot.jpg";

export default function Portflio() {
  return (
    <main className="m-20" id="portfolio">
      <div
        id="portfolioSide1"
        className="flex flex-col items-start justify-center"
      >
        <h3>Hi</h3>
        <h2>I'm Herbet</h2>
        <h1>a Fullstack Developer</h1>
        <p>
          I specialize in using React, Vue, and Tailwind CSS for building sleek,
          modern, and aesthetic web designs. On the backend, I leverage SQL and
          databases like MongoDB and FireBase to create efficient, scalable APIs that power robust web
          applications. With a focus on both functionality and design, I strive
          to deliver seamless, visually appealing user experiences that meet and
          exceed client expectations.
        </p>
      </div>
      <div id="portfolioSide2" className="flex flex-col  justify-evenly">
        <div class="oval-container">
          <img class="oval-image" src="headshot.jpg" alt="Headshot" />
        </div>
      </div>
    </main>
  );
}
