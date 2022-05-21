import React from 'react'
import {AppBar, Tabs, Tab} from 'material-ui'

class Header extends React.Component {
  render() {
    return (
      <AppBar title="Image Gallery" style={{backgroundColor:'black'}}>
        <Tabs>
          <Tab style={{backgroundColor:'black'}} label="Home" />
        </Tabs>
      </AppBar>
    )
  }
}

export default Header;

