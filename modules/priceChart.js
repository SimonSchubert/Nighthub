
function createPriceChartModule() {
    const container = document.createElement('div');
    container.className = 'module';
    container.innerHTML = '<h2>Price Chart</h2>';

    const priceDisplay = document.createElement('p');
    priceDisplay.id = 'price-display';
    container.appendChild(priceDisplay);

    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 150;
    container.appendChild(canvas);

    document.getElementById('dashboard-container').appendChild(container);

    updatePriceDisplay(appData.nightPrice);
    drawPriceChart(canvas);
}

function updatePriceDisplay(price) {
    const priceDisplay = document.getElementById('price-display');
    priceDisplay.textContent = `Current Price: $${price.toFixed(2)}`;
    appData.nightPrice = price; // Update shared data
}

function drawPriceChart(canvas) {
    const ctx = canvas.getContext('2d');
    const data = [10, 20, 15, 25, 30, 20, 40, 50, 45, 60, 55, 70]; // Mock data

    ctx.beginPath();
    ctx.moveTo(0, canvas.height - data[0]);

    for (let i = 1; i < data.length; i++) {
        const x = (i / (data.length - 1)) * canvas.width;
        const y = canvas.height - data[i];
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Simulate price updates
// In a real-world, more complex application (like a Single Page App),
// this interval should be cleared when the component is destroyed
// to prevent memory leaks. For this simple static dashboard, it's not an issue.
setInterval(() => {
    const newPrice = Math.random() * 100;
    updatePriceDisplay(newPrice);
}, 5000);
