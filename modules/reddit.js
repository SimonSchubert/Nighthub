
function createRedditModule() {
    const container = document.createElement('div');
    container.className = 'module';
    container.innerHTML = '<h2>Reddit Feed</h2>';

    const postList = document.createElement('ul');
    container.appendChild(postList);

    fetchRedditFeed()
        .then(posts => {
            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${post.url}" target="_blank">${post.title}</a>`;
                postList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching Reddit feed:', error);
            postList.innerHTML = '<li>Error loading Reddit feed.</li>';
        });

    document.getElementById('dashboard-container').appendChild(container);
}

function fetchRedditFeed() {
    return new Promise((resolve, reject) => {
        // Mock data since we can't make live API calls
        const mockData = [
            { title: 'Midnight Network AMA', url: '#' },
            { title: 'Night Token Reaches New High', url: '#' },
            { title: 'Community Update', url: '#' }
        ];
        resolve(mockData);
    });
}
