function Button({ children, type, className }) {
  return (
    <button
      type={type}
      className={`${className} bg-primary hover:bg-primary/75 text-secondary cursor-pointer rounded-md text-center font-semibold uppercase transition-all`}
    >
      {children}
    </button>
  );
}

export default Button;
