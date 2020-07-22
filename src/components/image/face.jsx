const Face = ({ imageURL, unsetImageURL, data }) => {
  const { smile, gender, age } = data.faceAttributes
  return (
    <div class='flex flex-wrap'>
      <div class='w-full lg:w-1/2'>
        <img class='mx-auto my-10 rounded' src={imageURL} alt='Selfie' />
        <button class='btn' onClick={unsetImageURL}>Retake</button>
      </div>
      <div class='w-full lg:w-1/2 text-left pt-10 px-16'>
        <h3>Face Data</h3>
        <ul class='list-none'>
          <li> <em>Smile</em> {smile ? '😄 Yes' : '🙁 No'} </li>
          <li> <em>Gender</em> {(gender === 'male') ? '👦 Male' : '👧 Female'} </li>
          <li> <em>Age</em> {age} </li>
        </ul>
      </div>
    </div>
  )
}

export default Face