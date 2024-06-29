import axios from 'axios';

export const stars = (): Promise<number> => {
    return axios({
        url: `https://api.github.com/repos/shuashuaa/amiresponsive`,
        method: 'get'
    }).then(r => {
        return r.data.stargazers_count;
    });
};