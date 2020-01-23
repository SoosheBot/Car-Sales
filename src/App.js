import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';

import { addFeature } from './actions/carActions';

const App = (props) => {
  

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   props.addFeature(item);
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carOnProps} />
        <AddedFeatures car={props.carOnProps} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeaturesOnProps}/>
        <Total car={props.carOnProps} additionalPrice={props.additionalPriceOnProps} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carOnProps: state.car,
    additonalFeaturesOnProps: state.additionalFeatures,
    additionalPriceOnProps: state.additionalPrice
  };
};

export default connect(mapStateToProps, {addFeature})(App); 
