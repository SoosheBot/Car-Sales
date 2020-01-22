import React, { useState } from 'react';

const AdditionalFeature = props => {
  const [newFeature, setNewFeature] = useState();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> props.addFeature(state.newFeature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
