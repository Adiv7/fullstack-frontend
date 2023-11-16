const login = (email, password) => {
    return fetch("http://localhost:3333/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
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
            localStorage.setItem("user_id", resJson.user_id);
            localStorage.setItem("session_token", resJson.session_token);
            return resJson
        })
        .catch((error) => {
            console.log("Err", error)
            return Promise.reject(error)
        })

}
const ifAuthenticated = (to, from, next) => {
        const loggedIn = localStorage.getItem('session_token');
        if (loggedIn) {
            next()
            return
        }
        next('/login')
    }
    // const router = new Router({
    //     mode: "history",
    //     base: process.env.BASE_URL,
    //     routes: [{
    //         path: "/",
    //         name: "dashboardt",
    //         component: exampleComponent,
    //         meta: {
    //             title: "Dashboard"
    //         },
    //         beforeEnter: () => {
    //             window.location.href = 'http://localhost:3333/logout';
    //         }
    //     }]
    // })
export const userService = {
    login,
    ifAuthenticated,
    // router
}