import axios from "axios"

const getAddressInfo = async (cep: string) => {
    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    return data
}

export default getAddressInfo;