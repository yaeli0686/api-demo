import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {
    render() {
        return <>
            <div className="col-md-8 order-xs-3">
                <div className="form search-form">
                    <FontAwesomeIcon icon={faSearch} />
                    <input onInput={this.props.onInput} type="text" className="form-control form-input" placeholder="Search anything..." />
                </div>
            </div>
            <div className="col-md-1 col-xs-3 order-xs-2">
                <h3 className="m-0 text-center">{this.props.length}</h3>
            </div>
        </>
    }
}

export default SearchBar;