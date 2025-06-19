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
    title: "Bengali Text Classification: Distinguishing Saintly and Common Forms using Machine Learning Model",
    authors: ["MD. Tanvir Ahmed Akash", "Umme Ayman", "Saiham Zaman Mridul"],
    venue: "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
    year: 2024,
    type: "Conference",
    abstract:
      "This study presents a Bengali text classification model that distinguishes between Sadhu and Cholito forms using supervised machine learning on a dataset of 2948 texts. After preprocessing, six algorithms were evaluated, with SVM achieving the highest accuracy of 92.33%, followed by RF (91.87%) and XGB (91.20%). This work contributes to the limited research in Bengali language processing.",
    tags: ["NLP", "Machine Learning", "Bengali Language"],
    link: "https://ieeexplore.ieee.org/document/10796448",
  },
  {
    id: 2,
    title: "BanglaEcomReviewCorpus: A Dataset for E-Commerce Product Review Sentiment Analysis",
    authors: ["MD. Tanvir Ahmed Akash", "Umme Ayman", "Saiham Zaman Mridul"],
    venue: "Under Review",
    year: 2025,
    type: "Dataset",
    abstract:
      "BanglaEcomReviewCorpus is a curated dataset designed for sentiment analysis of Bangla-language e-commerce product reviews. It supports research in natural language processing and sentiment classification in low-resource languages.",
    tags: ["NLP", "Sentiment Analysis", "Bangla", "E-Commerce", "Dataset"],
    link: "#",
  },

]

// Sample AI projects data
const aiProjects = [
  {
    id: 1,
    title: "Heart Disease Prediction Using Vectorizers",
    description:
      "A comparative analysis of heart disease prediction using CountVectorizer and TF-IDF vectorizer with multiple classifiers like Naive Bayes, Random Forest, and SVM achieving up to 84.78% accuracy.",
    image: "/heart.jpg",
    tags: ["Machine Learning", "Healthcare", "TF-IDF", "CountVectorizer", "Python"],
    link: "https://drive.google.com/file/d/1uIvq3DLun3UAE6cCdaSf0apGxNasnFDL/view?usp=sharing",
  },
  {
    id: 2,
    title: "Breast Cancer Classification with Machine Learning",
    description:
      "Classification of malignant and benign breast tumors using various machine learning algorithms including SVM, Random Forest, and Neural Networks, achieving up to 98% test accuracy.",
    image: "/breast.jpg",
    tags: ["Scikit-learn", "TensorFlow", "Healthcare", "SVM", "Neural Network"],
    link: "https://drive.google.com/file/d/15_BEu1aYMMlgSGppMPtJ03N7ZH55mSk8/view?usp=sharing",
  },
  {
    id: 3,
    title: "Kaggle Challenge: Obesity Level Prediction",
    description:
      "Participated in a Kaggle competition focused on predicting obesity levels using machine learning techniques, leveraging feature engineering and various classification algorithms.",
    image: "/kaggle.png",
    tags: ["Kaggle", "ML", "Health", "Classification", "Python"],
    link: "https://www.kaggle.com/competitions/obesity-level-prediction-fall-2024/leaderboard",
  },
  {
    id: 4,
    title: "Human Emotion Detection from Thermal Images",
    description:
      "A work-in-progress AI system designed to detect and classify human emotions based on facial thermal imaging data using computer vision and deep learning techniques.",
    image: "/emotion.PNG",
    tags: ["Thermal Imaging", "Emotion Detection", "CNN", "Computer Vision"],
    link: "#",
  },
  {
    id: 5,
    title: "Criminal Suspect Detection Using Thermal Imaging",
    description:
      "An ongoing project aiming to identify potential criminal suspects by analyzing thermal imaging patterns through behavior detection and face analysis.",
    image: "/thermal.png",
    tags: ["Thermal Imaging", "Criminal Detection", "Deep Learning", "AI Surveillance"],
    link: "#",
  },
];


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
