import React from "react";
import Movies from "./Movies"
import MovieListing from "./MovieListing"
// // Helper functions
import { getAllMovies, deleteMovie } from "../../api/fetch";
import { Switch, Route, withRouter } from "react-router-dom";

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loadingError: false,
    };
  }

  componentDidMount() {
    getAllMovies()
      .then((movies) => this.setState({ movies, loadingError: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loadingError: true });
      });
  }

  handleDelete = (event) => {
    const value = event.target.value;
    try {
      deleteMovie(value).then(() => {
        const index = this.state.movies.findIndex(
          (movie) => movie.id === value
        );
        const updatedMovies = [...this.state.movies];
        updatedMovies.splice(index, 1);
        this.setState({
          movies: updatedMovies,
        });
        //navigate("/movies") is new way
        this.props.history.push("/movies");
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Switch>
        <Route path="/movies/:id">
          <Movies movies={this.state.movies} handleDelete={this.handleDelete} />
        </Route>
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <section className="movies-index">
            {this.state.movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      </Switch>
    );
  }
}

export default withRouter(MoviesIndex);
 