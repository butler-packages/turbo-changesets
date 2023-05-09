"use client";

import * as React from "react";

export interface ButtonProps {
  message?: string;
}

export const Button = ({ message = "boop" }: ButtonProps) => {
  return <button onClick={() => alert(message)}>Button!</button>;
};
