import type { ReactNode } from "react";

export type TextProcessor = {
  renderEmphasis: (text: string) => ReactNode[];
  renderQuotedText: (text: string) => ReactNode[];
  renderHeadingText: (text: string, applyLastWord?: boolean) => ReactNode;
};

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function createTextProcessor(emphasisKeywords: string[]): TextProcessor {
  const renderEmphasis = (text: string): ReactNode[] => {
    if (emphasisKeywords.length === 0) {
      return [text];
    }

    // Regex alternation is left-to-right: list longer/more-specific keywords
    // before shorter ones that share a prefix (e.g. "AI music" before "AI").
    const pattern = new RegExp(
      `(${emphasisKeywords.map(escapeRegExp).join("|")})`,
      "g"
    );
    const parts = text.split(pattern).filter(Boolean);

    return parts.map((part, partIndex) =>
      emphasisKeywords.includes(part) ? (
        <span key={`em-${partIndex}`} className="font-display italic">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const renderQuotedText = (text: string): ReactNode[] => {
    const parts: ReactNode[] = [];
    const regex = /"([^"]+)"/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let keyIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(...renderEmphasis(text.slice(lastIndex, match.index)));
      }
      parts.push(
        <span key={`quote-${keyIndex++}`} className="font-display italic">
          {renderEmphasis(`"${match[1]}"`)}
        </span>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(...renderEmphasis(text.slice(lastIndex)));
    }

    return parts;
  };

  const renderHeadingText = (
    text: string,
    applyLastWord = true
  ): ReactNode => {
    if (!applyLastWord) {
      return renderQuotedText(text);
    }

    const words = text.trim().split(" ");
    if (words.length < 2) {
      return renderQuotedText(text);
    }

    const lastWord = words.pop() ?? "";
    const rest = words.join(" ");

    return (
      <>
        {renderQuotedText(rest)}{" "}
        <span className="font-display italic">{renderQuotedText(lastWord)}</span>
      </>
    );
  };

  return { renderEmphasis, renderQuotedText, renderHeadingText };
}
