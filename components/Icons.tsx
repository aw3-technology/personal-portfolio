import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowDiagonal(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M2 6.2L4.6 8.6L10 3.4"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Dribbble(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.531a10.195 10.195 0 012.25 6.375c-.328-.063-3.609-.734-6.922-.328-.078-.156-.141-.328-.219-.5-.219-.5-.453-.984-.703-1.469 3.656-1.5 5.313-3.625 5.594-4.078zM12 1.828c2.656 0 5.078 1.016 6.906 2.672-.234.406-1.734 2.391-5.234 3.703-1.641-3.016-3.453-5.484-3.734-5.859.656-.172 1.344-.281 2.063-.516zm-4.234.844c.266.359 2.047 2.844 3.719 5.781-4.688 1.25-8.828 1.234-9.281 1.234.641-3.078 2.656-5.656 5.563-7.016zM1.813 12.016v-.313c.438.016 5.313.078 10.328-1.422.281.563.563 1.125.813 1.703-.141.031-.266.078-.406.125-5.266 1.703-8.063 6.344-8.344 6.813a10.173 10.173 0 01-2.391-6.906zm10.188 10.172c-2.406 0-4.625-.844-6.375-2.234.219-.453 2.469-4.438 8.25-6.469.016-.016.047-.016.063-.031 1.484 3.844 2.094 7.063 2.25 7.922a10.172 10.172 0 01-4.188.813zm5.953-2.063c-.109-.609-.656-3.672-2.047-7.453 3.125-.5 5.859.328 6.203.438-.438 2.781-1.906 5.219-4.156 7.016z" />
    </svg>
  );
}
