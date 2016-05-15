/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
export default class TextField extends React.Component {
  constructor(props) {
    super(props);
    // this.onBlur = props.onBlur ? props.onBlur.bind(null, this) : () => {return null;};
    this.onChange = props.onChange ? props.onChange.bind(null, this) : () => {return null;};
  }

  render() {
    const value = this.props.data;
    console.log('value', value);
    // const error = this.props.error.deref();
    const readOnly = this.props.readOnly;
    const maxLength = this.props.maxLength || 250;

    return (
      <div>
        <input
          type="text"
          ref="field"
          value={value}
          maxLength={maxLength}
          placeholder={this.props.placeholder}
          readOnly={readOnly}
          // onBlur={this.onBlur}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
