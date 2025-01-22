import "/headshot.jpg";

export default function Portflio() {
  return (
    <main className="m-20" id="portfolio">
      <div
        id="portfolioSide1"
        className="flex flex-col items-start justify-center"
      >
        <div  className="flex flex-col items-start justify-center">
          <h3 className="text-3xl font-bold">Hi</h3>
          <span className="flex flex-row ">
            <p className="text-5xl font-bold pr-2">I'm </p>{" "}
            <p id="orange" className="text-5xl font-bold">
              Herbert
            </p>
          </span>
          <h1 className="text-6xl font-bold">A Fullstack Developer</h1>
        </div>

        <p className="break-words text-left mt-2 text-lg leading-6 font-medium " id="nice-gray">
          I specialize in using React, Vue, and Tailwind CSS for building sleek,
          modern, and aesthetic web designs. 
          On the backend, I leverage SQL and
          databases like MongoDB and FireBase to create efficient, scalable APIs
          that power robust web applications. 
          With a focus on both functionality
          and design, I strive to deliver seamless, visually appealing user
          experiences that meet and exceed client expectations.
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
