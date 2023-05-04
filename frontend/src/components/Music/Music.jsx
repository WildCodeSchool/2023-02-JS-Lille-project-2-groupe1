import music from "../../assets/Welcome.mp3";

function Music() {
  const audio = new Audio(music);
  const handlePlay = () => {
    audio.play();
  };
  const handlePause = () => {
    audio.pause();
  };

  return (
    <div className="musicContainer">
      <button className="musicButton" type="button" onClick={handlePlay}>
        Play
      </button>
      <button className="musicButton" type="button" onClick={handlePause}>
        Pause
      </button>
    </div>
  );
}
export default Music;
