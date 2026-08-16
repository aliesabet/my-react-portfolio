import aboutImg from "../../assets/images/about.jpeg";
import "./About.css";
function About() {
  return (
    <section id="about">
      <div className="about">
        <h2 className="title">About Me</h2>
        <img className="about-img" src={aboutImg} alt="milad" />
        <p className="info">
          I am a Software Engineer passionate about building modern web
          applications. I work with JavaScript, React, Python, and database
          technologies. My goal is to create clean, scalable, and user-friendly
          software solutions. I am also exploring Artificial Intelligence and
          Machine Learning to build smarter applications.
        </p>
      </div>
    </section>
  );
}
export default About;
