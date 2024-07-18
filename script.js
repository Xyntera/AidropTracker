// Example data (replace with your actual airdrop data)
const airdrops = [
    { name: 'Community Gaming', link: 'https://www.communitygaming.io/quests', status: 'Pending', lastLogin: '' },
    { name: 'Maple Story', link: 'https://msu.io/quest/list', status: 'Pending', lastLogin: '' },
    { name: 'Avalon', link: 'https://avalon.online/quests', status: 'Pending', lastLogin: '' },
    { name: 'One Football', link: 'https://club.onefootball.com/join', status: 'Pending', lastLogin: '' },
    { name: 'Sonic Odyssey', link: 'https://odyssey.sonic.game', status: 'Pending', lastLogin: '' },
];

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const airdropsTable = document.getElementById('airdrops-table');
    const totalAirdropsCounter = document.getElementById('total-airdrops');
    const pendingAirdropsCounter = document.getElementById('pending-airdrops');
    const loggedInTodayCounter = document.getElementById('logged-in-today');

    // Function to populate the airdrops table
    function populateAirdropsTable() {
        const tableBody = airdropsTable.querySelector('tbody');
        tableBody.innerHTML = '';

        airdrops.forEach(airdrop => {
            const row = `
                <tr>
                    <td>${airdrop.name}</td>
                    <td><a href="${airdrop.link}" target="_blank">Visit</a></td>
                    <td>${airdrop.status}</td>
                    <td>${airdrop.lastLogin}</td>
                    <td><button onclick="updateStatus('${airdrop.name}', 'Logged In', this)">Update Status</button></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

        updateDashboard();
    }

    // Function to update status (for demonstration purposes)
    window.updateStatus = function(airdropName, newStatus, button) {
        const index = airdrops.findIndex(airdrop => airdrop.name === airdropName);
        if (index !== -1) {
            airdrops[index].status = newStatus;
            airdrops[index].lastLogin = new Date().toISOString().split('T')[0];
            // Update table row with new status and last login date
            const row = button.closest('tr');
            row.querySelector('td:nth-child(3)').textContent = newStatus;
            row.querySelector('td:nth-child(4)').textContent = airdrops[index].lastLogin;
            updateDashboard(); // Update dashboard counters after status change
        }
    }

    // Function to update dashboard counters
    function updateDashboard() {
        const totalAirdrops = airdrops.length;
        const pendingAirdrops = airdrops.filter(airdrop => airdrop.status === 'Pending').length;
        const loggedInToday = airdrops.filter(airdrop => airdrop.lastLogin === new Date().toISOString().split('T')[0]).length;

        totalAirdropsCounter.textContent = totalAirdrops;
        pendingAirdropsCounter.textContent = pendingAirdrops;
        loggedInTodayCounter.textContent = loggedInToday;
    }

    // Initial population of table and dashboard
    populateAirdropsTable();

    // Event listener for theme toggle switch (optional)
    themeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark');
    });
});
