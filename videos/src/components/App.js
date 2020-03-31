import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [], 
            selectedVideo: null
        }
        this.onTermSubmit = this.onTermSubmit.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }

    componentDidMount() {
        this.onTermSubmit('jenna marbles');
    }

    async onTermSubmit(term) {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect(video) {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column" >
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column" >
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;