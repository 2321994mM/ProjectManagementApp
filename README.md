# Project Management App

A brief description of Project Management App, highlighting its purpose and functionalities.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
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
