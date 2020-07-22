const Image = ({ imageURL, unsetImageURL }) => {
  return (
    <>
      <img src={imageURL} alt='Selfie' />
      <button onClick={unsetImageURL}> Try Again </button>
    </>
  )
}

export default Image