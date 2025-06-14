import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div>
    <h4>
      Name: {firstName} {lastName}
    </h4>
    <h4>Contact Email: {email}</h4>
    <h4>Message:</h4>
    <p>{message}</p>
  </div>
);
