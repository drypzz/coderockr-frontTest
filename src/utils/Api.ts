export async function getAllPosts() {
    const result = await fetch("https://sample-posts.coderockr.com/api/posts");
    try {
        return await result.json();
    } catch (error) {
        console.log(error);
    };
};

export async function getPostID(id: number) {
    const result = await fetch(`https://sample-posts.coderockr.com/api/posts/${id}`);
    try {
        return await result.json();
    } catch (error) {
        console.log(error);
    };
};