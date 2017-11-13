import React, { Component } from 'react';
import MinusBtn from '../components/minusBtn';
import PlusBtn from '../components/plusBtn';
import Result from '../components/result';

console.log(MinusBtn)

class CountUP extends Component {
  render() {
    return (
      <div>
        <PlusBtn />
        <MinusBtn />
      </div>
    );
  }
}

export default CountUP;