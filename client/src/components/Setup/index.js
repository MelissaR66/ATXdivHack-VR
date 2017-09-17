import React, { Component } from 'react';
import RangeInput from './RangeInput';
import TextInput from './TextInput';

export default class Setup extends Component {
	constructor() {
		super();
		this.state = { options: [], option: '', };
		this.onBlur = this.handleBlur.bind(this);
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
	componentWillMount() {
		var self = this;
		fetch('/json/spider.json', {
			method: 'GET'
		}).then(function(response) {
			response.json().then(function(data) {
				self.setState({
					options: [...data.options]
				})
			});
			console.log(self.state);
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
			<div>
				<form onBlur={this.handleBlur}>
					<RangeInput name="Sound"/>
					<RangeInput name="Light"/>
					<TextInput name="Environment"/>
				</form>
			</div>
		);
	}
}
