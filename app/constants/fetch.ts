import { cache } from "react";

const timer = 120;
export async function getCategories() {
    try {
        const response = await fetch("https://api.api-store.workers.dev/api/bazardor/categories", { next: { revalidate: timer } });
        if (!response.ok) throw new Error("First api failed. Trying second api");
        const data = await response.json();
        return data;
    }
    catch {
        const response = await fetch("https://api.abcz.workers.dev/api/bazardor/categories", { next: { revalidate: timer } });
        const data = await response.json();
        return data;
    }
}

export const getProducts = cache(async () => {
    try {
        const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products", { next: { revalidate: timer } });
        if (!response.ok) throw new Error("First api failed. Trying second api");
        const data = await response.json();
        return data
    }
    catch {
        const response = await fetch("https://api.abcz.workers.dev/api/bazardor/products", { next: { revalidate: timer } });
        const data = await response.json();
        return data;
    }
    
})

export async function getCategoryDetails(category: string) {
    try {
        const response = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${category}`, { next: { revalidate: timer } });
        if (!response.ok) throw new Error("First api failed. Trying second api");
        const data = await response.json();
        return data;
    }
    catch {
        const response = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${category}`, { next: { revalidate: timer } });
        const data = await response.json();
        return data;
    }
}