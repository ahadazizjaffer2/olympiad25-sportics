import React, { useState, useRef, useEffect } from 'react';

const sports = [
    {name: "Futsal",
      rules: [
        {
          point: "Referees",
          subPoints: [
            "The game would consist of two refs: one who will be the side ref and one who will be the main ref.",
            "The main referee's decision will be the final decision (Arguments could lead to a straight red card)."
          ]
        },
        {
          point: "Team Composition",
          subPoints: [
            "Each team consists of 5 players on the field, including a goalkeeper.",
            "Teams can have a maximum of 7 substitutes.",
            "Substitutions can be made at any time and do not require stoppage of play."
          ]
        },
        {
          point: "Match Duration",
          subPoints: [
            "A match is divided into two halves, each lasting 15 minutes (running clock)."
          ]
        },
        {
          point: "Scoring",
          subPoints: [
            "A goal is scored when the entire ball crosses the goal line between the goalposts and under the crossbar."
          ]
        },
        {
          point: "Freekicks and Penalties",
          subPoints: [
            "Free kicks are awarded for fouls committed outside the penalty area.",
            "A direct free kick is awarded for serious fouls and can be taken directly at the goal.",
            "An indirect free kick is awarded for minor fouls; the ball must touch another player before a goal can be scored.",
            "A penalty kick is awarded for a foul committed inside the penalty area. The kick is taken from a designated penalty mark."
          ]
        },
        {
          point: "Goalkeeper Rules",
          subPoints: [
            "Goalkeepers cannot hold the ball for more than 4 seconds.",
            "Goalkeepers cannot receive the ball directly (in hand) from a teammate's foot after it has been intentionally passed to them."
          ]
        },
        {
          point: "Disciplinary Actions (Cards)",
          subPoints: [
            "Yellow Cards: A warning for misconduct.",
            "Red Cards: A player receiving 2 yellow cards is sent off for 3 minutes. If a player receives a straight red card, they will be benched for the remainder of the game and cannot be substituted."
          ]
        },
        {
          point: "Point System",
          subPoints: [
            "Each win consists of 3 points and a draw results in 1 point for each team."
          ]
        },
        {
          point: "Walkover Rule (Forfeit)",
          subPoints: [
            "Time Limit: If a team fails to show up within 15 minutes of the scheduled start time, they will forfeit the game.",
            "Result: The opposing team will be awarded a win by forfeit, with a score of 3-0 recorded in their favor."
          ]
        }
      ]
    },
    {name: "Basketball",
      rules: [
        {
          point: "Game Duration",
          subPoints: [
            "Quarters: Four 10-minute quarters.",
            "Halftime: 8-minute break between the 2nd and 3rd quarters.",
            "Break between quarters: 2 minutes between 1st & 2nd and 3rd & 4th quarters.",
            "Overtime: 5-minute periods if scores are tied at the end of regulation.",
            "Clock: Continuous running clock during quarters except for timeouts, injuries, and the final 2 minutes of the 4th quarter (where it stops on whistles)."
          ]
        },
        {
          point: "Scoring and Points",
          subPoints: [
            "Field Goal: 2 points inside the 3-point line.",
            "Three-Point Shot: 3 points from outside the 3-point line.",
            "Free Throw: 1 point per free throw made."
          ]
        },
        {
          point: "Fouls and Free Throws",
          subPoints: [
            "Team Fouls: After the 4th team foul in a quarter, opponents get 2 free throws for every subsequent foul.",
            "Personal Fouls: A player is disqualified after committing 5 personal fouls.",
            "Shooting Fouls: 2 free throws for fouls on 2-point shots, 3 free throws for fouls on 3-point shots."
          ]
        },
        {
          point: "Traveling Violations",
          subPoints: [
            "No Gather Step: Players must release the ball before lifting their pivot foot; any additional steps will be called traveling.",
            "Dribbling Violations: Double dribbling or carrying the ball will result in turnovers.",
            "Pivot Foot: Players must maintain the pivot foot position without dragging or lifting it unless passing or shooting."
          ]
        },
        {
          point: "Time Restrictions",
          subPoints: [
            "8-Second Rule: The offensive team must advance the ball past half-court within 8 seconds.",
            "24-Second Shot Clock: The offensive team must attempt a shot within 24 seconds of gaining possession. The clock resets to 14 seconds after offensive rebounds.",
            "5-Second Rule: Players have 5 seconds to inbound the ball.",
            "3-Second Rule: Offensive players cannot remain in the paint for more than 3 consecutive seconds."
          ]
        },
        {
          point: "Timeouts",
          subPoints: [
            "Timeouts per Game: Each team has 2 timeouts in the first half and 3 timeouts in the second half (with a maximum of 2 timeouts in the last 2 minutes of the 4th quarter).",
            "Timeout Duration: 60 seconds each."
          ]
        },
        {
          point: "Substitutions",
          subPoints: [
            "Allowed at Stoppages: Players can be substituted during stoppages in play but not while the game clock is running during live play.",
            "Free Substitutions: Unlimited substitutions are allowed."
          ]
        },
        {
          point: "Jump Ball and Possession Arrow",
          subPoints: [
            "Jump Ball: The game starts with a jump ball, and then possession alternates using a possession arrow for tie-ups and to begin quarters."
          ]
        },
        {
          point: "Goaltending and Basket Interference",
          subPoints: [
            "Goaltending: A defensive player cannot block or interfere with the ball when it is on its downward flight toward the basket or after it has touched the backboard above the ring.",
            "Basket Interference: Players cannot touch the ball when it is on or within the basket."
          ]
        },
        {
          point: "Technical Fouls",
          subPoints: [
            "Game Delays: Delaying the game (e.g., by holding the ball after a whistle) will result in a technical foul.",
            "Unsportsmanlike Conduct: Inappropriate behavior, including arguing with referees or excessive contact, results in technical fouls.",
            "Free Throws: Technical fouls result in 1 free throw and possession of the ball for the non-offending team."
          ]
        },
        {
          point: "Defense and Blocking",
          subPoints: [
            "Legal Defense: Players can set screens but must remain stationary. Blocking or moving screens will result in offensive fouls.",
            "Zone Defense: Allowed. Teams can use any defensive strategy, including zone or man-to-man defense."
          ]
        },
        {
          point: "Inbounding the Ball",
          subPoints: [
            "Time to Inbound: Teams have 5 seconds to inbound the ball after stoppages in play.",
            "Inbounding from Sidelines: After fouls or violations, the ball is inbounded from designated spots depending on the location of the stoppage."
          ]
        },
        {
          point: "Walkover Rule (Forfeit)",
          subPoints: [
            "Time Limit: If a team fails to show up within 15 minutes of the scheduled start time, they will forfeit the game.",
            "Result: The opposing team will be awarded a win by forfeit, with a score of 20-0 recorded in their favor."
          ]
        }
      ]
    },
    {name: "Throwball",
      rules: [
        {
          point: "Team Composition",
          subPoints: [
            "Each team consists of twelve players with 7 active players at the time of play and 4 substitutes (can vary according to the team's needs)"
          ]
        },
        {
          point: "Match Sets",
          subPoints: [
            "The match is played for the best of 3 sets for 25 points in each set with a rally score."
          ]
        },
        {
          point: "Service",
          subPoints: [
            "The players have to catch the ball with both hands and return it by ONE HAND ONLY.",
            "The ball that is to be served should be released from above the shoulder/shoulder line of the player.",
            "The service ball should not touch the net.",
            "Double touches are not allowed for receiving the service ball (One player touches the ball and the next player catches and throws it)",
            "The players should serve the ball after the whistle is blown and within 5 seconds.",
            "Players should serve the ball from the service-zone without crossing the end line. If the server's foot touches the service line while throwing it's considered a line-cut foul.",
            "The player should not dribble the ball after the whistle is blown at the time of service.",
            "If the player's ball has fallen on the box line or the dead zone line, then it is regarded as a good ball, and the point is awarded to the server."
          ]
        },
        {
          point: "During play",
          subPoints: [
            "Any ball that has been caught during the rally is to be released within 3 seconds.",
            "Two players cannot catch the ball simultaneously, or the team loses points.",
            "The ball when in one player's hands cannot be fumbled, else a penalty point will be given.",
            "Shifting the ball from left to right or vice versa is not allowed, the ball is to be thrown from the side it is caught on."
          ]
        },
        {
          point: "Player Formation",
          subPoints: [
            "The players have to stay in a 2-3-2 position at the time of service."
          ]
        },
        {
          point: "Time-Outs",
          subPoints: [
            "In the entire match, there are two time-outs of 30 seconds in each set.",
            "The players need to wear a proper uniform during play."
          ]
        },
        {
          point: "For linesman in throwball",
          subPoints: [
            "Any ball that falls on the line of the box is a good ball and will be counted as in.",
            "For a server stepping on the line while throwing the serve (ball still in hand) is counted as a penalty.",
            "A ball fallen on the dead area line is counted as in ball.",
            "Any ball falling outside the box or inside the dead area is called a foul.",
            "If a player steps inside the dead area to catch or throw a ball, a penalty is to be made."
          ]
        }
      ]
    },
    {name: "Volleyball",
      rules: [
        {
          point: "Team Composition",
          subPoints: [
            "Volleyball team consists of 6 players on the court at a time (3 in the front row and 3 in the back row).",
            "Server name must be informed to the referee before the match.",
            "Matches are played in a best of three set format, with each set of 25 points and the last set of 15 points. A set is won by the team that first scores 25 points."
          ]
        },
        {
          point: "Service",
          subPoints: [
            "Each player is allowed to do a maximum of 3 serves.",
            "Players serve from behind the end line, and the linesman is responsible to check this and inform the referee.",
            "A legal serve can touch the net as long as it goes over into the opponent's court."
          ]
        },
        {
          point: "During play",
          subPoints: [
            "After each set both teams have to switch sides.",
            "Each team is allowed a maximum of 3 touches to return the ball (excluding block touches).",
            "The ball can be hit with any part of the body.",
            "A player cannot hit the ball twice consecutively (except after a block).",
            "If the ball touches the floor or goes out of bounds, the rally ends and a point is awarded to the other team.",
            "Players cannot touch the net during play. Doing so results in a point for the opposing team.",
            "If the ball lands on the boundary line, it is considered 'in' (during both service and play).",
            "Upperhand receive is not allowed in 3 meters by first-line players. If someone does this, the point goes to the opponent.",
            "Underhand receive is allowed.",
            "Catch and hold of volleyball during a rally or receive is not allowed.",
            "Shooter ball is not allowed. A first warning is issued to any player, then it is considered to be a foul (i.e. means a point for the other team)"
          ]
        },
        {
          point: "Line Cross",
          subPoints: [
            "Line cross is also considered a foul and the point goes to the opponent.",
            "Line cross is the referee's decision and all decisions by the referee are final. Only players and captains can appeal for the foul only. Misbehaving with the referee will result in a foul and the team can lose one point based on the referee."
          ]
        },
        {
          point: "Linesman And Referee",
          subPoints: [
            "2 to 4 linemen in each match, and the linesman and referee must be unbiased.",
            "If a player (during service) steps on the line (with the ball in hand), a line cut is given to the team and a point is awarded to the opponent.",
            "If a ball goes out of bounds, the ball is considered as 'out' and the opponent team is awarded the point.",
            "If a ball hits the boundary line or touches the floor within the zone, the ball is considered as 'in' and the team is awarded with a point.",
            "Service and line decisions will be given by the referee with the linemen's confirmation whether the ball is in or out of the court.",
            "Misbehave with linemen is not allowed and will be considered as foul."
          ]
        }
      ]
    },
    {name: "Cricket",
        rules: [
          // ... previous rules remain the same ...
          {
            point: "No-Ball Rules",
            subPoints: [
              "A ball above waist height will result in a straight no-ball.",
              "One bouncer is allowed per over. The second bouncer in the same over will be called a no-ball.",
              "If the bowler bowls the ball outside the pitch, it will be declared a no-ball.",
              "Overstepping the crease results in a NO-BALL.",
              "Max of 3 fielders are allowed behind the bowling end, if more than 3 players are fielding during any ball, it will be given a NO-BALL."
            ]
          },
          {
            point: "Extras",
            subPoints: [
              "Any ball bowled wide of the batsman's reach will be called a wide, awarding 1 extra run. An additional ball must be bowled.",
              "There will be all extras except for BYES, no runs will be counted for BYES."
            ]
          },
          {
            point: "Match Duration",
            subPoints: [
              "Each innings will last for 5 overs or until all 6 wickets fall, whichever comes first.",
              "Innings Time: Each team will have 15 minutes to bowl their allotted 5 overs.",
              "A 5-minute interval between innings will be provided."
            ]
          },
          {
            point: "Result",
            subPoints: [
              "The team scoring the most runs wins the match.",
              "In case of a tie: A Super Over will be played with 1 over (6 balls) per team, and each team can use 3 batsmen and 1 bowler.",
              "If the Super Over also results in a tie, the team with the most boundaries in the main innings wins."
            ]
          },
          {
            point: "Umpiring",
            subPoints: [
              "The umpire's decision is final in all matters, including dismissals, no balls, and wides. No arguments or disputes will be tolerated.",
              "Players must respect the umpire's authority at all times. Any disrespectful behavior may result in warnings, penalties, or disqualification from the match."
            ]
          },
          {
            point: "Player Conduct and Discipline",
            subPoints: [
              "Players must conduct themselves in the spirit of the game.",
              "Unsporting behavior, including verbal or physical abuse, aggressive appeal, or sledging, will not be tolerated and may result in warnings, penalties, or disqualification."
            ]
          },
          {
            point: "Boundary Rule",
            subPoints: [
              "If the ball directly hits the boundary net, then it will be a SIX.",
              "If the ball hits the top net and then goes to the boundary it will"
            ]
          }
        ]
    }
]
  

