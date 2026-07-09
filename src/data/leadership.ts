export type LeadershipRole = {
  title: string;
  period: string;
  subtitle: string;
  location?: string;
};

export type LeadershipEntry = {
  organization: string;
  duration: string;
  roles: LeadershipRole[];
};

export const leadershipTimeline: LeadershipEntry[] = [
  {
    organization: 'IEEE UVCE',
    duration: '2 yrs 3 mos',
    roles: [
      {
        title: 'Chairperson Software Development SIG',
        period: 'May 2026 - Present',
        subtitle: '3 mos'
      },
      {
        title: 'Secretary Software Development SIG',
        period: 'Jun 2025 - May 2026',
        subtitle: '1 yr'
      },
      {
        title: 'Representative Committee',
        period: 'May 2024 - Jun 2025',
        subtitle: '1 yr 2 mos',
        location: 'Bengaluru, Karnataka, India'
      }
    ]
  },
  {
    organization: 'Entrepreneurship Cell UVCE',
    duration: '2 yrs 7 mos',
    roles: [
      {
        title: 'Technical Team Lead',
        period: 'Jun 2025 - Present',
        subtitle: '1 yr 2 mos'
      },
      {
        title: 'Core Team Member',
        period: 'Jan 2024 - Jun 2025',
        subtitle: '1 yr 6 mos',
        location: 'Bengaluru, Karnataka, India'
      }
    ]
  }
];
