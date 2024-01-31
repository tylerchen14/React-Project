import profile_pic from './img/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profile_pic} alt="profile picture"></img>
            <h2 className='card-title'>Tyler</h2>
            <p className='card-text'>I study programming and play video games</p>
        </div>
    )
}

export default Card