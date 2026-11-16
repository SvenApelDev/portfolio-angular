export interface Project {
  title: string;
  technologies: string[];
  description: string;
  image: string;
  github: string;
  live: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Join',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    description:
      'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
    image: 'assets/images/projects/join.png',
    github: '#',
    live: '#',
  },
    {
    title: 'El Pollo Loco',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    image: 'assets/images/projects/el-pollo-loco.png',
    github: '#',
    live: '#',
  },
];
