import axios from "axios";

const API = async (searchKey: string, maxResults: number=10, startIndex: number=0) => {
    // const [serachString, setSearch] = useState("hello");
    axios.interceptors.request.use(function (config: any) {
        config.metadata = { startTime: new Date() }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    axios.interceptors.response.use(function (response: any) {
        response.config.metadata.endTime = new Date()
        response.duration = response.config.metadata.endTime - response.config.metadata.startTime
        return response;
    }, function (error) {
        error.config.metadata.endTime = new Date();
        error.duration = error.config.metadata.endTime - error.config.metadata.startTime;
        return Promise.reject(error);
    });

    if (searchKey) {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyAwDIAmbGzcKebKJhzasHpQT06jpXRHOuQ&q=${searchKey}&maxResults=${maxResults}&startIndex=${startIndex}`);
        return response;
    }
}

export default API;