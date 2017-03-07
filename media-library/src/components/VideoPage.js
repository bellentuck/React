import React, { PropTypes } from 'react';

// First, we extract videos, onHandleSelectVideo, and selectedVideo from props
// via ES6 destructuring assignment; then, render.
const VideoPage = ({ videos, onHandleSelectVideo, selectedVideo }) => (
  <div className="col-md-6">
    <h2>Videos</h2>

    <div className="selected-video">
      <div id={selectedVideo.id}>
        <h6 className="title">{selectedVideo.description}</h6>
        <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
      </div>
    </div>

    <div className="video-thumbnail">
      {videos.map((video, i) => (
        <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
          <video controls src={video.mediaUrl} alt={video.description} />
        </div>
      ))}
    </div>

  </div>
);

// Define PropTypes for destructured props
VideoPage.propTypes = {
  videos: PropTypes.array.isRequired,
  onHandleSelectVideo: PropTypes.func.isRequired,
  selectedVideo: PropTypes.object.isRequired
};

export default VideoPage;
