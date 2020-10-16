import React, {Component} from "react"
import {CopyToClipboard} from "react-copy-to-clipboard"
import {Link} from "react-router-dom"
import {withStyles} from "@material-ui/styles"
import styles from "./styles/ColorBoxStyles"


class ColorBox extends Component{
	constructor(props){
		super(props)
		this.state = {
			isCopying: false
		}
		this.changeCopyState = this.changeCopyState.bind(this);
	}
	
	changeCopyState(){
		this.setState({isCopying: true}, () => {
			setTimeout(() => this.setState({isCopying: false}), 1500);
		})
	}
	
	render(){
		const style = {
			backgroundColor: this.props.color[this.props.format]
		}

		return (
			<CopyToClipboard text={this.props.color[this.props.format]} onCopy={this.changeCopyState}>
				<div style={style} className={`${this.props.classes.colorBox}`} >
					<div style={style} className={`${this.props.classes.copyOverlay} ${this.state.isCopying && this.props.classes.showOverlay}`}></div>
					<div className={`${this.props.classes.copyMessage} ${this.state.isCopying && this.props.classes.showCopyMessage} ${this.props.classes.text}`}>
						<h1>Copied!</h1>
						<p>{this.props.color[this.props.format]}</p>
					</div>
					<div>
						<button className={`${this.props.classes.copyButton} ${this.props.classes.text}`}>Copy</button>
						<span className={`${this.props.classes.name} ${this.props.classes.text}`}>{this.props.color.name}</span>
					</div>
					{this.props.showLink && <Link to={`/palette/${this.props.paletteId}/${this.props.color.id}`} onClick={evt => evt.stopPropagation()}>
						<span className={`${this.props.classes.seeMore} ${this.props.classes.text}`}>MORE</span>
					</Link>}
				</div>
			</CopyToClipboard>	
		)
	}
}

export default withStyles(styles)(ColorBox)