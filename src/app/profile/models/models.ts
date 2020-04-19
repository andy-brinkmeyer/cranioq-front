export interface EditProfileResponse200 {
    displayable_message: string;
  }
  
export interface ProfileData {
    email: string;
    first_name: string;
    last_name: string;
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
    role: string;
    clinic_name: string;
    clinic_address: string;
    clinic_postcode: string;
}