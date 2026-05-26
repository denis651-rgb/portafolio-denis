export default function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`text-4xl font-bold text-center text-accent ${className}`} data-aos="fade-up">
      {children}
    </h2>
  );
}
