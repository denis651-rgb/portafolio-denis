import { Link } from "react-router-dom";

const variants = {
  primary: "bg-accent text-accent-foreground hover:opacity-90 shadow-sm",
  secondary: "bg-muted text-foreground hover:bg-border",
  outline: "border border-border text-foreground hover:text-accent hover:border-accent",
};

export default function Button({
  children,
  className = "",
  href,
  icon,
  to,
  type = "button",
  variant = "primary",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md font-semibold transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {icon}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {icon}
      {children}
    </button>
  );
}
