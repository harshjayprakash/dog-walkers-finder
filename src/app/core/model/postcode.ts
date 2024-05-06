export interface PostcodeApiResponse {
    status: number;
    result: {
        postcode: string;
        quality: number;
        eastings: number | null;
        northings: number | null;
        country: string;
        nhs_ha: string | null;
        date_of_introduction: string;
        longitude: number | null;
        latitude: number | null;
        european_electoral_region: string | null;
        primary_care_trust: string | null;
        region: string | null;
        lsoa: string | null;
        msoa: string | null;
        incode: string;
        outcode: string;
        parliamentary_constituency: string | null;
        parliamentary_constituency_2024: string | null;
        admin_district: string | null;
        parish: string | null;
        admin_county: string | null;
        admin_ward: string | null;
        ced: string | null;
        ccg: string | null;
        nuts: string | null;
        pfa: string | null;
        codes: {
            admin_district: string;
            admin_county: string;
            admin_ward: string;
            parish: string;
            parliamentary_constituency: string;
            parliamentary_constituency_2024: string;
            ccg: string;
            ccg_id: string;
            ced: string;
            nuts: string;
            lsoa: string | null;
            msoa: string | null;
            lau2: string | null;
            pfa: string | null;
        };
    }
}

export interface PostcodeApiValidity {
    status: number;
    result: boolean;
}

export interface PostcodeApiOutcode {
    status: number;
    result: {
        outcode: string;
        longitude: number | null;
        latitude: number | null;
        northings: number;
        eastings: number;
        admin_district: string[];
        parish: string[];
        admin_county: string[];
        admin_ward: string[];
        country: string[];
        parliamentary_constituency: string[];
    }
}
