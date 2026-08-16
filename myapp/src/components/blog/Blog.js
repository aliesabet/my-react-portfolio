import Blogbox from "../blogbox/Blogbox";
import post1 from "../../assets/images/post-1.jpg";
import post2 from "../../assets/images/post-2.jpg";
import post3 from "../../assets/images/post-3.jpg";

function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Discovering modern technologies, building projects, and sharing my
            development journey.
          </p>
        </div>
        <div className="row">
          <div className="col-4">
            <Blogbox
              image={post1}
              title="Building Modern React Applications"
              description="Learning and applying component-based architecture, reusable components, and modern frontend development techniques."
              author="Ali Sabet"
              date="10 min"
            />
          </div>
          <div className="col-4">
            <Blogbox
              image={post2}
              title="Python and Machine Learning Projects"
              description="Exploring Python programming, data analysis, and machine learning algorithms to create intelligent solutions."
              author="Ali Sabet"
              date="10 min"
            />
          </div>
          <div className="col-4">
            <Blogbox
              image={post3}
              title="My Journey as a Software Engineer
"
              description="Sharing my experience learning web development, software engineering concepts, and new technologies."
              author="Ali Sabet"
              date="10 min"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
