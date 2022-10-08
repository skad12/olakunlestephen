import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olakunle&apos;s Portfolio</title>
        <link rel="icon" href="/briefcase.ico"></link>
      </Head>

      <div
        className="min-h-screen pt-10 antialiased bg-cover "
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')`,
        }}
      >

        <div className="p-4 lg:p-16 lg:pt-12 space-y-10 ">
          <div>
            <div className="text-2xl lg:font-light lg:text-5xl">
            <span className="font-extrabold">O</span>lakunle{" "} Stephen{" "}
            </div>
             
            <div className="text-xs font-semibold ">
              Frontend &amp; Mobile Developer.
              </div>
          </div>

          <div className="space-y-5  "> 
          
      <ul className="menu  w-56 p-2 rounded-box bg-glass ">

  <li>
    <Link  href="/">
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

    Home
    </a>
    </Link>
  </li>
  <li>
  <Link  href="/info">
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      Info
    </a>
    </Link>
  </li>
  <li>
    <Link href="/proj">
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>
      Projects
    </a>
    </Link>
  </li>

  <li>
    <Link href="/contact">
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
      Contact
    </a>
    </Link>
  </li>
</ul>
          </div>
        </div>


        <div className=" p-4 lg:pr-10 lg:pb-10 lg:grid lg:grid-cols-3">
            

            <div className="space-y-4 col-end-4">

            <div className=" space-y-2">
          
          <div className=" flex  font-bold lg:text-2xl ">
            Let&apos;s make something together.{" "}

            <span className=" h-10 pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
