import './App.css';

let nti = "./static/media/nti.png";
let samres = "./static/media/samres.png";
let portrait = "./static/media/portrait.png";

function App() {

  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-gray-100 text-gray-800">
        <header id="home" className="h-screen flex flex-col">

            {/* Navbar */}
            <nav className="flex flex-row justify-center gap-5 md:gap-5 lg:gap-16 py-8 my-auto text-lg font-medium">
                <a href="./#home" className="px-3 py-1 rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">Home</a>
                <a href="./#career" className="px-3 py-1 rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">Career</a>
                <a href="./#about" className="px-3 py-1 rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">About</a>
                <a href="./#projects" className="px-3 py-1 rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">Projects</a>
                <a href="./#contact" className="px-3 py-1 rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">Contact</a>
            </nav>

            {/* Title */}
            <div className="flex-grow flex flex-col justify-center gap-3 my-auto text-center px-2 md:px-24 lg:px-52 xl:px-60 2xl:px-80 3xl:px-112">
                <div className="hidden xl:block relative font-bold text-gray-200 font-abril tracking-widest transform text-9xl top-10 rotate-12">Junior Web Developer</div>
                <div className="xl:relative text-8xl font-caveat bottom-40">Isak Jensen</div>
            </div>
        </header>


        {/* Main */}
        <main className="flex flex-col flex-grow">

            {/* Career Section */}
            <section id="career" className="flex flex-col pt-12 pb-24 gap-8 px-6 md:px-24 lg:px-26 xl:px-36 2xl:px-80 3xl:px-102">
                <div className="text-gray-900 hover:text-gray-700 transition duration-200 ease-in-out">
                    <a className="flex flex-row float-left group" href="https://linkedin.com/in/isakjensen" target="_blank" rel="noreferrer">
                        <h1 className="font-playfair text-3xl">Career</h1>
                        <span className="opacity-0 group-hover:opacity-100 pl-2 mt-auto text-xl text-gray-700 transition duration-200 ease-in-out"><i className="fal fa-link"></i></span>
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-6">
                    <div className="lg:w-1/3 lg:bg-gray-200 text-gray-700 lg:p-5 rounded-lg flex flex-col gap-5 lg:gap-8 transform transition duration-500 lg:hover:scale-1015 lg:hover:shadow-sm">
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <h1 className="text-xl text-gray-900 font-medium">Software Development</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, incidunt quod illum deleniti ut ad similique blanditiis dicta et dolore distinctio temporibus repudiandae pariatur modi maxime. Doloremque enim libero beatae doloribus facilis? Non, asperiores corrupti! Facilis rem beatae omnis sapiente.</p>
                        </div>
                        <div className="flex flex-row gap-3 mt-auto">
                            <img className="w-10 h-10 rounded-xl my-auto" src={nti} alt="" />
                            <div className="my-auto">
                                <div className="text-sm text-gray-800"><span className="font-semibold">NTI Gymnasiet</span></div>
                                <div className="text-sm text-gray-400">August 2018 – June 2021</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/3 lg:border-2 border-gray-200 text-gray-700 lg:p-5 rounded-lg flex flex-col gap-5 lg:gap-8 transform transition duration-500 lg:hover:scale-1015 lg:hover:shadow-sm">
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <h1 className="text-xl text-gray-900 font-medium">Telephone Exchange Communicator</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, incidunt quod illum deleniti ut ad similique blanditiis dicta et dolore distinctio temporibus repudiandae pariatur modi maxime. Doloremque enim libero beatae doloribus facilis? Non, asperiores corrupti! Facilis rem beatae omnis sapiente.</p>
                        </div>
                        <div className="flex flex-row gap-3 mt-auto">
                            <img className="w-9 h-9 my-auto" src={samres} alt="" />
                            <div className="my-auto">
                                <div className="text-sm text-gray-800"><span className="font-semibold">Samres AB</span></div>
                                <div className="text-sm text-gray-400">June 2021 – July 2021</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 lg:bg-gray-200 lg:p-5 rounded-lg flex flex-col gap-5 lg:gap-8 transform transition duration-500 lg:hover:scale-1015 lg:hover:shadow-sm">
                        <div className="flex absolute right-3 top-3">
                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                            <span className="inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                        </div>
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <h1 className="text-xl text-gray-900 font-medium">Highschool Engineer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, incidunt quod illum deleniti ut ad similique blanditiis dicta et dolore distinctio temporibus repudiandae pariatur modi maxime. Doloremque enim libero beatae doloribus facilis? Non, asperiores corrupti! Facilis rem beatae omnis sapiente.</p>
                        </div>

                        <div className="flex flex-row gap-3 mt-auto">
                            <img className="w-10 h-10 rounded-xl my-auto" src={nti} alt="" />
                            <div className="my-auto">
                                <div className="text-sm text-gray-800"><span className="font-semibold">NTI Gymnasiet</span></div>
                                <div className="text-sm text-gray-400">August 2021 – June 2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <div className="bg-hl flex flex-col">
                <section id="about" className="my-20 flex flex-col py-12 gap-8 px-2 md:px-24 lg:px-36 xl:px-60 2xl:px-80 3xl:px-102">
                    <h1 className="font-playfair text-3xl text-blue-200">About</h1>
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-2/6">
                            <img className="rounded-lg border-4 border-blue-300 shadow-lg" src={portrait} alt="Portrait" />
                        </div>
                        <div className="md:w-4/6 bg-gray-900 text-gray-300 p-4 rounded-lg shadow-sm flex flex-col gap-3">
                            <h1 className="text-xl text-blue-300">Me, myself & I</h1>
                            <p>My excitement for innovative software development began little before high school. I realized that software development was my joy and future. After many years of playing games I decided to created a game-server community, based on the game Counter-Strike.</p>
                            <p>I quickly became devoted to develop plugins and web-based systems, I started to improve my creation and I put more and more time into it. During five years as project leader and with the help from hundreds of voluntary moderators, I managed the community, developed game-servers and ensured the comfort of hundreds of thousands of players'.</p>
                            
                            <h1 className="text-xl text-blue-300">Future</h1>
                            <p>I’m looking for new challenging opportunities where I can commit to new ideas and solve complications by best practice. I want to expand my competence to develop software and enhance myself as an individual.</p>
                        </div>

                        {/* <div className="md:w-3/6 flex flex-col gap-4">
                            <div className="bg-gray-900 text-gray-300 p-4 rounded-lg shadow-sm flex flex-col gap-3">
                                <h1 className="text-xl text-hl">Experiences</h1>
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-row gap-8">
                                        <div>
                                            <div>Front-end Web Development</div>
                                            <ul>
                                                <li><span>HTML5</span>, Bootstrap, Bulma</li>
                                                <li><span>CSS3</span>, <span>Tailwind CSS</span></li>
                                                <li><span>Javascript</span>, React, Vue.js</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <div>Back-end Web Development</div>
                                            <ul>
                                                <li><span>NodeJS</span>, <span>PHP</span></li>
                                                <li><span>MySQL</span>, <span>JSON</span></li>
                                                <li>C#, <span>SourcePawn</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-8">
                                        <div>
                                            <div>Hosting</div>
                                            <ul>
                                                <li>Linux, Windows</li>
                                                <li>Apache, WordPress, XenForo</li>
                                                <li><span>SourceMod</span>, <span>CS:GO</span>, FiveM, Minecraft</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <span>Media</span>
                                            <ul>
                                                <li>Photoshop, UI/UX</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </div>

            {/* Projects Section */}
            <section id="projects" className="flex flex-col py-24 bg-gray-200 gap-8 px-6 md:px-24 lg:px-26 xl:px-36 2xl:px-80 3xl:px-102">
                <div className="text-gray-900 hover:text-gray-700 transition duration-200 ease-in-out">
                    <a className="flex flex-row float-left group" href="https://github.com/isakjensen?tab=repositories" target="_blank" rel="noreferrer">
                        <h1 className="font-playfair text-3xl">Projects</h1>
                        <span className="opacity-0 group-hover:opacity-100 pl-2 mt-auto text-xl text-gray-700 transition duration-200 ease-in-out"><i className="fal fa-link"></i></span>
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-6">
                    <div className="lg:w-1/3 lg:border border-gray-300 text-gray-700 lg:p-5 rounded-lg flex flex-col gap-3 lg:gap-6 transform transition duration-500 lg:hover:scale-1015 lg:hover:shadow-sm">
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <h1 className="text-xl text-gray-900 font-medium">Portfolio</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, incidunt quod illum deleniti ut ad similique blanditiis dicta et dolore distinctio temporibus repudiandae pariatur modi maxime. Doloremque enim libero beatae doloribus facilis? Non, asperiores corrupti! Facilis rem beatae omnis sapiente.</p>
                        </div>
                        <div className="flex flex-row gap-3 mt-auto">
                            <div className="flex w-full justify-between my-auto text-sm">
                                <div className="text-gray-400 my-auto">June 2021 – July 2021</div>
                                <div className="flex gap-6 mb-auto">
                                <a href="/" className='text-github border border-gray-300 hover:bg-gray-300 px-3 py-1 rounded-md smooth-hover'>Github</a>
                                    <a href="/" className='text-gray-100 bg-hl hover:bg-blue-500 px-3 py-1 rounded-md smooth-hover'>Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/3 lg:border border-gray-300 text-gray-700 lg:p-5 rounded-lg flex flex-col gap-3 lg:gap-6 transform transition duration-500 lg:hover:scale-1015 lg:hover:shadow-sm">
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <h1 className="text-xl text-gray-900 font-medium">Portfolio</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, incidunt quod illum deleniti ut ad similique blanditiis dicta et dolore distinctio temporibus repudiandae pariatur modi maxime. Doloremque enim libero beatae doloribus facilis? Non, asperiores corrupti! Facilis rem beatae omnis sapiente.</p>
                        </div>
                        <div className="flex flex-row gap-3 mt-auto">
                            <div className="flex w-full justify-between my-auto text-sm">
                                <div className="text-gray-400 my-auto">June 2021 – July 2021</div>
                                <div className="flex gap-6 mb-auto">
                                <a href="/" className='text-github border border-gray-300 hover:bg-gray-300 px-3 py-1 rounded-md smooth-hover'>Github</a>
                                    <a href="/" className='text-gray-100 bg-hl hover:bg-blue-500 px-3 py-1 rounded-md smooth-hover'>Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 lg:border border-gray-300 text-gray-700 lg:p-5 rounded-lg flex flex-col gap-3 lg:gap-6 transform transition duration-500 lg:hover:scale-1015 lg:hover:shadow-sm">
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <h1 className="text-xl text-gray-900 font-medium">Portfolio</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, incidunt quod illum deleniti ut ad similique blanditiis dicta et dolore distinctio temporibus repudiandae pariatur modi maxime. Doloremque enim libero beatae doloribus facilis? Non, asperiores corrupti! Facilis rem beatae omnis sapiente.</p>
                        </div>
                        <div className="flex flex-row gap-3 mt-auto">
                            <div className="flex w-full justify-between my-auto text-sm">
                                <div className="text-gray-400 my-auto">June 2021 – July 2021</div>
                                <div className="flex gap-6 mb-auto">
                                <a href="/" className='text-github border border-gray-300 hover:bg-gray-300 px-3 py-1 rounded-md smooth-hover'>Github</a>
                                    <a href="/" className='text-gray-100 bg-hl hover:bg-blue-500 px-3 py-1 rounded-md smooth-hover'>Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="flex flex-col p-24 gap-8 lg:gap-0 px-6 md:px-24 lg:px-26 xl:px-36 2xl:px-80 3xl:px-102">
                <div className="text-gray-900 hover:text-gray-700 transition duration-200 ease-in-out">
                    <a className="flex flex-row float-left group" href="https://linkedin.com/in/isakjensen" target="_blank" rel="noreferrer">
                        <h1 className="font-playfair text-3xl">Contact</h1>
                        <span className="opacity-0 group-hover:opacity-100 pl-2 mt-auto text-xl text-gray-700 transition duration-200 ease-in-out"><i className="fal fa-link"></i></span>
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    <div className="lg:w-1/3 text-gray-700 lg:py-12 rounded-lg flex flex-col gap-3 lg:gap-6">
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <i className="fab fa-linkedin-in text-3xl text-linkedin"></i>
                            <p>Reach out to me on <span style={{ color: '#2867B2' }} class="font-medium">LinkedIn</span> about anything related to my projects or any hiring questions.</p>
                        </div>
                        <div className="text-sm text-gray-400">
                            <a href="https://linkedin.com/in/isakjensen" class="hover:text-hl smooth-hover" target="_blank" rel="noreferrer">Contact me on LinkedIn</a>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/3 text-gray-700 lg:py-12 rounded-lg flex flex-col gap-3 lg:gap-6">
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <i className="fab fa-google text-3xl text-google"></i>
                            <p>Feel free to send me an email at any time - about anything. I'll gladly respond and I'm interested in waht you have to bring!</p>
                        </div>
                        <div className="text-sm text-gray-400">
                            <a href="mailto:isakludvigjensen@gmail.com" class="hover:text-hl smooth-hover" target="_blank" rel="noreferrer">isakludvigjensen@gmail.com</a>
                        </div>
                    </div>

                    <div className="lg:w-1/3 text-gray-700 lg:py-12 rounded-lg flex flex-col gap-3 lg:gap-6">
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <i className="fab fa-github text-3xl text-github"></i>
                            <p>The majority of projects are publicly posted on my GitHub-page, feel free to check them out!</p>
                        </div>
                        <div className="text-sm text-gray-400">
                            <a href="https://github.com/isakjensen" class="hover:text-hl smooth-hover" target="_blank" rel="noreferrer">Reach out to me on GitHub</a>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        {/* Footer */}
        <footer className="text-center py-4 text-gray-400">Copyright © { new Date().getFullYear() } Isak Jensen</footer>
        
        {/* Detect screen size */}
        <div className="fixed bottom-2 left-2 bg-gray-800 text-gray-400 font-medium p-2 rounded-lg">
            <div className="block md:hidden">SM</div><div className="hidden md:block lg:hidden">MD</div><div className="hidden lg:block xl:hidden">LG</div><div className="hidden xl:block 2xl:hidden">XL</div><div className="hidden 2xl:block">2XL</div>
        </div>
    </div>
  );
}

export default App;
