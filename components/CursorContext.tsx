"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CursorType = "default" | "pointer" | "project" | "text";

interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorType: "default",
  setCursorType: () => {},
  cursorText: "",
  setCursorText: () => {},
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorText, setCursorText] = useState("");

  return (
    <CursorContext.Provider
      value={{ cursorType, setCursorType, cursorText, setCursorText }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
