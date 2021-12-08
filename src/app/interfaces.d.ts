declare namespace Fantasy {

    export interface ILeagueStatus {
        display_week: number
        league_create_season: string
        league_season: string
        leg: number
        previous_season: string
        season: string
        season_start_date: string
        season_type: string
        week: number
    }

    export interface IPlayerMetadata {
        age: number,
        // birth_city: null
        // birth_country: null
        // birth_date: "1988-12-01"
        // birth_state: null
        college: string,
        // ? - depth_chart_order: null
        // ? - depth_chart_position: null
        espn_id: number,
        fantasy_data_id: number,
        fantasy_positions: string[],
        first_name: string,
        full_name: string,
        gsis_id: null,
        // hashtag: "#GJKinne-NFL-FA-2"
        height: string,
        // high_school: null
        // injury_body_part: null
        // injury_notes: null
        // injury_start_date: null
        injury_status: string,
        last_name: string,
        // metadata: null
        // news_updated: null
        // number: number
        // pandascore_id: null
        player_id: string,
        position: string,
        // practice_description: null
        // practice_participation: null
        rotowire_id: number,
        rotoworld_id: number,
        // search_first_name: "gj"
        // search_full_name: "gjkinne"
        // search_last_name: "kinne"
        // search_rank: 9999999
        // sport: "nfl"
        sportradar_id: string,
        stats_id: number,
        status: string,
        swish_id: number,
        team: string,
        weight: string,
        yahoo_id: number,
        years_exp: number
    }

    export interface IDefenseMetadata {
        fantasy_positions: string[],
        first_name: string,
        injury_status: string,
        last_name: string,
        player_id: string,
        position: string,
        // sport: string,
        team: string,
    }
    
}

export = Fantasy