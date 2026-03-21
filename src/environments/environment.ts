import { environmentSecrets } from "./environment-secrets";

export const environment = {
    production: true,
    companyName: 'Girfs',
    companyName2: 'App',
    companySlogan: 'Maneja tus gifs',
    giphyBaseUrl: 'https://api.giphy.com/v1',
    giphyApiKey: environmentSecrets.giphyApiKey
};
