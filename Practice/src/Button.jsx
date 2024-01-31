function Button() {
    let styles = {
        backgroundColor: "hsl(200, 79%, 42%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer"
    }
    return (
        <button style={styles}>click me</button>
    )
}

export default Button