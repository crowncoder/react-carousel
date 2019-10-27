import React, { Component } from 'react';

export default class SliderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, item } = this.props;
    const width = 100 / count + '%';
    return (
      <li className="slider-item" style={{width: width}}>
        <img src={item.src} alt={item.alt} />
      </li>
    );
  }
}
