interface NewspaperSectionProps {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function NewspaperSection({
  id,
  kicker,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}: NewspaperSectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 px-4 md:px-8 border-b-2 border-ink ${dark ? 'bg-ink text-paper' : 'bg-paper'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-10 text-center">
          <p className={`np-kicker mb-2 ${dark ? 'text-paper/60' : 'text-ink/50'}`}>{kicker}</p>
          <div className={`np-rule-double mb-4 ${dark ? 'border-paper/30' : ''}`} />
          <h2 className={`np-section-title ${dark ? 'text-paper' : 'text-ink'}`}>{title}</h2>
          {subtitle && (
            <p className={`mt-2 text-sm md:text-base italic ${dark ? 'text-paper/70' : 'text-ink/60'}`}>
              {subtitle}
            </p>
          )}
          <div className={`np-rule-single mt-4 ${dark ? 'border-paper/20' : ''}`} />
        </header>
        {children}
      </div>
    </section>
  );
}

export function ColumnDivider() {
  return <div className="hidden lg:block w-px bg-ink/15 self-stretch mx-6" aria-hidden />;
}
