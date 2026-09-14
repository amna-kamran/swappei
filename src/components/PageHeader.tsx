export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
      )}
    </div>
  );
}
