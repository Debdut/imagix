import { Component, createRef } from 'preact'

class Video extends Component {
  constructor(props) {
    super(props)
    this.video = createRef()
    this.canvas = createRef()
  }

  componentDidMount = async () => {
    this.start()
  }

  start = async () => {
    const video = this.video.current

    try {
      const stream = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
      video.srcObject = stream
      video.play()
      console.log('Streaming Webcam Feed 🤗')
    } catch (err) {
     console.error(err) 
    }
  }

  stop = () => {
    const stream = this.video.current.srcObject
    const tracks = stream.getTracks()
    
    tracks.forEach(track => {
      track.stop()
    })
  }

  selfie = () => {
    const video = this.video.current
    const canvas = this.canvas.current

    const { videoWidth: width, videoHeight: height } = video

    const context = canvas.getContext('2d')
    canvas.height = height
    canvas.width = width

    context.drawImage(video, 0, 0, width, height)
    const imageURL = canvas.toDataURL('image/png')

    this.stop()
    this.props.setImageURL(imageURL)
  }

  render () {
    return (
      <>
        <video src='#' ref={this.video}> Video Feed Not Available! 😥 </video>
        <button class='btn' onClick={this.selfie}>Capture Selfie</button>
        <canvas class='absolute hidden'
        ref={this.canvas} />
      </>
    )
  }
}

export default Video