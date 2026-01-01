
function createGitHubModule() {
    const container = document.createElement('div');
    container.className = 'module';
    container.innerHTML = '<h2>GitHub Activity</h2>';

    const activityList = document.createElement('ul');
    container.appendChild(activityList);

    fetchGitHubActivity()
        .then(activities => {
            activities.forEach(activity => {
                const listItem = document.createElement('li');
                listItem.textContent = activity.message;
                activityList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub activity:', error);
            activityList.innerHTML = '<li>Error loading GitHub activity.</li>';
        });

    document.getElementById('dashboard-container').appendChild(container);
}

function fetchGitHubActivity() {
    return new Promise((resolve, reject) => {
        // Mock data
        const mockData = [
            { message: 'feat: Add new dashboard module' },
            { message: 'fix: Correct price chart rendering' },
            { message: 'docs: Update README.md' }
        ];
        resolve(mockData);
    });
}
