// export const BASE_URL = 'http://159.198.77.150:8080/api/'
// export const BASE_URL_IMAGE = 'http://159.198.77.150:8080/'
// export const DASHBOARD_URL = "http://159.198.77.150:8081/dashboard/"
// export const CURRENT_URL = 'http://159.198.77.150/'
export const BASE_URL = typeof window !== "undefined"
        ? window._env_?.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL
        : process.env.NEXT_PUBLIC_BASE_URL;


export const BASE_URL_IMAGE =
    typeof window !== "undefined"
        ? window._env_?.BASE_URL_IMAGE || process.env.NEXT_PUBLIC_BASE_URL_IMAGE
        : process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

export const DASHBOARD_URL = typeof window !== "undefined"
        ? window._env_?.NEXT_PUBLIC_DASHBOARD_URL || process.env.NEXT_PUBLIC_DASHBOARD_URL
        : process.env.NEXT_PUBLIC_DASHBOARD_URL;


export const CURRENT_URL = typeof window !== "undefined"
        ? window._env_?.NEXT_PUBLIC_CURRENT_URL || process.env.NEXT_PUBLIC_CURRENT_URL
        : process.env.NEXT_PUBLIC_CURRENT_URL;

export const egyptCities = [
    { name: "Cairo", region: "Nile Valley & Delta" },
    { name: "Giza", region: "Nile Valley & Delta" },
    { name: "Alexandria", region: "Nile Valley & Delta" },
    { name: "Luxor", region: "Nile Valley & Delta" },
    { name: "Aswan", region: "Nile Valley & Delta" },
    { name: "Asyut", region: "Nile Valley & Delta" },
    { name: "Minya", region: "Nile Valley & Delta" },
    { name: "Beni Suef", region: "Nile Valley & Delta" },
    { name: "Qena", region: "Nile Valley & Delta" },
    { name: "Sohag", region: "Nile Valley & Delta" },

    { name: "Port Said", region: "Suez Canal & Sinai" },
    { name: "Suez", region: "Suez Canal & Sinai" },
    { name: "Ismailia", region: "Suez Canal & Sinai" },
    { name: "El Arish", region: "Suez Canal & Sinai" },
    { name: "Sharm El-Sheikh", region: "Suez Canal & Sinai" },
    { name: "Dahab", region: "Suez Canal & Sinai" },

    { name: "Siwa Oasis", region: "Western Desert" },
    { name: "Bahariya Oasis", region: "Western Desert" },
    { name: "Farafra Oasis", region: "Western Desert" },
    { name: "Dakhla Oasis", region: "Western Desert" },
    { name: "Kharga Oasis", region: "Western Desert" },

    { name: "Hurghada", region: "Red Sea Coast" },
    { name: "Marsa Alam", region: "Red Sea Coast" },
    { name: "Safaga", region: "Red Sea Coast" },

    { name: "Tanta", region: "Delta Cities" },
    { name: "Mansoura", region: "Delta Cities" },
    { name: "Zagazig", region: "Delta Cities" },
    { name: "Damietta", region: "Delta Cities" },
    { name: "El-Mahalla El-Kubra", region: "Delta Cities" },

    { name: "New Administrative Capital", region: "New Urban Communities" },
    { name: "6th of October City", region: "New Urban Communities" },
    { name: "New Cairo", region: "New Urban Communities" },
    { name: "Sheikh Zayed City", region: "New Urban Communities" },
    { name: "Sadat City", region: "New Urban Communities" },
    { name: "10th of Ramadan City", region: "New Urban Communities" },

    { name: "Faiyum", region: "Other Notable Cities" },
    { name: "Kom Ombo", region: "Other Notable Cities" },
    { name: "Edfu", region: "Other Notable Cities" },
    { name: "Ras Ghareb", region: "Other Notable Cities" },
    { name: "St. Catherine", region: "Other Notable Cities" }
];