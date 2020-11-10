import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./About.scss";

class About extends Component {

  render() {
    return (
      <>
        <div className="About">
          <div className="About-Developer">
            <Avatar className="About-Developer_Avatar">AP</Avatar>
            <p className="About-Developer_Name">Alexander Petriga</p>
          </div>
          <div className="About-Social">
            <h5 className="About-Social_Title Title">Social</h5>
            <div className="About-Social_Content">
              <p>
                <a href="https://t.me/whoisbroken">
                  <span className="About-Link_Text">Telegram</span>
                </a>
              </p>
              <p>
                <a href="https://github.com/whoisbroken">
                  <span className="About-Link_Text">GitHub</span>
                </a>
              </p>
            </div>
          </div>
          <div className="About-Contacts">
            <h5 className="About-Contacts_Title Title">Contacts</h5>
            <a className="About-Contacts_Item" href="tel:+380667944460">
              <i className="fa fa-mobile" aria-hidden="true"></i>
              <span className="About-Link_Text"> +380667944460</span>
            </a>
            <a className="About_Contacts_Item" href="mailto:cazhqa666@gmail.com">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <span className="About-Link_Text"> cazhqa666@gmail.com</span>
            </a>
          </div>
        </div>
      </>
    )
  };

  // <div>
  //   <Avatar color="primary">OP</Avatar>
  // </div>
}


export default About;