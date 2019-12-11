import React, {Component} from 'react';

import classes from './AutoCompleteText.module.scss';

class autoCompleteText extends Component {

    state = {
        suggestions: [],
        text: ''
    }

    onTextChanged = (event) => {
        const value = event.target.value;
        let suggestions = [];
        let cities = [];

        if(value.length > 0){
            const regex = new RegExp(`${value}`, `i`);
            this.props.cities.map(citi => {
                //push hebrew & eng names
                cities.push(citi.name);
                cities.push(citi.engName);
            });

            suggestions = cities.sort().filter(citi => regex.test(citi));
        }


        this.setState({
            suggestions: suggestions,
            text: value
        });
    }

    renderSuggestions() {
        const suggestions = this.state.suggestions;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((citi, index)=> <li key={index} onClick={() => this.suggestionSelected(citi)}>{citi}</li>)}
            </ul>
        );
    }

    suggestionSelected (value){
        this.setState({
            text: value,
            suggestions: []
        })
    }

    render() {

        const text = this.state.text;
        return (
            <div className={classes.search_wrapper}>
                <div className={classes.choose_citi}>:בחר עיר</div>
                <div className={classes.AutoCompleteText}>
                    <input type="text" onChange={this.onTextChanged} value={text}/>
                    {this.renderSuggestions()}
                </div>
            </div>
        )
    }

}

export default autoCompleteText;