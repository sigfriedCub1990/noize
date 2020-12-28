import React from "react";
import "./Library.css";
import SongCard from "./SongCard";

const Library = (props) => {
  const audios = [];
  const images = [];
  const list = [];

  const titles = [
    "Waterfall in a forest",
    "Thunderstorm & Rain",
    "Cafe Music",
    "Brown Noise",
    "Rainy Day",
    "Medieval Town",
    "Celestial Noise",
    "Metropolis Soundscape",
    "Snowy Blizzard",
    "Forest Ambience"
  ];

  for (let i = 1; i <= 10; i++) {
    audios.push(
      `https://backendlessappcontent.com/${process.env.REACT_APP_BACKEND_KEY_1}/${process.env.REACT_APP_BACKEND_KEY_2}/files/media/a${i}.mp3`
    );
    images.push(`./images/i${i}`);
    list.push({
      audio: audios[i - 1],
      image: images[i - 1],
      title: titles[i - 1],
    });
  }

  const songs = list.map((song, idx) => {
    const {
      title,
      audio,
      image,
    } = song;

    return (
      <SongCard
        key={idx}
        songClicked={props.songClicked}
        asrc={audio}
        isrc={image}
        title={title}
        err={false}
      />
    );
  });

  const finalSongs = [];

  for (let i = 0; i < 10; i += 3) {
    finalSongs.push(
      <div className="row" key={i}>
        {songs[i]}
        {songs[i + 1] ? songs[i + 1] : undefined}
        {songs[i + 2] ? songs[i + 2] : undefined}
      </div>
    );
  }

  return (
    <div className="library">
      <div className="header-text">
        <h2>Simple background/white noise to relax or focus</h2>
        <p>
          Find out more about this project in the{" "}
          <a href="About Page" onClick={e => props.aboutClicked(e)}>
            About
          </a>{" "}
          section and if you’re interested you can find the source code on{" "}
          <a href="https://github.com/kartiknair/noize">GitHub</a>
        </p>
      </div>
      {finalSongs}
    </div>
  );
};

export default Library;
