# Overview

This is a full-stack web application built with a React frontend and Express backend, featuring a modern UI component system built on shadcn/ui. The application appears to be a portfolio or personal website with image slideshow functionality, showcasing a collection of creative works including 3D printed figures and artwork. The project uses TypeScript throughout, with a focus on modern development practices and clean architecture.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React router alternative)
- **TanStack React Query** for server state management and data fetching
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with custom CSS variables for theming
- **Component Structure**: Modular UI components in `/client/src/components/ui/` with consistent design patterns

## Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design with routes prefixed under `/api`
- **Modular Storage Interface**: Abstracted storage layer with `IStorage` interface, currently implemented as in-memory storage (`MemStorage`) but designed to easily swap to database implementations
- **Request Logging**: Custom middleware for API request logging and error handling
- **Development Integration**: Vite middleware integration for seamless development experience

## Data Management
- **Drizzle ORM** configured for PostgreSQL database operations
- **Database Schema**: User management system with username/password authentication structure
- **Type Safety**: Zod schema validation with `drizzle-zod` integration
- **Migration System**: Drizzle-kit for database schema migrations

## Build and Development
- **Unified Build Process**: Single build command that compiles both frontend (Vite) and backend (esbuild)
- **Development Mode**: Hot reload for both client and server code
- **TypeScript Configuration**: Shared types between client and server through `/shared` directory
- **Path Aliases**: Convenient import paths for components, utilities, and shared code

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating component variants
- **Embla Carousel**: Carousel/slider functionality

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: TypeScript ORM with excellent type safety
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Tools
- **Replit Integration**: Special plugins and configurations for Replit development environment
- **ESBuild**: Fast JavaScript bundler for server-side code
- **TSX**: TypeScript execution engine for development

### State Management and Data Fetching
- **TanStack React Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation
- **Date-fns**: Date manipulation and formatting utilities

The architecture prioritizes type safety, developer experience, and scalability while maintaining a clean separation of concerns between frontend, backend, and data layers.