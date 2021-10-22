export interface FplChipProps {
    name: string,
    matchday: number,
    date: string
}

export interface FplMatchProps {
    [x: string]: number
    gameweek: number
    game_week_points: number
    points_total: number
    transfers: number
    team_value: number
    transfers_cost: number
    bench_points: number
}

export interface FplPlayerProps {
    player_id: number,
    player_name: string,
    team_name: string,
    current_gameweek: number,
    last_gameweek_points: number,
    points_total: number,
    transfers_total: number,
    points_on_transfers: number,
    team_value: number,
    chips: FplChipProps[],
    matches: FplMatchProps[]
    [x: string]: number | string | FplChipProps[] | FplMatchProps[];
}

export interface FplTableProps {
    data: any[]
    title: string;
    type?: string;
}