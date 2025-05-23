// 1) useClipboard: This hook allows you to copy text to the clipboard and track whether the text was successfully copied.

// TypeScript
// const { copy, isCopied } = useClipboard();

import { useState } from "react";

export function useClipboard() {
  const [iscCopied, setIsCopied] = useState("false");

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setIsCopied(false);
    }
  };
  return { copy, iscCopied };
}
