import { properties } from './../config/properties';

export const getComments = () => {
    return fetch(`${properties.api.root}/comments`)
        .then(res => res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}