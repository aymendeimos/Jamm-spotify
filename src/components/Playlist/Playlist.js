import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList'

class Playlist  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playListName: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSavePlayList = this.handleSavePlayList.bind(this);
    }

    handleNameChange(event){
        let newName = event.target.value;
        this.setState({
            playListName : newName
        })
        this.props.onNameChange(newName);
    }

    handleSavePlayList(){
        this.props.onSave;
        this.setState({
            playListName : ''
        })
    }

    render(){
        return(
            <div className="Playlist">
                <input value={this.props.playlistName} onChange={this.handleNameChange} />
                <TrackList isRemoval={true} onRemove={this.props.onRemove} trackList={this.props.playlistTracks} />
                <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div>
        )
    }
}

export default Playlist;