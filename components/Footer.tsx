type FooterProps = {
  name: string;
  field: string;
};

export function Footer({ name, field }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#090b10]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-zinc-400 sm:px-6 md:flex-row lg:px-8">
        <p>{name}</p>
        <p>{field}</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
