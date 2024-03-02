# Development Portfolio
![GitHub License](https://img.shields.io/github/license/DavidBalbin0/portfolio)

Welcome to my portfolio repository. Here you will find more information about my projects, presented in an intuitive and well-explained manner.
Explore the projects, discover their functionalities, and learn a bit more about me and my journey in the world of development.

## Technologies Used:

**TypeScript**: I chose TypeScript for developing this portfolio due to its static typing, which provides me with greater comfort and safety during development. Coming from a Java background, I found TypeScript to be a more concise and solid language to work with.

**React**: I opted to use React in building this portfolio due to its efficiency in state management, making data manipulation easier and more intuitive.

**SCSS**: I used SCSS for styling, configuring a main file to meet the needs of a landing page. The choice of SCSS provided a more organized and flexible development experience in styling the elements.

## Main Features:

* Integration of [DATO CMS](https://www.datocms.com/) or content management, allowing for easy and practical addition and editing of projects.
* Use of SCSS for styling, ensuring an attractive and responsive visual interface.
* Secure image loading through [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html), providing a reliable and protected viewing experience.

## Content Management

I integrated DATO CMS to manage the content of my portfolio, offering a friendly and efficient interface for adding, editing, and organizing projects. The use of a CMS simplifies the process of updating the portfolio, allowing me to focus more on creating projects and less on maintaining the website. Additionally, it enables easier collaboration with other team members, if applicable.

* **Posts**: Posts represent individual projects  in my portfolio. Each post includes attributes such as title, description, images, repository URLs, and project URLs. Additionally, posts can be associated with multiple tags, allowing for effective organization and categorization of projects.

* **Tags**: Tags are used to categorize projects by technologies, themes, or other relevant categories. Each tag has a title and an icon URL, facilitating quick visual identification of the technologies used in each project.

## Data Integration
* **GraphQL Requests**: I use GraphQL to make requests to DATO CMS and retrieve data from my projects in the portfolio. GraphQL allows me to specify exactly which data I want to retrieve efficiently and flexibly, reducing page loading time and optimizing data consumption.

* **Data Processing**: After sending a GraphQL request, I receive a response containing project data in JSON format. This data is then processed on the client side, where it is converted into JavaScript objects to be used in the portfolio.

* **Usage in Portfolio**: The converted data in JavaScript objects is used to render projects in the portfolio. For example, the title, description, repository URLs, and project URLs are displayed for each project, while the tags associated with each project are used to categorize them and facilitate navigation.

This approach to data integration via GraphQL offers an effective and flexible way to obtain and use project data in the portfolio, providing a smooth and personalized viewing experience for visitors.

## Image Loading
* **Secure Request to Amazon S3**: To securely load images in my portfolio, I use the Amazon Simple Storage Service (S3) from AWS. When I receive project data from DATO CMS, each project includes the name of the associated image.

* **Secure Access with AWS SDK**: Using the AWS SDK, specifically the S3 Client package, I make a request to obtain the object corresponding to the image name in my S3 Bucket. This process ensures secure and reliable access to images stored in S3.

* **Credential Configuration and Security**: All directory and credential settings are managed in AWS IAM (Identity and Access Management), where credentials are configured for read-only access, ensuring the security of data stored in S3.

* **Signed URL Generation**: After obtaining the image object from the S3 Bucket, I generate a Signed URL, which is a temporary and secure URL, valid for a specific period (usually 3600 seconds), to access the image securely.

* **Image Loading in Portfolio**: With the generated Signed URL, images are loaded securely in the portfolio, ensuring the integrity and security of the data. This provides a reliable and protected viewing experience for portfolio visitors.

Connect with me on [LinkedIn](https://www.linkedin.com/in/david-balbino/)!

Thank you for visiting!
