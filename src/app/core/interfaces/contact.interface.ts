export interface IContact {
    name: string;
    id: string;
    companyName: string;
    isFavorite: boolean;
    smallImageURL: string;
    largeImageURL: string;
    emailAddress: string;
    birthdate: string;
    phone: IPhone;
    address: IAdress;
}

interface IPhone {
    work: string;
    home: string;
    mobile: string;
}

interface IAdress {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
}