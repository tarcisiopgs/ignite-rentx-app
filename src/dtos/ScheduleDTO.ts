import CarDTO from './CarDTO';

export default interface ScheduleDTO {
  user_id: number;
  dates: string[];
  car: CarDTO;
  id: number;
}
