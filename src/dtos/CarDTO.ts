export default interface CarDTO {
  accessories: { type: string; name: string }[];
  rent: { period: string; price: number };
  thumbnail: string;
  fuel_type: string;
  photos: string[];
  brand: string;
  about: string;
  name: string;
  id: string;
}
