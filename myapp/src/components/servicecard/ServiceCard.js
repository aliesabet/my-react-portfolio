function ServiceCard({title, desc}) {
    return(
        <div className="servicebox">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}
export default ServiceCard;