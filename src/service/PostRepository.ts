import cmsService from "../infra/DatoCms/cmsService";
import getImageFromS3 from "../infra/aws/awsS3Service";

const queryGetAllPosts =
    `
            {
                allPosts {
                    id
                    imageKey
                    title
                    description
                    tags {
                      title
                      iconUrl
                    }
                    repositoryUrl
                    projectUrl
                }
            }
        `;

export interface Tag {
    title: string;
    iconUrl: string;
}

export interface Post {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    tags: Tag[];
    repositoryUrl: string;
    projectUrl: string;
}

interface ResponseAllPosts {
    data: {
        allPosts: {
            id: string;
            imageKey: string;
            title: string;
            description: string;
            tags: Tag[];
            repositoryUrl: string;
            projectUrl: string;
        }[];
    };
}

export const getAllPosts = async (): Promise<Post[]> => {
    try {
        const response: ResponseAllPosts = await cmsService(queryGetAllPosts);
        if (response && response.data && response.data.allPosts) {
            const posts: Post[] = await Promise.all(
                response.data.allPosts.map(async (post) => ({
                    id: post.id,
                    imageUrl: await fetchImageUrl(post.imageKey),
                    title: post.title,
                    projectUrl: post.projectUrl,
                    tags: post.tags,
                    description: post.description,
                    repositoryUrl: post.repositoryUrl,
                }))
            );
            return posts;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};

const fetchImageUrl = async (imageKey: string) => {
    return await getImageFromS3(imageKey);
}
