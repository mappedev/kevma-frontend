export const Card = ({ additionalClass = "", children }) => (
  <div className={`card ${additionalClass}`}>
    <div className="absolute right-4 bottom-3 z-40">
      <button className="mr-3 transition-colors-200 hover:text-orange-primary">
        IM
      </button>
      <button className="transition-colors-200 hover:text-orange-primary">
        ID
      </button>
    </div>
    {children}
  </div>
);
