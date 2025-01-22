import "/headshot.jpg";

export default function AboutMe() {
  return (
    <article id="abt-me">
      <div id="artSide1"></div>
      <div id="artSIde2"></div>
      <div id="artMain">
        <div id="line-1" className=" grid grid-cols-2">
          <div>
            <div className="ml-24">
              <img id="main-img" src="headshot.jpg" alt="headshot" />
            </div>
          </div>
          <div>
            <div className="flex flex-col ">
              <h1>Herbet</h1>
              <h1>Nosenga</h1>
              <h1>Software Developer</h1>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2">
          <div id="col-1" className="flex flex-col justify-center items-center">
            <div>
              <h1 className="text-2xl ">About Me</h1>
              <p className="w-80">
                Hi, I am a full-stack developer skilled in React, Vue and SQL. I
                work with various technologies to make responsive, modern and
                stylish web applications.I have the motivation and ability to
                create applications that will leave any customer satisfied.
              </p>
            </div>
            <div className="mt-4">
              <div className="bg-slate-700 text-white w-full">Contact Me</div>
              <ul className="list-none flex-col flex">
                <li>(078)-245-6790</li>
                <li><a href= "mailto:Herbetnosenga5@gmail.com">Herbetnosenga5@gmail.com </a></li>
                <li> <a href="https://www.linkedin.com/in/tapiwa-herbet-nosenga-55029528b/" target="_blank">LinkedIn Profile</a> </li>
              </ul>
            </div>
            <div className="w-4/12 flex flex-col items-center justify-center ">
              <div className="bg-slate-700 text-white w-full"> Skills</div>
              <ul className="list-none flex flex-col items-center   justify-center ">
                <li>Vue.js</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>FireBase</li>
                <li> SQL</li>
              </ul>
            </div>
          </div>
          <div id="col-2" className="flex flex-col  items-center">
            <div>
            <div className="bg-slate-700 text-white w-full">Qualifications</div>
              <ul className="list-none flex flex-col items-start ml-24 justify-between ">
                <li className="mb-4 flex items-center">
                  <div class="circle"></div>
                  <p>Software Development from codeSpace</p>
                </li>
                <li className="mb-4 flex items-center">
                  <div class="circle"></div>
                  <p>Advanced Javascript from CodeSpace</p>
                </li>
              </ul>
            </div>
            <div className="w-9/12 flex flex-col items-center justify-center ">
              <div className="bg-slate-700 text-white w-full">Previous Work</div>
              <ul className="list-none flex flex-col items-center justify-center ">  
                <li> To be added</li>
                <li> To be added</li>
              </ul>
              
            </div>
          </div>
        </div>

        <div id="line-3" className=" grid grid-cols-2">
          <div></div>
        </div>
      </div>
    </article>
  );
}
