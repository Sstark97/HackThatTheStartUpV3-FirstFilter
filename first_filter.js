const allData = require('./assets/MOCK_DATA.json');

const firstItem = allData.filter(data => data.last_name === 'Nuwe').length

const secondItem = allData.filter(data => data.last_name === 'Nuwe')[0].id.replace(/\D/g,'')

const thirdItemData = allData
                        .filter(data => !data.pet)
                        .map(data => data.ip.split('.')
                        .map(ips => parseInt(ips,10)))
                        .map(ips => ips[0]);

const thirdItem = Math.max(...thirdItemData);

const password = `${firstItem}-${secondItem}-${thirdItem}`;

console.log(password)