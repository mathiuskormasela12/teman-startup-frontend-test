// ========== Container
// import all modules
import React from 'react';
import PropsTypes from 'prop-types';
import { IContainerProps } from '../interfaces';
import { ContainerStyles } from '../styles';

export const Container: React.FC<IContainerProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <ContainerStyles {...rest}>
      {children}
    </ContainerStyles>
  );
};

Container.propTypes = {
  fluid: PropsTypes.bool,
  size: PropsTypes.number.isRequired,
};

Container.defaultProps = {
  fluid: false,
  children: '',
};
