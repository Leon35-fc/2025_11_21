import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselItem, Container, Row, Col} from "react-bootstrap";

const URL = 'https://www.omdbapi.com/?apikey=caefe34f&s=Star%20Wars&type=movie'

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
            console.log ('FILM in dbFilms', dbFilms)
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
                <p className="fs-4 text-white mb-2 mt-5">{this.props.barTitle}</p>
                {/* <Carousel>
                    {films.map (film => (
                        <CarouselItem key={film.imdbID}>
                            <img src={film.Poster} alt={film.Title} />
                        </CarouselItem>
                    ))}
                </Carousel> */}
                <Container>
                    <Row>
                        <Col xs={2}>
                            {films[0] && <img src={films[0].Poster} alt={films[0].Title} className="img-fluid rounded-2 me-2 mb-2"/>}
                        </Col>
                        <Col xs={2}>
                            {films[1] && <img src={films[1].Poster} alt={films[1].Title} className="img-fluid rounded-2 me-2 mb-2"/>}
                        </Col>
                        <Col xs={2}>
                            {films[2] && <img src={films[2].Poster} alt={films[2].Title} className="img-fluid rounded-2 me-2 mb-2"/>}
                        </Col>
                        <Col xs={2}>    
                            {films[3] && <img src={films[3].Poster} alt={films[3].Title} className="img-fluid rounded-2 me-2 mb-2"/>}
                        </Col>
                        <Col xs={2}>
                            {films[4] && <img src={films[4].Poster} alt={films[4].Title} className="img-fluid rounded-2 me-2 mb-2"/>}
                        </Col>
                        <Col xs={2}>
                            {films[5] && <img src={films[5].Poster} alt={films[5].Title} className="img-fluid rounded-2 me-2 mb-2"/>}   
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Gallery