import React from "react";
import PropTypes from "prop-types";
import Sales from "../../components/Sales";
import Support from "../../components/Support";
import { Container, Header, Title } from "./style";

export const AccountOverview = ({ data }) => {
  const { salesOverview, supportContact } = data;

  return (
    <Container>
      <Header>
        <Title>Account Overview</Title>
        <Support
          email={supportContact.email}
          name={supportContact.name}
        ></Support>
      </Header>

      <Sales
        upload={salesOverview.uploads}
        lines={salesOverview.linesSaved}
      ></Sales>
    </Container>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
      lastUploadDate: PropTypes.number,
    }),
  }).isRequired,
};

export default AccountOverview;