function SportRules() {
    const [activeSport, setActiveSport] = useState(sports[0].name);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const tabsRef = useRef(null);
  
    useEffect(() => {
      const tabsElement = tabsRef.current;
      if (tabsElement) {
        const handleScroll = () => {
          setShowLeftArrow(tabsElement.scrollLeft > 0);
          setShowRightArrow(
            tabsElement.scrollLeft < tabsElement.scrollWidth - tabsElement.clientWidth
          );
        };
  
        tabsElement.addEventListener('scroll', handleScroll);
        handleScroll();
  
        return () => tabsElement.removeEventListener('scroll', handleScroll);
      }
    }, []);
  
    const scrollTabs = (direction) => {
      const tabsElement = tabsRef.current;
      if (tabsElement) {
        tabsElement.scrollBy({ left: direction * 200, behavior: 'smooth' });
      }
    };
  
    return (
      <section id="rules" className="my-4">
        <div className="bg-[#FFFFFF] rounded-lg shadow-lg overflow-hidden lg:flex">

          <div className="hidden lg:block w-1/4 bg-gray-100">
            {sports.map((sport) => (
              <button
                key={sport.name}
                className={`w-full px-4 py-3 text-left transition-colors duration-300 text-xl ${
                  activeSport === sport.name
                    ? 'bg-[#00A8FF] text-[#FFF]'
                    : 'text-[#000] hover:bg-gray-300'
                }`}
                onClick={() => setActiveSport(sport.name)}
              >
                {sport.name}
              </button>
            ))}
          </div>
  
          <div className="lg:hidden relative">
            {showLeftArrow && (
              <button
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#FFFFFF] to-transparent px-2 z-10"
                onClick={() => scrollTabs(-1)}
              >
                &#9664;
              </button>
            )}
            {showRightArrow && (
              <button
                className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#FFFFFF] to-transparent px-2 z-10"
                onClick={() => scrollTabs(1)}
              >
                &#9654;
              </button>
            )}
            <div
              ref={tabsRef}
              className="flex overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sports.map((sport) => (
                <button
                  key={sport.name}
                  className={`px-4 py-2 whitespace-nowrap transition-colors duration-300 ${
                    activeSport === sport.name
                      ? 'bg-[#00A8FF] text-[#FFF]'
                      : 'text-[#000] hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveSport(sport.name)}
                >
                  {sport.name}
                </button>
              ))}
            </div>
          </div>
  
          
          <div className="md:p-6 p-4 lg:w-3/4 overflow-auto">
            {sports.map((sport) => (
              sport.name === activeSport && (
                <div key={sport.name}>
                  <h3 className="text-2xl mb-4 text-[#00A8FF] ">{sport.name} Rules</h3>
                  <ul className="space-y-4">
                    {sport.rules.map((rule, index) => (
                      <li key={index} className="text-sm sm:text-base text-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[18px]">
                        <strong>{rule.point}:</strong>
                        <ol className="list-inside list-disc pl-4 mt-2 ">
                          {rule.subPoints.map((subPoint, subIndex) => (
                            <li className='sportsbullet' key={subIndex}>{subPoint}</li>
                          ))}
                        </ol>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default SportRules;
  