Step 1: Install `npm i` and then `npm i -S redux react-redux node-sass` to get npm and dependencies

Step 2: in the ROOT FOLDER `index.js` file -- 
        `import { Provider } from 'react-redux';`
        `import { createStore } from 'redux';`

    2a: Wrap App in the rootElement with Provider (see index.js file for reference).
    2b: Create a function called store and set it equal to your createStore. You will be putting your reducer in here. You will also need to call store={store} inside the Provider opening tag.
    2c: You will get a hella error message because createStore has nothing inside it. Time to go make some reducers!
Step 3: REDUCERS
    3a: In a reducers folder, create however many reducers you need for the project. 
    3b: Put initialState in reducers

