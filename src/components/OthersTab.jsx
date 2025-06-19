"use client"

import { motion } from "framer-motion"
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

// const Input = ({ className = "", ...props }) => (
//   <input
//     className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${className}`}
//     {...props}
//   />
// )

// const Textarea = ({ className = "", ...props }) => (
//   <textarea
//     className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${className}`}
//     {...props}
//   />
// )

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
    title: "Data Structures & Algorithms",
    course: "CSE 134,231",
    semester: "Fall 2023",
    grade: "A+",
    description:
      "Implemented complex algorithms including graph traversal, dynamic programming, and advanced tree structures.",
    technologies: ["C++", "Python", "Algorithm Analysis"],
    highlights: ["Prims Algorithm", "Dijkstra's Algorithm", "Dynamic Programming"],
  },
  {
    id: 2,
    title: "Data Mining and Machine Learning",
    course: "CSE 325",
    semester: "Fall 2024",
    grade: "A-",
    description: "Built end-to-end ML pipelines with focus on scalability.",
    technologies: ["Python", "TensorFlow", "Colab"],
    highlights: ["Neural Networks", "Model Analysis", "Deep Learing Algorithms"],
  },
  {
    id: 3,
    title: "Database Management System",
    course: "CSE 312",
    semester: "Fall 2024",
    grade: "A+",
    description: "Designed and implemented relational databases with complex queries and optimization.",
    technologies: ["MySQL", "MongoDB"],
    highlights: ["Query Optimization", "Indexing", "ACID Properties"],
  },
  {
    id: 4,
    title: "Natural Language Processing",
    course: "CSE 445",
    semester: "Fall 2024",
    grade: "A+",
    description: "Explored core NLP techniques including text preprocessing, sentiment analysis, and transformer-based models.",
    technologies: ["Python", "NLTK", "HuggingFace Transformers"],
    highlights: ["Text Classification", "Tokenization", "Transformer Models"],
  },

  {
    id: 5,
    title: "Object-Oriented Programming",
    course: "CSE 221",
    semester: "Spring 2024",
    grade: "A+",
    description: "Mastered object-oriented principles by designing modular and reusable software systems.",
    technologies: ["C++", "Java"],
    highlights: ["Encapsulation", "Inheritance", "Polymorphism"],
  }

]

const internships = [
  {
    id: 1,
    company: "GoInnovior Limited",
    position: "Full Stack Software Development Intern",
    duration: "November 2024 – Present",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    description:
      "Contributed to the design and development of scalable web applications and business automation tools. Collaborated with cross-functional teams to deliver full-stack features and enhancements for client projects.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    achievements: [
      "Built and deployed dynamic web interfaces with responsive design",
      "Integrated secure RESTful APIs for data-driven modules",
      "Participated in workflow automation for internal tools",
    ],
  },
]

const certificates = [

  {
    "id": 1,
    "title": "Best Library User of Fall Semester 2024",
    "issuer": "Daffodil International University Library",
    "date": "Fall Semester 2024",
    "credentialId": "ID. 221-15-5424",
    "image": "/library.jpeg",
    "skills": ["Information Literacy", "Research Skills", "Academic Engagement"]
  },
  {
    "id": 2,
    "title": "Full Stack Software Development Intern",
    "issuer": "GoInnovior Limited",
    "date": "November 2024 – Present",
    "credentialId": "N/A",
    "image": "/placeholder.svg?height=100&width=100",
    "skills": ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Web Development", "API Integration"]
  },
  {
    "id": 3,
    "title": "Data Visionary: National Data Analytics Competition (NDAC 2025)",
    "issuer": "Daffodil International University, Department of Computer Science and Engineering",
    "date": "April 12, 2025",
    "credentialId": "NDAC_T088",
    "image": "/ndac.jpeg",
    "skills": ["Data Analytics", "Data Visualization", "Problem Solving", "Teamwork"]
  },

]

// const otherProjects = [
//   {
//     id: 1,
//     title: "Open Source Contributions",
//     description: "Active contributor to React, Next.js, and various npm packages with 50+ merged PRs.",
//     type: "Open Source",
//     link: "https://github.com/username",
//     stats: "50+ PRs merged",
//   },
//   {
//     id: 2,
//     title: "Technical Blog",
//     description: "Writing technical articles about web development, AI, and software engineering best practices.",
//     type: "Content Creation",
//     link: "https://blog.example.com",
//     stats: "10K+ monthly readers",
//   },
//   {
//     id: 3,
//     title: "Hackathon Winner",
//     description: "1st place at MIT Hackathon 2024 for building an AI-powered accessibility tool.",
//     type: "Competition",
//     link: "#",
//     stats: "1st Place Winner",
//   },
// ]

const galleryItems = [
  {
    id: 1,
    title: "Kaz Software Visit",
    description:
      "Toured Google's Mountain View campus during a tech conference. Amazing work culture and innovative spaces.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Company Visit",
    location: "Dhaka, Bangladesh",
    date: "March 2024",
  },
  {
    id: 2,
    title: "Ai-Powered Learning Processing",
    description: "Attended hands-on workshop on NLP that helping us learning faster at Daffodil Internation University",
    image: "/nlpworkshop.jpeg",
    category: "Workshop",
    location: "Daffodil Internation University",
    date: "November 2024",
  },

  {
    id: 3,
    title: "weDevs Company Visit",
    description:
      "Exclusive tour of weDevs Company where learned how a wordpress company can shine.",
    image: "/wedev.jpeg",
    category: "Company Visit",
    location: "Dhaka, Bangladesh",
  },



]

export default function OthersTab() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // })
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("Form submitted:", formData)
  //   setFormData({ name: "", email: "", subject: "", message: "" })
  // }

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
    <div className="w-full  dark:bg-[#1E1E1E] transition-colors duration-300 justify-center">

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
        {/* <motion.section
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
        </motion.section> */}

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
                  <span className="text-lg text-gray-700 dark:text-gray-300">akash15-5424@diu.edu.bd</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">+880 1852842578</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">Dhaka, Bangladesh</span>
                </div>
              </div>
              <p className="mt-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                Feel free to reach out!
              </p>
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
