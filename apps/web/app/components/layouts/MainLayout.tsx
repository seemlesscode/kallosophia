"use client";

import { useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-black">
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-sm underline"
          >
            Close
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <a href="#" className="block text-sm hover:text-gray-300">
            Option 1
          </a>
          <a href="#" className="block text-sm hover:text-gray-300">
            Option 2
          </a>
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {children}
    </div>
  );
}
