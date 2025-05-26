"use client"

import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Send,
  ChevronLeft,
  ChevronRight,
  Building,
  Camera,
  Sun,
  Moon,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"

// Custom Components
const Button = ({ children, variant = "primary", size = "md", className = "", onClick, type, disabled, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
    ghost:
      "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500 dark:hover:bg-gray-800 dark:text-gray-300",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-gray-500 dark:border-gray-600 dark:hover:bg-gray-800 dark:text-gray-300",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-lg",
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

const Card = ({ children, className = "", onClick }) => (
  <div
    className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
)

const CardHeader = ({ children, className = "" }) => <div className={`p-6 pb-4 ${className}`}>{children}</div>

const CardContent = ({ children, className = "" }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold text-gray-900 dark:text-white ${className}`}>{children}</h3>
)

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1 ${className}`}>{children}</p>
)

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    outline: "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${className}`}
    {...props}
  />
)

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${className}`}
    {...props}
  />
)

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  )
}

// Sample data
const courseWorks = [
  {
    id: 1,
    title: "Advanced Data Structures & Algorithms",
    course: "CS 5800",
    semester: "Fall 2023",
    grade: "A",
    description:
      "Implemented complex algorithms including graph traversal, dynamic programming, and advanced tree structures.",
    technologies: ["Java", "Python", "Algorithm Analysis"],
    highlights: ["Red-Black Trees", "Dijkstra's Algorithm", "Dynamic Programming"],
  },
  {
    id: 2,
    title: "Machine Learning Systems",
    course: "CS 6140",
    semester: "Spring 2024",
    grade: "A-",
    description: "Built end-to-end ML pipelines with focus on scalability and production deployment.",
    technologies: ["Python", "TensorFlow", "Docker", "AWS"],
    highlights: ["Neural Networks", "Model Deployment", "MLOps"],
  },
  {
    id: 3,
    title: "Database Design & Implementation",
    course: "CS 5200",
    semester: "Fall 2023",
    grade: "A",
    description: "Designed and implemented relational databases with complex queries and optimization.",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    highlights: ["Query Optimization", "Indexing", "ACID Properties"],
  },
]

const internships = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Software Engineering Intern",
    duration: "Jun 2023 - Aug 2023",
    location: "San Francisco, CA",
    description:
      "Developed microservices for e-commerce platform serving 1M+ users. Improved API response time by 40%.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    achievements: ["Reduced API latency by 40%", "Implemented real-time notifications", "Mentored 2 junior interns"],
  },
  {
    id: 2,
    company: "DataFlow Analytics",
    position: "ML Engineering Intern",
    duration: "Jan 2024 - May 2024",
    location: "Boston, MA",
    description: "Built machine learning models for predictive analytics and data visualization dashboards.",
    technologies: ["Python", "Scikit-learn", "React", "D3.js"],
    achievements: ["Improved model accuracy by 25%", "Created interactive dashboards", "Automated data pipeline"],
  },
]

const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "March 2024",
    credentialId: "AWS-SAA-2024-001",
    image: "/placeholder.svg?height=100&width=100",
    skills: ["Cloud Architecture", "AWS Services", "Security"],
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "January 2024",
    credentialId: "GCP-PD-2024-002",
    image: "/placeholder.svg?height=100&width=100",
    skills: ["GCP Services", "Kubernetes", "DevOps"],
  },
  {
    id: 3,
    title: "Dean's List Recognition",
    issuer: "Northeastern University",
    date: "Fall 2023",
    credentialId: "NEU-DL-F23",
    image: "/placeholder.svg?height=100&width=100",
    skills: ["Academic Excellence", "GPA 3.8+"],
  },
]

const otherProjects = [
  {
    id: 1,
    title: "Open Source Contributions",
    description: "Active contributor to React, Next.js, and various npm packages with 50+ merged PRs.",
    type: "Open Source",
    link: "https://github.com/username",
    stats: "50+ PRs merged",
  },
  {
    id: 2,
    title: "Technical Blog",
    description: "Writing technical articles about web development, AI, and software engineering best practices.",
    type: "Content Creation",
    link: "https://blog.example.com",
    stats: "10K+ monthly readers",
  },
  {
    id: 3,
    title: "Hackathon Winner",
    description: "1st place at MIT Hackathon 2024 for building an AI-powered accessibility tool.",
    type: "Competition",
    link: "#",
    stats: "1st Place Winner",
  },
]

const galleryItems = [
  {
    id: 1,
    title: "Google Campus Visit",
    description:
      "Toured Google's Mountain View campus during a tech conference. Amazing work culture and innovative spaces.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Company Visit",
    location: "Mountain View, CA",
    date: "March 2024",
  },
  {
    id: 2,
    title: "Microsoft Azure Workshop",
    description: "Attended hands-on workshop on cloud computing and AI services at Microsoft's Boston office.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    location: "Boston, MA",
    date: "January 2024",
  },
  {
    id: 3,
    title: "Startup Hub Coworking",
    description: "Working session at a vibrant startup hub with fellow entrepreneurs and developers.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Work Environment",
    location: "Cambridge, MA",
    date: "February 2024",
  },
  {
    id: 4,
    title: "AWS Re:Invent Conference",
    description: "Networking and learning at the largest cloud computing conference with industry leaders.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Conference",
    location: "Las Vegas, NV",
    date: "December 2023",
  },
  {
    id: 5,
    title: "Meta Reality Labs Tour",
    description:
      "Exclusive tour of Meta's VR/AR research facility and hands-on experience with cutting-edge technology.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Company Visit",
    location: "Menlo Park, CA",
    date: "November 2023",
  },
  {
    id: 6,
    title: "TechCorp Office Environment",
    description: "My daily work environment during summer internship - modern office with collaborative spaces.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Work Environment",
    location: "San Francisco, CA",
    date: "July 2023",
  },
  {
    id: 7,
    title: "Hackathon at MIT",
    description: "48-hour hackathon experience with teams from around the world building innovative solutions.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Event",
    location: "Cambridge, MA",
    date: "October 2023",
  },
  {
    id: 8,
    title: "Apple Park Visit",
    description:
      "Visiting Apple's iconic headquarters and learning about their design philosophy and innovation process.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Company Visit",
    location: "Cupertino, CA",
    date: "September 2023",
  },
]

export default function OthersTab() {
  const [darkMode, setDarkMode] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const openModal = (item, index) => {
    setSelectedImage(item)
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % galleryItems.length
        : currentImageIndex === 0
          ? galleryItems.length - 1
          : currentImageIndex - 1

    setCurrentImageIndex(newIndex)
    setSelectedImage(galleryItems[newIndex])
  }

  const filteredGalleryItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-40">
        <Button variant="secondary" size="sm" onClick={() => setDarkMode(!darkMode)} className="p-2">
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16"
      >
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my academic achievements, professional experience, certifications, and other
            notable accomplishments in software engineering.
          </p>
        </motion.div>

        {/* Course Works Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Course Works</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courseWorks.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <CardDescription className="text-base">
                          {course.course} • {course.semester}
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 font-semibold">
                        Grade: {course.grade}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{course.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {course.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-sm py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {course.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Internship Experience Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Internship Experience</h2>
          </div>

          <div className="space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <CardTitle className="text-2xl">{internship.position}</CardTitle>
                        <CardDescription className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                          {internship.company}
                        </CardDescription>
                        <div className="flex items-center gap-6 mt-3 text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {internship.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {internship.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                      {internship.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-sm py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certificates & Achievements Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certificates & Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-yellow-500">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center">
                      <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-12 h-12 rounded-lg" />
                    </div>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <CardDescription className="text-base">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-gray-600 dark:text-gray-300">Issued: {cert.date}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">ID: {cert.credentialId}</div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Other Projects Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Other Notable Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {project.type}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="text-lg font-semibold text-green-600 dark:text-green-400">{project.stats}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Camera className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Gallery</h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl leading-relaxed">
            A visual journey through my professional experiences - from company visits and conferences to collaborative
            work environments and industry events.
          </p>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {["All", "Company Visit", "Workshop", "Conference", "Work Environment", "Event"].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGalleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 + index * 0.05 }}
              >
                <Card
                  className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  onClick={() => openModal(item, index)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Badge className="mb-2 bg-white/20 text-white border-white/30">{item.category}</Badge>
                      <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">Boston, MA</span>
                </div>
              </div>
              <p className="mt-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                Feel free to reach out!
              </p>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full text-lg py-3">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* Gallery Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedImage && (
          <div className="relative">
            {/* Navigation buttons */}
            <div className="absolute top-4 left-4 z-10">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigateImage("prev")}
                className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>

            <div className="absolute top-4 right-14 z-10">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigateImage("next")}
                className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge variant="outline" className="mb-3 text-sm">
                    {selectedImage.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedImage.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  <span className="text-lg">{selectedImage.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-lg">{selectedImage.date}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
