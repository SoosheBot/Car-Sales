import React from 'react';

import { removeFeature } from '../actions/addedFeaturesActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature={removeFeature}}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
