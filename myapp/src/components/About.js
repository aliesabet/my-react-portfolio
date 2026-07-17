import aboutImg from "../assets/images/about.jpeg";
function About(){
    return(
            <section id="about">
      <div className="about">
        <h2 className="title">About Me</h2>
        <img className="about-img" src={aboutImg} alt="milad" />
        <p className="info">

Hello, I'm Ali Sabet, a Software Engineer with a strong passion for technology, web development, and artificial intelligence.

My journey in software development began with a curiosity about how digital products are built and has evolved into a continuous pursuit of learning and creating practical solutions. I have experience working with HTML, CSS, JavaScript, TypeScript, React, Next.js, Python, MySQL, Git, and Linux.

I enjoy building modern, responsive, and user-friendly web applications that combine clean design with efficient functionality. My current focus is on mastering modern frontend development with React and Next.js while expanding my expertise in backend technologies and AI-powered systems.

Beyond coding, I am passionate about problem-solving, continuous learning, and transforming ideas into real-world products. I believe that technology should simplify people's lives and create meaningful value.

My goal is to grow as a professional software engineer, contribute to impactful projects, and eventually specialize in Artificial Intelligence and advanced software systems.

        </p>
      </div>
    </section>
    );
}
export default About;