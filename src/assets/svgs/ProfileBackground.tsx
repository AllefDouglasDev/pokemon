import { SvgProps } from "./types";

const ProfileBackground = ({
  width = 129,
  height = 137,
  ...props
}: SvgProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 129 137"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M146.725 79.525h-38.071c-2.868 16.873-17.577 29.721-35.291 29.721-17.715 0-32.424-12.848-35.292-29.721H0C3.069 117.299 34.742 147 73.363 147c38.62 0 70.293-29.701 73.362-67.475Zm-.07-12.853h-38.147c-3.192-16.476-17.713-28.918-35.145-28.918-17.433 0-31.955 12.442-35.146 28.918H.07C3.52 29.28 35.017 0 73.363 0c38.346 0 69.843 29.28 73.292 66.672ZM76.16 73.5c0 1.472-1.207 2.746-2.797 2.746s-2.798-1.274-2.798-2.746 1.207-2.746 2.797-2.746 2.798 1.274 2.798 2.746Z"
      fill="#fff"
      style={{
        mixBlendMode: "soft-light",
      }}
      opacity={0.2}
    />
  </svg>
);

export default ProfileBackground;
