function Form({ formHeading, className, children }) {
  return (
    <div className="md:px-4 md:py-2">
      <form
        action=""
        className="flex flex-col items-center justify-center space-y-4 md:space-y-6 md:px-6 md:py-3"
      >
        <div className="text-center">
          <h3 className="border-b-primary inline-block border-b px-4 py-2 text-xl font-bold tracking-tight uppercase">
            {formHeading}
          </h3>
        </div>

        <div
          className={` ${className} border-primary gap-4 rounded-md border px-3 py-2 shadow-md md:gap-6 md:px-8 md:py-4`}
        >
          {children}
        </div>
      </form>
    </div>
  );
}

export default Form;
