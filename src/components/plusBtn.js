import React, { Component } from 'react';

const click = () => {
  console.log(1);
}

class PlusBtn extends Component {
  render() {
    return (
      <div className="test">
        <button onClick={click}>+1</button>
      </div>
    )
  }
}

export default PlusBtn