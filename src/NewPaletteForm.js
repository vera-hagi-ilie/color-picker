import React, {Component} from "react"
import {arrayMove} from "react-sortable-hoc"
import {Link} from "react-router-dom"
import PaletteFormNavbar from "./PaletteFormNavbar"
import DraggableColorList from "./DraggableColorList"
import ColorPickerForm from "./ColorPickerForm"
import styles from "./styles/NewPaletteFormStyles"

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import seedColors from "./seedColors"


class NewPaletteForm extends Component{
	static defaultProps = {
		maxColors: 20
	}

	constructor(props){
		super(props)
		this.state = {
    		open: true,
			colors: seedColors[0].colors
  		};
		this.addNewColor = this.addNewColor.bind(this)
		this.savePalette = this.savePalette.bind(this)
		this.deleteColor = this.deleteColor.bind(this)
		this.onSortEnd = this.onSortEnd.bind(this)
		this.clearColors = this.clearColors.bind(this)
		this.addRandomColor = this.addRandomColor.bind(this)
	}
	
  	handleDrawerOpen = () => {
    	this.setState({ open: true });
  	};

  	handleDrawerClose = () => {
   		this.setState({ open: false });
  	};

	addNewColor(colorCode, colorName){
		const newColor = {
			color: colorCode,
			name: colorName
		}
		this.setState({colors: [...this.state.colors, newColor]})
	}

	savePalette(paletteName, emoji){
		const newPalette= {
			paletteName: paletteName, 
			emoji:emoji, 
			id: paletteName.toLowerCase().replace(" ", "-"), 
			colors: this.state.colors
		}
		this.props.savePalette(newPalette)
		this.props.history.push("/")
	}

	deleteColor(colorName){
		this.setState({colors: this.state.colors.filter(color => color.name !== colorName)})
	}

	onSortEnd({oldIndex, newIndex}){
		const colors = [...this.state.colors]
		this.setState({
			colors: arrayMove(colors, oldIndex, newIndex)
		})
	}

	clearColors(){
		this.setState({ colors: [] })
	}

	addRandomColor(){
		let isDuplicated, randomColor;
		const isColorDuplicated = (newColor) => { 
			 return this.state.colors.some(color => color.name === newColor.name)
		}
		
		do {
			const randomPalette = this.props.palettes[Math.floor(Math.random()* this.props.palettes.length)]
			randomColor = randomPalette.colors[Math.floor(Math.random() * randomPalette.colors.length)]
			isDuplicated = isColorDuplicated(randomColor)
		} while (isDuplicated);
		
		this.setState({colors: [...this.state.colors, randomColor]})
	}

  	render() {
    	const { classes} = this.props;
    	const { open } = this.state;
		const paletteIsFull = (this.state.colors.length >= this.props.maxColors)

    	return (
      		<div className={classes.root}>
				<PaletteFormNavbar handleDrawerOpen={this.handleDrawerOpen} open={open} savePalette={this.savePalette}
					               palettes={this.props.palettes} />
				<Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper,}}>
          			<div className={classes.drawerHeader}>
						<Link to="/">
							<IconButton>
								<KeyboardBackspaceIcon />
							</IconButton>
						</Link>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
          			</div>
					<Divider />
					<div className={classes.container}>
						<Typography variant="h5" gutterBottom >Design Your Palette</Typography>
						<div className={classes.buttons}>
							<Button variant="contained" color="secondary" onClick={this.clearColors} className={classes.button} >Clear Palette</Button>
							<Button variant="contained" color="primary" onClick={this.addRandomColor} className={classes.button}
									disabled={paletteIsFull} >Random Color</Button>
						</div>
						<ColorPickerForm paletteIsFull={paletteIsFull} colors={this.state.colors} addNewColor={this.addNewColor}/>
					</div>
        		</Drawer>
        		<main className={classNames(classes.content, {[classes.contentShift]: open, })}>
          			<div className={classes.drawerHeader} />
					<DraggableColorList colors={this.state.colors} deleteColor={this.deleteColor} axis="xy" onSortEnd={this.onSortEnd} distance={5}/>
				</main>
      		</div>
    	);
  	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)