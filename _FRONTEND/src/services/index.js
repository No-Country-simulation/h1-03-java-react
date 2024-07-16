export const fetchTest = async () => {
    const res = await fetch('https://055acafb4bad45679437cd2cc81c09c8.api.mockbin.io/')
    const data = await res.json()
    return data
}