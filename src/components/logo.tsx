import React from "react"

export interface LogoProps {
  color?: string
}

const Logo: React.FC<LogoProps> = ({ color = "#FA4475" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0.00 0.00 250.00 250.00"
    height="auto"
  >
    <path
      fill={color}
      d="
  M 159.98 90.99
  L 173.02 71.82
  Q 173.38 71.29 173.61 71.89
  Q 185.31 102.83 196.58 133.80
  C 202.50 150.08 200.28 164.98 187.84 177.59
  Q 170.71 194.96 153.39 212.13
  C 137.99 227.41 113.93 228.63 98.10 213.15
  Q 79.52 194.99 61.38 176.38
  C 50.77 165.50 47.33 150.02 52.56 135.86
  Q 54.25 131.26 60.96 121.27
  Q 92.90 73.69 124.66 26.33
  Q 125.04 25.77 125.35 26.37
  L 159.27 90.95
  A 0.41 0.41 0.0 0 0 159.98 90.99
  Z
  M 176.1980 162.1411
  A 18.08 18.08 0.0 0 0 176.1980 136.5721
  L 137.7879 98.1620
  A 18.08 18.08 0.0 0 0 112.2189 98.1620
  L 73.9220 136.4589
  A 18.08 18.08 0.0 0 0 73.9220 162.0279
  L 112.3321 200.4380
  A 18.08 18.08 0.0 0 0 137.9011 200.4380
  L 176.1980 162.1411
  Z"
    />
    <circle fill={color} cx="125.04" cy="123.47" r="11.23" />
    <circle fill={color} cx="99.13" cy="149.37" r="11.22" />
    <circle fill={color} cx="150.86" cy="149.36" r="11.23" />
    <circle fill={color} cx="125.02" cy="175.18" r="11.22" />
  </svg>
)

export default Logo