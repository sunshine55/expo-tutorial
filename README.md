# Expo Tutorial

Tutorial to use Expo framework to implement a simple apps on Android or iOS

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Startup](#startup)
- [License](#license)

## Prerequisites

Install these tools for development

1. Docker Compose on Debian PC
2. VSCode with Remote Docker and Dev Containers extensions
2. Expo Go on phone
3. Make sure PC and phone are on the same network

## Installation

Download project & configure.

```bash
# Clone the repository
git clone https://github.com/sunshine55/expo-tutorial.git

# Navigate to the project directory
cd expo-tutorial

# Check and replace UID & GID values
id
```

Replace UID and GID for `user` property in `compose.yml`.

## Startup

Start project in development mode

```bash
# Start docker compose
docker compose up -d

# Install dependencies
npm install

# Run the project
npm run start
```

Install Expo Go on the phone and scan the QR code displayed in console

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
