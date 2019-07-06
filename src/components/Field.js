import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class Field extends Component {
  //contextType: very special name, ig you change to mycontextType, then its not gonna work!
  static contextType = LanguageContext;
  //static keyword used for directly adding properties to Class itself not to the instances...
  //its the same : "Button.contextType = LanguageContext" (but, out of this class...after creating the class)
  //this is actually hooking to the "Context" (means creates a link between this Button component & Context)
  //after this static declaration you can refer to Context content by "this.context"

  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
