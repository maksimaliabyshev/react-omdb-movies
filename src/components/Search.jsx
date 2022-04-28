import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: '',
        type: 'all',
    };
    handleKey = (event) => {
        if (String(event.key).toLocaleLowerCase() === 'enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };
    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder="search"
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className="btn search-btn teal darken-1"
                            onClick={() =>
                                this.props.searchMovies(
                                    this.state.search,
                                    this.state.type
                                )
                            }
                        >
                            Search
                        </button>
                    </div>
                    <div className="search-type" onClick={this.handleType}>
                        <p>
                            <label>
                                <input
                                    className="with"
                                    name="type"
                                    type="radio"
                                    data-type="all"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'all'}
                                />
                                <span>All</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    className="with"
                                    name="type"
                                    type="radio"
                                    data-type="movie"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'movie'}
                                />
                                <span>Movie</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    className="with"
                                    name="type"
                                    type="radio"
                                    data-type="series"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'series'}
                                />
                                <span>Series</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    className="with"
                                    name="type"
                                    type="radio"
                                    data-type="game"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'game'}
                                />
                                <span>Game</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
