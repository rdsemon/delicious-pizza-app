function FormInput({ label, name, type, placeholder }) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="font-semibold tracking-wide">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="text-secondary h-8 w-full rounded-md bg-yellow-100 px-2 py-3 outline-offset-1 outline-red-200 focus:outline-yellow-400"
      />
    </div>
  );
}

export default FormInput;
