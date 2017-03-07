import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {
  selectImageAction, searchMediaAction,
  selectVideoAction } from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css';

// MediaGalleryPage component
class MediaGalleryPage extends Component {
  // Bind custom functions in the component's constructor function
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  // We are using the dispatch method from the store to execute the following tasks, courtesy react-redux. //

  // Dispatch *searchMediaAction* immediately after initital rendering
  componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  // Dispatch *selectImageAction* when any image gets clicked
  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage));
  }

  // Dispatch *selectVideoAction* when any video gets clicked
  handleSelectVideo(selectedVideo) {
    this.props.dispatch(selectVideoAction(selectedVideo));
  }

  // Dispatch *searchMediaAction* with query param iff provided
  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }


  render() {
    // console.log(this.props.images, 'Images');
    // console.log(this.props.videos, 'Videos');
    // console.log(this.props.selectedImage, 'SelectedImage');
    // console.log(this.props.selectedVideo, 'SelectedVideo');
    const { images, selectedImage, videos, selectedVideo } = this.props;
    return (
      <div className="container-fluid">
        {images ? <div>

          <input
            type="text"
            ref={ref => (this.query = ref)}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search Library"
            onClick={this.handleSearch}
          />

          <div className="row">
            <PhotoPage
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={this.handleSelectImage}
            />
            <VideoPage
              videos={videos}
              selectedVideo={selectedVideo}
              onHandleSelectVideo={this.handleSelectVideo}
            />
          </div>

        </div> : 'Loading...'}
      </div>
    );
  }
}

// Define PropTypes - everything used that could be written as "this.props.X"
MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

// Subscribe component to redux store,
// and merge the state into component's props
const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

// Connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(MediaGalleryPage);
