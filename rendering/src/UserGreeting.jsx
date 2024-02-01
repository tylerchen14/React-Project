import propTypes from 'prop-types';


function UserGreeting(props) {

    let welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    let loginMessage = <h2 className="login-prompt">Please log in to continue</h2>

    return (
        props.isLoggedIn ? welcomeMessage : loginMessage
    )
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting