const KEY = '6d96d4bcd30f44e6bc8ee73b889a3c0f'
const API_ENDPOINT_URL = 'https://trust-stamp-face.cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise&recognitionModel=recognition_02'

export const postImage = (blob) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => resolve(xhr)
  xhr.onerror = reject
  xhr.open('POST', API_ENDPOINT_URL)
  xhr.setRequestHeader('Content-Type', 'application/octet-stream')
  xhr.setRequestHeader('Ocp-Apim-Subscription-Key', KEY)
  xhr.send(blob)
})