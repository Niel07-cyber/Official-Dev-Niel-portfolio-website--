
export const projectsList = [
  {
    title: "Neural Network Framework",
    description: "Deep learning framework built from scratch with advanced neural architectures and optimization algorithms.",
    company: "AI Research Lab",
    location: "Remote",
    period: "2023 - Present",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1964&auto=format&fit=crop",
    tags: ["Python", "TensorFlow", "PyTorch"],
    link: "/projects",
    metrics: {
      accuracy: "94.2%",
      speed: "2.3x faster",
      models: "15+ architectures"
    }
  },
  {
    title: "Computer Vision AI",
    description: "Advanced computer vision system with real-time object detection and image classification capabilities.",
    company: "VisionTech Solutions",
    location: "San Francisco, CA",
    period: "2022-2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    tags: ["OpenCV", "YOLO", "CNN"],
    link: "/projects",
    metrics: {
      detection: "99.1% accuracy",
      latency: "< 50ms",
      objects: "80+ classes"
    }
  },
  {
    title: "Natural Language AI",
    description: "Intelligent NLP system with sentiment analysis, text generation, and conversational AI capabilities.",
    company: "Language AI Corp",
    location: "Boston, MA",
    period: "2021-2022",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    tags: ["Transformers", "BERT", "GPT"],
    link: "/projects",
    metrics: {
      languages: "12 supported",
      accuracy: "96.8%",
      responses: "1M+ processed"
    }
  }
];

export type Project = typeof projectsList[0];
