import React from 'react';
import { connect } from 'react-redux'

import PictureItem from './picture-item'
import { NOT_LOADED, IS_LOADING, ERROR_LOADING } from '../../../../constants';

import "./picture-container.scss";
import { Link } from 'react-router-dom';

const PicturesContainer = (props) => {

    const { loadingState } = props;

    if(loadingState === NOT_LOADED) return <span>NOT LOADED</span>
    if(loadingState === IS_LOADING) return <span>LOADING...</span>
    if(loadingState === ERROR_LOADING) return <span>ERROR</span>

    const { pictures } = props;

    const pictureItems = pictures.map(item => <PictureItem key={item.id} {...item}/>)

    return ( 
        <div className="picture-container">
            { pictureItems }
            <Link 
                className="picture-item picture-item-add"
                to="/addpicture"
            >+</Link>
        </div>
     );
}

const mapStateToProps = (state) => {

    const { loading, pictures } = state.pictures;
    
    return {
        loadingState: loading,
        pictures
    }
}

const mapDipatchToProps = (dispatch, ownProps) => {
    return {

    }
}
 
export default connect(mapStateToProps, mapDipatchToProps)(PicturesContainer);