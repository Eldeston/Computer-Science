# Web Application Project Proposal

| Full Name:     | Frem Fredric Baring Patalinghug |
| -------------- | ------------------------------- |
| Student ID:    | 1078                            |
| Subject:       | Mobile App Development          |
| Deliverable 1: | Project Proposal                |
## Assessment Objective

> _"The purpose of this first deliverable is to help you plan your final project before starting development. You must propose an original Progressive Web Application (PWA) that addresses a real-world problem or fulfils a specific user need."_
# AI-Powered Offline-First Project Management Application
## Problem Statement
Developers, project managers, students, startup groups, community initiatives, and individual users frequently require access to project information regardless of internet connectivity. Many users also prefer keeping sensitive project notes, plans, and personal information locally rather than relying entirely on cloud services.

Current solutions commonly prioritize online collaboration and cloud storage at the expense of offline functionality, privacy, and user control. This creates challenges for individuals and teams who require consistent access to their work while maintaining control over their data.
## Proposed Solution
Create a Progressive Web Application (PWA) that integrates board-based project management with AI-enhanced planning tools. The application will operate both online and offline by saving project data locally and synchronizing updates with a cloud database once an internet connection is accessible.

Users can create projects, arrange tasks, work with team members, oversee milestones, and leverage AI-driven support for planning projects and managing tasks.
### Unique Selling Points
- Architecture prioritizing offline access with local project storage
- Cloud synchronization occurs automatically once connectivity is reestablished
- Project planning and milestone creation with AI support
- AI providers chosen by the user (Cloud AI or Local AI)
- Personal project management without requiring constant cloud connectivity
- Greater user control over project data through local-first storage
- Installable PWA functionality on both desktop and mobile platforms
## Online and Offline Feature Availability
The application utilizes an offline-first framework. Essential project management functions will still be accessible offline, whereas cloud services will be accessible once the connection is restored.
### Available Offline
- Explore projects and boards
- Generate, modify, and remove tasks
- View project milestones
- Revise project status
- Search locally stored projects and tasks
- Retrieve project history saved on the device
- Save modifications locally with IndexedDB
- Store synchronization requests in a queue for future upload
### Available Online
- Collaborative effort among team members
- Collaborative workspaces
- Account management and user authentication
- Synchronization of cloud data
- Record of activities from other team members
- Cloud AI service-based project support
- Synchronization of data across multiple devices

> [!NOTE]
> Local AI options may be implemented in later versions, allowing AI features to operate without internet connectivity.
## Target Users
### Developers
Software development teams managing project roadmaps, bug tracking, milestones, and deployment schedules.
### Project Managers
Professionals responsible for planning, monitoring, and coordinating project activities and team progress.
### Student Teams
Students working together on assignments, capstone projects, and collaborative academic tasks.
### Startup Teams
Small businesses requiring structured task management and team coordination without expensive enterprise solutions.
### Collaborative Community Projects
Groups organizing events, volunteer programs, and community initiatives involving multiple contributors.
### Individual Users
Users managing personal projects, learning goals, creative work, portfolios, study plans, or day-to-day organization without requiring team collaboration.
## Main Features
### Project Management
- Kanban-style boards
- Task creation and management
- Milestones and project tracking
- Task prioritization
- Progress tracking
### Collaboration
- Team collaboration
- Shared workspaces
- User roles and permissions
- Activity history
### Offline-First Functionality
- Local data storage using IndexedDB
- Offline access
- Automatic push/pull synchronization
- Data recovery and synchronization management
### AI Agents
- AI task generation
- AI milestone suggestions
- AI project planning assistance
- AI project summaries
- User-selectable AI providers (Cloud AI or Local AI)
### Search and Organization
- Search projects and tasks
- Filter projects by status
- Categorize projects by workspace
- Quick access to recently updated projects
### Account Management
- User registration and login
- User profiles
- Secure authentication
## Technology and Tools
### Frontend
- HTML
- CSS
- JavaScript
### Backend
- Node.js
- Express.js
### Databases
- IndexedDB (Local Storage)
- MongoDB (Cloud Storage)
### Progressive Web Application Technologies
- Service Workers
- Web App Manifest
- Offline Asset Caching
### Planned AI Technologies
#### Primary Implementation
- Google Gemini API
#### Future Expansions
- Optional Local AI Support
- Rule-Based Planning Engine
### Design Tools
- Figma
## Expected Outcome
The application will offer users a smart and dependable project management platform that operates effectively in both online and offline modes. With AI-supported planning, cloud integration, and teamwork management, users can arrange, monitor, and finish projects with enhanced efficiency. The offline-first design will guarantee ongoing productivity irrespective of internet access while preserving smooth synchronization among devices.

The anticipated outcomes of the application are to:
- *Application Outcomes:*
	- Enhance project structuring and transparency
	- Maintain continuous productivity despite network interruptions
	- Improve teamwork among group members
	- Enhance project planning with AI support
	- Deliver a contemporary installable PWA experience
- *Personal Learning Outcomes:*
	- Apply UI/UX design principles in this project
	- Gain practical experience developing Progressive Web Applications
	- Understand synchronization between local and cloud data storage
	- Explore the integration of AI services into web applications
	- Improve frontend, backend, and database development skills
	- Successfully test and deploy applications on both mobile and desktop platforms

> [!NOTE]
> Layout prototype is designed in Figma. Further development will continue using the same design application and use it as the main reference.
## Initial Interface Designs

| Stylesheet Prototype | Mobile Prototype Layout |
| -------------------- | ----------------------- |
| ![](Stylesheet.png)  | ![](Phone%20Layout.png) |

| Desktop Prototype Layout  |
| ------------------------- |
| ![](Desktop%20Layout.png) |
