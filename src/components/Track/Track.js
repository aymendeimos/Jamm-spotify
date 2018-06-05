import React from 'react';
import './Track.css';

class Track  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            samplePlaying: false,
            trackSample: new Audio(this.props.track.preview)
        }

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.playPreview = this.playPreview.bind(this);
        this.pausePreview = this.pausePreview.bind(this);
    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }
    removeTrack(){
        this.props.onRemove(this.props.track);
    }

    playPreview(){
        this.state.trackSample.play();
        this.setState({
            samplePlaying: true
        })
    }
    pausePreview(){
        this.state.trackSample.pause();
        this.setState({
            samplePlaying: false
        })
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {!this.state.samplePlaying ? <i className="fa fa-play" aria-hidden="true" onClick={this.playPreview}></i> : <i className="fa fa-pause" aria-hidden="true" onClick={this.pausePreview}></i>}
                {!this.props.isRemoval ? <a className="Track-action" onClick={this.addTrack}>+</a> : <a className="Track-action" onClick={this.removeTrack}>-</a>}
            </div>
        )
    }
}

export default Track;