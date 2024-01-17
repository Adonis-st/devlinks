import { Nav } from "./_components/nav";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div className="p-4">{children}</div>
    </>
  );
}
