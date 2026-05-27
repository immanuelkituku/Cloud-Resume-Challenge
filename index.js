// Simple visitor counter using localStorage
let count = localStorage.getItem('visitorCount') || 0;
count++;
localStorage.setItem('visitorCount', count);
document.getElementById('visitor-count').textContent = `${count}`;


// Logic for fetching visitor count from DynamoDB via API Gateway
// 1. Fetch visitor count from DynamoDB
// 2. Increment count
// 3. Update count in DynamoDB
// 4. Display updated count on webpage

// Flow
// Visitor opens website
//         ↓
// JavaScript runs in browser
//         ↓
// Calls API Gateway
//         ↓
// API Gateway triggers Lambda
//         ↓
// Lambda updates DynamoDB
//         ↓
// Lambda returns visitor count
//         ↓
// JavaScript displays count
