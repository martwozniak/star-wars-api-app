import { Film } from './types';

export type RootStackParamList = {
    MovieList: undefined;
    MovieDetails: { movie: Film };
  }
