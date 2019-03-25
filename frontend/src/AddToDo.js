import React, { Component } from "react";

class AddToDo extends Component {
  onAdd = () => {
    this.props.setText(this.props.text);
    this.props.setText("");
    //Change state in parent component; set current item text to "")
  };

  onTextChange = event => {
    this.props.setText(event.target.value);
    //when you hit a key (event.target.value) will go to setText
  };

  render() {
    const { text } = this.props;
    return (
      <>
        <label>
          Item:
          <input type="text" value={text} onChange={this.onTextChange} />
        </label>
        <button onClick={this.onAdd}>Add</button>
      </>
    );
  }
}
export default AddToDo;
