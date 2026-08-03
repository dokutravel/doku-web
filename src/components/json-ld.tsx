/** Renders a JSON-LD structured-data block. Data is fully controlled by our
 * code (never user input), so the inline script is safe. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
