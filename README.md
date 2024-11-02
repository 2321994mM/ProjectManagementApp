# Project Name

A brief description of your project, highlighting its purpose and functionalities.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
- [Folder Structure](#folder-structure)
  - [Backend Structure](#backend-structure)
  - [Frontend Structure](#frontend-structure)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Setting Up Startup Projects](#setting-up-startup-projects)
- [Database Migrations](#database-migrations)
- [Authentication](#authentication)
- [Seed Data](#seed-data)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a web application built using .NET Core 8 for the backend and React for the frontend. It implements JWT authentication and authorization, allowing for secure access to resources. The application uses Entity Framework Core with a SQL Server database and features code-first migrations.

## Technologies

- **Backend:**
  - .NET Core 8
  - Entity Framework Core
  - SQL Server
  - JWT Authentication
- **Frontend:**
  - React
  - Axios (for API calls)

## Features

- User authentication and authorization using JWT.
- Code-first approach with Entity Framework Core.
- Separate projects for backend and frontend.
- Pre-populated seed data for lookup tables.

## Folder Structure

### Backend Structure

The backend project follows a clean architecture pattern. Here’s an overview of the folder structure:

```
Backend/
│
├── Controllers/
│   └── <Your Controllers>.cs
│
├── DTOs/
│   └── <Your DTOs>.cs
│
├── Models/
│   └── <Your Models>.cs
│
├── Repositories/
│   ├── I<Your Repository>.cs
│   └── <Your Repository>.cs
│
├── Services/
│   ├── I<Your Service>.cs
│   └── <Your Service>.cs
│
├── Data/
│   └── <Your DbContext>.cs
│
├── Migrations/
│   └── <Your Migrations>.cs
│
└── Program.cs
```

- **Controllers/**: Contains API controllers that handle incoming requests.
- **DTOs/**: Data Transfer Objects for transferring data between layers.
- **Models/**: Entities that represent your database tables.
- **Repositories/**: Interfaces and implementations for data access.
- **Services/**: Business logic and service layer.
- **Data/**: Contains the DbContext and database configurations.
- **Migrations/**: Database migrations.

### Frontend Structure

The frontend project is structured as follows:

```
Frontend/
│
├── src/
│   ├── components/
│   │   └── <Your React Components>.jsx
│   │
│   ├── services/
│   │   └── <Your API Services>.js
│   │
│   ├── App.js
│   ├── index.js
│   └── <Other Files>
│
└── public/
    └── index.html
```

- **components/**: Contains React components for the UI.
- **services/**: API service files for making HTTP requests.
- **App.js**: Main application component.
- **index.js**: Entry point of the React application.

## Setup

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone <backend-repo-url>
   cd <backend-folder>
   ```

2. Restore the NuGet packages:
   ```bash
   dotnet restore
   ```

3. Update your `appsettings.json` with the correct SQL Server connection string.

4. Apply migrations to the database:
   ```bash
   dotnet ef database update
   ```

5. Run the application:
   ```bash
   dotnet run
   ```

### Frontend Setup

1. Clone the frontend repository:
   ```bash
   git clone <frontend-repo-url>
   cd <frontend-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

### Setting Up Startup Projects

To run both the backend and frontend simultaneously, set both projects as startup projects in your IDE:

1. In Visual Studio, right-click on the solution in Solution Explorer.
2. Select **Properties**.
3. Under the **Startup Project** section, choose **Multiple startup projects**.
4. Set both the backend and frontend projects to **Start**.

## Database Migrations

This project uses Entity Framework Core migrations to manage the database schema. You can create a new migration using:
```bash
dotnet ef migrations add <MigrationName>
```
And apply the migration using:
```bash
dotnet ef database update
```

## Authentication

This application uses JWT for user authentication. Upon successful login, a token is generated and should be included in the Authorization header for subsequent requests.

## Seed Data

The application includes seed data for the `TaskStatus` and `UserRole` tables. Two users are pre-created:

- **Employee**
  - Username: `bob`
  - Password: `sss`

- **Manager**
  - Username: `alice`
  - Password: `ssss`

This allows for quick testing of the application’s features.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.







1-![image](https://github.com/user-attachments/assets/a3b85c46-9745-448c-b836-9f7a9ee2fa35)
2- manager page
![image](https://github.com/user-attachments/assets/93717c7e-1ee9-48cd-a3f4-1d55372b37fa)
3- employee page
![image](https://github.com/user-attachments/assets/e807ef5c-799d-4acf-bc6f-feac295114f3)
4- Prject
![image](https://github.com/user-attachments/assets/7119919b-5ce3-4089-95c4-11a8e14203ed)
![image](https://github.com/user-attachments/assets/1539228b-9136-4f98-b04d-b0aca68c5165)

![image](https://github.com/user-attachments/assets/a45c123f-fb83-4073-a99a-f4fa7549fa95)

