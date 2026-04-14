// "use client";

// import { motion } from "framer-motion";
// import ProjectCard from "./project-card";
// import PublicationCard from "./publication-card";
// import {
//   SiTensorflow,
//   SiPytorch,
//   SiScikitlearn,
//   SiNumpy,
//   SiPandas,
//   SiOpencv,
//   SiKeras,
//   SiPython,
//   SiJupyter,
// } from "react-icons/si";
// import { FaRobot, FaGraduationCap } from "react-icons/fa";
// import { Code2, Sparkles } from "lucide-react";

// const publications = [
//   {
//     id: 1,
//     title:
//       "Bengali Text Classification: Distinguishing Saintly and Common Forms using Machine Learning Model",
//     authors: ["MD. Tanvir Ahmed Akash", "Umme Ayman", "Saiham Zaman Mridul"],
//     venue:
//       "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
//     year: 2024,
//     type: "Conference",
//     abstract:
//       "This study presents a Bengali text classification model that distinguishes between Sadhu and Cholito forms using supervised machine learning on a dataset of 2948 texts. After preprocessing, six algorithms were evaluated, with SVM achieving the highest accuracy of 92.33%, followed by RF (91.87%) and XGB (91.20%). This work contributes to the limited research in Bengali language processing.",
//     tags: ["NLP", "Machine Learning", "Bengali Language"],
//     link: "https://ieeexplore.ieee.org/document/10796448",
//   },
//   {
//     id: 2,
//     title:
//       "BanglaEcomReviewCorpus: A Dataset for E-Commerce Product Review Sentiment Analysis",
//     authors: [
//       "Umme Ayman",
//       "MD. Tanvir Ahmed Akash",
//       "Taslima Akhter",
//       "Saiham Zaman Mridul",
//     ],
//     venue: "Data in Brief",
//     year: 2025,
//     type: "Dataset Article",
//     abstract:
//       "BanglaEcomReviewCorpus is a curated dataset designed for sentiment analysis of Bangla-language e-commerce product reviews. It supports research in natural language processing and sentiment classification in low-resource languages.",
//     tags: ["NLP", "Sentiment Analysis", "Bangla", "E-Commerce", "Dataset"],
//     link: "https://www.sciencedirect.com/science/article/pii/S2352340926002167?via%3Dihub",
//   },
//   {
//     id: 3,
//     title:
//       "A Low-Cost Portable IoT System for Real-Time Environmental and UV Radiation Monitoring",
//     authors: ["MD. Tanvir Ahmed Akash"],
//     venue:
//       "2025 IEEE 28th International Conference on Computer and Information Technology (ICCIT)",
//     year: 2025,
//     type: "Conference",
//     abstract:
//       "This paper presents a low-cost, portable IoT-based system for real-time monitoring of environmental parameters and UV radiation. The proposed system aims to provide affordable and reliable sensing for health, safety, and environmental awareness applications.",
//     tags: [
//       "IoT",
//       "Environmental Monitoring",
//       "UV Radiation",
//       "Embedded Systems",
//       "Low-Cost Systems",
//     ],
//     link: "https://iccit.org.bd/2025/",
//   },
// ];

