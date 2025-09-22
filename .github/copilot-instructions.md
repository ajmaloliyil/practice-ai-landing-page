# Copilot Instructions for Developer Landing Page

## Project Overview
This is an Angular-based landing page for developers using Bootstrap CSS framework. The project follows a Minimum Viable Product (MVP) approach, focusing on essential features and clean, functional design.

## Tech Stack
- Framework: Angular (latest version)
- CSS Framework: Bootstrap
- Language: TypeScript
- Styling: CSS

## Project Structure
The application follows Angular's component-based architecture:
- components/
  - header/
  - hero/
  - features/
  - social-proof/
  - footer/
- services/
- models/
- shared/

## Component Guidelines

### Header Component
- Simple navigation bar with logo/brand name
- Minimal navigation links
- Bootstrap navbar implementation
- Responsive design for mobile views

### Hero Section Component
- Clear headline and description
- Primary call-to-action button
- Clean, centered layout
- Bootstrap container and grid system

### Features Section Component
- Card-based layout for feature items
- Icon support
- Bootstrap grid for responsive layout
- Maximum 3 key features displayed

### Social Proof Component
- Simple testimonial cards
- Company logo display section
- Bootstrap carousel (if multiple testimonials)

### Footer Component
- Minimal footer with essential links
- Contact information
- Social media links
- Bootstrap grid for layout

## Styling Conventions
- Use Bootstrap utility classes when possible
- Custom styles should be in CSS
- Follow BEM naming convention for custom CSS
- Maintain responsive design principles
- Use Bootstrap's built-in spacing utilities

## Code Style Guidelines
- Use TypeScript strict mode
- Follow Angular style guide
- Implement lazy loading where appropriate
- Use Angular's dependency injection
- Implement proper component lifecycle hooks
- Use Bootstrap's JavaScript components through ng-bootstrap

## Performance Considerations
- Minimize component re-renders
- Optimize images
- Implement lazy loading for images
- Use Angular's built-in performance features

## Accessibility
- Implement proper ARIA labels
- Ensure keyboard navigation
- Maintain proper heading hierarchy
- Follow WCAG guidelines
- Use Bootstrap's built-in accessibility features