import post1 from "../../assets/images/post-1.jpg";
import post2 from "../../assets/images/post-2.jpg";
import post3 from "../../assets/images/post-3.jpg";
function Blog(){
    return(
     <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
              <img src={post1} className="img-fluid" alt="post 1" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title 1</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Milad Bahrami</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
              <img src={post2} className="img-fluid" alt="post 2" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title 1</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Milad Bahrami</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src={post3} className="img-fluid" alt="post 3" /> 
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title 1</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Milad Bahrami</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Blog;