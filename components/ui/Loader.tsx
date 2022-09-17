export const Loader = () => {
  return (
    <div
      className="animate-spin inline-block w-24 h-24 border-[3px] border-current border-t-transparent text-white rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
