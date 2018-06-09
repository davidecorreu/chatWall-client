import React from 'react';
import { Button } from 'antd';

class ExitChannelButton extends React.Component {
  render () {
    if (!this.props.channel) return null;
    return (
      <div onClick={this.props.onExitChannelClick} className="exitChannelButtonContainer">
        <Button>Exit Channel</Button>
      </div>
    );
  }
}

export default ExitChannelButton;