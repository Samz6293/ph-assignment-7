export async function getCategories() {
    try {
        const response = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
        if (!response.ok) throw new Error("First api failed. Trying second api");
        const data = await response.json();
        return data;
    }
    catch {
        const response = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
        const data = await response.json();
        return data;
    }
}

export async function getProducts() {
    try {
        const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
        if (!response.ok) throw new Error("First api failed. Trying second api");
        const data = await response.json();
        return data
    }
    catch {
        const response = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
        const data = await response.json();
        return data;
    }
    
}
export async function getCategoryDetails(category: string) {
    try {
        const response = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${category}`);
        if (!response.ok) throw new Error("First api failed. Trying second api");
        const data = await response.json();
        return data;
    }
    catch {
        const response = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${category}`);
        const data = await response.json();
        return data;
    }
}