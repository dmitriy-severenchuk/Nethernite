import axios from '@/plugins/axios';

export const getPackages = async () => {
    const response = await axios({
        url: '/stats/packages',
        methods: 'GET',
    });

    return response;
};

export const getPackage = async (type, name) => {
    const response = await axios({
        url: `/package/${type}/${name}`,
        methods: 'GET',
    });

    return response;
};