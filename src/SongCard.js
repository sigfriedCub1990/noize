import React from "react";

const SongCard = (props) => {
  const [state, setState] = React.useState({
    err: false,
  });


  React.useEffect(() => {
    const videos = document.querySelectorAll("video");
    for (let i = 0; i < videos.length; i++) {
      videos[i].addEventListener("error", () => {
        setState(prev => ({
          ...prev,
          err: true
        }));
      });
    }
  }, []);

  const videoSrc = require(`${props.isrc}.mp4`).default;
  const imageSrc = require(`${props.isrc}.gif`).default;

  return (
    <div
      className="song"
      onClick={e =>
        props.songClicked(
          props.asrc,
          props.isrc,
          props.title,
          state.err
        )
      }
    >
      {state.err ? (
        <img
          className="image"
          src={imageSrc}
          alt="Relaxing GIF"
          title="Your browser does not support the <video> tag"
        />
      ) : (
        <video
          className="image"
          src={videoSrc}
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
      )}

      <h4>{props.title}</h4>
    </div>
  );
}

export default SongCard;
