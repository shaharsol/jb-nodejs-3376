import { Request } from "express";

export function formatCurrency(value: string, request: Request) {
    if (request.user) return `$${value}`;
    return `€${value}`;
}