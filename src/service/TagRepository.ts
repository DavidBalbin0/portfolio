import Tag from "../models/Tag";
import cmsService from "../infra/DatoCms/cmsService";
const queryAllTags =
    `
        {
            allTags {
                id
                title
                iconUrl
            }
        }
    `
;

interface responseAllTags {
    data: {
        allTags: Tag[]
    }
}

export const getAllTags = async (): Promise<Tag[]> => {
    try {
        const response: responseAllTags = await cmsService(queryAllTags);
        if (response && response.data && response.data.allTags) {
            return response.data.allTags;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching tags:", error);
        return [];
    }
};