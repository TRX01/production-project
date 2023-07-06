import { Country, Currency } from 'shared/const/common';

export interface Profile {
    id: string;
    firstname: string;
    secondname: string;
    currency: Currency;
    country: Country;
    city: string;
}

export interface ProfileSchema {
    data: Profile,
    isLoading: boolean,
    error?: string;
    readonly: boolean;
}
