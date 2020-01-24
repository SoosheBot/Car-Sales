import React, { useState } from 'react';

import AddedFeature from './AddedFeature';

import { connect } from 'react-redux';
import { addFeature, removeFeature } from '../actions/addedFeaturesActions';


const AddedFeatures = props => {
  const [addedFeatures, setAddedFeatures] = useState();

  console.log('props', props);

  // const handleChanges = e => {
  //   setAddedFeatures(e.target.value);
  // };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature}/>
          ))}
        </ol>
      ) : (
        <div>
        <p>You can purchase items from the store.</p>
        <button onClick={() => props.addFeature(addedFeatures)}>Add Feature</button>
        </div>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  return {
      car: state.addedFeaturesReducer
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AddedFeatures);