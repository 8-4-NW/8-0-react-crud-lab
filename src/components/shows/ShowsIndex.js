import React from "react";
import error from "../common/Error.js";
// Helper functions
import { getAllShows } from "../../api/fetch";
import ShowListing from "./ShowListing";

class ShowsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      loadingError: false,
    };
  }

  componentDidMount() {
    getAllShows()
      .then((shows) => this.setState({ shows, loadingError: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loadingError: true });
      });
  }

  render() {
    return <p>Shows List</p>;
  }
}

export default ShowsIndex;
