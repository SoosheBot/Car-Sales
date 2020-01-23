const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  }
};

export const addedFeaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: { ...state.car, features: [...state.car.features, action.payload] }
      };
    default:
      return state;
  }
};
