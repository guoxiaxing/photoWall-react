import React, { Component } from 'react';
import './App.css';
// 引入一个新组建
import Photo from './Photo.js';
//定义一个对象来存储数据信息(图片地址，图片正面文字，图片背面文字)
let imgUrl = {
  src:['imgs/1.jpg','imgs/2.jpg','imgs/3.jpg','imgs/4.jpg','imgs/5.jpg','imgs/6.jpg','imgs/7.jpg'],
  text:['这是第一张图片','这是第二张图片','这是第三张图片','这是第四张图片','这是第五张图片','这是第六张图片','这是第七张图片'],
  btext:['大表姐好美','大表姐好美','大表姐好美','大表姐好美','大表姐好美','大表姐好美','大表姐好美']
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Photo msg={imgUrl}/>
      </div>
    );
  }
}

export default App;
