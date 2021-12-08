import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {

  teams = [
    { team: 'GB', name: 'PACKERS', logo: "https://sleepercdn.com/images/team_logos/nfl/gb.png", color: 'rgb(32, 55, 49)' },
    { team: 'MIN', name: 'VIKINGS', logo: "https://sleepercdn.com/images/team_logos/nfl/min.png", color: 'rgb(79, 38, 131)' },
    { team: 'CHI', name: 'BEARS', logo: "https://sleepercdn.com/images/team_logos/nfl/chi.png", color: 'rgb(11, 22, 42)' },
    { team: 'DET', name: 'LIONS', logo: "https://sleepercdn.com/images/team_logos/nfl/det.png", color: 'rgb(0, 118, 182)'  },

    { team: 'TB', name: 'BUCCANEERS', logo: "https://sleepercdn.com/images/team_logos/nfl/tb.png", color: 'rgb(213, 10, 10)' },
    { team: 'NO', name: 'SAINTS', logo: "https://sleepercdn.com/images/team_logos/nfl/no.png", color: 'rgb(211, 188, 141' },
    { team: 'ATL', name: 'FALCONS', logo: "https://sleepercdn.com/images/team_logos/nfl/atl.png", color: 'rgb(0, 0, 0)' },
    { team: 'CAR', name: 'PANTHERS', logo: "https://sleepercdn.com/images/team_logos/nfl/car.png", color: 'rgb(0, 133, 202)' },

    { team: 'DAL', name: 'COWBOYS', logo: "https://sleepercdn.com/images/team_logos/nfl/dal.png", color: 'rgb(0, 34, 68)' },
    { team: 'WAS', name: 'FOOTBALL TEAM', logo: "https://sleepercdn.com/images/team_logos/nfl/was.png", color: 'rgb(90, 20, 20)' },
    { team: 'PHI', name: 'EAGLES', logo: "https://sleepercdn.com/images/team_logos/nfl/phi.png", color: 'rgb(0, 76, 84)' },
    { team: 'NYG', name: 'GIANTS', logo: "https://sleepercdn.com/images/team_logos/nfl/nyg.png", color: 'rgb(11, 34, 101)' },

    { team: 'ARI', name: 'CARDINALS', logo: "https://sleepercdn.com/images/team_logos/nfl/ari.png", color: 'rgb(151, 35, 63)' },
    { team: 'LAR', name: 'RAMS', logo: "https://sleepercdn.com/images/team_logos/nfl/lar.png", color: 'rgb(0, 34, 68)' },
    { team: 'SF', name: '49ERS', logo: "https://sleepercdn.com/images/team_logos/nfl/sf.png", color: 'rgb(170, 0, 0)' },
    { team: 'SEA', name: 'SEAHAWKS', logo: "https://sleepercdn.com/images/team_logos/nfl/sea.png", color: 'rgb(0, 34, 68)' },

    { team: 'BAL', name: 'RAVENS', logo: "https://sleepercdn.com/images/team_logos/nfl/bal.png", color: 'rgb(36, 23, 115)' },
    { team: 'CIN', name: 'BENGALS', logo: "https://sleepercdn.com/images/team_logos/nfl/cin.png", color: 'rgb(251, 79, 20)' },
    { team: 'PIT', name: 'STEELERS', logo: "https://sleepercdn.com/images/team_logos/nfl/pit.png", color: 'rgb(0, 0, 0)' },
    { team: 'CLE', name: 'BROWNS', logo: "https://sleepercdn.com/images/team_logos/nfl/cle.png", color: 'rgb(49, 29, 0)' },

    { team: 'TEN', name: 'TITANS', logo: "https://sleepercdn.com/images/team_logos/nfl/ten.png", color: 'rgb(0, 34, 68)' },
    { team: 'IND', name: 'COLTS', logo: "https://sleepercdn.com/images/team_logos/nfl/ind.png", color: 'rgb(0, 44, 95)' },
    { team: 'JAX', name: 'JAGUARS', logo: "https://sleepercdn.com/images/team_logos/nfl/jax.png", color: 'rgb(0, 103, 120)' },
    { team: 'HOU', name: 'TEXANS', logo: "https://sleepercdn.com/images/team_logos/nfl/hou.png", color: 'rgb(3, 32, 47)' },

    { team: 'NE', name: 'PATRIOTS', logo: "https://sleepercdn.com/images/team_logos/nfl/ne.png", color: 'rgb(0, 34, 68)' },
    { team: 'BUF', name: 'BILLS', logo: "https://sleepercdn.com/images/team_logos/nfl/buf.png", color: 'rgb(0, 51, 141)' },
    { team: 'MIA', name: 'DOLPHINS', logo: "https://sleepercdn.com/images/team_logos/nfl/mia.png", color: 'rgb(0, 142, 151)' },
    { team: 'NYJ', name: 'JETS', logo: "https://sleepercdn.com/images/team_logos/nfl/nyj.png", color: 'rgb(32, 55, 49)' },

    { team: 'KC', name: 'CHIEFS', logo: "https://sleepercdn.com/images/team_logos/nfl/kc.png", color: 'rgb(227, 24, 55)' },
    { team: 'LAC', name: 'CHARGERS', logo: "https://sleepercdn.com/images/team_logos/nfl/lac.png", color: 'rgb(0, 34, 68)' },
    { team: 'LV', name: 'RAIDERS', logo: "https://sleepercdn.com/images/team_logos/nfl/lv.png", color: 'rgb(165, 172, 175)' },
    { team: 'DEN', name: 'BRONCOS', logo: "https://sleepercdn.com/images/team_logos/nfl/den.png", color: 'rgb(251, 79, 20)' },
  ]

  player: any;
  teamName?: string = '';
  bgColor?: string = '';
  teamLogo?: string = '';
  posColor?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  loadPlayer(p: any): void {
    this.player = p;
    console.log(p)

    let matchedTeam = this.teams.find(elem => elem.team === this.player.team);
    this.teamName = matchedTeam?.name;
    this.teamLogo = matchedTeam?.logo;
    this.bgColor = matchedTeam?.color;

    this.posColor = this.setPositionColor(this.player.position)
  }

  setPositionColor(pos: string): string {
    let returnString = 'rgb(0,0,0)'
    if (pos === 'QB') { returnString = 'rgb(252, 43, 109)'; }
    if (pos === 'RB') { returnString = 'rgb(32, 206, 184)'; }
    if (pos === 'WR') { returnString = 'rgb(89, 167, 255)'; }
    if (pos === 'TE') { returnString = 'rgb(254, 174, 88)'; }
    if (pos === 'DEF') { returnString = 'rgb(191, 95, 64)'; }
    if (pos === 'K') { returnString = 'rgb(189, 102, 255)'; }
    return returnString;
  }

}
