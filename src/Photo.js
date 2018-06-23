import React, { Component } from 'react';
class Photo extends Component{
	constructor(){
		super();
		/*通过state来刷新使其据有随机的rotate，top，left，z-index值*/
		this.state = {
			rotate:[],
			left:[],
			top:[],
			zIndex:[],
			rotateY:[],
			index:0
		}
	}
	componentDidMount(){
		this.random();
	}
	/*随机旋转的函数*/
	random(needI){
		/*点击按钮对应的那张图片放在最中间和最上面*/
		let newRotate = [],newLeft = [],newTop = [],newIndex = [],newRotateY=[];
		this.props.msg.src.forEach((v,i)=>{
			newRotateY.push('0');
			if(i==needI){
				newRotate.push(0);
				newLeft.push('calc(50% - 170px)');
				newTop.push('40%');
				newIndex.push('30');
			}else{
				newRotate.push(Math.random()*-720+360);
				newLeft.push(Math.random()*window.innerWidth-170);
				newTop.push(Math.random()*window.innerHeight-208);
				newIndex.push(i);
			}

		});
		this.setState({
			rotate:newRotate,
			left:newLeft,
			top:newTop,
			zIndex:newIndex,
			rotateY:newRotateY
		});
	}
	click(i,e){
		/*判断有没有某个类*/
		if(e.target.classList.contains('active')){
			/*添加类*/
			if(e.target.classList.contains('bactive')){
				e.target.classList.remove('bactive');
				this.state.rotateY.splice(i,1,0);
			}else{
				e.target.classList.add('bactive');
				this.state.rotateY.splice(i,1,180);
			}
			this.setState({
				rotateY:this.state.rotateY
			});
		}else{
			this.random(i);
			this.setState({
				index:i
			});
		}	
	}
	render(){
		/*定义两个数组，一个来存放图片列表，另一个里存放小圆点列表*/
		let imgsLi = [],oLi = [];
		this.props.msg.src.forEach((v,i)=>{
			imgsLi.push(<li key={i} style={{transform:'rotateY('+this.state.rotateY[i]+'deg) rotate('+this.state.rotate[i]+'deg)',left:this.state.left[i],top:this.state.top[i],zIndex:this.state.zIndex[i]}}>
				<div className='zm'><img src={v} /><div className='text'>{this.props.msg.text[i]}</div></div>
				<div className='bm'><div className='btext'>{this.props.msg.btext[i]}</div></div>
				</li>);
			oLi.push(<li key={i} className={this.state.index==i?'active':''} onClick={this.click.bind(this,i)}></li>);
		});
		return (
				<div>
					<ul className='img' ref='myUl'>{imgsLi}</ul>
					<ol className='point'>{oLi}</ol>
				</div>
			);
	}
}
export default Photo;