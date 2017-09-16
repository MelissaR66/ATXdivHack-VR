import React from 'react'

const RangeInput = (props) => {
	return (
		<div>
			<h1>{props.name}</h1><input type="range" placeholder={props.name}/>
		</div>
	)
}

export default RangeInput; 
