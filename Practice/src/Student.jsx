import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Working Status: {props.employStatus ? "Yes" : "No"}</p>
        </div>
    )
}

Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    employStatus: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    employStatus: false
}

export default Student