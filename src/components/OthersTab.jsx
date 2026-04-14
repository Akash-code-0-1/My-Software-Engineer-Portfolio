"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Building,
  Camera,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

// ─── Mini UI Components ───────────────────────────────────────────────────────

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    outline:
      "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
    green:
      "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200",
    yellow:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200",
    purple:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200",
    orange:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-2xl max-w-3xl w-[90vw] max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-700"
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const courseWorks = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    course: "CSE 134,231",
    semester: "Fall 2023",
    grade: "A+",
    description:
      "Implemented complex algorithms including graph traversal, dynamic programming, and advanced tree structures.",
    technologies: ["C++", "Python", "Algorithm Analysis"],
    highlights: [
      "Prims Algorithm",
      "Dijkstra's Algorithm",
      "Dynamic Programming",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Data Mining and Machine Learning",
    course: "CSE 325",
    semester: "Fall 2024",
    grade: "A-",
    description: "Built end-to-end ML pipelines with focus on scalability.",
    technologies: ["Python", "TensorFlow", "Colab"],
    highlights: [
      "Neural Networks",
      "Model Analysis",
      "Deep Learning Algorithms",
    ],
    color: "from-purple-500 to-violet-500",
  },
  {
    id: 3,
    title: "Database Management System",
    course: "CSE 312",
    semester: "Fall 2024",
    grade: "A+",
    description:
      "Designed and implemented relational databases with complex queries and optimization.",
    technologies: ["MySQL", "MongoDB"],
    highlights: ["Query Optimization", "Indexing", "ACID Properties"],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 4,
    title: "Natural Language Processing",
    course: "CSE 445",
    semester: "Fall 2024",
    grade: "A+",
    description:
      "Explored core NLP techniques including text preprocessing, sentiment analysis, and transformer-based models.",
    technologies: ["Python", "NLTK", "HuggingFace Transformers"],
    highlights: ["Text Classification", "Tokenization", "Transformer Models"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Object-Oriented Programming",
    course: "CSE 221",
    semester: "Spring 2024",
    grade: "A+",
    description:
      "Mastered object-oriented principles by designing modular and reusable software systems.",
    technologies: ["C++", "Java"],
    highlights: ["Encapsulation", "Inheritance", "Polymorphism"],
    color: "from-rose-500 to-pink-500",
  },
];

const internships = [
  {
    id: 1,
    company: "Beup In-Tech",
    companyFull: "Beup In-Tech (A Concern of Betopia Group)",
    position: "Full Stack Software Developer",
    roles: ["Core Backend Developer", "Frontend Developer"],
    duration: "February 1, 2025 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    current: true,
    description:
      "Working as a core backend developer alongside frontend responsibilities at Beup In-Tech, a dynamic tech concern under Betopia Group. Contributing to building scalable systems and digital products used in production environments.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "NestJs",
      "Prisma",
      "PostgreSQL",
      "Postman",
      "Database Design",
      "System Design",
      "Backend Engineering",
      "DevOps",
    ],
    achievements: [
      "Designed and implemented core backend APIs and database architecture",
      "Built responsive frontend interfaces integrated with backend services",
      "Contributed to product development lifecycle from design to deployment",
      "Collaborated with cross-functional teams in an agile environment",
    ],
    accent: "from-orange-500 to-amber-500",
    accentBorder: "border-orange-500",
    badgeColor: "orange",
  },
  {
    id: 2,
    company: "GoInnovior Limited",
    companyFull: "GoInnovior Limited",
    position: "Full Stack Software Development Intern",
    roles: ["Full Stack Developer"],
    duration: "November 2024 – Present",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    type: "Internship",
    current: false,
    description:
      "Contributed to the design and development of scalable web applications and business automation tools. Collaborated with cross-functional teams to deliver full-stack features and enhancements for client projects.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Express.js",
    ],
    achievements: [
      "Built and deployed dynamic web interfaces with responsive design",
      "Integrated secure RESTful APIs for data-driven modules",
      "Participated in workflow automation for internal tools",
    ],
    accent: "from-purple-500 to-violet-500",
    accentBorder: "border-purple-500",
    badgeColor: "purple",
  },
];

