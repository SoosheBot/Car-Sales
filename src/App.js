import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';


const App = (props) => {
  

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carOnProps} />
        <AddedFeatures car={props.carOnProps} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.carOnProps} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carOnProps: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, {})(App); 
