import React from 'react';
import './TrackList.css';

import Track from '../Track/Track'

class TrackList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        
    }
    
    renderTracks(){
        return this.props.trackList.map((track)=>{
            return <Track onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} key={'track_'+track.id} track={track}/>
        })
    }

    render(){
        return(
            <div className="TrackList">
                {this.renderTracks()}
            </div>
        )
    }
}

export default TrackList;