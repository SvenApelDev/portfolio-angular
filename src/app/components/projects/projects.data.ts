export interface Project {
  title: string;
  technologies: string[];
  descriptionKey: string;
  image: string;
  github: string;
  live: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Join',
    technologies: ['CSS', 'HTML', 'TypeScript', 'Angular', 'Supabase'],
    descriptionKey: 'projects.join.description',
    image: 'assets/images/projects/join.png',
    github: '#',
    live: '#',
  },
  {
    title: 'El Pollo Loco',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    descriptionKey: 'projects.pollo.description',
    image: 'assets/images/projects/el-pollo-loco.png',
    github: '#',
    live: '#',
  },
];
