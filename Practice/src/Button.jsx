function Button() {

  let click = (e) => {
    e.target.textContent="OUCH!"
  }

  return (<button onDoubleClick={(e) => click(e)}>Click Me</button>)
}

export default Button