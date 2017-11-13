import React, { Component } from 'react'

const click = () => {
  console.log(2);
}

class MinusBtn extends Component {
  render() {
    return (
      <div>
        <button onClick={click}>-1</button>
      </div>
    )
  }
}

export default MinusBtn
