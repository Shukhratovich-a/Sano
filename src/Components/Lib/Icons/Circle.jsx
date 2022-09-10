const Circle = ({ className, width = 1099, height = 1028 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M550.229 1028c-68.767 0-136.804-12.35-202.288-36.632-65.484-24.279-124.675-58.952-176.114-103.081-51.53-44.214-93.575-98.481-124.675-161.096C15.869 664.32 0 593.015 0 515.406c0-67.131 13.954-132.643 41.497-194.832 27.544-62.105 66.305-117.479 115.19-164.589 48.885-47.026 107.255-85.191 173.742-113.39C397.281 14.313 471.156 0 550.229 0c69.68 0 138.63 12.778 204.752 38.08 65.94 25.217 125.04 61.168 175.475 106.83 50.436 45.662 91.474 100.44 122.124 162.97 30.82 62.871 46.42 132.728 46.42 207.44 0 66.109-13.68 130.683-40.77 191.936-27.09 61.167-65.208 116.286-113.455 163.737-48.338 47.622-106.89 86.043-174.016 114.241C703.451 1013.69 629.303 1028 550.229 1028Zm0-795.769c-42.135 0-81.9 7.496-118.29 22.32-36.573 14.908-68.859 35.524-95.946 61.252-27.27 25.898-49.159 56.397-65.119 90.558-15.87 33.906-23.896 70.624-23.896 109.13s8.026 75.138 23.896 109.044c15.96 34.247 37.758 64.405 64.936 89.792 27.088 25.302 59.556 45.407 96.585 59.889 36.937 14.397 76.611 21.724 117.834 21.724 41.133 0 80.168-7.497 115.92-22.235 36.116-14.908 68.311-35.354 95.399-60.741 27.178-25.387 49.067-55.375 65.027-89.11 15.779-33.48 23.805-69.942 23.805-108.278 0-38.421-8.026-75.138-23.896-109.13-15.96-34.161-38.122-64.66-65.757-90.472-27.635-25.813-60.012-46.515-96.22-61.423-35.66-14.824-74.239-22.32-114.278-22.32Z"
        fill="url(#a)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="98.836"
          y1="155.947"
          x2="909.403"
          y2="944.587"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#30CE88" />
          <stop offset="1" stopColor="#D3F5CE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Circle;
