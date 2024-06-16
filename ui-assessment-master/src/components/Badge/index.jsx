import React from "react";
import PropTypes from "prop-types";
import { Content, Value, Message } from "./style";

export const Badge = ({ value, message }) => {
  return (
    <Content>
      <Value>{value}%</Value>
      <Message>{message}</Message>
    </Content>
  );
};

Badge.propTypes = {
  value: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default Badge;
