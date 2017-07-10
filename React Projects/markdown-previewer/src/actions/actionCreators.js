//Increment like
export function edit(newText) {
  console.log('dispatching KEY_PRESS in actinCreators.js');
  return {
    type: 'KEY_PRESS',
    newText
  }
}
