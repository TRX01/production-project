import { Country, Currency } from 'shared/const/common';

export interface Profile {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    age: string;
    currency: Currency;
    country: Country;
    city: string;
}

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string;
    readonly: boolean;
}
