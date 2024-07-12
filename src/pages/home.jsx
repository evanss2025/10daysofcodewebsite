import "../input.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Requires a loader


export default function Home() {

  return (
    <div className="bg-lightblue flex flex-col items-center justify-center w-full h-full">
        <nav id ="navbar" className="m-4">
          <a className="text-white font-bold m-2 text-lg"  href ="#about"> About </a>
          <a className="text-white font-bold m-2 text-lg"  href="#projects"> Projects </a>
          <a className="text-white font-bold m-2 text-lg"  href="#faq"> FAQ </a>
        </nav>
      <section className="bg-no-repeat flex flex-col items-center justify-center" id="top">
        <img className="w-1/2 m-3" src="10days2.png"></img>
        <h1 className="text-white font-bold md:text-lg flex justify-center items-center w-1/2">10 Days, 240 Hours, 14,400 Minutes - Just to learn how to code. </h1>
        </section>
      <div>
        <a href="https://hackclub.com/">
          <img className="w-1/6 ml-12 md:ml-56" src="flag2.png"></img>
        </a>
        <img src="sand.png" className="w-screen"></img>
      </div>
      <section className="bg-sand w-full h-screen flex justify-center" id="bottom">
        <div className="m-4 flex flex-col  items-center">
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center">
            <div id="info-container" className="bg-white rounded-xl p-5 m-4 w-1/3">
              <h1 id="about" className="font-bold text-3xl">What is 10 Days of Code?</h1><br/>
              <p>
                10 Days of Code is a gift to Hack Clubbers to level up their coding skills!<br/><br/>

                This summer, Hack Club invited 10 Hack Clubbers to spend two weeks at Hack Club HQ in Shelburne, VT building projects without the expectations of school or work. <br/><br/>

                The goal is for Hack Clubbers to have a finished, shipped project by the end of the 10 Days of Code, while learning more about coding and the developmental process.
              </p>
            </div>
              
              <img className="rounded-xl w-1/3" src="10DaysImage.png"></img>
              {/* <h1 className="rounded-xl bg-white position:absolute top-50 left-50 w-1/2 flex items-center justify-center">Phaedra, 17, presenting her final project at the showcase!</h1> */}
          </div>

          <div className="flex flex-col mt-8 items-center w-full">
            <h1 className="font-bold text-4xl">Past Projects</h1>
            <div id="projects" className="w-3/4 m-8 grid grid-rows-1 grid-cols-3 md:flex-row items-center justify-center">
              <div className="bg-white rounded-xl p-4 m-3 flex flex-col items-center justfiy-center">
                <h1 className="font-bold">Developing a fully responsive website in React and Tailwind - Malycia, WA</h1>
                <p className="text-sm mt-2">“I loved having the time to work on a project that was on my todo list for months. I’m so happy to have participated!” - Malycia, 17, Seattle</p>
              </div>
              <div className="bg-white rounded-xl p-4 m-3 flex flex-col items-center justfiy-center">
                <h1 className="font-bold">Making their own rocket launch simulator in Unity - Savina, CA</h1>
                <p className="text-sm mt-2">"10 Days of Code was an incredible experience because I not only made new friends and had such great connections/conversations, but I was also able to push myself and learn something completely new in code!"</p>
              </div>
              <div className="bg-white rounded-xl p-4 m-3 flex flex-col items-center justfiy-center">
                <h1 className="font-bold">Using Google Maps and Airtable to create a town cleanup website. - Sophia, MA</h1>
                <p className="text-sm mt-2">“10 Days of Code was a great opportunity to learn more about tech and it has grown my passion for coding. Getting advice from people at HQ gave me insight to their skills and helped me learn Airtable and Google Maps API.”</p>
              </div>
            </div>
          </div>

          <div id="faq">
            <h1 className="font-bold text-4xl">FAQ</h1>
          </div>
        
        </div>

          
      </section>

    </div>
  
  );

}