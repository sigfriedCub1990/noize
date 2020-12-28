import React from "react";
import "./App.css";
import Library from "./Library";
import SongPage from "./SongPage";
import About from "./About";

const App = () => {
  const [ state, setState ] = React.useState({
    about: false,
    song: false,
    isrc: "",
    asrc: "",
    error: false,
    title: ""
  });

  const songClicked = (audio, image, name, err) => {
    setState(prev => ({
      ...prev,
      asrc: audio,
      isrc: image,
      title: name,
      error: err,
      song: true
    }));
  }

  const backClicked = () => {
    setState(prev => ({
      ...prev,
      song: false,
      about: false
    }));
  }

  const aboutClicked = (e) => {
    e.preventDefault();
    setState(prev => ({
      ...prev,
      about: true
    }));
  }

  if (state.song) {
    return (
      <div className="app">
        <SongPage
          isrc={state.isrc}
          asrc={state.asrc}
          title={state.title}
          backClicked={backClicked}
          error={state.error}
        />
      </div>
    );
  } else if (state.about) {
    return (
      <div className="app">
        <About backClicked={backClicked} />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Library
          songClicked={songClicked}
          aboutClicked={aboutClicked}
        />
      </div>
    );
  }
};

export default App;
