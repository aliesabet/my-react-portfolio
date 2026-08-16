import "./Blogbox.css"
function Blogbox({image,title,description,author,date}){
    return(

            <div className="blog-box">
              <div className="blog-img">
              <img src={image} className="img-fluid" alt="post 1" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{title}</h3>
                <p className="blog-desc">
                    {description}
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author"> {author}</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> {date}
                </div>
              </div>
            </div>

    )
}
export default Blogbox;