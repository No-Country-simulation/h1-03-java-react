export const fetchData = async (url, options) => {
    
    if (url && options) {
        try{
            const res = await fetch(url, options)
            const data = await res.json()
            return data
        }
        catch(err){
            console.log(err)
            return null
        }
    }
}

export const postFetch = async (url, data) => {
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    return fetchData(url, options)
}

export const getFetch = async (url, token) => {
    if (token) {
        const options = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            //body: JSON.stringify(token),
        };

        return fetchData(url, options)
    } else {
        return null
    }
}

export const deleteFetch = async (url) => {

    const options = {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        //body: JSON.stringify(token),
    };

    return fetchData(url, options)
}

export const fetchTest = async () => {
    const res = await fetch('https://055acafb4bad45679437cd2cc81c09c8.api.mockbin.io/')
    const data = await res.json()
    return data
}








/* export const fetchTest = async () => {
    const res = await fetch('https://055acafb4bad45679437cd2cc81c09c8.api.mockbin.io/')
    const data = await res.json()
    return data
} */