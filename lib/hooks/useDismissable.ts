import { useEffect, useRef, type RefObject } from "react";

/**
 * Closes a floating element (dropdown, popover, menu) when the user clicks
 * outside of it or presses Escape. Pass the ref of the element that should
 * stay open when clicked; `onDismiss` fires for outside-clicks and Escape.
 */
export function useDismissable<T extends HTMLElement>(
  elementRef: RefObject<T>,
  onDismiss: () => void
) {
  const callback = useRef(onDismiss);
  callback.current = onDismiss;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }
      if (elementRef.current && !elementRef.current.contains(target)) {
        callback.current();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback.current();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [elementRef]);
}
