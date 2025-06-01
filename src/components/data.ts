export interface Project {
  id: number;
  title: string;
  description: string;
  gitHubLink: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: 'Todo List App',
    description:
      'A simple Todo List App built with JavaScript. All datas are stored in localstorage. It helps users check list out their plans and tick as they do them.',
    gitHubLink: 'https://github.com/chaimaouerghi/Todo-app.git',
  },
  {
    id: 2,
    title: 'Landing page for a travel agency ',
    description:
      ' Landing page for a travel agency using Bootstrap components.',
    gitHubLink: 'https://github.com/chaimaouerghi/travelagency1.git',
  },
  {
    id: 3,
    title: 'FIFA player cards',
    description:
      'FIFA player cards.',
    gitHubLink: 'https://github.com/chaimaouerghi/player-project.git',
  },
  {
    id: 4,
    title: 'Movie App',
    description:
      ' A movie app where you can present your favorite movies or TV show.',
    gitHubLink: 'https://github.com/chaimaouerghi/Movie-app.git',
  },

];