// const aiProjects = [
//   {
//     id: 1,
//     title: "Heart Disease Prediction Using Vectorizers",
//     description:
//       "A comparative analysis of heart disease prediction using CountVectorizer and TF-IDF vectorizer with multiple classifiers like Naive Bayes, Random Forest, and SVM achieving up to 84.78% accuracy.",
//     image: "/heart.jpg",
//     tags: [
//       "Machine Learning",
//       "Healthcare",
//       "TF-IDF",
//       "CountVectorizer",
//       "Python",
//     ],
//     link: "https://drive.google.com/file/d/1uIvq3DLun3UAE6cCdaSf0apGxNasnFDL/view?usp=sharing",
//   },
//   {
//     id: 2,
//     title: "Breast Cancer Classification with Machine Learning",
//     description:
//       "Classification of malignant and benign breast tumors using various machine learning algorithms including SVM, Random Forest, and Neural Networks, achieving up to 98% test accuracy.",
//     image: "/breast.jpg",
//     tags: ["Scikit-learn", "TensorFlow", "Healthcare", "SVM", "Neural Network"],
//     link: "https://drive.google.com/file/d/15_BEu1aYMMlgSGppMPtJ03N7ZH55mSk8/view?usp=sharing",
//   },
//   {
//     id: 3,
//     title: "Kaggle Challenge: Obesity Level Prediction",
//     description:
//       "Participated in a Kaggle competition focused on predicting obesity levels using machine learning techniques, leveraging feature engineering and various classification algorithms.",
//     image: "/kaggle.png",
//     tags: ["Kaggle", "ML", "Health", "Classification", "Python"],
//     link: "https://www.kaggle.com/competitions/obesity-level-prediction-fall-2024/leaderboard",
//   },
//   {
//     id: 4,
//     title: "Human Emotion Detection from Thermal Images",
//     description:
//       "A work-in-progress AI system designed to detect and classify human emotions based on facial thermal imaging data using computer vision and deep learning techniques.",
//     image: "/emotion.PNG",
//     tags: ["Thermal Imaging", "Emotion Detection", "CNN", "Computer Vision"],
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "Criminal Suspect Detection Using Thermal Imaging",
//     description:
//       "An ongoing project aiming to identify potential criminal suspects by analyzing thermal imaging patterns through behavior detection and face analysis.",
//     image: "/thermal.png",
//     tags: [
//       "Thermal Imaging",
//       "Criminal Detection",
//       "Deep Learning",
//       "AI Surveillance",
//     ],
//     link: "#",
//   },
// ];

// const techStack = [
//   { Icon: SiPython, name: "Python", color: "text-yellow-500" },
//   { Icon: SiTensorflow, name: "TensorFlow", color: "text-orange-500" },
//   { Icon: SiPytorch, name: "PyTorch", color: "text-red-500" },
//   { Icon: SiKeras, name: "Keras", color: "text-red-600" },
//   { Icon: SiScikitlearn, name: "Scikit-learn", color: "text-orange-400" },
//   { Icon: SiNumpy, name: "NumPy", color: "text-blue-500" },
//   { Icon: SiPandas, name: "Pandas", color: "text-purple-500" },
//   { Icon: SiOpencv, name: "OpenCV", color: "text-green-500" },
//   { Icon: SiJupyter, name: "Jupyter", color: "text-orange-500" },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function AiTab() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.4 }}
//       className="space-y-14"
//     >
//       {/* Heading */}
//       <motion.div
//         initial={{ y: -30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="text-center"
//       >
//         <motion.div
//           className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/50 rounded-full px-3 py-1 mb-4"
//           whileHover={{ scale: 1.05 }}
//         >
//           <Sparkles size={12} />
//           Research & AI
//         </motion.div>
//         <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
//           <FaRobot className="inline-block text-purple-600 dark:text-purple-400 mr-3 mb-1" />
//           AI & Research
//         </h1>
//         <p className="max-w-3xl mx-auto text-base text-gray-500 dark:text-gray-400 leading-relaxed">
//           Bridging the gap between cutting-edge research and practical AI
//           applications. My work spans from academic publications to
//           production-ready machine learning systems.
//         </p>
//       </motion.div>

//       {/* Research Philosophy */}
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.15 }}
//         className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/50"
//       >
//         {/* Decorative dots */}
//         <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

//         <div className="max-w-4xl mx-auto text-center relative">
//           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//             Research Philosophy & Approach
//           </h3>
//           <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
//             My research focuses on developing{" "}
//             <span className="font-semibold text-blue-600 dark:text-blue-400">
//               practical AI solutions
//             </span>{" "}
//             that address real-world challenges. I believe in bridging the gap
//             between theoretical advances and production-ready systems, with
//             emphasis on{" "}
//             <span className="font-semibold text-purple-600 dark:text-purple-400">
//               scalable ML architectures
//             </span>
//             ,{" "}
//             <span className="font-semibold text-green-600 dark:text-green-400">
//               ethical AI development
//             </span>
//             , and{" "}
//             <span className="font-semibold text-orange-600 dark:text-orange-400">
//               human-centered design
//             </span>
//             .
//           </p>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Through collaborative research and open-source contributions, I aim
//             to make AI more accessible, interpretable, and beneficial for
//             diverse communities.
//           </p>
//         </div>
//       </motion.div>

