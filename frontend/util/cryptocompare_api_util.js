export const fetch24HPrices = (symbol) => (
    // Note: this request returns data points in reverse (ie., most recent price last)
    // This needs to be adjusted before rendering
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/histominute',
        method: 'GET',
        data: { fsym: symbol, 
                tysm: 'USD', 
                aggregate: 4,
                limit: 360, 
        }
    })
);

export const fetch1WPrices = (symbol) => (
    // Note: this request returns data points in reverse (ie., most recent price last)
    // This needs to be adjusted before rendering
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/histominute',
        data: {
            fsym: symbol,
            tysm: 'USD',
            aggregate: 30,
            limit: 360,
        },
    })
);

export const fetch1MPrices = (symbol) => (
    // Note: this request returns data points in reverse (ie., most recent price last)
    // This needs to be adjusted before rendering
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/histohour',
        method: 'GET',
        data: {
            fsym: symbol,
            tysm: 'USD',
            aggregate: 2,
            limit: 360,
        },
    })
);

export const fetch1YPrices = (symbol) => (
    // Note: this request returns data points in reverse (ie., most recent price last)
    // This needs to be adjusted before rendering
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/histoday',
        method: 'GET',
        data: {
            fsym: symbol,
            tysm: 'USD',
            aggregate: 1,
            limit: 360,
        },
    })
);

export const fetchAllPrices = (symbol) => (
    // Note: this request returns data points in reverse (ie., most recent price last)
    // This needs to be adjusted before rendering
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/histoday',
        method: 'GET',
        data: {
            fsym: symbol,
            tysm: 'USD',
            aggregate: 7,
            limit: 360,
        },
    })
);
