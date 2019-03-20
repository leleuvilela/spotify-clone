import React, { Component } from 'react';

import { Container, Search, User } from './styles';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Search>
          <input placeholder="Search" />
        </Search>

        <User>
          <img
            src="https://avatars1.githubusercontent.com/u/19839085?v=4"
            alt="Avatar"
          />
          Vinícius Vilela
        </User>
      </Container>
    );
  }
}
