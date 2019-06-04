import * as CryptoCompare from '../ util / cryptocompare_api_util'

export const RECEIVE_24H_PRICES

export const fetch24HPrices = (symbol) => dispatch => {
    return CryptoCompare.fetch24HPrices(symbol)
           .then((payload) => dispatch(receive24HPrices(payload) ))
        // errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const fetch1WPrices = (symbol) => {
    return CryptoCompare.fetch1WPrices(symbol)
           .then((payload) =>dispatch(receive1WPrices(payload)) )
}

export const fetch1MPrices = (symbol) => {
    return CryptoCompare.fetch1MPrices(symbol)
        .then((payload) => dispatch(receive1MPrices(payload)))
}

export const fetch1YPrices = (symbol) => {
    return CryptoCompare.fetch1YPrices(symbol)
        .then((payload) => dispatch(receive1YPrices(payload)))
}

export const fetchAllPrices = (symbol) => {
    return CryptoCompare.fetchAllPrices(symbol)
        .then((payload) => dispatch(receiveAllPrices(payload)))
}








const receive24HPrices = payload => {
    let data = payload.Data.map(datum=>{
        return {x: datum.time, y: datum.close }
    });

    return {
        type: RECEIVE_24H_PRICES,
        prices: data, // array of prices
    }
};

const receive1WPrices = payload => {
    let data = payload.Data.map(datum => {
        return { x: datum.time, y: datum.close }
    });

    return {
        type: RECEIVE_24H_PRICES,
        prices: data, // array of prices
    }
};

