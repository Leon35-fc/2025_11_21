import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselItem} from "react-bootstrap";

const URL = 'https://www.omdbapi.com/?apikey=caefe34f&s=Star%20Wars'

const dbFilms = []

class Gallery extends Component {

    state = {
    films: [],
    isLoading: true,
    error: null
  }
    filmFetch () {
        fetch (URL)
        .then ((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw new Error("Network response was not ok" + response.status)
                    }   
                })
        .then ((data) => {
            console.log (data.Search)
            // data.Search.map (film => dbFilms.push (film))
            this.setState({ films: data.Search, isLoading: false })
            console.log ('FILM in this.state.films', this.state.films)
        })
        .catch (error => console.error ("Fetch error: ", error))
    }

    componentDidMount () {
        this.filmFetch()
    }

    render() {

        const { films } = this.state

        return (
            <>
                <p>SONO LA GALLERIA DI FILM</p>
                <Carousel>
                    {films.map (film => (
                        <CarouselItem key={film.imdbID}>
                            <img src={film.Poster} alt={film.Title} />
                        </CarouselItem>
                    ))}
                </Carousel>
            </>
        )
    }
}

export default Gallery