export type ProjectEntry = {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  category: 'ds' | 'web';
};

export type ProjectsData = {
  dataScience: ProjectEntry[];
  webDev: ProjectEntry[];
};

export const projects: ProjectsData = {
  dataScience: [
    {
      title: 'RAG-based AI Teaching Assistant',
      description:
        'Built a Retrieval-Augmented Generation pipeline with Whisper video transcription, semantic chunking and embeddings, vector retrieval and prompt tuning for intelligent teaching assistance.',
      tech: ['Python', 'LLMs', 'RAG', 'Whisper', 'Vector DB'],
      github: null,
      live: null,
      category: 'ds'
    },
    {
      title: 'House Price Prediction',
      description:
        'End-to-end ML pipeline featuring comprehensive EDA, feature engineering, and regression modeling to predict house prices with high accuracy.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      github: null,
      live: null,
      category: 'ds'
    }
  ],
  webDev: [
    {
      title: 'AI Travel Planner',
      description:
        'Full-stack travel planning application powered by Gemini API and Google Maps integration, featuring OAuth authentication and modern UI components.',
      tech: ['React', 'Tailwind', 'ShadCN', 'Firebase', 'Gemini API'],
      github: null,
      live: null,
      category: 'web'
    },
    {
      title: 'Wanderlust',
      description:
        'Full MERN stack application following MVC architecture with Cloudinary integration for image management and seamless user experience.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Cloudinary'],
      github: null,
      live: null,
      category: 'web'
    },
    {
      title: 'ChatApp',
      description:
        'Real-time messaging application built with React and Firebase, utilizing Zustand for efficient state management and instant communication.',
      tech: ['React', 'Firebase', 'Zustand', 'Real-time DB'],
      github: null,
      live: null,
      category: 'web'
    },
    {
      title: 'CodeFury 8.0 Website',
      description:
        'Event website for the technical fest CodeFury 8.0, featuring responsive design and engaging user interface.',
      tech: ['React', 'Tailwind', 'Firebase'],
      github: null,
      live: null,
      category: 'web'
    },
    {
      title: 'Kagada 2025 Website',
      description:
        'Event website for Kagada 2025 with modern design and smooth user experience.',
      tech: ['React', 'Tailwind', 'Firebase'],
      github: null,
      live: null,
      category: 'web'
    },
    {
      title: 'Impetus 2025 Website',
      description:
        'Event website for Impetus 2025 with modern design and smooth user experience.',
      tech: ['React', 'Tailwind', 'Firebase'],
      github: 'https://www.google.com',
      live: 'https://impetus26.live',
      category: 'web'
    }
  ]
};
