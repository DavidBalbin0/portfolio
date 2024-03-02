const apiToken = process.env.REACT_APP_DATO_CMS_API_TOKEN || "";
const apiUrl = process.env.REACT_APP_DATO_CMS_API_URL || "";



const cmsService = async (query: string) => {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiToken}`,
            },
            body: JSON.stringify({
                query: query,
            }),
        });

        if (!response.ok) {
            console.log(response)
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting data from DatoCMS:', error);
        return undefined;
    }
}


export default cmsService;