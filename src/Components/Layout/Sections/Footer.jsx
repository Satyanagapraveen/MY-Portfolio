export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>© {new Date().getFullYear()} Namburi Praveen. All rights reserved.</p>
          <p className="text-gray-400">Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    );
  }