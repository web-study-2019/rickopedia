import React from "react";
import "./App.css";
import List from "./components/List";
import { CircularProgress } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            loading: false,
            list: json.results,
          });
        });
    }, 1000);
  }

  getLoader() {
    return <CircularProgress />;
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          this.getLoader()
        ) : (
          <List items={this.state.list} />
        )}
      </div>
    );
  }
}

export default App;
