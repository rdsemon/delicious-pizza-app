export default function TextDivider({ text = "or" }) {
  return (
    <div className="flex items-center justify-center space-x-3">
      <span className="bg-primary h-[1px] w-1/2"></span>
      <span className="text-secondary font-bold">{text}</span>
      <span className="bg-primary h-[1px] w-1/2"></span>
    </div>
  );
}
