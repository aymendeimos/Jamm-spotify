import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';

import Spotify from '../../util/Spotify'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],

      playlistName: 'NEW PLAYLIST NAME', 

      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    if (!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      let tempPlaylistTracks = this.state.playlistTracks;
      tempPlaylistTracks.push(track);
      this.setState({
        playlistTracks : tempPlaylistTracks
      })
      let tempSearchResult = this.state.searchResults.filter((searchResultsTrack)=>{
        return searchResultsTrack.id !== track.id
      })
      this.setState({
        searchResults : tempSearchResult
      })
    }
  }

  removeTrack(track){
    let tempPlaylistTracks = this.state.playlistTracks.filter((playlistTrack)=>{
      return playlistTrack.id !== track.id
    })
    this.setState({
      playlistTracks : tempPlaylistTracks
    })
  }

  updatePlaylistName(name){
    this.setState({
      playlistName : name
    })
  }

  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
        if (this.state.playlistName && trackURIs && trackURIs.length > 0) {
			Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
                
				console.log(`new playlist with '${this.state.playlistName}' and ${trackURIs.length} songs successful saved.`);
				this.setState({playlistName: 'New Playlist', playlistTracks: []});
			});
		}
  }

  search(term){
    Spotify.search(term).then(tracks => this.setState({searchResults: tracks}));
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
