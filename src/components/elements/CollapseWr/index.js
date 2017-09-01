import React, { Component } from 'react';
import { Collapse, Button, CardBlock, Card } from 'reactstrap';

class CollapseWr extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {

    const {children, title} = this.props;

    return (
      <div className="collapse-obj">
        <header onClick={this.toggle}>{title}</header>
        <Collapse isOpen={this.state.collapse}>
          <div>
            {children}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default CollapseWr;
