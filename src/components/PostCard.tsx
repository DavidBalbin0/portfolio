import Post from "../models/Post";

export const PostCard = ({id, imageKey, title, description, tags, repositoryUrl, projectUrl}: Post) => {
    return (
       <div className="project-card">
           <img className="image" src={imageKey}/>
           <div className="card-content">
               <h3>{title}</h3>
               <p>{description}</p>
               <div className="tags">
                   {tags.map((tag, index) => (
                       <img key={index} src={tag.iconUrl} alt={tag.title}/>
                   ))}
               </div>

            </div>
           <div className="footer">
               <div className="card-buttons">
                   {repositoryUrl && <a href={repositoryUrl}> Repository</a>}
                   {projectUrl && <a href={projectUrl}> Project</a>}
               </div>
           </div>
       </div>
    );

}