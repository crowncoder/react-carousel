# react-carousel
a  carousel component 
# run the demo
1. npm install
2. npm start
# config
  //config image source
  const IMAGE_DATA = [
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
    },
  ];
  render(
    <Slider
      items={IMAGE_DATA}
      speed={1}
      delay={2}
      pause={true}
      autoplay={true}
      dots={true}
      arrows={true}
    />,
   document.getElementById('root')
  );
