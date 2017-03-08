import React, { Component } from 'react';

export default class Error extends Component {
  static getInitialProps ({ res, xhr }) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null);
    return { statusCode }
  }

  render() {
    return (
      <p><em>{
        this.props.statusCode
        ? `A ${this.props.statusCode} server-side error has occurred.`
        : 'A client-side error has occurred.'
      }</em></p>
    );
  }
}
