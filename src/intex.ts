const world = '🗺️';

export function hello(word: string = world): string {
    console.log("yes");
    return `Hello ${world}! `;
}

hello("maybe hello");