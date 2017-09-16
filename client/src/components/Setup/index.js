import React, { Component } from 'react';
import RangeInput from './RangeInput'

export default class Setup extends Component {
	constructor() {
		super();
		this.state = { sound: {}, light: {}, environment: {} };
		this.onBlur = this.handleBlur.bind(this);
		this.onLoad = this.handleLoad.bind(this);
	}
	handleBlur(e) {
		e.preventDefault();
		console.log(e.target.placeholder);
		console.log(e.target.value);
		fetch('/VR', {
			method: 'POST',
			data: {
				optionName: e.target.placeholder,
				value: e.target.value
			}
		}).then(function(response) {
			console.log(response);
		});
	}
	handleLoad(e) {
		//e.preventDefault();
		fetch('/json/spider.json', {
			method: 'GET'
		}).then(function(response) {
			console.log(response);
//			return response.json();
		}).then(function(body) {
			console.log(body);
		});
	}
/*	handleSubmit(e) {
		e.preventDefault();
		var self = this;
		console.log(self);
		fetch('/VR', {
			method: 'POST',
			data: {
			}
		}).then(function(response) {
			return response.json();
		}).then(function(body) {
			console.log(body);
		});
	}
*/	render() {
		return (
			<div>{this.handleLoad()}
			<form onBlur={this.handleBlur}>
				<RangeInput name="Sound"/>
				<RangeInput name="Light"/>
				<h1>Environment</h1><input type="text" placeholder="Environment" ref="environment"/><br></br>
			</form>
			</div>
		);
	}
}
