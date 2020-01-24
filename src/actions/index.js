export const TOGGLE_ADD = 'TOGGLE_ADD';

export const addFeature = item => {
  console.log('action called', item);
  return { 
      type: TOGGLE_ADD,
      payload: item
    };
}; 

export const TOGGLE_REMOVE = 'TOGGLE_REMOVE';
export const removeFeature = feature => {
  console.log('action called', feature);
  return { 
      type: TOGGLE_REMOVE,
      payload: feature 
    };
}; 