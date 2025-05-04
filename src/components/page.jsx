"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Sidebar from "@/components/sidebar"
import WorkTab from "@/components/work-tab"
import HomeTab from "@/components/home-tab"
import TeamTab from "@/components/team-tab"
import AiTab from "@/components/ai-tab"

export default function PortfolioPage() {
  // Default to showing the "work" tab
  const [activeSection, setActiveSection] = useState("work")

  return (
    <div className="flex h-screen bg-white dark:bg-[#1E1E1E]">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 overflow-auto p-6">
        <AnimatePresence mode="wait">
          {activeSection === "work" && <WorkTab key="work" />}
          {activeSection === "home" && <HomeTab key="home" />}
          {activeSection === "team" && <TeamTab key="team" />}
          {activeSection === "ai" && <AiTab key="ai" />}
        </AnimatePresence>
      </main>
    </div>
  )
}
