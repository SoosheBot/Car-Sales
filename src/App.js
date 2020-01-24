import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions';

const App = (props) => {

  const removeFeature = feature => {
    props.removeFeature(feature);
  }

  const addFeature = item => {
    props.addFeature(item);
  }


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={addFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    car:state.car,
    store:state.store,
    additionalProce:state.additionalPrice
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature})(App);