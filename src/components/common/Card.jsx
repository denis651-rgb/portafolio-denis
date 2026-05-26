export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-card text-card-foreground border border-border rounded-lg shadow-sm hover:shadow-md transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