</svg>
</span>
          </div>
          <div className="lg:pt-6 text-sm lg:text-base  ">
            Feel free to send me an email if you&apos;re looking for a front-end
            engineer, <br />
            have a question or just want to say hi!
          </div>
        </div>

        <div className=" flex space-x-6">
        <div>
          <button className=" w-8 h-8 rounded-lg lg:text-lg ">
            <a href="mailto:dammykunle79@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           
            viewBox="0 0 48 48"
            style={{color:"fill:#000000;"}}><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z">
              </path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z">
              </path>
              </svg>
            </a>
          </button>
        </div>

        <div>
          <button className=" w-8 h-8 rounded-lg lg:text-lg ">
            <a href="https://github.com/skad12" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"          
            viewBox="0 0 48 48"
            style={{color:"fill:#000000;"}}>
              <path fill="#455A64" d="M40.3,15.7c0.6-1.7,1.2-5-0.4-8.7c-4.5,0-8.3,3.2-8.9,3.8c-2.2-0.5-4.6-0.7-7-0.7c-2.5,0-4.9,0.3-7.2,0.8C13.7,7.7,9.6,7,8,7c0,0-0.9,1.8-0.9,5c0,2,0.5,3.2,0.8,3.8C5.5,18.3,4,21.7,4,26.1c0,11.2,7.1,15,20,15s20-3.8,20-15C44,21.5,42.6,18.1,40.3,15.7z">
                </path><path fill="#FFCCBC" d="M24,39c-8.2,0-15-1.4-15-9c0-2.9,1.6-4.5,2.7-5.5c2.5-2.2,6.7-1.2,12.3-1.2c4.1,0,7.6-0.7,10.4,0.2c2.8,0.9,4.6,3.5,4.6,6.3C39,37.7,35,39,24,39z">
                  </path><path fill="#D84315" d="M25,34c0,0.6-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S25,33.4,25,34z M26.5,36.5c0.2-0.2,0.2-0.5,0-0.7s-0.5-0.2-0.7,0c-0.9,0.9-2.6,0.9-3.5,0c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7c0.7,0.7,1.5,1,2.5,1S25.8,37.1,26.5,36.5z"></path>
                  <path fill="#FFF" d="M19,29.5c0,2.5-1.3,4.5-3,4.5s-3-2-3-4.5s1.3-4.5,3-4.5S19,27,19,29.5z M32,25c-1.7,0-3,2-3,4.5s1.3,4.5,3,4.5c1.7,0,3-2,3-4.5S33.7,25,32,25z"></path>
                  <path fill="#6D4C41" d="M34,30c0,1.7-0.9,3-2,3s-2-1.3-2-3c0-0.2,0-0.5,0.1-0.7c0.1,0.4,0.5,0.7,0.9,0.7c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1c-0.2,0-0.4,0.1-0.6,0.2c0.4-0.7,0.9-1.2,1.6-1.2C33.1,27,34,28.3,34,30z M16,27c-0.7,0-1.2,0.5-1.6,1.2c0.2-0.1,0.4-0.2,0.6-0.2c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1c-0.4,0-0.8-0.3-0.9-0.7c0,0.2-0.1,0.5-0.1,0.7c0,1.7,0.9,3,2,3s2-1.3,2-3S17.1,27,16,27z">
              </path></svg>
            </a>
          </button>
        </div>
        
        <div>
          <button className=" w-8 h-8 rounded-lg lg:text-lg ">
            <a href="https://www.linkedin.com/in/afuwape-stephen-b917211b0/" target="_blank" rel="noopener noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"           
            viewBox="0 0 48 48"
            style={{color:"fill:#000000;"}}><path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z">
              </path><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z">
              </path>
              </svg>
            </a>
          </button>
        </div>

        <div>
          <button className=" w-8 h-8 rounded-lg lg:text-lg ">
            <a href="https://twitter.com/TheOnlySkad" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"            
            viewBox="0 0 48 48"
            style={{color:"fill:#000000;"}}>
              <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429">
              </path>
              </svg>
            </a>
          </button>
        </div>

        <div>
          <button className=" w-8 h-8 rounded-lg lg:text-lg ">
            <a href="https://www.instagram.com/theonlyskad/">       
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 100 100"
      style={{color:"fill:#000000;"}}><path fill="#fed5b3" d="M71,82H29c-6.075,0-11-4.925-11-11V29c0-6.075,4.925-11,11-11h42c6.075,0,11,4.925,11,11v42C82,77.075,77.075,82,71,82z"></path><path fill="#d68f53" d="M18,39V29c0-6.075,4.925-11,11-11h42c6.075,0,11,4.925,11,11v10H18z">
      </path><path fill="#f15b6c" d="M26 38L22 38 22 20 26 19z"></path>
      <path fill="#f9e65c" d="M25 38L29 38 29 18 25 19z"></path><path fill="#a1d3a2" d="M28 18H32V38H28z"></path>
      <path fill="#39c2d8" d="M31 18H35V38H31z"></path><path fill="#b77748" d="M66.5 24.5H74.5V32.5H66.5z"></path>
      <path fill="#fefdef" d="M50 34A16 16 0 1 0 50 66A16 16 0 1 0 50 34Z"></path><path fill="#8f9eb6" d="M50 39A11 11 0 1 0 50 61A11 11 0 1 0 50 39Z"></path><path fill="#78cdd4" d="M45.036 41.072A3.964 3.964 0 1 0 45.036 49A3.964 3.964 0 1 0 45.036 41.072Z"></path>
      <path fill="#b77748" d="M32.5,36.5h-8c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2h8c1.105,0,2-0.895,2-2C34.5,37.395,33.605,36.5,32.5,36.5z"></path><path fill="#1f212b" d="M49.964,65.928c-2.551,0-5.089-0.617-7.341-1.783C37.305,61.385,34,55.951,34,49.964C34,41.161,41.161,34,49.964,34s15.964,7.161,15.964,15.964S58.767,65.928,49.964,65.928z M49.964,35C41.713,35,35,41.713,35,49.964c0,5.612,3.098,10.706,8.084,13.292c2.14,1.109,4.454,1.672,6.88,1.672c8.251,0,14.964-6.713,14.964-14.964S58.215,35,49.964,35z">
      </path>
      <path fill="#1f212b" d="M67.5 39h-7c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7c.276 0 .5.224.5.5S67.776 39 67.5 39zM39.5 39h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5S39.776 39 39.5 39zM22.5 39h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4c.276 0 .5.224.5.5S22.776 39 22.5 39zM81.5 39h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11c.276 0 .5.224.5.5S81.776 39 81.5 39z"></path>
      <path fill="#1f212b" d="M71,83H29c-6.617,0-12-5.383-12-12V29c0-6.617,5.383-12,12-12h42c6.617,0,12,5.383,12,12v42C83,77.617,77.617,83,71,83z M29,19c-5.514,0-10,4.486-10,10v42c0,5.514,4.486,10,10,10h42c5.514,0,10-4.486,10-10V29c0-5.514-4.486-10-10-10H29z"></path>
      <path fill="#1f212b" d="M50 61c-6.065 0-11-4.935-11-11s4.935-11 11-11c4.647 0 8.814 2.941 10.368 7.319.093.26-.043.546-.304.639-.259.09-.546-.045-.639-.305C58.014 42.674 54.226 40 50 40c-5.514 0-10 4.486-10 10s4.486 10 10 10c.276 0 .5.224.5.5S50.276 61 50 61zM60.488 50.001c-.266 0-.487-.209-.499-.477-.016-.322-.046-.641-.091-.954-.039-.273.151-.526.425-.565.268-.034.525.15.565.425.049.345.083.694.099 1.048.014.276-.2.51-.476.522C60.504 50.001 60.496 50.001 60.488 50.001z"></path>
      <path fill="#1f212b" d="M45.036 49c-.642 0-1.255-.149-1.822-.442-1.321-.687-2.142-2.035-2.142-3.521 0-2.186 1.778-3.964 3.964-3.964S49 42.851 49 45.036 47.222 49 45.036 49zM45.036 42.072c-1.635 0-2.964 1.329-2.964 2.964 0 1.111.613 2.12 1.602 2.634.424.219.882.33 1.362.33C46.671 48 48 46.671 48 45.036S46.671 42.072 45.036 42.072zM74.5 33h-8c-.276 0-.5-.224-.5-.5v-8c0-.276.224-.5.5-.5h8c.276 0 .5.224.5.5v8C75 32.776 74.776 33 74.5 33zM67 32h7v-7h-7V32zM22.5 34c-.276 0-.5-.224-.5-.5v-13c0-.276.224-.5.5-.5s.5.224.5.5v13C23 33.776 22.776 34 22.5 34zM31.5 37c-.276 0-.5-.224-.5-.5v-15c0-.276.224-.5.5-.5s.5.224.5.5v15C32 36.776 31.776 37 31.5 37zM34.5 39c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5s.5.224.5.5v4C35 38.776 34.776 39 34.5 39zM34.5 32c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C35 31.776 34.776 32 34.5 32zM34.5 27c-.276 0-.5-.224-.5-.5v-8c0-.276.224-.5.5-.5s.5.224.5.5v8C35 26.776 34.776 27 34.5 27zM28.5 26c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5s.5.224.5.5v7C29 25.776 28.776 26 28.5 26zM28.5 37c-.276 0-.5-.224-.5-.5v-8c0-.276.224-.5.5-.5s.5.224.5.5v8C29 36.776 28.776 37 28.5 37zM25.5 37c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C26 36.776 25.776 37 25.5 37zM25.5 32c-.276 0-.5-.224-.5-.5v-13c0-.276.224-.5.5-.5s.5.224.5.5v13C26 31.776 25.776 32 25.5 32z"></path>
      <path fill="#1f212b" d="M32.5,41h-8c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5h8c1.379,0,2.5,1.121,2.5,2.5S33.879,41,32.5,41z M24.5,37c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5h8c0.827,0,1.5-0.673,1.5-1.5S33.327,37,32.5,37H24.5z">
      </path></svg>



            </a>
          </button>
        </div>
        </div>

            </div>
          </div>
      </div>
    </>
  );
}

















