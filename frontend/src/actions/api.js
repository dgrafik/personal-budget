import axios from 'axios';

class API {

    constructor({ url }) {
        this.url = url
        this.endpoints = {}
    }

    createEntity(entity) {
        this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity)
    }

    createEntities(arrayOfEntity) {
        arrayOfEntity.forEach((entity) => {
            this.createEntity.bind(this)
            this.createEntity(entity)
        })
    }

    createBasicCRUDEndpoints({ name }) {
        var endpoints = {}

        const resourceURL = `${this.url}/${name}`

        endpoints.getAll = () => axios.get(resourceURL)

        endpoints.updateAll = (toUpdate) => axios.put(resourceURL, toUpdate)

        endpoints.getOne = (toGet) => axios.get(`${resourceURL}/${toGet.id}`)

        endpoints.create = (toCreate) => axios.post(resourceURL, toCreate)

        endpoints.update = (toUpdate) => axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate)

        endpoints.delete = (toDelete) => axios.delete(`${resourceURL}/${toDelete.id}`)

        return endpoints
    }
}

const api = new API({ url: 'http://0.0.0.0:5000/api' })
api.createEntities([{name: 'transactions'}])
export { api as default }