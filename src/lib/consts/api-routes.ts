import axios from 'axios';

export const apiConfigs = {
    users: axios.create({baseURL: '/mock-data/users.json'}),
};
