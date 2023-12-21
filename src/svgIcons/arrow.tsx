import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowIcon = ({color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill={color}
        d="M5 13h11.86l-3.63 4.36a1 1 0 1 0 1.54 1.28l5-6c.034-.048.064-.098.09-.15 0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.198 1.198 0 0 0-.09-.15l-5-6a1 1 0 0 0-1.41-.13.999.999 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowIcon
