const getAll = () => {
    return fetch("http://localhost:3333/articles")
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "Somthing went wrong"
            }
        })
        .then((resJson) => {
            return resJson
        })
        .catch((error) => {
            console.log("Err", error)
            return Promise.reject(error)
        })
}

const getOne = (id) => {
    return fetch("http://localhost:3333/articles/" + id)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "Somthing went wrong"
            }
        })
        .then((resJson) => {
            return resJson
        })
        .catch((error) => {
            console.log("Err", error)
            return Promise.reject(error)
        })
}

export const articlesService = {
    getAll,
    getOne
}