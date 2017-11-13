import React, { Component } from 'react';
import MinusBtn from '../components/minusBtn';
import PlusBtn from '../components/plusBtn';
import Result from '../components/result';

class CountUP extends Component {
  render() {
    return (
      <div className="reactArea">
        <Result />
        <MinusBtn />
        <PlusBtn />
      </div>
    );
  }
}

export default CountUP;