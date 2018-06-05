import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    search(){
        this.props.onSearch(this.state.term);
    }

    handleKeyPress(event) {
        if(event.charCode==13){
                this.search();
        }
    }

    render(){
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
                <a onClick={this.search}>SEARCH</a>
            </div>
        )
    }
}

export default SearchBar;