import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Contact,
  Content,
  SupportDiv,
  Info,
  StyledH1,
  StyledH2,
} from "./style";

export const Support = ({ email, name }) => {
  return (
    <Content>
      <StyledH1>YOUR FEEFO SUPPORT CONTACT</StyledH1>
      <SupportDiv>
        <Card>
          <span>{name.charAt(0)}</span>
        </Card>
        <Contact>
          <StyledH2>Support</StyledH2>
          <Info>
            <div>
              <FontAwesomeIcon icon={faMailBulk} />
              <span>{email}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <span>020 3362 4208</span>
            </div>
          </Info>
        </Contact>
      </SupportDiv>
    </Content>
  );
};

Support.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Support;
