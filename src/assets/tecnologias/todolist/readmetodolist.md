# Todo List Application

A full-stack Todo List application built with Next.js 15, TypeScript, Tailwind CSS 4, and PostgreSQL. This application features user authentication, drag-and-drop task reordering, calendar integration, and multilingual support.

## Features

- **User Authentication**
  - Register, login, and logout functionality
  - Secure password handling with bcryptjs
  - Session management with NextAuth.js

- **Todo Management**
  - Create, read, update, and delete tasks
  - Task status tracking (pending/completed)
  - Task descriptions and timestamps
  - Optimistic UI updates for seamless user experience

- **Advanced UI Features**
  - Drag-and-drop reordering of tasks using @hello-pangea/dnd
  - Calendar integration for date-specific tasks
  - Responsive design for all screen sizes (down to 240px width)
  - Modern UI with Tailwind CSS 4

- **Internationalization**
  - Multi-language support (English and Spanish)
  - Language switching with persistent preferences

## Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API with useReducer
- **Drag and Drop**: @hello-pangea/dnd
- **Icons**: react-icons

### Backend
- **API Routes**: Next.js API Routes
- **Database ORM**: Prisma 6
- **Authentication**: NextAuth.js 4 with Prisma adapter
- **Internationalization**: next-intl

### Database
- **PostgreSQL**: Relational database for data persistence

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/todoapp"
   NEXTAUTH_SECRET="your-nextauth-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Set up the database:
   ```bash
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/src
  /app
    /api                 # API routes for backend functionality
      /auth              # Authentication endpoints
      /todos             # Todo CRUD operations
    /auth                # Authentication pages
    /components          # React components
      /ui                # Reusable UI components
    /context             # React Context providers
    /dashboard           # Dashboard page
    /i18n                # Internationalization files
    /lib                 # Utility functions and types
    /providers           # Provider components
/prisma                  # Prisma ORM configuration
  schema.prisma          # Database schema
```

## Key Features Implementation

### Authentication Flow

The application uses NextAuth.js for authentication with a custom credentials provider. User data is stored in PostgreSQL and managed through Prisma ORM.

### Todo Management

Todos are managed through a context provider (`TodoContext`) that handles state and communicates with the backend API. The application implements optimistic updates for a responsive user experience.

### Drag and Drop

Task reordering is implemented using @hello-pangea/dnd, allowing users to:
- Reorder tasks within the same section
- Move tasks between pending and completed sections
- Persist order changes to the database

### Internationalization

The application supports multiple languages through a custom `LanguageContext` that loads translations from JSON files and persists language preferences in localStorage.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
s