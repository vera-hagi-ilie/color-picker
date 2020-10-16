import React from "react"
import {SortableContainer} from "react-sortable-hoc"
import DraggableColorBox from "./DraggableColorBox"

const DraggableColorList = SortableContainer((props) => {
	return (
		<div style={{height: "100%"}}>
			{props.colors.map((color, idx) => <DraggableColorBox color={color.color} name={color.name} key={color.name} index={idx}
												  handleDelete={() => props.deleteColor(color.name)} />)}
		</div>
	)
})

export default DraggableColorList