//       {/* Tech Stack */}
//       <motion.div
//         className="text-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h3
//           variants={itemVariants}
//           className="text-lg font-bold text-gray-900 dark:text-white mb-8 tracking-tight"
//         >
//           Technology Stack
//         </motion.h3>
//         <div className="flex flex-wrap justify-center gap-6">
//           {techStack.map(({ Icon, name, color }, i) => (
//             <motion.div
//               key={i}
//               variants={{
//                 hidden: { opacity: 0, scale: 0.4, y: 20 },
//                 visible: {
//                   opacity: 1,
//                   scale: 1,
//                   y: 0,
//                   transition: {
//                     type: "spring",
//                     stiffness: 260,
//                     damping: 20,
//                     delay: i * 0.05,
//                   },
//                 },
//               }}
//               whileHover={{ y: -8, scale: 1.15 }}
//               className="flex flex-col items-center group cursor-default"
//             >
//               <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-300 shadow-sm group-hover:shadow-md mb-2">
//                 <Icon
//                   size={32}
//                   className={`${color} transition-transform duration-300`}
//                 />
//               </div>
//               <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
//                 {name}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Research Publications */}
//       <motion.section
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//       >
//         <div className="flex items-center gap-3 mb-8">
//           <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
//             <FaGraduationCap className="text-xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
//             Research Publications
//           </h2>
//           <span className="text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full ml-1">
//             {publications.length}
//           </span>
//         </div>
//         <div className="space-y-4">
//           {publications.map((publication, index) => (
//             <PublicationCard
//               key={publication.id}
//               publication={publication}
//               index={index}
//             />
//           ))}
//         </div>
//       </motion.section>

//       {/* AI Projects */}
//       <motion.section
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.35 }}
//       >
//         <div className="flex items-center gap-3 mb-8">
//           <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-xl">
//             <Code2 className="text-xl text-green-600 dark:text-green-400" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
//             AI Projects
//           </h2>
//           <span className="text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2.5 py-1 rounded-full ml-1">
//             {aiProjects.length}
//           </span>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {aiProjects.map((project, index) => (
//             <ProjectCard
//               key={project.id}
//               title={project.title}
//               description={project.description}
//               image={project.image}
//               tags={project.tags}
//               link={project.link}
//               index={index}
//             />
//           ))}
//         </div>
//       </motion.section>
//     </motion.div>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./project-card";
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
} from "react-icons/si";
import {
  FaRobot,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCalendar,
  FaUsers,
} from "react-icons/fa";
import {
  Code2,
  Sparkles,
  BookOpen,
  ChevronDown,
  Award,
  Globe,
} from "lucide-react";
import { useState } from "react";

const publications = [
  {
    id: 1,
    title:
      "Bengali Text Classification: Distinguishing Saintly and Common Forms using Machine Learning Model",
    authors: ["MD. Tanvir Ahmed Akash", "Umme Ayman", "Saiham Zaman Mridul"],
    venue:
      "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
    year: 2024,
    type: "Conference",
    typeColor: "from-blue-500 to-cyan-500",
    typeBg: "bg-blue-50 dark:bg-blue-900/30",
    typeText: "text-blue-700 dark:text-blue-300",
    abstract:
      "This study presents a Bengali text classification model that distinguishes between Sadhu and Cholito forms using supervised machine learning on a dataset of 2948 texts. After preprocessing, six algorithms were evaluated, with SVM achieving the highest accuracy of 92.33%, followed by RF (91.87%) and XGB (91.20%). This work contributes to the limited research in Bengali language processing.",
    tags: [
      "NLP",
      "Machine Learning",
      "Bengali Language",
      "SVM",
      "Text Classification",
    ],
    link: "https://ieeexplore.ieee.org/document/10796448",
    accentBorder: "border-l-blue-500",
    stat: "92.33% SVM Accuracy",
  },
  {
    id: 2,
    title:
      "BanglaEcomReviewCorpus: A Dataset for E-Commerce Product Review Sentiment Analysis",
    authors: [
      "Umme Ayman",
      "MD. Tanvir Ahmed Akash",
      "Taslima Akhter",
      "Saiham Zaman Mridul",
    ],
    venue: "Data in Brief — ScienceDirect (Elsevier)",
    year: 2025,
    type: "Dataset Article",
    typeColor: "from-green-500 to-emerald-500",
    typeBg: "bg-green-50 dark:bg-green-900/30",
    typeText: "text-green-700 dark:text-green-300",
    abstract:
      "BanglaEcomReviewCorpus is a curated dataset designed for sentiment analysis of Bangla-language e-commerce product reviews. It supports research in natural language processing and sentiment classification in low-resource languages.",
    tags: ["NLP", "Sentiment Analysis", "Bangla", "E-Commerce", "Dataset"],
    link: "https://www.sciencedirect.com/science/article/pii/S2352340926002167?via%3Dihub",
    accentBorder: "border-l-green-500",
    stat: "Elsevier Published",
  },
  {
    id: 3,
    title:
      "A Low-Cost Portable IoT System for Real-Time Environmental and UV Radiation Monitoring",
    authors: ["MD. Tanvir Ahmed Akash"],
    venue:
      "2025 IEEE 28th International Conference on Computer and Information Technology (ICCIT)",
    year: 2025,
    type: "Conference",
    typeColor: "from-purple-500 to-violet-500",
    typeBg: "bg-purple-50 dark:bg-purple-900/30",
    typeText: "text-purple-700 dark:text-purple-300",
    abstract:
      "This paper presents a low-cost, portable IoT-based system for real-time monitoring of environmental parameters and UV radiation. The proposed system aims to provide affordable and reliable sensing for health, safety, and environmental awareness applications.",
    tags: [
      "IoT",
      "Environmental Monitoring",
      "UV Radiation",
      "Embedded Systems",
    ],
    link: "https://iccit.org.bd/2025/",
    accentBorder: "border-l-purple-500",
    stat: "IEEE ICCIT 2025",
  },
];

