module.exports = {
    siteMetadata: {
        title: `Entity`,
        name: `Narative`,
        siteUrl: `https://gatsby-theme-novela.netlify.com`,
        description: `This is my description that will be used in the meta tags and important for search results`,

        // important to set the main text that appears in the hero
        hero: {
            heading: `Perspectives on technology, design and business from the team at Narative.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/akash_pawara_`,
            },
            {
                name: `github`,
                url: `https://github.com/akashpawara`,
            },
        ],
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                rootPath: "/",
                basePath: "/",
                authorsPage: true,
                mailchimp: false,
                sources: {
                    local: true,
                    contentful: false,
                },
            },
        }
    ],
};
