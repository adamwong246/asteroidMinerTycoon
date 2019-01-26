import React from "react";

export const Command: React.SFC<{
  message: string;
}> = props => {
  return (
    <p>
      <span>$</span>
      <span>{props.message}</span>
    </p>
  );
};

export const Error: React.SFC<{
  message: string;
}> = props => {
  return (
    <p>
      <span>'{props.message}' command not found. (try 'help')</span>
    </p>
  );
};

export const Message: React.SFC<{
  message: string;
}> = props => {
  return (
    <p>
      <output dangerouslySetInnerHTML={{ __html: props.message }} />
    </p>
  );
};

export const Input: React.SFC<{
  input: string;
}> = props => {
  return (
    <p>
      <span>>$</span>
      <span>{props.input}</span>
      <span>_</span>
    </p>
  );
};
