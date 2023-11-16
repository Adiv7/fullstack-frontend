const getAll = (id) => {
    return fetch("http://localhost:3333/articles/" + id + "/comments")
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

const createComment = (id) => {
    return fetch("http://localhost:3333/articles/" + id + "/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "comment_text": comment_text
            })

        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else if (response.status === 400) {
                throw "Bad request"
            } else {
                throw "Something went wrong"
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

export const commentsService = {
    getAll,
    createComment,
}