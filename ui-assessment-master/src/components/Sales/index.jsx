import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import { Content, Title, Info, Data } from "./style";
import Badge from "../Badge";

export const Sales = ({ upload, lines }) => {
  return (
    <Content>
      <Title>
        <FontAwesomeIcon color="#439cf0" icon={faUpload} />
        <span>Sales</span>
      </Title>

      <Info>
        You had <strong>{upload} uploads</strong> and{" "}
        <strong>{lines} lines</strong> added.
      </Info>

      <Data>
        <Badge value={upload} message="upload success"></Badge>
        <Badge value={lines} message="lines saved"></Badge>
      </Data>
    </Content>
  );
};

Sales.propTypes = {
  upload: PropTypes.number.isRequired,
  lines: PropTypes.number.isRequired,
};

export default Sales;
