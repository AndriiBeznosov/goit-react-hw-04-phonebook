import React from 'react';
import { Input } from '../Form/Form.styled';

export class InputElement extends React.Component {
  render() {
    return <Input {...this.props} />;
  }
}
