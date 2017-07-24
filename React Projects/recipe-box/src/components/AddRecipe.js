import React from 'react';
import {connect} from 'react-redux';
import {addRecipe, editRecipe} from '../actions/recipeActions';
const uuidv4 = require('uuid/v4');


class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    const splitPathName = this.props.location.pathname.split('/');
    const editingPathName = splitPathName[2] || null;
    // console.log(editingPathName);
    let imgObj;
    this.state = this.props.props.recipes[editingPathName] || {
      key: uuidv4(),
      name: '',
      urlName: 'new-recipe',    
      ingredients: ['Ingredient 1', 'Ingredient 2', ''],
      directions: ['Step 1', 'Step 2', ''],
      tags: ['tag1', 'tag2', ''],
      image: 'images/default.jpg'    
    }
    
    this.renderArr = this.renderArr.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.imageUpload = this.imageUpload.bind(this);    
    
  }

  handleChange(e) {
    //If the property value is an array
    console.log('handle change', e);
    if(typeof this.state[e.target.name] === 'object') {
      // console.log(e);
      const ind = e.target.dataset.ind;
      const newArr = Array.from(this.state[e.target.name]);
      newArr[ind] = e.target.value;
      this.setState({
        [e.target.name] : newArr
      });
    }
    //If the property value is a simple string
    else {
      this.setState({[e.target.name]: e.target.value})
    }
  }
  addInput(e) {
    // console.log(e.key);
    if(e.key === 'Enter') {
        this.setState({
          [e.target.name]: [...this.state[e.target.name], ' ']
      })
    }
  }
  renderArr(string) {
    return this.state[string].map((ing, ind) => {
      return (
        <li key={ind}>
          <input
                data-ind={ind}
                type='text'
                name={string}
                value={this.state[string][ind]}
                 onChange={this.handleChange}
                 onKeyDown={this.addInput}
                 autoFocus></input>
        </li>
      )
    });
  }
  submitHandler(e) {
    e.preventDefault();
        //  const editing = this.editingPathName;
          // console.log(this.props.location.pathname.split('/')[2]);
    // console.log('button click');
    if(!this.state.name) {
         alert('Please enter a recipe name');
       } else {
         this.setState({'urlName': this.toSnakeCase(this.state.name)}, () => {
         (this.props.location.pathname.split('/')[2] ? 
            this.props.onEditClick(this.state) :
            this.props.onAddClick(this.state));
         this.props.history.push('');
         }
         )}
  }
  toSnakeCase(str) {
    // console.log('str:', str);
    return str.toLowerCase().replace(/ /g, '-');
  }
  imageUpload(e) {
    console.dir(e.target);
  }
  // console.log(props);
  render() {
    return (
      <div>
      <p>Add recipe</p>
      <form>
        <input name='name' type='text' value={this.state.name} 
         onChange={this.handleChange} placeholder='Recipe Name'></input>
        <input name='image' type='text' value={this.state.image} 
         onChange={this.handleChange} placeholder='Image URL'/>
        <p>Prep info</p>
        <h3>Ingredients</h3>
        <ul>
          {this.renderArr('ingredients')}
        </ul>
        <h3>Directions</h3>
        <ul>
          {this.renderArr('directions')}
        </ul>
        <h3>Tags</h3>
        <ul>
          {this.renderArr('tags')}
        </ul>
      </form>
      <button onClick={this.submitHandler}>Save Recipe</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    props: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (localState) => {
      dispatch(addRecipe(localState));
    },
    onEditClick: (localState) => {
      dispatch(editRecipe(localState));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);