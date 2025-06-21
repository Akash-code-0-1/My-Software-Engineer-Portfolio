"use client";

import { useEffect, useRef } from "react";

export default function MainContent({ activeSection }) {
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <div
      ref={contentRef}
      className="h-[100vh] overflow-auto px-4 py-6 bg-gray-50 dark:bg-[#121212] flex-1"
    >
      {activeSection === "programming" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Programming</h1>
          <p>Welcome to the Programming section.</p>
          {/* Add your actual Programming content here */}
        </div>
      )}

      {activeSection === "development" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Development</h1>
          <p>Welcome to the Development section.</p>
          {/* Add your actual Development content here */}
        </div>
      )}

      {activeSection === "ai" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Artificial Intelligence</h1>
          <p>Welcome to the AI section.</p>
          {/* Add your actual AI content here */}
        </div>
      )}

      {activeSection === "research" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Research</h1>
          <p>Welcome to the Research section.</p>
          {/* Add your actual Research content here */}
        </div>
      )}

      {activeSection === "others" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Others</h1>
          <p>Welcome to the Others section.</p>
          {/* Add your actual Others content here */}
        </div>
      )}
    </div>
  );
}