const certificates = [
  {
    id: 1,
    title: "Four-Time Best Library User",
    issuer: "Daffodil International University Library",
    date: "Fall Semester 2024",
    credentialId: "ID. 221-15-5424",
    image: "/library.jpeg",
    skills: ["Information Literacy", "Research Skills", "Academic Engagement"],
  },
  {
    id: 2,
    title: "Full Stack Software Development Intern",
    issuer: "GoInnovior Limited",
    date: "November 2024 – Present",
    credentialId: "N/A",
    image: "/placeholder.svg?height=100&width=100",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Data Visionary: NDAC 2025",
    issuer: "Daffodil International University, Dept. of CSE",
    date: "April 12, 2025",
    credentialId: "NDAC_T088",
    image: "/ndac.jpeg",
    skills: [
      "Data Analytics",
      "Data Visualization",
      "Problem Solving",
      "Teamwork",
    ],
  },
  {
    id: 4,
    title: "Software Development Internship",
    issuer: "GoInnovior Limited",
    date: "March 03, 2025 – June 03, 2025",
    credentialId: "N/A",
    image: "/intern.jpeg",
    skills: [
      "Frontend Development",
      "Backend Development",
      "Node.js",
      "MongoDB",
      "React",
      "PHP",
    ],
  },
  {
    id: 5,
    title: "Software Project Development (Virtual Training)",
    issuer: "Skill Jobs",
    date: "March 03, 2025 – June 03, 2025",
    credentialId: "SJ/SPD-20250160051",
    image: "/training.jpeg",
    skills: [
      "Software Project Development",
      "Virtual Collaboration",
      "Technical Training",
    ],
  },
];

const galleryItems = [
  {
    id: 1,
    title: "Kaz Software Visit",
    description:
      "Toured Kaz Software Company, exploring their innovative work culture and cutting-edge projects.",
    image: "/kaz.jpeg",
    category: "Company Visit",
    location: "Dhaka, Bangladesh",
    date: "March 2024",
  },
  {
    id: 2,
    title: "AI-Powered Learning Processing",
    description:
      "Attended hands-on workshop on NLP that helping us learning faster at Daffodil International University.",
    image: "/nlpworkshop.jpeg",
    category: "Workshop",
    location: "Daffodil International University",
    date: "November 2024",
  },
  {
    id: 3,
    title: "weDevs Company Visit",
    description:
      "Exclusive tour of weDevs Company where learned how a WordPress company can shine.",
    image: "/wedevs.jpeg",
    category: "Company Visit",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 4,
    title: "Brain Station 23 Company Visit",
    description:
      "Exclusive tour of Brain Station 23 where learned how a software company can shine.",
    image: "/brain.jpeg",
    category: "Company Visit",
    location: "Dhaka, Bangladesh",
  },
];

// ─── Section Header ───────────────────────────────────────────────────────────

