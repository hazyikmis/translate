import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

/*
//"this.context" is one way of consuming the data inside the context
//"static contextType = LanguageContext" is required only when using "this.context"

export default class Button extends Component {
  //contextType: very special name, ig you change to mycontextType, then its not gonna work!
  static contextType = LanguageContext;
  //static keyword used for directly adding properties to Class itself not to the instances...
  //its the same : "Button.contextType = LanguageContext" (but, out of this class...after creating the class)
  //this is actually hooking to the "Context" (means creates a link between this Button component & Context)
  //after this static declaration you can refer to Context content by "this.context"

  render() {
    //console.log(this.context);
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className='ui button primary'>{text}</button>;
  }
}
*/

//the other way of consuming the data inside the context is using "Consumer" component
//Below, there is a stacking of different Context components:
export default class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {lang => (lang === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

/*
//THIS IS THE PREVIOUS ONE
export default class Button extends Component {
  render() {
    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
*/
