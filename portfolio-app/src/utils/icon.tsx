import { SVGProps } from "react";

export const Arrow = ({
  width,
  height,
  stroke,
  className,
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={width || "38"}
      height={height || "38"}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.5237 24.0237L23.8928 14.5612M23.8928 14.5612L22.7651 23.8928M23.8928 14.5612L14.5612 13.4335"
        stroke={stroke || "#09223B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SmallPuddle = ({
  width,
  height,
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={width || "347"}
      height={height || "337"}
      viewBox="0 0 347 337"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74.1237 262.303C65.0057 245.947 61.724 229.021 61.9024 212.703C62.0777 195.977 64.8577 179.985 67.6433 164.297C69.0923 156.157 71.0619 148.223 73.348 140.515C76.9603 128.334 81.415 116.213 88.5232 106.518C91.5435 102.393 95.1701 98.5648 99.8993 96.4779C106.399 93.6049 114.615 94.9367 122.295 95.8692C140.154 98.0416 158.031 100.317 175.807 101.984C184.802 102.826 194.259 103.965 202.77 102.84C210.975 101.744 218.291 98.7917 225.653 95.9487C238.964 90.7998 252.827 86.7851 267.039 83.4681C271.964 82.322 278.399 79.6931 283.8 85.0111C284.092 85.301 284.378 85.6105 284.65 85.9167C284.665 85.9343 284.339 85.4955 284.665 85.9485C284.824 86.1705 284.998 86.396 285.15 86.6234C285.651 87.3444 286.112 88.0978 286.532 88.8552C287.52 90.6311 288.326 92.4676 289.01 94.3161C292.822 104.513 293.859 115.157 294.361 125.078C295.021 138.187 294.309 150.993 292.643 163.331C290.934 175.954 288.207 188.234 283.88 199.487C280.288 208.82 275.548 217.988 268.096 223.944C265.093 226.337 261.576 228.168 257.525 228.792C252.299 229.597 246.421 228.146 240.802 226.851C233.536 225.184 226.214 223.503 219.197 223.599C210.946 223.72 203.635 226.463 198.094 231.576C192.092 237.109 186.355 242.94 180.247 248.355C171.561 256.051 162.51 263.341 152.874 269.846C143.284 276.314 133.044 282.228 121.567 285.644C113.066 288.17 102.634 289.764 92.6183 284.663C89.1796 282.908 85.8853 280.345 83.3155 277.131C79.6602 272.589 76.9233 267.295 74.1237 262.303C73.8955 261.903 73.4458 261.595 73.2249 261.203C77.4322 268.714 81.899 277.393 88.918 282.857C93.5246 286.447 98.7948 288.233 103.763 288.812C115.257 290.152 125.737 286.244 134.888 281.896C146.021 276.603 156.153 269.693 165.764 262.253C174.21 255.707 182.26 248.662 190.039 241.325C192.583 238.924 195.098 236.474 197.607 234.028C202.892 228.846 209.454 225.482 217.445 224.839C224.497 224.275 231.994 225.738 239.433 227.44C245.424 228.814 251.767 230.618 257.446 230.03C266.436 229.1 272.764 222.537 277.327 215.567C283.356 206.372 287.15 195.29 289.922 183.927C292.95 171.489 294.707 158.373 295.303 144.899C295.819 133.176 295.567 121.011 293.382 108.679C292.016 101.004 289.967 92.3313 284.369 85.5591C283.428 84.4202 284.968 85.8476 283.8 85.0111C280.994 83.0183 275.614 80.559 272.953 80.9566C267.964 81.7003 263.157 83.0582 258.365 84.2722C254.073 85.3566 249.804 86.5099 245.587 87.7533C235.303 90.7818 225.614 94.8214 215.596 98.3514C208.649 100.798 201.394 102.247 193.453 102.115C180.967 101.908 168.103 100.293 155.382 98.8408C145.433 97.7068 135.467 96.4984 125.502 95.2901C117.114 94.2744 107.862 92.3073 100.46 94.8311C95.483 96.5336 91.6669 100.237 88.5267 104.27C84.8155 109.033 81.8997 114.54 79.382 120.266C74.7024 130.897 71.2956 142.426 68.611 154.246C66.3833 164.049 64.8327 174.209 63.3985 184.376C61.0522 200.953 59.2868 218.538 63.6444 236.889C65.6087 245.161 68.8741 253.354 73.2525 261.21C73.453 261.604 73.9093 261.906 74.1237 262.303Z"
        fill="#D7E5F2"
      />
      <path
        d="M119.924 265.839C114.718 269.973 108.551 272.97 101.914 274.811C96.7544 276.237 90.4084 277.531 84.3346 275.301C82.7606 274.723 81.2213 273.823 79.9376 272.494C79.8093 272.364 79.6937 272.209 79.5588 272.084C79.1752 271.723 79.8338 272.461 79.7463 272.327C79.5565 272.028 79.3126 271.742 79.109 271.439C78.7233 270.859 78.364 270.257 78.0317 269.648C76.4356 266.696 75.4393 263.547 74.6782 260.471C72.4531 251.502 72.0657 242.544 72.2009 234.009C72.3777 222.653 73.7163 211.654 75.879 201.097C78.2971 189.275 81.7738 177.953 86.4107 167.444C91.0788 156.866 96.939 147.046 104.351 138.775C111.529 130.77 120.228 124.223 130.534 120.413C135.189 118.694 140.039 117.537 145.363 117.487C151.651 117.429 158.043 117.77 164.337 117.707C179.076 117.556 193.582 116.567 207.996 115.345C220.246 114.306 232.319 112.767 244.57 111.742C249.797 111.303 255.887 110.437 261.588 112.898C267.97 115.654 272.19 122.466 274.757 128.778C278.942 139.081 280.067 149.873 280.188 159.827C280.322 171.267 278.952 182.35 276.183 192.596C273.834 201.279 270.504 210.016 264.632 216.045C262.483 218.256 259.882 220.13 256.694 220.812C252.266 221.758 247.674 219.682 243.243 216.565C236.887 212.101 230.93 207.236 224.016 204.328C215.441 200.721 206.694 199.926 198.938 201.463C191.954 202.853 185.496 205.764 179.386 208.804C173.791 211.598 168.604 215.027 163.791 218.899C152.789 227.724 143.523 238.609 134.429 249.5C129.782 255.087 125.529 261.29 119.924 265.839C119.917 265.844 120.816 266.944 120.822 266.939C123.466 264.794 125.698 262.267 127.878 259.621C130.598 256.328 133.304 253.032 136.045 249.766C140.967 243.882 145.953 238.063 151.231 232.548C160.19 223.176 170.079 214.688 181.973 209.112C188.379 206.11 195.025 203.133 202.442 202.152C210.451 201.099 219.444 202.574 227.965 206.855C231.514 208.638 234.919 210.905 238.235 213.333C240.939 215.321 243.593 217.438 246.404 219.193C250.742 221.902 255.105 222.873 258.998 221.542C266.13 219.107 270.317 211.622 273.268 204.809C277.323 195.436 279.564 184.785 280.57 173.824C281.541 163.183 281.397 151.839 278.859 140.396C277.015 132.07 273.689 123.384 267.21 116.598C263.135 112.324 258.654 110.628 253.793 110.328C250.294 110.118 246.904 110.378 243.542 110.659C238.458 111.084 233.421 111.661 228.376 112.201C212.403 113.889 196.337 115.3 180.074 116.094C170.498 116.564 160.85 116.755 151.087 116.51C146.61 116.396 142.101 116.19 137.892 116.971C128.687 118.678 120.462 122.945 113.457 128.329C104.605 135.134 97.4992 144.049 91.7661 153.971C85.9626 164.009 81.5074 175.118 78.1833 186.829C75.0798 197.758 72.9279 209.245 71.9061 221.145C71.0739 230.836 70.8784 240.901 72.2561 251.193C73.0841 257.4 74.3518 265.008 78.5307 270.826C80.3775 273.397 82.4261 275.392 85.2273 276.421C91.4396 278.699 97.9262 277.334 103.164 275.83C109.658 273.974 115.703 271.003 120.823 266.953C120.822 266.939 119.93 265.833 119.924 265.839Z"
        fill="#D7E5F2"
      />
      <path
        d="M134.306 227.5C129.696 235.154 124.525 242.783 117.565 248.115C115.619 249.602 113.469 250.976 110.968 251.596C109.494 251.963 107.696 252.096 106.018 251.148C105.669 250.949 105.324 250.702 105.005 250.42C104.814 250.253 104.641 250.028 104.45 249.861C103.983 249.479 105.184 250.949 104.693 250.146C104.613 250.021 104.519 249.892 104.439 249.767C103.776 248.753 103.274 247.666 102.861 246.58C101.698 243.552 101.127 240.438 100.731 237.431C99.5366 228.456 99.9217 219.688 100.787 211.292C102.912 190.654 108.987 171.751 117.623 154.821C126.466 137.472 141.282 121.393 163.88 124.053C171.306 124.93 178.705 128.499 186.166 130.432C195.982 132.98 204.826 131.48 212.915 128.381C217.198 126.746 221.253 124.711 225.448 122.928C228.959 121.44 232.649 119.996 236.767 119.831C240.695 119.676 244.779 121.022 248.488 124.038C250.043 125.308 251.114 126.633 252.134 128.34C252.955 129.723 253.669 131.151 254.302 132.6C257.324 139.509 258.708 146.802 259.167 153.648C259.688 161.368 258.973 168.922 256.618 175.454C254.336 181.764 250.376 187.127 244.417 189.704C241.29 191.055 237.734 191.597 234.004 191.4C229.309 191.155 224.65 189.633 219.877 187.97C201.469 181.565 182.042 178.281 167.236 186.119C154.85 192.684 147.359 205.363 140.245 217.439C138.273 220.796 136.314 224.172 134.306 227.5C134.255 227.585 135.25 228.519 135.205 228.6C142.902 215.782 149.729 201.534 161.005 192.059C166.207 187.692 172.412 184.62 179.476 183.327C188.003 181.763 197.391 182.723 206.735 184.924C212.687 186.329 218.57 188.421 224.524 190.396C228.977 191.882 233.484 192.72 237.73 192.51C244.921 192.155 250.668 188.59 254.352 182.984C258.061 177.342 259.764 170.066 260.138 162.526C260.503 155.257 259.706 147.47 257.411 139.791C255.646 133.894 252.789 127.159 247.589 122.938C239.296 116.21 231.026 119.047 224.261 121.946C215.489 125.706 207.026 130.344 196.611 130.676C192.574 130.804 188.39 130.214 184.169 129.025C180.452 127.981 176.76 126.536 173.056 125.32C169.11 124.022 165.179 123.066 161.308 122.779C156.041 122.399 150.997 123.144 146.394 124.629C136.357 127.866 128.663 134.929 122.796 143.419C117.49 151.084 113.631 159.901 110.008 168.833C106.137 178.364 103.268 188.5 101.417 199.169C99.8037 208.47 98.8489 218.173 99.1912 228.195C99.3256 231.974 99.6266 235.823 100.38 239.713C100.9 242.399 101.604 245.258 103.049 247.85C103.89 249.364 105.25 251.218 106.714 252.135C108.389 253.174 110.223 253.085 111.725 252.739C114.248 252.16 116.418 250.783 118.372 249.291C121.352 247.018 123.957 244.259 126.357 241.344C129.623 237.385 132.513 233.073 135.205 228.6C135.263 228.509 134.268 227.575 134.306 227.5Z"
        fill="#D7E5F2"
      />
      <path
        d="M120.872 167.459C125.878 164.617 130.529 161.302 135.115 157.894C139.019 154.999 142.892 152.012 147.208 149.675C150.976 147.639 155.144 146.173 159.831 146.071C165.106 145.961 170.692 147.62 176.083 150.202C179.587 151.875 183.024 153.911 186.365 156.127C189.236 158.023 192.151 159.649 195.228 160.584C200.255 162.113 204.972 161.563 208.951 159.663C212.682 157.878 215.73 155.095 218.567 152.161C220.69 149.972 222.628 147.259 225.304 145.734C226.018 145.327 226.931 144.948 227.919 145.388C228.127 145.482 228.304 145.617 228.493 145.741C228.584 145.799 228.664 145.91 228.755 145.967C229.288 146.296 228.114 144.98 228.596 145.76C229.753 147.662 230.895 149.518 231.843 151.502C235.252 158.697 236.061 166.768 230.756 170.646C227.699 172.878 223.553 173.507 219.528 173.8C215.102 174.113 210.561 174.11 206.006 173.955C198.914 173.716 191.703 172.9 184.427 171.49C175.058 169.677 165.072 166.137 156.134 167.024C143.212 168.319 135.372 177.995 130.483 189.179C128.442 193.87 126.934 198.916 124.844 203.573C123.924 205.616 122.316 209.542 119.154 208.206C118.278 207.836 117.725 207.172 116.976 206.551C116.495 206.152 117.334 207.125 117.127 206.75C117.024 206.57 116.881 206.409 116.751 206.236C116.599 206.008 116.453 205.79 116.314 205.566C115.934 204.966 115.609 204.351 115.29 203.732C113.884 200.918 112.976 197.931 112.372 195.034C110.907 188.101 111.038 180.965 113.523 175.442C115.111 171.87 117.636 169.324 120.872 167.459C120.838 167.471 120.02 166.335 119.973 166.358C116.61 168.283 114.016 170.975 112.429 174.737C111.184 177.69 110.606 181.083 110.545 184.61C110.433 190.543 111.55 197.629 114.916 203.625C116.346 206.171 119.425 210.48 122.173 209.38C123.49 208.862 124.288 207.491 124.941 206.268C125.956 204.368 126.724 202.287 127.493 200.221C131.874 188.454 136.604 176.226 147.757 170.741C152.061 168.619 157.022 167.679 162.33 168.054C166.898 168.373 171.589 169.531 176.243 170.602C191.301 174.079 206.14 175.9 220.406 174.874C224.539 174.579 228.828 173.923 231.905 171.513C234.433 169.536 235.653 166.323 235.506 162.569C235.356 158.905 233.996 155.041 232.162 151.447C231.041 149.266 229.773 146.809 227.991 144.992C225.91 142.862 223.675 144.981 222.47 146.082C219.777 148.531 217.471 151.413 214.764 153.858C211.59 156.73 207.936 159.215 203.463 160.066C198.401 161.03 192.774 159.536 187.472 156.309C183.921 154.146 180.499 151.791 176.85 149.913C173.829 148.359 170.743 147.05 167.648 146.173C162.479 144.701 157.476 144.591 152.958 145.83C148.392 147.079 144.434 149.476 140.702 152.069C136.253 155.145 132.027 158.523 127.563 161.583C125.105 163.267 122.589 164.867 119.986 166.347C120.007 166.345 120.825 167.482 120.872 167.459Z"
        fill="#D7E5F2"
      />
      <path
        d="M163.369 162.245C163.228 162.14 163.101 162.038 162.986 161.912C163.281 162.273 163.576 162.634 163.871 162.994C163.085 161.978 166.262 162.024 166.618 162.028C167.765 162.03 168.943 162.11 170.122 162.232C171.405 162.359 172.736 162.68 174.002 162.747C175.816 162.85 176.99 161.671 177.88 160.372C178.137 160 178.965 158.033 179.736 158.841C179.477 158.524 179.225 158.216 178.967 157.899C178.988 157.926 179.01 157.952 179.038 157.987C178.995 157.935 178.952 157.882 178.909 157.829C180.172 159.659 181.73 161.175 183.413 162.574C184.466 163.446 185.552 164.276 186.605 165.147C186.98 165.458 187.348 165.787 187.717 166.117C187.788 166.177 187.845 166.247 187.909 166.298C188.305 166.635 187.53 165.713 187.492 165.788C187.48 165.827 187.646 166.044 187.579 166.098C187.098 166.52 186.276 166.296 185.572 166.27C184.32 166.221 183.085 166.246 181.857 166.281C179.087 166.342 176.311 166.423 173.455 166.056C170.049 165.609 166.595 164.482 163.369 162.245C163.72 162.486 163.909 163.095 164.268 163.345C169.076 166.683 174.2 167.399 179.036 167.426C181.269 167.436 183.463 167.303 185.705 167.35C186.443 167.363 187.534 167.647 188.187 167.421C188.544 167.291 188.493 167.068 188.239 166.689C187.324 165.353 186.074 164.348 184.852 163.365C183.948 162.636 183.038 161.926 182.154 161.181C181.715 160.806 181.276 160.43 180.857 160.039C180.68 159.876 180.509 159.707 180.338 159.538C180.246 159.452 180.153 159.352 180.067 159.26C179.981 159.169 179.903 159.086 179.817 158.995C179.552 158.698 179.654 158.835 180.12 159.393C179.903 158.911 179.213 158.08 178.823 157.738C178.313 157.288 178.017 157.736 177.771 158.068C176.71 159.493 175.895 161.274 173.942 161.607C173.223 161.725 172.458 161.557 171.695 161.446C170.768 161.309 169.848 161.194 168.929 161.108C167.4 160.963 165.838 160.844 164.376 160.982C163.988 161.02 162.678 161.048 162.877 161.737C163.012 162.213 163.859 163.048 164.275 163.354C163.916 163.09 163.728 162.509 163.369 162.245Z"
        fill="#D7E5F2"
      />
    </svg>
  );
};

export const Logo = ({
  width,
  height,
  fill,
  stroke,
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={width || "43"}
      height={height || "20"}
      viewBox="0 0 43 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" fill={fill || "black"} />
      <rect x="23" width="20" height="20" fill={fill || "black"} />
      <line x1="9.5" y1="14" x2="9.5" y2="20" stroke={stroke || "white"} />
      <line x1="9" y1="13.5" x2="20" y2="13.5" stroke={stroke || "white"} />
      <line x1="43" y1="6.5" x2="33" y2="6.5" stroke={stroke || "white"} />
      <line x1="33.5" y1="7" x2="33.5" y2="14" stroke={stroke || "white"} />
    </svg>
  );
};

export const Sun = ({
  fill,
  width,
  height,
  className,
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 20 20"
      width={width || "25"}
      height={height || "25"}
      className={className}
    >
      <path
        fill={fill || "none"}
        d="M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045"
      ></path>
    </svg>
  );
};

export const Moon = ({
  fill,
  width,
  height,
  className,
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 20 20"
      width={width || "25"}
      height={height || "25"}
      className={className}
    >
      <path
        fill={fill || "none"}
        d="M10.544,8.717l1.166-0.855l1.166,0.855l-0.467-1.399l1.012-0.778h-1.244L11.71,5.297l-0.466,1.244H10l1.011,0.778L10.544,8.717z M15.986,9.572l-0.467,1.244h-1.244l1.011,0.777l-0.467,1.4l1.167-0.855l1.165,0.855l-0.466-1.4l1.011-0.777h-1.244L15.986,9.572z M7.007,6.552c0-2.259,0.795-4.33,2.117-5.955C4.34,1.042,0.594,5.07,0.594,9.98c0,5.207,4.211,9.426,9.406,9.426c2.94,0,5.972-1.354,7.696-3.472c-0.289,0.026-0.987,0.044-1.283,0.044C11.219,15.979,7.007,11.759,7.007,6.552 M10,18.55c-4.715,0-8.551-3.845-8.551-8.57c0-3.783,2.407-6.999,5.842-8.131C6.549,3.295,6.152,4.911,6.152,6.552c0,5.368,4.125,9.788,9.365,10.245C13.972,17.893,11.973,18.55,10,18.55 M19.406,2.304h-1.71l-0.642-1.71l-0.642,1.71h-1.71l1.39,1.069l-0.642,1.924l1.604-1.176l1.604,1.176l-0.642-1.924L19.406,2.304z"
      ></path>
    </svg>
  );
};
