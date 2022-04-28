import React, { Component } from 'react';
import Movies from '../components/Movies';

class Main extends Component {
    state = {
        movies: [],
    };
    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=ca911b66&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }
    render() {
        const { movies } = this.state;
        return (
            <main className="container content">
                <Movies movies={movies} />
            </main>
        );
    }
}

export { Main };
