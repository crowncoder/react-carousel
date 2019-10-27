# react-carousel
A  carousel component for react project
# run the demo
``` shell
$ npm install
$ npm start 
```
# usage
``` javascript
const items = [   
      {     
        src: require('./images/demo1.jpg'),
        alt: 'images-1',      
      },     
      {
        src: require('./images/demo2.jpg'),
        alt: 'images-2',
      },     
      {
        src: require('./images/demo3.jpg'),
        alt: 'images-3',
      },   #图片数组，有几张图片放几张         
    ];  
React.render(
  <Slider
    items={items}
    speed={1.5}       #轮播切换图片的速度
    delay={3}         #自动轮播时候停留的时间
    pause={true}      #鼠标放上图片是否停止自动轮播
    autoplay={true}   #是否自动轮播
    dots={true}       #是否需要下面的轮播点点位
    arrows={true}     #是否需要左右点击箭头
  />,
  
  document.getElementById("root")
);
```
