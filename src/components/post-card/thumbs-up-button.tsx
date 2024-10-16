"use client";
import { useFormStatus } from "react-dom";
import { ThumbsUp } from "lucide-react";
import IconButton from "../icon-button";
import Spinner from "../spinner";

const ThumbsUpButton = () => {
  const { pending } = useFormStatus();
  return (
    <IconButton disabled={pending}>
      {pending ? <Spinner /> : <ThumbsUp color="currentColor" />}
    </IconButton>
  );
};

export default ThumbsUpButton;
