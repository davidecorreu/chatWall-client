import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;

class GoToChatWall extends React.Component {
  render () {
    return (
      <Search
        placeholder="Channel name"
        enterButton="Go"
        onSearch={value => this.props.onGoClick(value)}
      />
    );
  }
}

export default GoToChatWall;
