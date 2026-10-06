import { IoAdd } from 'react-icons/io5';

import { Container } from '@/components/container';
import type { Dictionary } from '@/i18n/en';

export function Faq({ t }: { t: Dictionary }) {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-border bg-surface py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h2 className="text-center text-headline-medium text-text sm:text-headline-large">
          {t.faq.title}
        </h2>
        <div className="mt-10">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group border-b border-border py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-title-medium text-text [&::-webkit-details-marker]:hidden">
                {item.q}
                <IoAdd
                  size={18}
                  className="flex-none text-text-secondary transition-transform group-open:rotate-45"
                />
              </summary>
              <Answer text={item.a} />
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** An answer is a plain string, so the FAQPage JSON-LD can take it as-is: each
 * line is a paragraph, and consecutive lines starting with "- " form a list. */
function Answer({ text }: { text: string }) {
  const blocks: (string | string[])[] = [];
  for (const line of text.split('\n')) {
    if (line.startsWith('- ')) {
      const last = blocks.at(-1);
      if (Array.isArray(last)) last.push(line.slice(2));
      else blocks.push([line.slice(2)]);
    } else {
      blocks.push(line);
    }
  }

  return (
    <div className="mt-3 flex flex-col gap-3 text-body-large text-text-secondary">
      {blocks.map((block, i) =>
        Array.isArray(block) ? (
          <ul key={i} className="flex list-disc flex-col gap-1 pl-6">
            {block.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{block}</p>
        ),
      )}
    </div>
  );
}