// import Head from "next/head";

// export default function Contact() {
//   return (
//     <>
//       <Head>
//         <title>Contact</title>
//         <link rel="icon" href="/briefcase.ico"></link>
//       </Head>

      
      
//       <div
//         className="min-h-screen pt-10 pl-5 pr-5 antialiased text-white bg-cover lg:pl-32"
//         style={{
//           backgroundImage: `url('https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
//         }}
//       >
        // <div className="pt-40 space-y-2">
        //   <div className="text-2xl font-bold text-gray-200 lg:text-5xl md:text-3xl">Contact</div>
        //   <div className="tracking-widest text-gray-300 lg:text-2xl md:text-xl">
        //     Let&apos;s make something together.{" "}
        //     <span className="lg:text-3xl md:hidden">&#128170;</span>
        //   </div>
        //   <div className="pt-6 tracking-widest lg:text-xl ">
        //     Feel free to send me an email if you&apos;re looking for a front-end
        //     engineer, <br />
        //     have a question or just want to say hi!
        //   </div>
        // </div>

        // <div>
        //   <button className="w-32 h-12 text-white bg-blue-500 rounded-lg lg:text-lg mt-14 hover:bg-blue-700">
        //     <a href="mailto: stephenkunle26@gmail.com">Say hello</a>
        //   </button>
        // </div>
//       </div>
//     </>
//   );
// }
