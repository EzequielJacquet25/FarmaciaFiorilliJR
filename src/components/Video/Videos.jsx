import { memo } from "react";
import "./Video.css";

const Videos = memo(function Videos({ video, poster = "/placeholder-product.svg" }) {
  return (
    <div className="video-wrapper">
      <video
        className="video"
        autoPlay
        controls
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={`/videos/${video}`} type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    </div>
  );
});

export default Videos;
