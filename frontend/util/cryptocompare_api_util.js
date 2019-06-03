export const fetch24HPrices = (symbol) => (
    // Note: this request returns data points in reverse (ie., most recent price last)
    // This needs to be adjusted before rendering
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsyms=USD,JPY,EUR&api_key=62518dde68c1a64ffdd7f64fda7cea15b71a752725d274a29362757d19c1110f',
        method: 'GET',
        data: { fsym: symbol, 
                tysm: 'USD', 
                aggregate: 4,
                limit: 360,
                api_key: '62518dde68c1a64ffdd7f64fda7cea15b71a752725d274a29362757d19c1110f'},
    })
);

