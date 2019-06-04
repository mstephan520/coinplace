import * as CryptoCompare from '../ util / cryptocompare_api_util'

export const RECEIVE_24H_PRICES

export const fetch24HPrices = (symbol) => dispatch => {
    return (CryptoCompare.fetch24HPrices(symbol).then((payload) => dispatch(receive24HPrices(payload))
        // errors => dispatch(receiveErrors(errors.responseJSON))
    ))
};

const receive24HPrices = payload => {
    let data = payload.Data.map(datum=>{
        return {x: datum.time, y: datum.close }
    })
    return {
    type: RECEIVE_24H_PRICES,
    prices: data,
}};

