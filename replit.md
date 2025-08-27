# Overview

This is a full-stack web application for **Iteeha Coffee & Pet Paradise**, a pet-friendly coffee shop chain in Mumbai. The application serves as both a company website and an ordering platform, featuring a modern React frontend with a Node.js/Express backend. The project emphasizes a warm, welcoming brand identity that caters to both coffee enthusiasts and pet owners, with comprehensive menu management, contact forms, and order processing capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth page transitions and interactions

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with clear endpoint separation
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Processing**: JSON body parsing with URL-encoded form support
- **Development Setup**: Hot reload with tsx for development mode

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Development Storage**: In-memory storage implementation for development/testing
- **Data Models**: Users, contacts, and orders with proper relationships and constraints

## Authentication and Authorization
- **Session Management**: Built-in infrastructure for user sessions (users table exists)
- **Password Storage**: User authentication system with secure password handling
- **Contact Management**: Public contact form submission without authentication
- **Order Processing**: Order creation and management system

## External Dependencies

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database client with schema management
- **Drizzle Kit**: Migration and schema management tools

### Frontend Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **TanStack Query**: Powerful data synchronization for server state
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library
- **Framer Motion**: Production-ready motion library for React
- **Wouter**: Minimalist routing library for React

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Static type checking and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer

### Business Features
- **Menu Management**: Comprehensive coffee and food menu with categorization
- **Location Management**: Multi-location support for Mumbai branches
- **Contact System**: Customer inquiry and feedback collection
- **Order Processing**: Online ordering with delivery and pickup options
- **Pet Services**: Integration of pet-friendly features and services