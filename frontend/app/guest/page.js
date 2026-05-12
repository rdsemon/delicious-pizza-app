import generateMetadata from "@/lib/metadata";

export const metadata = generateMetadata("Guest");
function Guest() {
  return (
    <div>
      <h1>This is guest page</h1>
    </div>
  );
}

export default Guest;
