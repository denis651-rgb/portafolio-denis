export default function ProjectBadges({ className = "", limit, stack = [] }) {
  if (!stack.length) {
    return null;
  }

  const visibleStack = limit ? stack.slice(0, limit) : stack;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {visibleStack.map((tech) => (
        <span key={tech} className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
          {tech}
        </span>
      ))}
    </div>
  );
}