const SectionHeader = ({ icon: Icon, title, count, iconBg, iconColor }) => (
  <motion.div
    className="flex items-center gap-3 mb-8"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`p-2.5 ${iconBg} rounded-xl shadow-sm`}>
      <Icon className={`h-5 w-5 ${iconColor}`} />
    </div>
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
      {title}
    </h2>
    {count !== undefined && (
      <span
        className={`text-xs font-bold px-2.5 py-1 rounded-full ${iconBg} ${iconColor}`}
      >
        {count}
      </span>
    )}
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function OthersTab() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openModal = (item, index) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const navigateImage = (direction) => {
    const list = filteredGalleryItems;
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % list.length
        : currentImageIndex === 0
          ? list.length - 1
          : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(list[newIndex]);
  };

  const filteredGalleryItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="w-full dark:bg-[#1E1E1E]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-2 sm:px-4 py-8 space-y-16"
      >
        {/* ── Page Header ── */}
        <motion.div
          className="text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700/40 rounded-full px-3 py-1 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase size={12} /> Professional Journey
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
            Experience & Achievements
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my academic work, professional
            experience, certifications, and notable accomplishments in software
            engineering.
          </p>
        </motion.div>

        {/* ── Internship / Work Experience ── */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionHeader
            icon={Briefcase}
            title="Work Experience"
            count={internships.length}
            iconBg="bg-purple-100 dark:bg-purple-900/30"
            iconColor="text-purple-600 dark:text-purple-400"
          />

          <div className="space-y-6">
            {internships.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className={`relative bg-white dark:bg-[#242424] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 dark:border-gray-800 overflow-hidden border-l-4 ${job.accentBorder}`}
              >
                {/* Gradient top accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${job.accent}`}
                />

                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {job.position}
                        </h3>
                        {job.current && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 rounded-full">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                            </span>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-base font-semibold text-orange-600 dark:text-orange-400 mb-2">
                        {job.companyFull}
                      </p>

                      {/* Role tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {job.roles.map((role) => (
                          <span
                            key={role}
                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${job.accent} text-white`}
                          >
                            {role}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {job.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} /> {job.location}
                        </span>
                        <Badge variant={job.badgeColor}>{job.type}</Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {job.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600/40 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {job.achievements.map((ach, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${job.accent} flex-shrink-0 mt-1.5`}
                            />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Course Works ── */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionHeader
            icon={GraduationCap}
            title="Course Works"
            count={courseWorks.length}
            iconBg="bg-blue-100 dark:bg-blue-900/30"
            iconColor="text-blue-600 dark:text-blue-400"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {courseWorks.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-white dark:bg-[#242424] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden group"
              >
                {/* Colored top stripe */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${course.color}`}
                />

                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {course.course} · {course.semester}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-sm font-bold px-2.5 py-1 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                      {course.grade}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {course.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Highlights
                    </h4>
                    <ul className="space-y-1">
                      {course.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${course.color} flex-shrink-0`}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Certificates ── */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionHeader
            icon={Award}
            title="Certificates & Achievements"
            count={certificates.length}
            iconBg="bg-yellow-100 dark:bg-yellow-900/30"
            iconColor="text-yellow-600 dark:text-yellow-400"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#242424]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex flex-col justify-end p-4 text-white"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-sm font-bold mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-white/80 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-white/60 mb-2">
                    Issued: {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="bg-yellow-500 text-black px-2 py-0.5 rounded-full text-[10px] font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Always-visible title at bottom */}
                <div className="p-3 border-t border-gray-100 dark:border-gray-700/50">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 line-clamp-2 leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Gallery ── */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionHeader
            icon={Camera}
            title="Professional Gallery"
            iconBg="bg-orange-100 dark:bg-orange-900/30"
            iconColor="text-orange-600 dark:text-orange-400"
          />

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-3xl leading-relaxed">
            A visual journey through professional experiences — company visits,
            workshops, conferences, and industry events.
          </p>

          {/* Category filter */}
          <div className="mb-7 flex flex-wrap gap-2">
            {[
              "All",
              "Company Visit",
              "Workshop",
              "Conference",
              "Work Environment",
              "Event",
            ].map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 border-blue-600 text-white shadow-md"
                    : "bg-white dark:bg-[#242424] border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence>
              {filteredGalleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group cursor-pointer bg-white dark:bg-[#242424] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                  onClick={() => openModal(item, index)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <motion.img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-3 text-white"
                      initial={{ y: 16, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="text-[10px] font-bold bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <p className="font-semibold text-sm mt-1 line-clamp-2">
                        {item.title}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* ── Contact ── */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/40"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="flex items-center gap-3 mb-7">
            <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              Get In Touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations,
                or just having a chat about technology. Feel free to reach out!
              </p>
              <div className="space-y-4">
                {[
                  {
                    Icon: Mail,
                    text: "akash15-5424@diu.edu.bd",
                    color: "text-blue-500",
                  },
                  {
                    Icon: Phone,
                    text: "+880 1852842578",
                    color: "text-green-500",
                  },
                  {
                    Icon: MapPin,
                    text: "Dhaka, Bangladesh",
                    color: "text-orange-500",
                  },
                ].map(({ Icon, text, color }) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-3 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 bg-white dark:bg-[#2a2a2a] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <Icon className={`h-4 w-4 ${color}`} />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* ── Gallery Modal ── */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedImage && (
          <div>
            <div className="relative">
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="aspect-[16/9] overflow-hidden">
                <motion.img
                  key={selectedImage.id}
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            <div className="p-6">
              <Badge variant="secondary" className="mb-2">
                {selectedImage.category}
              </Badge>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {selectedImage.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                {selectedImage.location && (
                  <span className="flex items-center gap-1.5">
                    <Building className="h-4 w-4" /> {selectedImage.location}
                  </span>
                )}
                {selectedImage.date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> {selectedImage.date}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
