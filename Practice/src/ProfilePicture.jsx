
function ProfilePicture() {

  let imgUrl = './img/pokeball.webp'
  let click = (e) => {
    e.target.style = "display:none"
  }

  return (
    <img onClick={(e) => click(e)} src={imgUrl}></img>
  )
}

export default ProfilePicture