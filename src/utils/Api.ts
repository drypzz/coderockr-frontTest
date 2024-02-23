export default async function getAllPosts() {
    const result = await fetch("https://sample-posts.coderockr.com/api/posts");
    try {
        return await result.json();
    } catch (error) {
        console.log(error);
    };
};