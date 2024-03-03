import Tag from "./Tag";

export default interface Post {
    id: string;
    imageKey: string;
    title: string;
    description: string;
    tags: Tag[];
    repositoryUrl: string;
    projectUrl: string;
}
