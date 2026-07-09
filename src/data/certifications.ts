export type CertificationItem = {
  title: string;
  issuer: string;
  description: string;
  notes: string;
};

export const certifications: CertificationItem[] = [
  {
    title: 'MERN Stack Web Development',
    issuer: 'Apna College',
    description:
      'Completed a hands-on course covering full-stack development with HTML, CSS, JavaScript, GitHub, Node.js, Express.js, EJS, SQL, MongoDB, React, and TailwindCSS.',
    notes: 'Built real-world projects while learning end-to-end web development workflows.'
  },
  {
    title: 'Ultimate Job-Ready Data Science Course',
    issuer: 'CodeWithHarry',
    description:
      'Python for Data Science, SQL, Statistics, Machine Learning, EDA, data visualization, ML pipelines, LLMs & RAG systems.',
    notes: 'Gained practical skills in building data-driven solutions and modern AI workflows.'
  }
];
