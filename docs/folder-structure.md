# Project Structure Documentation

This document outlines the structure of our React Native application. It explains the organization of directories and files, highlighting their purposes and providing examples to clarify their use.

## Directory and File Structure

Here is the structure of our application with examples for each part:

### `/android` and `/ios`

These directories contain native code for Android and iOS platforms, respectively.

- **Example**: Android-specific build files, iOS-specific storyboards, and configurations.

### `/src` - Source Directory

This is the main directory for all the application's source code.

#### `/components` - Reusable UI Components

Components that are reused across multiple screens or features.

- **Example**:
  - **Button Component**: Custom button used across multiple screens.
    - `Button.tsx`: Implements the button.
    - `hooks.tsx`: React hooks for button logic (e.g., onPress handler).
    - `types.ts`: TypeScript interfaces or types for the button props.
    - `styles.ts`: Styles specific to the button.
    - `index.tsx`: Exports the button component.

#### `/screens` - Screen Components

Contains all the components that represent full screens.

- **Example**:
  - **Home Screen**:
    - `HomeScreen.tsx`: Main component file for the home screen.
    - `components/HeroSection.tsx`: A specific part of the home screen, such as a featured section.
    - `hooks.tsx`: Hooks used within the home screen, like `useFetchHomeData`.
    - `types.ts`: Type definitions for the home screen.
    - `styles.ts`: Styles specific to the home screen.

#### `/navigation` - Navigation

Manages how screens are organized and accessed.

- **Example**:
  - `AppNavigator.tsx`: Sets up the main navigation structure, possibly using a stack navigator or tab navigator.

#### `/services` - API and Services

Handles all external interactions, such as API calls.

- **Example**:
  - `authService.js`: Functions for handling authentication (login, logout).
  - `userService.js`: Functions for user-related data fetching and management.

#### `/store` - State Management

For managing global application state.

- **Example**:
  - `index.ts`: Sets up the Redux store.
  - `userSlice.ts`: A Redux slice for user data management.

#### `/assets` - Static Assets

Stores images, fonts, and other static files.

- **Example**:
  - `/images/logo.png`: The app's logo.
  - `/fonts/Roboto.ttf`: A custom font used throughout the app.

#### `/styles` - Global Styles

Contains styling that is common across the entire application.

- **Example**:
  - `globalStyles.ts`: Central file for defining common styles such as theme colors and font sizes.

#### `/hooks` - Custom Hooks

Reusable logic across components and screens.

- **Example**:
  - `useApi.ts`: A hook for fetching data from an API.

#### `/utils` - Utility Functions

Generic functions used across the application.

- **Example**:
  - `api.ts`: Utility functions to simplify API requests, handling headers, and errors.

#### `/config` - Configuration

Configuration files for managing environments and settings.

- **Example**:
  - `index.ts`: Main configuration file that imports other config files.
  - `env.ts`: Manages environment-specific variables.

### `/tests` - Tests

Contains unit and integration tests.

- **Example**:
  - `/components/Button.test.tsx`: Tests for the Button component.
  - `/screens/HomeScreen.test.tsx`: Tests for the Home Screen.

### Root Directory Files

### - `/.gitignore`: Specifies files to be ignored by version control.

- `/app.json`: Contains metadata and configuration specific to the app.
- `/babel.config.js`: Configuration for the Babel compiler.
- `/package.json`: Project metadata and dependencies management.
- `/README.md`: Overview and documentation of the project.
-

Example

```javascript
/your-app-name
|-- /android                     # Native Android project files
|-- /ios                         # Native iOS project files
|-- /src                         # Source files for the application
|-- /components                  # Global reusable UI components
|   |-- /Button                  # Example component folder
|   |   |-- Button.tsx           # Component implementation
|   |   |-- hooks.tsx            # Hooks used by Button
|   |   |-- types.ts             # TypeScript types for Button
|   |   |-- styles.ts            # Styles specific to Button
|   |   |-- index.tsx            # Entry file that may export the component
|-- /screens                     # Screen components
|   |-- /Home                    # Example screen folder
|   |   |-- components           # Components specific to Home screen
|   |   |   |-- HeroSection.tsx  # Sub-component used in Home
|   |   |-- hooks.tsx            # Hooks specific to Home screen
|   |   |-- types.ts             # TypeScript types for Home screen
|   |   |-- styles.ts            # Styles specific to Home screen
|   |   |-- index.tsx            # Main file for Home screen
|-- /navigation                  # Navigation configuration
|   |-- AppNavigator.tsx         # Root navigator setup
|   |-- stack                    # Stack navigators
|   |   |-- MainStack.tsx        # Main app stack navigator
|   |   |-- AuthStack.tsx        # Authentication flow navigator
|   |-- drawer                   # Drawer navigators
|   |   |-- AppDrawer.tsx        # Main drawer navigator
|   |-- tab                      # Tab navigators
|   |   |-- MainTab.tsx          # Main bottom tab navigator
|-- /services                    # API and other external service interactions
|   |-- index.js                 # Exports all services for easy import
|   |-- apiConfig.js             # API configuration settings
|   |-- authService.js           # Authentication-related API calls
|   |-- userService.js           # User-related API calls
|   |-- todoService.js           # Todo item management API calls
|   |-- categoryService.js       # Category-related API calls
|-- /store                       # State management using Redux, MobX, or Context API
|   |-- index.ts                 # Store setup and exports
|   |-- slices                   # Redux slices or similar structures
|   |   |-- userSlice.ts         # Manage user-related data
|   |   |-- todoSlice.ts         # Manage todo items
|   |   |-- categorySlice.ts     # Manage categories
|-- /assets                      # Static assets like images, fonts, etc.
|   |-- /images                  # Image files
|   |-- /fonts                   # Font files
|-- /styles                      # Global styles
|   |-- globalStyles.ts          # Global style definitions
|-- /hooks                       # Global reusable hooks
|   |-- useApi.ts                # Example of a global hook
|-- /utils                       # Utility functions
|   |-- api.ts                   # API utility functions
|-- /config                      # Application configuration files
|   |-- index.ts                 # Main configuration file
|   |-- env.ts                   # Environment variable management
|-- /tests                       # Unit and integration tests
|   |-- /unit                    # Unit tests
|   |   |-- /components          # Tests for components
|   |   |-- /hooks               # Tests for custom hooks
|   |-- /integration             # Integration tests
|   |   |-- /navigation          # Tests for navigation flows
|   |-- /mocks                   # Mock data and functions
|   |   |-- mockStore.js         # Mock Redux store
|   |   |-- mockServices.js      # Mock API services
|-- .gitignore                   # Specifies intentionally untracked files to ignore
|-- app.json                     # Configuration specific to the app
|-- babel.config.js              # Babel compiler configuration
|-- package.json                 # Project metadata and dependencies
|-- README.md                    # Project overview and documentation
```

## Conclusion

This structured documentation should serve as a clear guide for developers to understand and navigate the project efficiently. It helps maintain consistency, scalability, and ensures that new team members can quickly become productive.
