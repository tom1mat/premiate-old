import React from 'react';
import { WebView } from 'react-native';

class VideoPlayer extends React.Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
  };

    render() {
      var html = require('./YoutubeApi.html');
      return (
        <WebView
          style={{ flex: 1 }}
          source={html}
        />
      );
  }
}
export default VideoPlayer;
