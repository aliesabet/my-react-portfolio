import ServiceBox from "../servicebox/ServiceBox";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
          Building modern web applications with React, Python, APIs, and clean software
          engineering practices.
          </p>
        </div>
        <div className="row">
          <ServiceBox
            icon="devicon-html5-plain colored"
            title="Frontend Development"
            desc="Creating modern and responsive user interfaces using HTML, CSS, JavaScript and React."
          />
          <ServiceBox
            icon="devicon-react-original colored"
            title="React Development"
            desc="Building reusable React components and interactive web applications with modern frontend technologies."
          />
          <ServiceBox
            icon="devicon-python-plain colored"
            title="PYTHON DEVELOPMENT"
            desc="Developing Python applications, automation scripts, data processing tools and machine learning projects."
          />
          <ServiceBox
            icon="bi bi-share-fill"
            title="API DEVELOPMENT"
            desc="Designing and working with RESTful APIs to connect frontend applications with backend services."
          />
          <ServiceBox
            icon="devicon-mysql-plain-wordmark colored"
            title="DATABASE MANAGEMENT"
            desc="Working with MySQL databases and designing efficient data structures for applications."
          />
          <ServiceBox
            icon="devicon-tensorflow-original colored"
            title="MACHINE LEARNING"
            desc="Exploring machine learning algorithms and applying AI techniques to solve real-world problems."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
