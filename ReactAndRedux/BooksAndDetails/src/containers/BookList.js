import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component
{

	renderList()
	{
		return this.props.books.map((book) =>
		 <li 
		 key={book.title} 
		 className='list-group-item'
		 onClick = {() => this.props.selectBook(book)}>
		 {book.title}
		 </li>)
	}

	render()
	{
		return (
			<ul className="list-group col-sm-4">
			{this.renderList()}
			</ul>
			);
	}
}


//whatever is returned will end up as props of bookList
function mapStateToProps(state)
{
	return	{
		books: state.books
	};
}

//Anuthing returned from this function, will end up as props
//on the bookListcontainer
function mapDispatchToProps(dispatch)
{
	//Whenever selectBook is called, the result shall be passed to all of our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}


//promote booklist form a component to a container - it needs to know about the new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);