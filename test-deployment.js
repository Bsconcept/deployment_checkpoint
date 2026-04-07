// test-deployment.js
const axios = require('axios');

const BASE_URL = 'https://mern-app-yourname.azurewebsites.net';

async function testDeployment() {
    console.log('🧪 Testing Azure Deployment...\n');
    
    // Test 1: Root endpoint
    try {
        const rootResponse = await axios.get(BASE_URL);
        console.log('✅ Root endpoint test passed');
        console.log(`   Status: ${rootResponse.status}`);
    } catch (error) {
        console.log('❌ Root endpoint test failed');
    }
    
    // Test 2: API endpoint
    try {
        const apiResponse = await axios.get(`${BASE_URL}/api/users`);
        console.log('✅ API endpoint test passed');
        console.log(`   Status: ${apiResponse.status}`);
    } catch (error) {
        console.log('❌ API endpoint test failed');
    }
    
    // Test 3: Database connection test (if you have a test endpoint)
    try {
        const dbResponse = await axios.get(`${BASE_URL}/api/health`);
        if (dbResponse.data.database === 'connected') {
            console.log('✅ Database connection test passed');
        }
    } catch (error) {
        console.log('⚠️  Database health check not implemented');
    }
    
    console.log('\n📊 Deployment URL:', BASE_URL);
}

testDeployment();
