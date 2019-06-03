export const fetchCoins = () => (

    $.ajax({
        url: 'api/coins',
        method: 'GET',
    })
);