import api from '../api';

export const sellerRegister = (data) => () =>
    api.seller.sellerRegister(data);
