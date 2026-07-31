export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 bg-background-950">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-background-400">
          &copy; {new Date().getFullYear()} 天笑星辰 · Silen
        </p>
        <p className="text-xs text-background-500">
          Built with curiosity and AI collaboration
        </p>
      </div>
    </footer>
  );
}