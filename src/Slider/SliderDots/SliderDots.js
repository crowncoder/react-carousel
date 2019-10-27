import React, { PureComponent } from 'react';

export default class SliderDots extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleDotClick(i) {
    const option = i - this.props.nowLocal;
    this.props.turn(option);
  }

  render() {
    let dotNodes = [];
    const { count, nowLocal } = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={"slider-dot" + (i === nowLocal?" slider-dot-selected":"")}
          onClick={this.handleDotClick.bind(this, i)}>
        </span>
      );
    }
    return (
      <div className="slider-dots-wrap">
        {dotNodes}
      </div>
    );
  }
}