const aiProjects = [
  {
    id: 1,
    title: "Heart Disease Prediction Using Vectorizers",
    description:
      "A comparative analysis of heart disease prediction using CountVectorizer and TF-IDF vectorizer with multiple classifiers like Naive Bayes, Random Forest, and SVM achieving up to 84.78% accuracy.",
    image: "/heart.jpg",
    tags: [
      "Machine Learning",
      "Healthcare",
      "TF-IDF",
      "CountVectorizer",
      "Python",
    ],
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
    title: "Criminal Suspect Detection Using Thermal Imaging",
    description:
      "An ongoing project aiming to identify potential criminal suspects by analyzing thermal imaging patterns through behavior detection and face analysis using deep learning.",
    image: "/thermal.png",
    tags: [
      "Thermal Imaging",
      "Criminal Detection",
      "Deep Learning",
      "AI Surveillance",
    ],
    link: "#",
  },
];

const techStack = [
  { Icon: SiPython, name: "Python", color: "text-yellow-500" },
  { Icon: SiTensorflow, name: "TensorFlow", color: "text-orange-500" },
  { Icon: SiPytorch, name: "PyTorch", color: "text-red-500" },
  { Icon: SiKeras, name: "Keras", color: "text-red-600" },
  { Icon: SiScikitlearn, name: "Scikit-learn", color: "text-orange-400" },
  { Icon: SiNumpy, name: "NumPy", color: "text-blue-500" },
  { Icon: SiPandas, name: "Pandas", color: "text-purple-500" },
  { Icon: SiOpencv, name: "OpenCV", color: "text-green-500" },
  { Icon: SiJupyter, name: "Jupyter", color: "text-orange-500" },
];

// ─── Publication Card ─────────────────────────────────────────────────────────

