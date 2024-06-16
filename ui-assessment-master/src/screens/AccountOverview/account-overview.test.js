import { render, screen } from "@testing-library/react";
import AccountOverview from ".";

const accountOverviewStub = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

test("renders Account Overview heading", () => {
  render(<AccountOverview data={accountOverviewStub} />);
  const headingElement = screen.getByText(/Account Overview/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders support contact name and email", () => {
  render(<AccountOverview data={accountOverviewStub} />);
  const email = accountOverviewStub.supportContact.email;
  const firstLetter = accountOverviewStub.supportContact.name.charAt(0);
  const spanElement = screen.getByText(firstLetter, { selector: "span" });
  const emailElement = screen.getByText(email);
  expect(spanElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});

test("renders sales data", () => {
  render(<AccountOverview data={accountOverviewStub} />);
  const { salesOverview } = accountOverviewStub;

  const upload = new RegExp(`${salesOverview.uploads}`);
  const uploadsElement = screen.getByText(upload, { selector: "h1" });

  const lines = new RegExp(`${salesOverview.linesSaved}`);
  const linesSavedElement = screen.getByText(lines, { selector: "h1" });

  expect(uploadsElement).toBeInTheDocument();
  expect(linesSavedElement).toBeInTheDocument();
});
