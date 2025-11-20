import fs from 'node:fs/promises';

export async function getAllPosts() {
	const fileContent = await fs.readFile('blog.txt', { encoding: 'utf8' });

	const rawPosts = fileContent.trim().split(/\n\s*\n/);

	return rawPosts.map((post) => {
		const lines = post.split("\n");
		const title = lines.shift();
		const body = lines.join("\n");
		return {title, body};
	});
}

