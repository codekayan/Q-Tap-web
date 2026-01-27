import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export const getSpecialOffers = async (branchId) => {
    try {
        // If no branchId, return empty array
        if (!branchId) {
            return [];
        }

        const response = await axios.get(`${BASE_URL}meals_special_offers`, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                brunch_id: branchId
            }
        });

        if (response.data && response.data.length > 0) {
            const formattedOffers = response.data.map(offer => ({
                id: offer.id,
                item: offer.meals_id,
                discount: offer.discount,
                priceBefore: offer.before_discount,
                priceAfter: offer.after_discount,
                name: offer.name || '', // Ensure name is included
                description: offer.description || '', // Ensure description is included
                isEditing: false,
                img: offer.img
            }));
            return (formattedOffers);
        }
        
        return [];
    } catch (error) {
        // Log the error but don't throw - allow the app to continue without special offers
        if (error.response?.status !== 401) {
            console.error('Error fetching special offers:', error.message);
        }
        return [];
    }
};