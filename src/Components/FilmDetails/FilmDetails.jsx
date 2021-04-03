import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function FilmDetails(props) {
    const { id } = useParams();
    const [name, setName] = useState("Default Name");
    const [poster, setPoster] = useState("Default Poster");
    const [description, setDescription] = useState("Default Description");
    const [trailer, setTrailer] = useState("Default Trailer");
    // console.log(id)

    useEffect(() => {
        const newFilm = props.films.filter((e) => e.title === id);
        const { title, description, posterUrl, trailer } = newFilm[0];
        setName(title);
        setDescription(description);
        setPoster(posterUrl);
        setTrailer(trailer);
    }, []);

    return (
        <Fragment>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "35px",
                }}
            >
                <h1>{name}</h1>
                <h2>{description}</h2>
                <img src={poster} alt={poster} style={{ width: "25%" }} />
                <br />
                <iframe
                    width="560"
                    height="315"
                    src={trailer}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                    {" "}
                </iframe>
                <br />
                <Link to="/">
                    <h1 className="btn btn-primary">HOME</h1>
                </Link>
            </div>
        </Fragment>
    );
}

export default FilmDetails;
