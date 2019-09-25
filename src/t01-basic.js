const edgar = require('node-edgar')

async function main() {
    const data = await edgar.getCompanyInfo('AAPL', function(data) {
        return data
    })
}

main()