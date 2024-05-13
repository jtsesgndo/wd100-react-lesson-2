import img1 from "./../img/1.png";
import img2 from "./../img/2.png";
import img3 from "./../img/3.png";
import img4 from "./../img/4.png";
import img5 from "./../img/5.png";

import GridCard from "./gridCard";
const BodyContent = () => {
    return(

        <>
            <div className="container-fluid bg-dark py-5">
                <div className="container">
                    <h1 className ="text-warning">Top 5 Anime of the 
                    Week</h1>
                    <div className="row g-5">
                        <GridCard img={img1}>Anime 1</GridCard>
                        <GridCard img={img2}>Anime 2</GridCard>
                        <GridCard img={img3}>Anime 3</GridCard>
                        <GridCard img={img4}>Anime 4</GridCard>
                        <GridCard img={img5}>Anime 5</GridCard>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyContent;