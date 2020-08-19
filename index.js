var ffmpeg = require('fluent-ffmpeg');
// var command = ffmpeg();
exports.handler = async event => {
  try {
    ffmpeg()
      .input('./src/background.jpg')
      .input('./src/audio.mp3')
      .audioCodec('aac')
      .videoCodec('libx264')
      .save('outputfile.mp4')
      // libmp3lame
  // ffmpeg -i background.jpg -i audio.mp3 -acodec aac -vcodec libx264 final.mp4
  // './src/background.jpg'
  // './src/audio.mp3'
  
  } catch (error) {
    return {
      statusCode: 500,
      body: error
    }
  }
}