function PublicationCard({ publication, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.25 }}
        className={`relative bg-white dark:bg-[#232323] rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden border-l-4 ${publication.accentBorder}`}
      >
        {/* Gradient stripe */}
        <div
          className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${publication.typeColor}`}
        />

        {/* Numbered badge */}
        <div
          className={`absolute top-5 right-5 w-9 h-9 rounded-full bg-gradient-to-br ${publication.typeColor} flex items-center justify-center text-white text-xs font-black shadow-lg`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="p-6 pr-16">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full ${publication.typeBg} ${publication.typeText} border border-current/20`}
            >
              <BookOpen size={10} />
              {publication.type}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/60 px-3 py-1 rounded-full">
              <FaCalendar size={9} /> {publication.year}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r ${publication.typeColor} text-white shadow-sm`}
            >
              <Award size={9} /> {publication.stat}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[15px] font-extrabold text-gray-900 dark:text-white leading-snug mb-3 tracking-tight">
            {publication.title}
          </h3>

          {/* Authors */}
          <div className="flex items-start gap-2 mb-2">
            <FaUsers size={10} className="text-gray-400 mt-1 flex-shrink-0" />
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
              {publication.authors.map((author, i) => (
                <span key={author}>
                  <span
                    className={
                      author === "MD. Tanvir Ahmed Akash"
                        ? "font-bold text-gray-700 dark:text-gray-200 underline decoration-dotted"
                        : ""
                    }
                  >
                    {author}
                  </span>
                  {i < publication.authors.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>

          {/* Venue */}
          <div className="flex items-start gap-2 mb-4">
            <Globe size={10} className="text-gray-400 mt-0.5 flex-shrink-0" />
            <p
              className={`text-[11px] font-semibold ${publication.typeText} leading-tight`}
            >
              {publication.venue}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {publication.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-0.5 rounded-lg bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600/40 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Abstract expandable */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-3 mb-4 border-t border-gray-100 dark:border-gray-700/50">
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {publication.abstract}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 pt-1">
            <motion.a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r ${publication.typeColor} text-white shadow-md hover:shadow-lg transition-shadow`}
            >
              <FaExternalLinkAlt size={10} /> View Paper
            </motion.a>

            <motion.button
              onClick={() => setExpanded(!expanded)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all"
            >
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                <ChevronDown size={12} />
              </motion.span>
              {expanded ? "Hide Abstract" : "Read Abstract"}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AiTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-14"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <motion.div
          className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/50 rounded-full px-3 py-1 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles size={12} /> Research & AI
        </motion.div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          <FaRobot className="inline-block text-purple-600 dark:text-purple-400 mr-3 mb-1" />
          AI & Research
        </h1>
        <p className="max-w-3xl mx-auto text-base text-gray-500 dark:text-gray-400 leading-relaxed">
          Bridging cutting-edge research and practical AI applications. My work
          spans IEEE-published academic papers to production-ready machine
          learning systems.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-4"
      >
        {[
          {
            label: "Publications",
            value: "3",
            sub: "IEEE & Elsevier",
            color: "from-blue-500 to-cyan-500",
          },
          {
            label: "AI Projects",
            value: "7+",
            sub: "ML & Computer Vision",
            color: "from-purple-500 to-violet-500",
          },
          {
            label: "Best Accuracy",
            value: "98%",
            sub: "Cancer Classifier",
            color: "from-green-500 to-emerald-500",
          },
        ].map(({ label, value, sub, color }) => (
          <motion.div
            key={label}
            whileHover={{ y: -4, scale: 1.03 }}
            className="relative bg-white dark:bg-[#232323] rounded-2xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all overflow-hidden text-center"
          >
            <div
              className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${color}`}
            />
            <div
              className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}
            >
              {value}
            </div>
            <div className="text-xs font-bold text-gray-700 dark:text-gray-200 mt-1">
              {label}
            </div>
            <div className="text-[10px] text-gray-400 mt-0.5 hidden sm:block">
              {sub}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/50"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Research Philosophy
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            My research focuses on{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              practical AI solutions
            </span>{" "}
            for real-world challenges — bridging theoretical advances with
            production-ready systems, with emphasis on{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              scalable ML architectures
            </span>
            ,{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              ethical AI
            </span>
            , and{" "}
            <span className="font-semibold text-orange-600 dark:text-orange-400">
              human-centered design
            </span>
            .
          </p>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          variants={itemVariants}
          className="text-lg font-bold text-gray-900 dark:text-white mb-8 tracking-tight"
        >
          Technology Stack
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-5">
          {techStack.map(({ Icon, name, color }, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.4, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: i * 0.05,
                  },
                },
              }}
              whileHover={{ y: -8, scale: 1.15 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors shadow-sm group-hover:shadow-md mb-2">
                <Icon size={30} className={color} />
              </div>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Publications */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
            <FaGraduationCap className="text-xl text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Research Publications
          </h2>
          <span className="text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full">
            {publications.length} Papers
          </span>
        </div>
        <div className="space-y-5">
          {publications.map((pub, index) => (
            <PublicationCard key={pub.id} publication={pub} index={index} />
          ))}
        </div>
      </motion.section>

      {/* AI Projects */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-green-50 dark:bg-green-900/30 rounded-xl">
            <Code2 className="text-xl text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            AI Projects
          </h2>
          <span className="text-xs font-bold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2.5 py-1 rounded-full">
            {aiProjects.length} Projects
          </span>
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
  );
}
