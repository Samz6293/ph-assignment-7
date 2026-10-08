export interface NavLink {
    id: string
    slug: string
    nameBn: string
    icon: string
}

export interface Product {
    id: number
    slug: string
    nameBn: string
    category: string
    categoryNameBn: string
    categoryIcon: string
    unit: string
    image: string
    today: number
    yesterday: number
    lastWeek: number
    lastMonth: number
    change: Change
    markets: Market[]
}

export interface Change {
    dir: string
    pct: number
}

export interface Market {
    market: string
    division: string
    min: number
    max: number
}

export interface ProductCardProps {
    product: Product
}

export interface Unit {
    kg: string
    litre: string
    dozen: string
    piece: string
}

export interface CategoryParams {
    params: Promise<{category: string}>
}

export interface ProductDetailsParams {
    params: Promise<{slug: string}>
}