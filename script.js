const appData = {
    nightPrice: 0
};

function initDashboard() {
    createRedditModule();
    createPriceChartModule();
    createGitHubModule();
    console.log("Dashboard initialized");
}

document.addEventListener('DOMContentLoaded', initDashboard);
