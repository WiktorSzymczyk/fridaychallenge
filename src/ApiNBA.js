import axios from "axios"


export const BaseURL = 'https://www.balldontlie.io/api/v1/'
export const players = `${BaseURL}players/`

export const getPlayer = async () => {
    const result = await axios.get(players).then(({data}) => data)

    return result
}