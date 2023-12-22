import * as React from "react"
import Svg, { SvgProps, Path, Mask, Rect, G } from "react-native-svg"

const AppLogoIcon = ({width,height}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width||45}
    height={height||45}
    fill="none"
  >
    <Path
      fill="#fff"
      d="M39.996 156.636c.384.624.528 1.188.432 1.692-.096.528-.336.96-.72 1.296-.384.36-.852.588-1.404.684-.528.096-1.068.036-1.62-.18-.528-.192-.984-.576-1.368-1.152L32.76 154.8a2.95 2.95 0 0 0-1.224-1.08c-.48-.216-1.104-.324-1.872-.324l4.248-1.62c1.104 0 2.004.192 2.7.576.72.384 1.368 1.044 1.944 1.98l1.44 2.304Zm-10.296-3.24c-2.496 0-4.692-.54-6.588-1.62-1.872-1.104-3.336-2.64-4.392-4.608-1.032-1.968-1.548-4.26-1.548-6.876 0-1.992.288-3.78.864-5.364.6-1.608 1.452-2.976 2.556-4.104a11.305 11.305 0 0 1 3.96-2.664c1.56-.624 3.276-.936 5.148-.936 2.544 0 4.752.54 6.624 1.62 1.872 1.08 3.324 2.604 4.356 4.572 1.056 1.944 1.584 4.224 1.584 6.84 0 1.992-.3 3.792-.9 5.4-.6 1.608-1.452 2.988-2.556 4.14a11.305 11.305 0 0 1-3.96 2.664c-1.536.624-3.252.936-5.148.936Zm0-4.752c1.416 0 2.616-.324 3.6-.972 1.008-.672 1.776-1.632 2.304-2.88.552-1.272.828-2.772.828-4.5 0-2.64-.588-4.68-1.764-6.12-1.176-1.464-2.832-2.196-4.968-2.196-1.392 0-2.592.324-3.6.972-1.008.648-1.776 1.596-2.304 2.844-.528 1.248-.792 2.748-.792 4.5 0 2.616.588 4.668 1.764 6.156 1.176 1.464 2.82 2.196 4.932 2.196Zm22.569 4.752c-1.488 0-2.724-.276-3.708-.828-.984-.552-1.716-1.38-2.196-2.484-.456-1.128-.684-2.52-.684-4.176v-8.136c0-.912.228-1.596.684-2.052.48-.456 1.152-.684 2.016-.684.864 0 1.536.228 2.016.684.48.456.72 1.14.72 2.052v8.28c0 1.056.216 1.848.648 2.376.432.504 1.116.756 2.052.756 1.032 0 1.872-.36 2.52-1.08.672-.744 1.008-1.716 1.008-2.916v-7.416c0-.912.228-1.596.684-2.052.48-.456 1.152-.684 2.016-.684.888 0 1.56.228 2.016.684.48.456.72 1.14.72 2.052v12.78c0 1.848-.876 2.772-2.628 2.772-.864 0-1.524-.24-1.98-.72-.456-.48-.684-1.164-.684-2.052v-2.412l.54 1.404c-.528 1.224-1.284 2.172-2.268 2.844-.984.672-2.148 1.008-3.492 1.008Zm17.094-.108c-.888 0-1.572-.252-2.052-.756-.456-.528-.684-1.26-.684-2.196v-12.312c0-.96.228-1.692.684-2.196.48-.528 1.164-.792 2.052-.792.864 0 1.524.264 1.98.792.48.504.72 1.236.72 2.196v12.312c0 .936-.228 1.668-.684 2.196-.456.504-1.128.756-2.016.756Zm0-21.204c-1.008 0-1.788-.228-2.34-.684-.528-.48-.792-1.152-.792-2.016 0-.888.264-1.56.792-2.016.552-.48 1.332-.72 2.34-.72 1.008 0 1.776.24 2.304.72.528.456.792 1.128.792 2.016 0 .864-.264 1.536-.792 2.016-.528.456-1.296.684-2.304.684ZM77.412 153c-.528 0-.972-.132-1.332-.396-.36-.288-.6-.648-.72-1.08-.12-.432-.12-.9 0-1.404.144-.504.42-.972.828-1.404l8.82-10.584v1.26h-7.812c-.648 0-1.152-.18-1.512-.54-.36-.36-.54-.852-.54-1.476 0-.672.18-1.176.54-1.512.36-.36.864-.54 1.512-.54H87.6c.648 0 1.164.144 1.548.432.384.288.636.648.756 1.08.144.408.156.864.036 1.368-.096.48-.348.936-.756 1.368l-9.036 10.8v-1.404H88.5c1.368 0 2.052.672 2.052 2.016 0 .648-.18 1.152-.54 1.512-.36.336-.864.504-1.512.504H77.412Zm19.932 6.804c-.624 0-1.14-.168-1.548-.504-.408-.336-.648-.78-.72-1.332-.072-.528.024-1.092.288-1.692l2.412-5.328v2.232l-6.372-14.616c-.24-.624-.324-1.2-.252-1.728.096-.552.36-.984.792-1.296.456-.336 1.08-.504 1.872-.504.648 0 1.164.156 1.548.468.408.288.78.852 1.116 1.692l4.248 10.8h-1.152l4.392-10.836c.336-.816.708-1.368 1.116-1.656.432-.312 1.008-.468 1.728-.468.624 0 1.116.168 1.476.504.384.312.612.732.684 1.26.096.528 0 1.104-.288 1.728l-8.46 19.188c-.36.816-.768 1.368-1.224 1.656-.432.288-.984.432-1.656.432Z"
    />
    <Mask
      id="a"
      width={100}
      height={100}
      x={12}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Rect width={100} height={100} x={12} fill="#6A5AE0" rx={24} />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#FF8FA2"
        d="M115.216 72.248c0 14.023-5.616 27.473-15.611 37.389-9.996 9.917-23.553 15.488-37.689 15.488-.729 0-1.444-.014-2.173-.041a54.282 54.282 0 0 1-11.527-1.719 65.386 65.386 0 0 0 2.16-1.133c.014 0 .027-.014.055-.027l.014-.014c.756-.409 1.499-.819 2.228-1.242.179-.109.358-.204.536-.3a63.684 63.684 0 0 0 2.05-1.255c.2-.107.392-.226.578-.355a37.647 37.647 0 0 0 1.554-.996 60.801 60.801 0 0 0 2.613-1.788c.344-.232.66-.464.99-.723.44-.3.867-.628 1.294-.955.385-.273.756-.56 1.127-.86a32.223 32.223 0 0 0 1.541-1.242c.22-.163.44-.341.66-.532.55-.45 1.087-.914 1.623-1.392.29-.245.578-.491.867-.764.316-.273.619-.546.921-.832.578-.519 1.142-1.065 1.706-1.61.075-.062.145-.13.206-.205a45.67 45.67 0 0 0 1.61-1.61c.371-.355.715-.724 1.045-1.092.399-.396.77-.805 1.142-1.215.22-.231.426-.463.619-.695.495-.546.976-1.106 1.458-1.665.247-.287.495-.587.729-.887.357-.41.701-.819 1.017-1.242.33-.396.647-.805.95-1.215.288-.354.564-.723.825-1.078.358-.463.701-.927 1.031-1.405.33-.478.688-.955 1.018-1.447.164-.214.316-.437.454-.668a67.09 67.09 0 0 0 1.362-2.074c.564-.86 1.1-1.733 1.61-2.62.233-.382.453-.764.673-1.147a87.528 87.528 0 0 0 4.76-9.66c.206-.465.398-.929.577-1.406.22-.505.413-1.024.605-1.542.165-.423.33-.86.482-1.297.179-.477.344-.968.509-1.446a78.557 78.557 0 0 0 1.637-5.295c.123-.45.247-.887.357-1.337.083-.286.151-.56.22-.846l.33-1.392c.44-1.897.812-3.807 1.128-5.745l.207-1.31c.027-.204.055-.395.082-.6.083-.519.151-1.037.206-1.556.097-.778.193-1.555.262-2.333.027-.205.041-.41.055-.614.055-.532.096-1.078.137-1.61.042-.533.07-1.092.097-1.638.027-.382.041-.764.055-1.16.055-1.255.082-2.51.082-3.766 0-.641 0-1.27-.027-1.897 0-.327 0-.641-.014-.969a90.719 90.719 0 0 0-.179-3.37v-.041c-.014-.273-.027-.546-.055-.819-.055-.75-.124-1.487-.192-2.238a.162.162 0 0 0-.014-.068 53.405 53.405 0 0 1 5.185 5.39l.042.041a.047.047 0 0 1 .013.027 52.41 52.41 0 0 1 12.187 33.665Z"
      />
      <Path
        fill="#9087E5"
        d="M98.216 42.283a90.067 90.067 0 0 1-12.84 46.37A90.887 90.887 0 0 1 50.44 121.95a.12.12 0 0 1-.07.041l-.013.014c-.714.382-1.429.751-2.143 1.119a52.396 52.396 0 0 1-12.807-5.24 53.752 53.752 0 0 1-8.19-5.759c.481-.505.948-1.01 1.416-1.528l.013-.014c0-.014.014-.027.028-.041h.014c15.036-16.597 23.34-38.142 23.305-60.468a90.57 90.57 0 0 0-4.535-28.316h-.014c0-.027-.014-.055-.014-.082h-.014a.237.237 0 0 1-.013-.068 75.583 75.583 0 0 0-.866-2.484H61.9c13.255-.018 26.039 4.889 35.836 13.756.11 1.037.193 2.074.261 3.125.152 2.074.22 4.162.22 6.277Z"
      />
      <Path
        fill="#C4D0FB"
        d="M52 49.95c0 .914-.014 1.829-.04 2.73-.014.586-.042 1.16-.07 1.746a85.486 85.486 0 0 1-.613 7c-.068.601-.15 1.188-.245 1.775-.095.723-.218 1.432-.34 2.156-.11.682-.233 1.35-.369 2.033-.027.164-.068.328-.095.491a88.225 88.225 0 0 1-2.713 10.303c-.178.56-.368 1.106-.56 1.638-.016.066-.039.13-.068.19-.19.56-.381 1.093-.586 1.638-.054.164-.123.342-.19.519-.219.587-.45 1.16-.682 1.733a49.13 49.13 0 0 1-.818 1.952c-.287.668-.587 1.337-.886 2.006-.287.614-.587 1.228-.873 1.828-.314.642-.627 1.27-.954 1.883-.328.615-.655 1.242-.996 1.856-.34.614-.681 1.228-1.022 1.829a77.793 77.793 0 0 1-2.195 3.589 85.944 85.944 0 0 1-2.331 3.466 117.745 117.745 0 0 1-2.495 3.357 104.653 104.653 0 0 1-3.981 4.749h-.014c-.014.014-.014.014-.014.027a.014.014 0 0 1-.004.01.017.017 0 0 1-.01.004c-.463.519-.94 1.037-1.417 1.542a53.09 53.09 0 0 1-5.972-6.032.234.234 0 0 0-.054-.068A52.705 52.705 0 0 1 9 71.88V19h37.587c.3.819.587 1.638.846 2.47l.013.014a.245.245 0 0 0 .014.068h.014v.04a.051.051 0 0 0 .013.042h.014a.67.67 0 0 0 .055.15l.163.532a77.516 77.516 0 0 1 1.268 4.394c.273.996.518 2.02.75 3.043.422 1.856.79 3.753 1.104 5.677.068.464.15.914.205 1.379.163 1.132.313 2.265.436 3.411.054.423.095.86.123 1.283.081.791.136 1.596.19 2.388.137 2.006.205 4.026.205 6.059Z"
      />
    </G>
    <Rect width={100} height={90} x={12} fill="#fff" rx={24} />
    <Mask
      id="b"
      width={54}
      height={62}
      x={35}
      y={14}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path
        fill="#6A5AE0"
        fillRule="evenodd"
        d="M60.388 61.576a24.65 24.65 0 0 0 5.485-.88l2.504 2.481c2.357 2.334 6.186 2.343 8.553.02a5.906 5.906 0 0 0 .02-8.435l-2.844-2.817a6.037 6.037 0 0 0-1.781-1.222c-1.868-1.327-4.504-1.153-6.631-.12a14.762 14.762 0 0 1-5.763 1.463 14.724 14.724 0 0 1-9.958-3.261 14.218 14.218 0 0 1-5.13-8.992c-.51-3.519.335-7.099 2.371-10.039a14.552 14.552 0 0 1 8.636-5.859c3.521-.83 7.231-.34 10.404 1.372a14.35 14.35 0 0 1 6.755 7.888c.629 1.803.878 3.694.753 5.563-.18 2.69.864 5.597 3.345 6.65 2.435 1.035 5.304-.078 5.86-2.664.9-4.174.645-8.54-.782-12.632-1.955-5.606-5.97-10.294-11.258-13.148a24.645 24.645 0 0 0-17.341-2.286c-5.869 1.383-11.001 4.865-14.393 9.765a23.459 23.459 0 0 0-3.951 16.732c.85 5.865 3.899 11.209 8.549 14.985 4.65 3.777 10.568 5.715 16.597 5.436Zm18.298 4.234a5.906 5.906 0 0 0-.02 8.434c2.357 2.334 6.186 2.342 8.553.019a5.906 5.906 0 0 0 .02-8.434c-2.357-2.334-6.186-2.343-8.553-.02Z"
        clipRule="evenodd"
      />
    </Mask>
    <G fill="#6A5AE0" fillRule="evenodd" clipRule="evenodd" mask="url(#b)">
      <Path d="m67.816 95.32 49.014-48.392-10.598-10.119-56.078 55.872 17.662 2.64ZM58.189 82.428l47.528-45.932-10.276-9.604-54.38 53.03 17.128 2.506Z" />
      <Path d="m43.893 80.472 55.85-55.225-9.788-10.323-55.85 55.224 9.788 10.324Z" />
      <Path d="m33.809 71.52 55.744-55.382-14.485-6.105-49.16 48.84 7.9 12.646Z" />
      <Path d="M25.908 59.619 76.42 10.033 49.36 12.69 25.908 37.925V59.62Z" />
    </G>
  </Svg>
)
export default AppLogoIcon
