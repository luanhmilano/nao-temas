import axios from "axios"
import type { Liturgy } from "../types/liturgy.type";

const API_URL: string = import.meta.env.VITE_API_URL;

/**
 * Fetch daily liturgy data from the API.
 * @returns { success: boolean; data: Liturgy | null; error: string | null; }
 */
export const fetchDailyLiturgy = async (): Promise<{
    success: boolean;
    data: Liturgy | null;
    error: string | null;
}> => {
    try {
        const response = await axios.get(API_URL);
        console.log("Liturgy data fetched successfully:", response.data);
        return { success: true, data: response.data, error: null };
    } catch (error) {
        console.error("Error fetching daily liturgy:", error);
        return { success: false, data: null, error: "Failed to fetch daily liturgy." };
    }
}