import { Component } from 'preact'

import { dataURItoBlob } from '../util'
import { postImage } from '../api'

class Image extends Component {

  componentDidMount = async () => {
    const data = await this.getFaceData()
    console.log(data)
  }

  getFaceData = async () => {
    const blob = dataURItoBlob(this.props.imageURL)
    try {
      const response = await postImage(blob)
      if (response.status === 200) {
        const data = JSON.parse(response.response)
        return data
      }
      throw new Error(`Response Status ${response.status}`)
    } catch (err) {
      console.log(err)
    }
    
    return
  }



  render ({ imageURL, unsetImageURL }) {
    return (
      <>
        <img src={imageURL} alt='Selfie' />
        <button onClick={unsetImageURL}> Try Again </button>
      </>
    )
  }
}

export default Image