
export default function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-emerald-700 border-l-4 border-emerald-400 pl-4 my-8">
      {title}
    </h2>
  );
}