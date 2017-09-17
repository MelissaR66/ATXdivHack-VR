import React from 'react'

const TextInput = (props) => {
	return (
		<div>
			<h1>{props.name}</h1><input type="text" placeholder={props.name}/>
		</div>
	)
}

export default TextInput; 
