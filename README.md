![logo](./docs/logo.png)
# Star Wars Movie App

This React Native application allows users to browse and explore information about Star Wars movies. The app fetches data from the Star Wars API (SWAPI) and presents it in an intuitive and user-friendly interface.

## Features

1. **Movie List Screen**
   - Displays a list of Star Wars movies
   - Includes a search functionality to filter movies
   - Shows loading state while fetching data
   - Handles and displays errors if they occur

2. **Movie Details Screen**
   - Presents detailed information about a selected movie
   - Displays grids of related entities (characters, planets, starships, vehicles, and species)
   - Shows images for entities when available
   - Implements a loading view while fetching additional details

3. **Navigation**
   - Utilizes React Navigation for smooth transitions between screens
   - Implements a stack navigator for easy navigation flow

## Key Components

### App.tsx
- Sets up the main navigation structure using React Navigation
- Defines the stack navigator with MovieListScreen and MovieDetailsScreen

### MovieListScreen.tsx
- Displays the list of Star Wars movies
- Implements search functionality
- Uses custom hooks for data fetching and navigation

### MovieDetailsScreen.tsx
- Shows detailed information about a selected movie
- Utilizes FlatList to render different entity grids
- Implements a custom header component for movie information

### useMovieDetails.ts
- Custom hook for fetching additional details about a movie
- Retrieves information about characters, planets, starships, vehicles, and species

### useMovieNavigation.ts
- Custom hook for handling navigation to the movie details screen

### useMovies.ts
- Custom hook for fetching and managing the list of movies
- Implements search functionality with debounce

### EntityGrid.tsx
- Reusable component for displaying grids of entities
- Handles image loading and fallback to placeholder when necessary

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Run the app: `npm start` or `yarn start`

## Dependencies

- React Native
- React Navigation
- Lodash (for debounce functionality)

## API

This app uses the Star Wars API (SWAPI) to fetch movie and entity data. The API endpoints are handled in the `services/api.ts` file.

## Styling

The app uses a combination of StyleSheet and a custom theme (`styles/theme.ts`) for consistent styling across components.

## Future Improvements

- Implement caching for API responses to reduce network requests
- Add unit and integration tests
- Enhance the UI with animations and transitions
- Implement offline support using local storage
