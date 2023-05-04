import music from "../../assets/Welcome.mp3"

function Music() {
  let audio = new Audio(music);
  const handlePlay = () => {
    audio.play();
  };
  const handlePause = () => {
    audio.pause();
  };
  return (
    <div className="musicContainer">
      <button className="musicButton" onClick={handlePlay}>
        Play
      </button>
      <button className="musicButton" onClick={handlePause}>
        Pause
      </button>
    </div>
  );
}
export default Music;