import { Component } from 'preact'

import { dataURItoBlob } from '../../util'
import { postImage } from '../../api'

import Loader from './loader'
import Face from './face'

class Image extends Component {
  state = {
    data: null
  }

  componentDidMount = () => {
    this.getFaceData()
  }

  getFaceData = async () => {
    const blob = dataURItoBlob(this.props.imageURL)
    try {
      const response = await postImage(blob)
      const data = JSON.parse(response.response)
      this.setState({ data })
    } catch (err) {
      console.log(err)
    }
  }

  render (props, { data }) {
    return data
      ? <Face { ...props } data={data} />
      : <Loader />
  }
}



export default Image