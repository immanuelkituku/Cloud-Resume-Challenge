// Fetching visitor count from DynamoDB via API Gateway
async function fetchVisitorCount() {
    try {   

        const response = await fetch('https://x29nzwmwka.execute-api.eu-west-1.amazonaws.com/production/visitorCount');
        const data = await response.json();
        document.getElementById('visitor-count').textContent = `${data.visitorCount}`;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitor-count').textContent = 'Error';
    }
}

document.addEventListener('DOMContentLoaded', fetchVisitorCount);