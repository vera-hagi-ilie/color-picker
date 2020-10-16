import React from "react"
import {withStyles} from "@material-ui/styles"
import DeleteIcon from "@material-ui/icons/Delete"
import {SortableElement} from "react-sortable-hoc"
import styles from "./styles/DraggableColorBoxStyles"

const DraggableColorBox = SortableElement((props)=>{
	
	return (
		<div style={{backgroundColor: props.color}} className={props.classes.root}>
			<div className={`${props.classes.boxContent} ${props.classes.text}`} >
				<span>{props.name}</span>
				<DeleteIcon className={props.classes.deleteIcon} onClick={props.handleDelete}/>
			</div>
		</div>
	)
})

export default withStyles(styles)(DraggableColorBox)