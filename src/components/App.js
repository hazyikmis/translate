import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export default class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            className='flag us'
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className='flag nl'
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <ColorContext.Provider value='red'>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

//LanguageContext.Provider provides always separate pipes of info to the components it covers
//In the 1st part: language comes from the state, if user clicks the flags all components on the 1st form render itself accordingly
//In the 2nd part: language is statically set, so any changes on the state & context do not affect the 2nd form
//In the 3rd part: language is set by the default context, does not affected by changes on the state & context
/*
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>

        <LanguageContext.Provider value={"dutch"}>
          <UserCreate />
        </LanguageContext.Provider>

        <UserCreate />
*/

/*
ColorContext.Provider OR LanguageContext.Provider : NOT important which one wraps the other in our case....
*/
