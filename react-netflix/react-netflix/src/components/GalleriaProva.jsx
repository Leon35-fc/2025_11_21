import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {

state = {
      films: [],
      activeIndex: 0,
    };
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

  componentDidMount() {
    fetch('path/to/your/database.json')
      .then(response => response.json())
      .then(data => this.setState({ films: data }))
      .catch(error => console.error(error));
  }

  handleNext = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % (this.state.films.length - 5),
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex - 1 + (this.state.films.length - 5)) % (this.state.films.length - 5),
    }));
  };

  render() {
    return (
      <div className="carousel">
        <button className="prev" onClick={this.handlePrev}>
          Prev
        </button>
        <div className="carousel-images">
          {this.state.films.map((film, index) => (
            <div key={film.id} className={`image-container ${index >= this.state.activeIndex && index < this.state.activeIndex + 6 ? 'active' : ''}`}>
              <img src={film.image} alt={film.title} />
            </div>
          ))}
        </div>
        <button className="next" onClick={this.handleNext}>
          Next
        </button>
      </div>
    );
  }
}

export default Carousel;