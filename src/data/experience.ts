export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'AI Research Intern',
    company: 'IIM Mumbai',
    duration: 'May 2026 - Jun 2026',
    bullets: [
      'Conducted in-depth research on supply chain AI papers across last-mile delivery, bullwhip effect, agentic LLMs, and reinforcement learning, while identifying key research gaps.',
      'Designed and enhanced Beer Game simulations with EOQ tools, forecasting models, and a vLLM backend; reproduced and extended autonomous LLM supply chain experiments using Qwen2.5/Qwen3.'
    ]
  },
  {
    role: 'AI Engineering Intern',
    company: 'APTI Business Solution',
    duration: 'Mar 2026 - Apr 2026',
    bullets: [
      'Built an AI-based quiz and interview system with question bank, test engine, AI feedback, OCR, authentication, SQLite storage, time tracking, and topic analytics.',
      'Transitioned to a dataset-driven architecture (5K+ records), added an analytics dashboard, readiness scoring, multi-model LLM pipeline, PDF/Q-gen integration, and improved UI/UX and backend structure.'
    ]
  }
];
