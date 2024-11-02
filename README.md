# Project Name

A brief description of your project, highlighting its purpose and functionalities.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
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

## Usage

After starting both the backend and frontend, you can access the application in your web browser at `http://localhost:3000`. You can log in using the pre-defined user credentials mentioned above.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug fixes.
