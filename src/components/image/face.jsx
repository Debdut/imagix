const Face = ({ imageURL, unsetImageURL, data }) => {
  let {height, width, top, left} = data[0].faceRectangle

  return (
    <div>
      <div class='flex flex-wrap'>
        <div class='w-full lg:w-2/3'>
          <div class='relative'>
            <img class='rounded' src={imageURL} alt='Selfie' />
            <div class='absolute border-solid border-4 border-green-400' style={{ height, width, top, left }}>.</div>
          </div>
        </div>
        <FaceData data={data} />
      </div>
      <button class='btn mx-auto mt-10' onClick={unsetImageURL}>Retake</button>
    </div>
  )
}


const FaceData = ({ data }) => {
  if (data.length === 0) {
    return null
  }

  const { smile, gender, age } = data[0].faceAttributes

  return (
    <div class='w-full lg:w-1/3 text-left pt-10 px-16'>
      <h3>Face Data</h3>
      <ul class='list-none'>
        <li> <em>Smile</em> {smile ? '😄 Yes' : '🙁 No'} </li>
        <li> <em>Gender</em> {(gender === 'male') ? '👦 Male' : '👧 Female'} </li>
        <li> <em>Age</em> {age} </li>
      </ul>
    </div>
  )
}

export default Face