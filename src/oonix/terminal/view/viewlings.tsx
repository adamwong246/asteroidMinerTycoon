import React from "react";

// "viewlings" are stateless functional components used by the terminal

export const Command: React.SFC<{
  message: string;
}> = props => {
  return (
    <section>
      <hr></hr>
      {`>`} {props.message}
    </section>
  );
};

export const Error: React.SFC<{
  message: string;
}> = props => {
  return <p>'{props.message}' command not found. (try 'utils')</p>;
};

export const Message: React.SFC<{}> = props => {
  return (
    <section>
      {props.children}
    </section>
  );
};
