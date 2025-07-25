export default function FormError({
  error,
  className,
}: {
  error: string;
  className?: string;
}) {
  return <p className={`mt-2 text-sm text-red-500 ${className}`}>{error}</p>;
}
