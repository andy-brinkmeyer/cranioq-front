export interface EditProfileResponse200 {
    displayable_message: string;
  }

export interface ProfileData {
    title: string;
    first_name: string;
    last_name: string;
    email: string;
    clinic_name: string;
    clinic_street: string;
    clinic_city: string;
    clinic_postcode: string;
  }

export interface GetUserResponse200 {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    title: string;
    role: string;
    clinic_name: string;
    clinic_street: string;
    clinic_city: string;
    clinic_postcode: string;
}