import axios from 'axios';

const apiKey = '2g0MBTgTFNwaTwxJSfq9SxpS-3OFJPFB_KQRoSijar3X7Ya5P-b6ktkAXhcnPaMkXHSkiktPZ9Fsi_JS22jK3KM8sDEvXlQx-VZusEbsr_tvoD87rIRRLNytvAOFX3Yx'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
});

