import React, { Fragment, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import MovieList from "./Components/MovieList/MovieList";
import AddModal from "./Components/AddModal/AddModal";
import FilmDetails from "./Components/FilmDetails/FilmDetails";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([
        {
            title: "Your name",
            description:
                "Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo.",
            posterUrl:
                "https://media.senscritique.com/media/000016585625/source_big/Your_Name.jpg",
            rate: 5,
            id: 1,
        },
        {
            title: "A Silent Voice",
            description:
                "Nishimiya est une élève douce mais qui elle est harcelée par Ishida, car elle est sourde. Dénoncé, le garçon est à son tour rejeté par ses camarades.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            rate: 5,
            id: 2,
        },
        {
            title: "Weathering with you",
            description:
                "Young high school student, Hodaka flees his island to reach Tokyo. Without money or employment, he tries to survive in the urban jungle and finds a job in a magazine devoted to the paranormal.",
            posterUrl:
                "https://media1.woopic.com/api/v1/images/174%2Fcinemovies%2F20b%2F868%2F09e250563c563466d18e05bd57%2Fmovies-270440-21671107.jpg?format=822x700&quality=85",
            rate: 3,
            id: 3,
        },
        {
            title: "Jujutsu Kaisen",
            description:
                "Jujutsu Kaisen est un shōnen manga de Gege Akutami, prépublié dans le magazine Weekly Shōnen Jump depuis mars 2018 et publié par l'éditeur Shūeisha en volumes reliés.",
            posterUrl:
                "https://fr.web.img3.acsta.net/pictures/20/09/14/10/31/4875617.jpg",
            rate: 5,
            id: 4,
        },
        {
            title: "Sword Art Online",
            description:
                "Sword Art Online est un light novel écrit par Reki Kawahara, également auteur du light novel Accel World, et illustré par abec.",
            posterUrl:
                "https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967424103184295SAO_Small_hq.jpg",
            rate: 4,
            id: 5,
        },
        {
            title: "Great Teacher Onizuka",
            description:
                "Great Teacher Onizuka, often abbreviated as GTO, is a shōnen manga telling the story of Eikichi Onizuka teaching in a school.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/b9/GTO_volume_1.jpg",
            rate: 5,
            id: 6,
        },
    ]);
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState(1);

    const rateStars = (rating) => setRating(rating);
    const getSearch = (search) => setSearch(search);

    const getFilm = (film) => setMovies([...movies, film]);

    console.log(movies);

    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navbar rateStars={rateStars} getSearch={getSearch} />
                        <MovieList
                            movies={movies}
                            rating={rating}
                            search={search}
                        />
                        <AddModal getFilm={getFilm} />
                    </Route>
                    <Route
                        path="/Nav/:id"
                        children={
                            <>
                                <Navbar /> <FilmDetails films={movies} />
                            </>
                        }
                    ></Route>
                    <Route path="/*">
                        <h1
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                margin: "15% ",
                            }}
                        >
                            Unexpected error, go back to{" "}
                            <Link to="/"> home!</Link>
                        </h1>
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
}
export default App;
