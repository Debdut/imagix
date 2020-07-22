const KEY = '6d96d4bcd30f44e6bc8ee73b889a3c0f'
const API_ENDPOINT_URL = 'https://trust-stamp-face.cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=age,gender,smile&recognitionModel=recognition_02'

export const postImage = (blob) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return
    }

    if (xhr.status >= 200 && xhr.status < 300) {
      resolve(xhr)
    } else {
      reject({ status: xhr.status, statusText: xhr.statusText })
    }
  }

  xhr.open('POST', API_ENDPOINT_URL)
  xhr.setRequestHeader('Content-Type', 'application/octet-stream')
  xhr.setRequestHeader('Ocp-Apim-Subscription-Key', KEY)
  xhr.send(blob)
})