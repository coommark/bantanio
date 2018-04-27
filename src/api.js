import axios from 'axios';

export default {
    auth: {
        register: user =>
            axios.post('/api/auth/register', { email: user.email, password: user.password, firstName: user.firstName }).then(res => res.data.user),
        login: credentials =>
            axios.post('/api/auth', { email: credentials.email, password: credentials.password }).then(res => res.data.user),
        forgotPasswordRequest: email =>
            axios.post('/api/auth/reset_password_request', { email })
    },
    seller: {
        sellerRegister: data =>
            axios.post('/api/auth/register', { email: data.email, password: data.password, firstName: data.firstName }).then(res => res.data.user)
    }
}
