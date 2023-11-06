export interface Doctor {
  id: number;
  name: string;
  lastname: string;
  specialty: string;
  img: string;
  address: string;
  openingHours: string;
  experience: Experience[];
}

export interface Experience {
  experienceName: string;

}

