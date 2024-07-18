// Example data (replace with your actual airdrop data)
const airdrops = [
    { name: 'Community Gaming', link: 'https://www.communitygaming.io/quests', status: 'Pending', lastLogin: '' },
    { name: 'Maple Story', link: 'https://msu.io/quest/list', status: 'Pending', lastLogin: '' },
    { name: 'Avalon', link: 'https://avalon.online/quests', status: 'Pending', lastLogin: '' },
    { name: 'One Football', link: 'https://club.onefootball.com/join', status: 'Pending', lastLogin: '' },
    { name: 'Sonic Odyssey', link: 'https://odyssey.sonic.game', status: 'Pending', lastLogin: '' },
];

// Function to populate airdrops table
function populateAirdropsTable() {
    const tableBody = document.querySelector('#airdrops-table tbody');
    tableBody.innerHTML = '';

    airdrops.forEach(airdrop => {
        const row = `
            <tr>
                <td>${airdrop.name}</td>
                <td><a href="${airdrop.link}" target="_blank">Visit</a></td>
                <td>${airdrop.status}</td>
                <td>${airdrop.lastLogin}</td>
                <td><button onclick="updateStatus('${airdrop.name}', 'Logged In')">Update Status</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    updateDashboard();
}

// Function to update status (for demonstration purposes)
function updateStatus(airdropName, newStatus) {
    const index = airdrops.findIndex(airdrop => airdrop.name === airdropName);
    if (index !== -1) {
        airdrops[index].status = newStatus;
        airdrops[index].lastLogin = new Date().toISOString().split('T')[0];
        populateAirdropsTable(); // Update table after status change
    }
}

// Function to update dashboard counters
function updateDashboard() {
    const totalAirdrops = airdrops.length;
    const pendingAirdrops = airdrops.filter(airdrop => airdrop.status === 'Pending').length;
    const loggedInToday = airdrops.filter(airdrop => airdrop.lastLogin === new Date().toISOString().split('T')[0]).length;

    document.getElementById('total-airdrops').textContent = totalAirdrops;
    document.getElementById('pending-airdrops').textContent = pendingAirdrops;
    document.getElementById('logged-in-today').textContent = loggedInToday;
}

// Function to toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark');
}

// Event listener for theme toggle
document.getElementById('theme-toggle').addEventListener('change', toggleTheme);

// Initial population of table and dashboard
document.addEventListener('DOMContentLoaded', () => {
    populateAirdropsTable();
});
