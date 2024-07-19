# Airdrop Tracker

## Introduction
Airdrop Tracker is a web application designed to help users manage and track their cryptocurrency airdrops. The application provides a user-friendly interface to view, update, and manage airdrop statuses and login information. It includes a dynamic table listing all airdrops and a dashboard showing summary statistics.

## Features
- **Dynamic Table**: Displays all airdrops with their name, link, status, and last login date.
- **Dashboard**: Shows total airdrops, pending airdrops, and logged-in-today counts.
- **Update Status**: Users can update the status of each airdrop.
- **Theme Toggle**: Switch between dark and light themes.
- **Search Bar**: Easily search and filter through the airdrop list.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/aidroptracker.git
    ```
2. Navigate to the project directory:
    ```sh
    cd aidroptracker
    ```
3. Open `index.html` in your web browser.

## Usage
- Open the `index.html` file in a web browser to view the application.
- Use the theme toggle switch in the header to switch between dark and light themes.
- Use the "Update Status" buttons to change the status of an airdrop to "Logged In" and update the last login date.
- Use the search bar to filter the airdrop list by name.

## Customization
### Adding Airdrops
To add new airdrops, modify the `airdrops` array in `script.js`:
```js
const airdrops = [
    { name: 'Community Gaming', link: 'https://www.communitygaming.io/quests', status: 'Pending', lastLogin: '' },
    { name: 'Maple Story', link: 'https://msu.io/quest/list', status: 'Pending', lastLogin: '' },
    { name: 'Avalon', link: 'https://avalon.online/quests', status: 'Pending', lastLogin: '' },
    { name: 'One Football', link: 'https://club.onefootball.com/join', status: 'Pending', lastLogin: '' },
    { name: 'Sonic Odyssey', link: 'https://odyssey.sonic.game', status: 'Pending', lastLogin: '' },
];
