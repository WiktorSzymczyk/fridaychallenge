import axios from 'axios'

export const baseURL = 'https://www.boredapi.com/api/'
export const activity = `${baseURL}activity/`

export const getActivity = async () => {
    const result = await axios.get(activity)
        .then(({data}) => data)

    return result
}
