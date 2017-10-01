import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import _ from 'lodash';

const API_KEY = 'AIzaSyA0k9S2IgHNog95IkVA6Cy0yN5JgrdJGZI';

class App extends Component {

	constructor(props)	{
		super(props);
		this.state = {
			videos: [],
			 selectedVideo: null
		};

		this.searchVideo("samoyeds")
	}

	searchVideo(searchTerm)
	{
		YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
			this.setState(
			{
				videos :videos,
				 selectedVideo: videos[0]
			})});
	}

    render() {
    	const videoSearch = _.debounce((term) => {this.searchVideo(term)}, 300);

        return (
        <div>
        <SearchBar onSearchTermChanged={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
         videos={this.state.videos}
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         />
        </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector(".container"))