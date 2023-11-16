export interface IGame {
  uuid: string;
  service_name: string;
  server_ip: string;
  player_quantity: number;
  game_state: string;
  state_time: number;
}
