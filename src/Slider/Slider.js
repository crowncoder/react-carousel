import React, { PureComponent } from 'react';

require('./Slider.scss');

import SliderItem from './SliderItem/SliderItem';
import SliderDots from './SliderDots/SliderDots';
import SliderArrows from './SliderArrows/SliderArrows';
import _ from 'lodash';

export default class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      nowLocal: 0,
      repeat:false
    };
  }
  static getDerivedStateFromProps(nextProps,prevState) {
    if(nextProps.items.length>1){
      // 将第一张图添加到最后一张以实现无缝切换
      let tempItems = _.clone(nextProps.items);
      tempItems.push(tempItems[0]);
      return {items:tempItems}
    }
  }
  // 向前向后多少
  turn(n) {
    var _n = this.state.nowLocal + n;
    if(_n < 0) {
      _n = _n + this.state.items.length-1;
    }
    if(_n >= this.state.items.length) {
      _n = _n - this.state.items.length;
    }

    this.setState({nowLocal: _n});
    if(_n===this.props.items.length){
      setTimeout(()=>{
        this.setState({nowLocal: 0,repeat:true});
      },this.props.speed*1000)
    }
  }

  // 开始自动轮播
  goPlay() {
    if(this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, this.props.delay * 1000);
    }
  }

  // 暂停自动轮播
  pausePlay() {
    clearInterval(this.autoPlayFlag);
  }

  componentDidMount() {
    this.goPlay();
  }

  render() {
    const count = this.state.items.length;

    const itemNodes = this.state.items.map((item, idx) => {
      return <SliderItem item={item} count={count} key={'item' + idx} />;
    });

    const arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;

    const dotsNode = <SliderDots turn={this.turn.bind(this)} count={count-1} nowLocal={this.state.nowLocal===3?0:this.state.nowLocal} />;
    
    return (
      <div
        className="slider"
        onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
          <ul id="carousel" style={{
              left: -100 * this.state.nowLocal + "%",
              transitionDuration:(this.state.nowLocal===0 && this.state.repeat? 0 :this.props.speed) + "s",
              width: this.state.items.length * 100 + "%"
            }}>
              {itemNodes}
          </ul>
          {this.props.arrows?arrowsNode:null}
          {this.props.dots?dotsNode:null}
        </div>
      );
  }
}

Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
Slider.autoPlayFlag = null;
