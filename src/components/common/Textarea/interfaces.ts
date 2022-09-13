import { VoidFunction } from "@types";

export interface TextareaProps {
  color?: "white" | "gray";
  onBlur?: VoidFunction<string>;
  onChange?: VoidFunction<string>;
  onFocus?: VoidFunction<string>;
  placeholder?: string;
  size?: "tall" | "short";
  value?: string;
}
