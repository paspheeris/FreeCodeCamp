import { createStore, compose } from 'redux';
import text from './reducers/text';
import defaultText from './data/defaultText';


const defaultState = {
  text: defaultText,
  interpretedText: ''
};

const store = createStore(text, defaultState);

export default store;