export function selectBook(book)
{
	//selectBook is an action creator, and it returns an action:
	return{
		type: 'BOOK_SELECTED',
		payload: book
	};
}