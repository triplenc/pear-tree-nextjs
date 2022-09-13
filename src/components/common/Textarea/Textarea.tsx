import { useCallback, useRef } from "react";

import { TextareaProps } from "./interfaces";
import { TextareaStyle } from "./styles";

export function Textarea({
  color,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  size,
  value,
}: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onFocusTextarea = useCallback(() => {
    if (textareaRef.current) {
      onFocus?.(textareaRef.current.value);
      textareaRef.current.placeholder = "";
    }
  }, [onFocus]);

  const onBlurTextarea = useCallback(() => {
    if (textareaRef.current) {
      onBlur?.(textareaRef.current.value);
      textareaRef.current.placeholder = placeholder ?? "";
    }
  }, [onBlur, placeholder]);

  const onChangeTextarea = useCallback(() => {
    if (textareaRef.current) onChange?.(textareaRef.current.value);
  }, [onChange]);

  return (
    <TextareaStyle
      color={color}
      placeholder={placeholder}
      ref={textareaRef}
      size={size}
      value={value}
      onBlur={onBlurTextarea}
      onChange={onChangeTextarea}
      onFocus={onFocusTextarea}
    />
  );
}
