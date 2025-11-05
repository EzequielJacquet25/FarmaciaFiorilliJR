import "../App.css";

const Videos = ({ video }) => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <video
        className="video"
        style={{ borderRadius: "20px" }}
        autoPlay
        controls
        muted
        loop
      >
        <source src={`/videos/${video}`} type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    </div>
  );
};

export default Videos;
