import React, { Component } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends Component {
    state = {
        movies: [],
    };
    componentDidMount() {
        // fetch('https://www.omdbapi.com/?apikey=ca911b66&s=matrix')
        //     .then((response) => response.json())
        //     .then((data) => this.setState({ movies: data.Search }));
    }
    searchMovies = (str) => {
        fetch(`https://www.omdbapi.com/?apikey=ca911b66&s=${str}`)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data.Search))
                    this.setState({ movies: data.Search });
            })
            .catch((error) => console.error(error.message));
    };
    render() {
        const { movies } = this.state;
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {movies.length ? <Movies movies={movies} /> : <Preloader />}
            </main>
        );
    }
}

export default Main;
