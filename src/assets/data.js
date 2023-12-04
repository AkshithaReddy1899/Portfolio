import psycho from './images/psychosearch.png';
import movie from './images/movieapp.png';
// import budget from './images/budgetapp.png';
import budget from './images/budgetapp.png';

const data = [
  {
    id: 0,
    title: 'Psycho search',
    description: 'PsychoSearch is a single-page desktop only application, the user can see a world map pointing out to the locations of respective psychopaths.',
    img: psycho,
    repo: 'https://github.com/AkshithaReddy1899/psycho-search',
    live: 'https://psycho-search.herokuapp.com/',
  },
  {
    id: 1,
    title: 'Budget app',
    description: "Budget app let's you track your daily expenses in different categories",
    img: budget,
    repo: 'https://github.com/AkshithaReddy1899/Budget-app',
    live: 'https://budget-app-99.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Movie app',
    description: "Movie app let's you browse through a list of movies and like and comment movie",
    img: movie,
    repo: 'https://github.com/AkshithaReddy1899/movie-app',
    live: 'https://distracted-tesla-0b9846.netlify.app/',
  },
];

export default data;
