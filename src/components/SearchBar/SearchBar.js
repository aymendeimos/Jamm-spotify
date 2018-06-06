import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: this.getTerm()
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.getTerm = this.getTerm.bind(this);
        this.setLocalStorageTerm = this.setLocalStorageTerm.bind(this)
        
    }

    search(){
        this.setLocalStorageTerm();
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event){
        let term = event.target.value;
        this.setState({
            term: term
        })

        this.setLocalStorageTerm();
    }

    handleKeyPress(event) {
        if(event.charCode === 13){
                this.search();
        }
    }

    setLocalStorageTerm(){
        localStorage.setItem('term',JSON.stringify({
            term: this.state.term
        }))
    }

    getTerm(){
        let localstorageTerm = JSON.parse(localStorage.getItem('term'));
        if(localstorageTerm){
            return localstorageTerm.term;
        }
    }

    render(){
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" value={this.state.term} onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
                <a onClick={this.search}>SEARCH</a>
            </div>
        )
    }
}

export default SearchBar;