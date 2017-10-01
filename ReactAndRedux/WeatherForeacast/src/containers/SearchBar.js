import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeatherData} from '../actions/index.js'

class SearchBar extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	render()
	{
		return <form onSubmit={this.onFormSubmit} className='input-group'>
			<input 
			placeholder='Get a five-day forecast in given city.'
			className='form-control'
			value={this.state.term}
			onChange={this.onInputChange}
			/>
			<span className='input-group-btn'>
				<button type='submit' className='btn btn-secondary'>Search</button>
			</span>
		</form>
	}

	onInputChange(event)
	{
		this.setState({term: event.target.value})
	}


	onFormSubmit(event)
	{
		event.preventDefault();

		this.props.fetchWeatherData(this.state.term);
		this.setState({term: ''});
	}
}

function mapDispatchToProps(dispatch)
{
	return bindActionCreators({fetchWeatherData}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);