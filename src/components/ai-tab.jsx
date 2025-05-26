"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"
import PublicationCard from "./publication-card"
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiKeras,
  SiPython,
  SiJupyter,
} from "react-icons/si"
import { FaRobot, FaGraduationCap } from "react-icons/fa"
import { Code2 } from "lucide-react"

// Sample research publications data
const publications = [
  {
    id: 1,
    title: "Deep Learning Approaches for Real-Time Object Detection in Autonomous Vehicles",
    authors: ["Your Name", "Dr. Jane Smith", "Dr. John Doe"],
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2024,
    type: "Conference",
    citations: 23,
    abstract:
      "This paper presents a novel deep learning architecture for real-time object detection in autonomous driving scenarios, achieving 95% accuracy with 60 FPS performance.",
    tags: ["Computer Vision", "Deep Learning", "Autonomous Vehicles"],
    link: "#",
    pdfLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
    authors: ["Your Name", "Dr. Alice Johnson"],
    venue: "Nature Machine Intelligence",
    year: 2024,
    type: "Journal",
    citations: 45,
    abstract:
      "We propose a federated learning framework that enables collaborative machine learning on sensitive healthcare data while preserving patient privacy.",
    tags: ["Federated Learning", "Healthcare", "Privacy"],
    link: "#",
    pdfLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Transformer-Based Natural Language Processing for Code Generation",
    authors: ["Your Name", "Dr. Bob Wilson", "Dr. Carol Brown"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2023,
    type: "Conference",
    citations: 67,
    abstract:
      "A comprehensive study on using transformer architectures for automated code generation, demonstrating significant improvements over existing methods.",
    tags: ["NLP", "Code Generation", "Transformers"],
    link: "#",
    pdfLink: "#",
    codeLink: "#",
  },
]

// Sample AI projects data
const aiProjects = [
  {
    id: 1,
    title: "Neural Style Transfer Web App",
    description:
      "A real-time neural style transfer application using TensorFlow.js that applies artistic styles to images in the browser.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["TensorFlow.js", "React", "Computer Vision", "WebGL"],
    link: "#",
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 2,
    title: "Multimodal Sentiment Analysis",
    description:
      "Advanced sentiment analysis combining text, audio, and visual features using ensemble deep learning models.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["PyTorch", "Multimodal", "NLP", "Computer Vision"],
    link: "#",
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 3,
    title: "Reinforcement Learning Trading Bot",
    description:
      "An autonomous trading system using deep Q-learning and LSTM networks for cryptocurrency market prediction.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Reinforcement Learning", "Finance", "LSTM", "Python"],
    link: "#",
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 4,
    title: "Graph Neural Network for Drug Discovery",
    description: "Molecular property prediction using graph neural networks to accelerate drug discovery processes.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["GNN", "Drug Discovery", "PyTorch Geometric", "Bioinformatics"],
    link: "#",
    githubLink: "#",
    demoLink: "#",
  },
]

export default function AiTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      {/* Main Heading */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          <FaRobot className="inline-block text-purple-600 dark:text-purple-400 mr-3" />
          AI & Research
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Bridging the gap between cutting-edge research and practical AI applications. My work spans from academic
          publications to production-ready machine learning systems.
        </p>
      </motion.div>

      {/* Research Description */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Research Philosophy & Approach</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My research focuses on developing{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">practical AI solutions</span> that address
            real-world challenges. I believe in bridging the gap between theoretical advances and production-ready
            systems, with a particular emphasis on
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {" "}
              scalable machine learning architectures
            </span>
            ,<span className="font-semibold text-green-600 dark:text-green-400"> ethical AI development</span>, and
            <span className="font-semibold text-orange-600 dark:text-orange-400"> human-centered design</span>.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Through collaborative research and open-source contributions, I aim to make AI more accessible,
            interpretable, and beneficial for diverse communities and industries.
          </p>
        </div>
      </motion.div>

      {/* Technology Stack */}
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technology Stack</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { Icon: SiPython, name: "Python" },
            { Icon: SiTensorflow, name: "TensorFlow" },
            { Icon: SiPytorch, name: "PyTorch" },
            { Icon: SiKeras, name: "Keras" },
            { Icon: SiScikitlearn, name: "Scikit-learn" },
            { Icon: SiNumpy, name: "NumPy" },
            { Icon: SiPandas, name: "Pandas" },
            { Icon: SiOpencv, name: "OpenCV" },
            { Icon: SiJupyter, name: "Jupyter" },
          ].map(({ Icon, name }, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Icon size={40} />
              <span className="text-sm mt-1 font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Research Publications Section */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex items-center mb-8">
          <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Research Publications</h2>
        </div>
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <PublicationCard key={publication.id} publication={publication} index={index} />
          ))}
        </div>
      </motion.section>

      {/* AI Projects Section */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="flex items-center mb-8">
          <Code2 className="text-2xl text-green-600 dark:text-green-400 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">AI Projects</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {aiProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
