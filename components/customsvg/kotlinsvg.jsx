import * as React from "react"
const KotlinSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1="26.599%"
        x2="73.845%"
        y1="146.559%"
        y2="52.381%"
      >
        <stop offset="9.677%" stopColor="#0095D5" />
        <stop offset="30.07%" stopColor="#238AD9" />
        <stop offset="62.11%" stopColor="#557BDE" />
        <stop offset="86.43%" stopColor="#7472E2" />
        <stop offset="100%" stopColor="#806EE3" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="13.984%"
        x2="68.682%"
        y1="37.105%"
        y2="-13.554%"
      >
        <stop offset="11.83%" stopColor="#0095D5" />
        <stop offset="41.78%" stopColor="#3C83DC" />
        <stop offset="69.62%" stopColor="#6D74E1" />
        <stop offset="83.33%" stopColor="#806EE3" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="-16.836%"
        x2="76.219%"
        y1="91.94%"
        y2="-1.116%"
      >
        <stop offset="10.75%" stopColor="#C757BC" />
        <stop offset="21.38%" stopColor="#D0609A" />
        <stop offset="42.54%" stopColor="#E1725C" />
        <stop offset="60.48%" stopColor="#EE7E2F" />
        <stop offset="74.3%" stopColor="#F58613" />
        <stop offset="82.32%" stopColor="#F88909" />
      </linearGradient>
    </defs>
    <path fill="url(#a)" d="m0 256 128.427-128.427L256 256z" />
    <path fill="url(#b)" d="M0 0h128.427L0 138.667z" />
    <path fill="url(#c)" d="M128.427 0 0 135.253V256l128.427-128.427L256 0z" />
  </svg>
)
export default KotlinSvg
