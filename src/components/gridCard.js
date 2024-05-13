const GridCard = (props) => {
    return(
        <>
            <div className="col-md-4">
                <div className="card">
                    <img src={props.img} className="card-img-top"alt=""></img>
                    <div className="card-body">
                         <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis hic aperiam aspernatur. Odio, nam adipisci? Possimus nisi iusto in repellendus harum labore voluptatibus aliquam, accusantium, id quas, aspernatur necessitatibus nesciunt.</p>
                        <a href="#" className="btn btn-warning"></a>
                    </div>

                </div>
            </div>
        </>
    );
}


export default GridCard;