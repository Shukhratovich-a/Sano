import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <svg className="loading-icon" width="30" height="30" viewBox="0 0 32 32">
        <circle id="circle-1" cx="16" cy="16" fill="none" r="14" strokeWidth={2} />
        <circle id="circle-2" cx="16" cy="16" fill="none" r="14" strokeWidth={2} />
      </svg>
    </div>
  );
};

export default Loading;
