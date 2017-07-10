import marked from 'marked';

//a reducer takes in two things
//1: the action (info about what happened)
//2: copy of current state

function text(state = [], action) {
  switch(action.type) {
    case 'KEY_PRESS': 
    console.log(state.text);
    // console.log('in text.js reducer');
    // let oldText = state.text;
    let newText = action.newText;

    // console.log(Object.assign({}, state, {text}));
    return Object.assign({}, state, text, {text: newText},
                    {interpretedText: marked(newText)});
    default:
      return state;
  }
}

export default text;