import localProducts from "@/app/data/products.json"
import localCategories from "@/app/data/category.json"

const timer = 120;

export async function getCategories() {
    try {
        const response = await fetch("https://api.api-store.workers.dev/api/bazardor/categories", { next: { revalidate: timer } });
        if (!response.ok) throw new Error("First api failed. Trying second api");
        const data = await response.json();
        return data;
    }
    catch {
        try {
            const response = await fetch("https://api.abcz.workers.dev/api/bazardor/categories", { next: { revalidate: timer } });
            const data = await response.json();
            return data;
        }
        catch {
            return localCategories;
        }
    }
}

export async function getProducts() {
    try {
        const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products", { next: { revalidate: timer } });
        if (!response.ok) throw new Error("First api failed. Trying second api");
        const data = await response.json();
        return data
    }
    catch {
        try {
            const response = await fetch("https://api.abcz.workers.dev/api/bazardor/products", { next: { revalidate: timer } });
            const data = await response.json();
            return data;
        }
        catch {
            return localProducts;
        }
    }

}

export async function getCategoryDetails(category: string) {
    try {
        const response = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${category}`, { next: { revalidate: timer } });
        if (!response.ok) throw new Error("First api failed. Trying second api");
        const data = await response.json();
        return data;
    }
    catch {
        try {
            const response = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${category}`, { next: { revalidate: timer } });
            const data = await response.json();
            return data;
        }
        catch {
            return localProducts.filter((product) => product.category === category);
        }
    }
}