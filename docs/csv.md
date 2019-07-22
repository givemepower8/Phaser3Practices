# CSV

These scripted attack plans are located in the bot folder under the \CSV\Attack folder. You can add/edit these files with any text editor (notepad works, but we recommend NotePad++). Bot will automatically update the GUI ATTACK Deploy box with your available CSV attack plans when it starts (must select scripted attack). Can also manually refresh the attack plan list with green "reload" button.

## How-to

`NOTE`

At the beginning of each file, you should have some notes that tell the bot what to display when your attack file is selected, like the author, date, and a brief description of your attack.
This code:

```csv
NOTE  |Author: Sardo - ver. 1.0 - 07.01.2016
NOTE  |
NOTE  |Attack: Gi-Barch, 3 sides, Dark Elixir Attack.
NOTE  |Make these Troops: 8-10 Giants, Barb 40%, Arch 60%, Minions optional
NOTE  |Will drop Barb, Arch, All Heroes, CC and use Rage spell if enabled from GUI

```

`SIDE`

The next step is telling the bot which side to attack from. This is done with this command:

```csv
      |EXTR. GOLD |EXTR.ELIXIR|EXTR. DARK |DEPO. GOLD |DEPO.ELIXIR|DEPO. DARK |TOWNHALL   |FORCED SIDE|
SIDE  |           |           |           |           |           |           |           |           |
```

You can tell the bot to only attack from one side by adding one of these under FORCED SIDE:

- RANDOM
- TOP-LEFT
- TOP-RIGHT
- BOTTOM-LEFT
- BOTTOM-RIGHT

You can also tell the bot to attack on the side of a certain building/buildings by putting a number underneath one of the building names. Each building's number is its how much ONE of these buildings is worth. For example, if you put 5 under EXTR. GOLD, then each gold collector is worth 5 points. The bot finds which side the building is on and adds 5 points to that side. When all buildings have been detected, then the side with the most points is the side the bot will attack from.

```csv
      |EXTR. GOLD |EXTR.ELIXIR|EXTR. DARK |DEPO. GOLD |DEPO.ELIXIR|DEPO. DARK |TOWNHALL   |FORCED SIDE|
SIDE  |1          |1          |3          |0          |0          |1          |           |           |
```

In this example, dark drills are worth 3 points while gold/elixir pumps and the DE storage are worth 1 point. This means that, if one side of the base has 1 dark storage and one gold collector and another side has one dark drill, then the bot will attack on the side of the dark drill because that side has 3 points(1 DE drill = 3 points) and the other has 2(1 DE storage = 1 point and 1 gold collector = 1 point).

There is also SIDEB command that allows adding defense buildings are targets. At present time, only defense building that can have points added to determine attack side scoring is the Eagle Artillery.

```csv
      |EAGLE      |INFERNO    |XBOW       |WIZTOWER   |MORTAR     |AIRDEFENSE |GEMBOX     |GEMBOX     |
SIDEB |20         |0          |0          |0          |0          |0          |           |           |
```

The above example will add 20 points to side of eagle artillery is detected. Sorry, the GEMBOX can not be attacked. These are place holders for more defense buildings to be added in future. ;)

`MAKE`

The next command involves calculating the troop drop points. Remember, this does not deploy troops. It simply calculates troop drop positions. These positions will be used later. You use the MAKE command like this:

You can use this image to help you visualize the following instructions:

```csv
      |VECTOR_____|SIDE_______|DROP_POINTS|ADDTILES___|VERSUS_____|RANDOMX_PX_|RANDOMY_PX_|BUILDING___|
MAKE  |A          |FRONT-LEFT |10         |1          |INT-EXT    |0          |5          |           |
```

- VECTOR is the name of the drop calculation. One VECTOR is basically a list of where troops can be dropped. You can have multiple vectors, up to one for each letter of the alphabet. If you need more than 26 vectors, you can reuse them. You can MAKE a vector with same letter more than once, and the DROP commands after that MAKE will use new locations.
- SIDE tells the bot which side to attack from. It uses the main side made by the SIDE command to determine which side is which. In the images below, you will see which main side was calculated by the SIDE command, and where the troops would be dropped if you put a different side in the MAKE command.
- DROP_POINTS is how many different places troops should be dropped.
  - If it is 1, then all troops will be dropped on one spot.
  - If it is 2, troops will be dropped on two spots. As you can see in the image, each of the 8 sections has 10 numbered drop points(circles). These are where your troops will be dropped.
- ADDTILES is the distance from the red line. In the picture, the red circles are the drop points with a ADDTILES of 1. The green circles have an ADDTILES of 2. If you want to drop spells inside the base, then you will have to make a vector with a negative number for ADDTILES.
- VERSUS is the direction of troop drop.
  - INT-EXT means that the bot will start dropping troops from the middle of the edges to the corners of the map.
  - EXT-INT means that troops will be dropped from the corners of the map to the middle of the map.
  - IGNORE
- RANDOMX_PX and RANDOMY_PX are the amount of randomness to use when dropping. If you have a randomx of 2 and a randomy of 3, then the bot will drop each troop between [droppointX-2, droppointY-3] and [droppointX+2, droppointY+3]. A higher randomness amount may make the bot look more humanlike, but there is a higher chance of accidentally dropping into the red area.

`BUILDING`

BUILDING gives ability for vector to be created that targets buildings. There are two types of drop on building vectors that can be created.

- When DROP_POINTS = 1; the vector created is on location of building found via image search.
- When DROP_POINTS = 5; will create five (5) DROP locations that are near red line, at shortest distance to building specified on side of attack.

If no target buildings are found on side of attack, building location will be randomly picked, usually on top half of base if more than one exists.

With building target MAKE vectors; VERSUS, and RANDOM x,y values will be ignored.

VERSUS needs to have valid entry in field: "EXT-INT", "INT-EXT", or "IGNORE".

RANDOM can be empty and is ignored as the image find will create variability between attacks and we do not need to add more.

ADDTILES is also ignored when using NEAR BUILDING target, but can be used with drop on building to move spells towards/away from attack troops coming to help them reach the building.

Available BUILDINGS to target are: TOWNHALL, EAGLE, INFERNO, XBOW, WIZTOWER, MORTAR, AIRDEFENSE

Here is summary for MAKE BUILDING:

```csv
MAKE  |VECTOR_____|SIDE_______|DROP_POINTS|ADDTILES___|VERSUS_____|RANDOMX_PX_|RANDOMY_PX_|BUILDING___|
      |A          |FRONT-LEFT |   1 or 5  |same=1 NA=5|IGNORE     |           |           |nameofBldg |

```

DROP on WALL gives ability for vector to be created that targets walls in the given sector. There are two types of wall vectors that can be created.

- When BUILDING = EX-WALL; the vector created is on most outer wall in the sector found via image search.
- When BUILDING = IN-WALL; the vector created is on second most outer wall in the sector found via image search.

With building target MAKE vectors; VERSUS, and RANDOM x,y values will be ignored.

VERSUS needs to have valid entry in field: "EXT-INT", "INT-EXT", or "IGNORE".

RANDOM can be empty and is ignored as the image find will create variability between attacks and we do not need to add more.

ADDTILES is used with drop on wall to move spells towards/away from map edge.

Here is summary for MAKE WALL:

```csv
     |VECTOR_____|SIDE_______|DROP_POINTS|ADDTILES___|VERSUS_____|RANDOMX_PX_|RANDOMY_PX_|BUILDING
MAKE |L          |FRONT-RIGHT|1          |-1         |IGNORE     |           |           |EX-WALL
MAKE |V          |FRONT-RIGHT|1          |-1         |IGNORE     |           |           |IN-WALL
```

`DROP`

Drop commands actually drop troops. It uses the vectors you created in step 3 to determine where to drop the troops.

```csv
      |VECTOR_____|INDEX______|QTY_X_VECT_|TROOPNAME__|DELAY_DROP_|DELAYCHANGE|SLEEPAFTER_|___________|
DROP  |A-B        |2          |1          |giant      |0          |0          |800-1200   |           |
```

- VECTOR: use one of the vector letters you have created with a MAKE command here. Note that you can drop on multiple vectors at the same time by separating the vector numbers with a "-". In the example above, the DROP command would drop troops on vectors A and B at the same time.
- INDEX: Which "drop points" to use. If you created 10 drop points with the MAKE command and put 5-10 in the INDEX column, then the bot will only drop troops on points 5 through 10.
- QTY_X_VECT: How many troops to drop. If you specify a range here, the bot will choose a random value between the two numbers you set. The number of troops that will be dropped at each point will be QTY_X_VECT/# of INDEX values.
- TROOPNAME: Which troop to drop in this wave. Here is how to figure out the name of the troop: For elixir and dark elixir troops, the word to put under TROOPNAME is the first four letters of the full troop name(exception: if you want to deploy giants, put giant under TROOPNAME) eg. Dragon -> drag, Lava Hound -> lava, Giant -> giant For spells, put the first letter of the spell name, then the word "SPELL"(exception: for haste spell, put HaSpell because heal spell is HSpell) eg. Lightning Spell -> LSpell, Heal Spell -> HSpell, Poison Spell -> PSpell There are a few special units: Barbarian King, Archer Queen, Warden -> King, Queen, Warden Clan Castle -> Castle

If text is too complicated, Here is list of names:

```csv
Barb -> Barbarian
Arch -> Archer
Giant -> Giant
Gobl -> Goblin
Wall -> Wall Breaker
Ball -> Balloon
Wiza -> Wizard
Heal -> Healer
Drag -> Dragon
Pekk -> Pekka
BabyD -> BabyDragon
Mine -> Miner
Mini -> Minion
Hogs -> Hog Rider
Valk -> Valkyrie
Gole -> Golem
Witc -> Witch
Lava -> Lava Hound
Bowl -> Bowler

IceG -> IceGolem

King -> Barbarian King
Queen -> Archer Queen
Warden -> Grand Warden

Castle -> Clan Castle

LSpell -> Lightning Spell
HSpell -> Heal Spell
RSpell -> Rage Spell
JSpell -> Jump Spell
FSpell -> Freeze Spell
PSpell -> Poison Spell
ESpell -> Earthquake Spell
HaSpell -> Haste Spell
CSpell -> Clone Spell
SkSpell -> Skeleton Spell
BtSpell -> Bat Spell

WallW -> Wall Wrecker
BattleB -> Battle Blimp
StoneS -> Stone Slammer
```

- DELAY_DROP: If dropping multiple troops on the same spot, how long to wait between each troop.(in ms)
- DELAYCHANGE: If dropping troops on multiple spots, how long to wait after dropping on each spot. For this, SLEEPAFTER, and DELAY_DROP, you can specify a range so the bot's speed is random.
- SLEEPAFTER: How long to wait after dropping the wave before moving on to the next instruction.

Drop on BUILDING target vectors use DROP fields almost same. Key difference is limit on acceptable values for INDEX field. These can be ONLY "1" for drop on building, OR a range with values from 1-5 for drop near BUILDING. These can be a list of comma separated numbers like: 1,3,5 using values 5 or less, or partial range like 2-4.

Example DROP line

```csv
      |VECTOR_____|INDEX______|QTY_X_VECT_|TROOPNAME__|DELAY_DROP_|DELAYCHANGE|SLEEPAFTER_|___________|
DROP  |Same       |Any < 5    | Same      | Same      | Same      |  Same     |   Same    |           |
```

`WAIT`

Wait is a very simple instruction, works like this:

``csv
WAIT |100-300 | INDEX | | | | | | |

````
This tells the bot to wait between 100 and 300 ms. During this time, the bot will also check for some certain end battle conditions if you have them enabled(certain amount of stars reached/0 resources left).

Can now have conditions set, when to break the wait early, TH, SIEGE and TH+SIEGE
- When INDEX = TH; breaks early, when enemy townhall is destroyed
- When INDEX = SIEGE;  breaks early, when siegemaschine got destroyed and releases troops
- When INDEX = TH+SIEGE; breaks early, when both townhall AND siegemaschine got destroyed
- When INDEX = TH,SIEGE; breaks early, when townhall OR siegemaschine got destroyed

when no siegemaschine is deployed before the conditional wait
- When INDEX = SIEGE; returns immediately
- When INDEX = TH+SIEGE; demotes to TH, so only waits for TH destruction

Can now have additional conditions 50%, AQ, BK, GW as well as AQ+BK or BK+AQ
- When INDEX = 50%; breaks early, when 50% damage reached
- When INDEX = AQ; breaks early, when Archer Queen gets activated
- When INDEX = BK; breaks early, when Barbarian King gets activated
- When INDEX = GW; breaks early, when Grand Warden gets activated
- When INDEX = AQ+BK; breaks early, when both Queen AND King got activated is demoted to INDEX = AQ, when only Queen was deployed is demoted to INDEX = BK, when only King was deployed as before, you can combine different conditions comma separated

If conditions are set, but none fits, WAIT will return immediately, like for instance, when INDEX = AQ, but Queen is not yet dropped, or already activated
```csv
WAIT  |60000      |TH,SIEGE   |           |           |           |           |           |          |
WAIT  |60000      |TH+SIEGE   |           |           |           |           |           |          |
````

Example to trigger both Queen and King at the same time:

```csv
WAIT  |60000      |AQ,BK      |           |           |           |           |           |           |
DROP  |A          |1          |1          |queen      |0          |0          |0          |           |
DROP  |A          |1          |1          |king       |0          |0          |0          |           |
```

`RECALC`

This command will make the bot check the number of remaining troops. Keep in mind that this is one of the slowest functions, which can take up to 10 seconds to complete on slower PCs. Try not to use it too much.

```csv
RECALC|           |           |           |           |           |           |           |           |
```

There are several debug variables located in the Global Variables.au3 file that can be enabled to help with testing and debug of CSV files.

```txt
Global $g_iDebugSetlog = 0, $g_iDebugOcr = 0, $g_iDebugImageSave = 0, $g_iDebugBuildingPos = 1, $g_iDebugSetlogTrain = 0, $g_iDebugDisableZoomout = 0, $g_iDebugDisableVillageCentering = 0
.
Global $g_iDebugAttackCSV = 1, $g_iDebugMakeIMGCSV = 1 ;attackcsv debug
```

When you enable the AttackCSV variables, code provides more detailed log information during CSV attack, PLUS a separate log file showing how every line in CSV file was processed.

The MakeIMGCSV will save in profile, both a clean image of base being attacked, and a mapped image. The mapped image shows the red line points, drop points, and building locations required from attack plan file.

If you enable the BuildingPos variable, you will also see log information of building positions found during search, before CSV executes (If building is known from search filter, it is not detected again in CSV)

## Samples

<https://github.com/MyBotRun/MyBot/wiki/Installation>

<https://mybot.run/forums/index.php?/forum/76-csv-attack-files/>

### GoWiPe

```csv
NOTE  |Author: karthik  Attack: TH9 GoWiPe
NOTE  |Modified: MonkeyHunter - ver. 1.2e - 04.26.2017 add SIDEB Row, target X-Bow side
NOTE  |Make these Troops and spells : 2 Golem, 8 wall breaker, 17 Wizards, 3 pekka, 1 archer, 3 rage, 1 heal

      |EXTR. GOLD |EXTR.ELIXIR|EXTR. DARK |DEPO. GOLD |DEPO.ELIXIR|DEPO. DARK |TOWNHALL   |FORCED SIDE|
SIDE  |0          |0          |0          |0          |5          |5          |5          |           |
      |EAGLE      |INFERNO    |XBOW       |WIZTOWER   |MORTAR     |AIRDEFENSE |GEMBOX     |GEMBOX     |,
SIDEB |0          |0          |5          |0          |0          |0          |           |           |,
      |VECTOR_____|SIDE_______|DROP_POINTS|ADDTILES___|VERSUS_____|RANDOMX_PX_|RANDOMY_PX_|___________|
MAKE  |A          |RIGHT-BACK |10         |1          |INT-EXT    |0          |0          |           |vector for Golem and wall breaker right back
MAKE  |B          |RIGHT-FRONT|10         |1          |INT-EXT    |0          |0          |           |vector for Golem and wall breaker left back
MAKE  |C          |RIGHT-BACK |10         |2          |EXT-INT    |2          |3          |           |vector for Wizard Right  Back
MAKE  |D          |RIGHT-FRONT|10         |2          |EXT-INT    |2          |1          |           |vector for Wizard right  front
MAKE  |E          |RIGHT-FRONT|10         |1          |INT-EXT    |1          |2          |           |vector for heroes right back
MAKE  |F          |RIGHT-FRONT|10         |1          |INT-EXT    |2          |3          |           |vector for pekka
MAKE  |G          |RIGHT-BACK |10         |-10        |INT-EXT    |0          |0          |           |vector for 1st rage
MAKE  |H          |RIGHT-FRONT|10         |-10        |INT-EXT    |0          |0          |           |vector for 2st rage
MAKE  |I          |RIGHT-BACK |10         |-12        |INT-EXT    |0          |0          |           |vector for 3rd Rage
MAKE  |J          |RIGHT-BACK |10         |-10        |INT-EXT    |0          |0          |           |vector for 1st Heal Spell
MAKE  |K          |RIGHT-FRONT|10         |-12        |INT-EXT    |0          |0          |           |vector for 2nd Heal Spell

      |VECTOR_____|INDEX______|QTY_X_VECT_|TROOPNAME__|DELAY_DROP_|DELAYCHANGE|SLEEPAFTER_|___________|
DROP  |A-B        |5          |1          |Gole       |0          |0          |400        |           | Dropping 2 golem
DROP  |C-D        |1-10       |7          |Wiza       |50-70      |0          |800        |           | Dropping Wizards
DROP  |A-B        |5          |3          |Wall       |20-50      |0          |2000-4000  |           | Dropping 6 of wall breakers
DROP  |F          |2          |3          |Pekk       |20-400     |0          |5000-6000  |           | Dropping of Pekka
DROP  |A-B        |1          |3          |wall       |10-20      |0          |300        |           | Dropping 2 wall breakers
DROP  |E          |1          |1          |King       |1          |100        |100-200    |           | Drop of King
DROP  |F          |1          |3          |Pekk       |20-400     |0          |50         |           | Dropping of extra Pekka when train error
DROP  |E          |2          |1          |Queen      |1          |100        |50         |           | Dropping Queen
DROP  |A-B        |5          |1          |Gole       |0          |0          |50         |           | Dropping remaining golem if Redline error
DROP  |G          |4          |1          |RSpell     |1          |0          |2000-3000  |           | Dropping Rage Spell
DROP  |H          |4          |1          |RSpell     |1          |0          |1000-1500  |           | Dropping Rage Spell
DROP  |A-B        |1-2        |2          |Wiza       |1          |0          |50-100     |           | Drop of Wizards
DROP  |C-D        |1-10       |7          |Wiza       |5          |0          |50         |           | Dropping remaining Wizards if Redline error
DROP  |A          |1          |1          |Castle     |1          |0          |10000      |           | Dropping Castle Troops
DROP  |I          |1          |1          |Rspell     |1          |0          |300        |           | Dropping Rage Spell
DROP  |J          |1          |1          |Hspell     |1          |0          |300        |           | Dropping Heal Spell
DROP  |A          |1-3        |30         |arch       |10         |0          |7000-9000  |           | Drop 1 archer, can drop upto 30 if training error
DROP  |K          |2          |1          |Hspell     |1          |0          |300        |           | Dropping extra Heal Spell if train error
WAIT  |200-400    |           |           |           |           |           |           |           |
```

### BOWITCH

```csv
NOTE  |Authors: Qandeel LAST UPDATE_ 01, Feb. 2019
NOTE  |Attack: BOWITCH V.2
NOTE  |TH12: 1 Archer, 9 Giants, 12 Wiches, 15 Bowler, 1 Wall Wrecker, Waiting Heroes
NOTE  |TH11: 2 Archer, 10 Giants, 12 Wiches, 14 Bowler
NOTE  |TH10: 2 Archer, 8 Giants, 11 Wiches, 11 Bowler
NOTE  |TH12 & TH11 & TH10: 3 Healing Spell, 2 Rage, 1 Poison or { 2 Healing, 2 Rage, 1 Jump and 1 Poison}
NOTE  |CC: giant and Rage Warden abilities at 15 second (TH10 Freeze)
NOTE  | If there is still missing troops (not dropped) don't use poison and archer
NOTE  | SCRIPT WORK IN EXTERNAL EDGES

      |EXTR. GOLD |EXTR.ELIXIR|EXTR. DARK |DEPO. GOLD |DEPO.ELIXIR|DEPO. DARK |TOWNHALL   |FORCED SIDE|
SIDE  |0          |0          |0          |0          |0          |0          |10         |           |
      |EAGLE      |GEMBOX     |GEMBOX     |GEMBOX     |GEMBOX     |GEMBOX     |GEMBOX     |GEMBOX     |
SIDEB |5          |0          |0          |0          |0          |           |           |           |

      |VECTOR_____|SIDE_______|DROP_POINTS|ADDTILES___|VERSUS_____|RANDOMX_PX_|RANDOMY_PX_|BUILDING___|
MAKE  |A          |FRONT-RIGHT|10         |0          |INT-EXT    |0          |0          |           |
MAKE  |B          |FRONT-LEFT |10         |0          |INT-EXT    |0          |0          |           |
MAKE  |C          |FRONT-RIGHT|10         |-5         |INT-EXT    |0          |0          |           |
MAKE  |D          |FRONT-RIGHT|10         |-13        |INT-EXT    |0          |0          |           |
MAKE  |E          |FRONT-RIGHT|10         |-21        |INT-EXT    |0          |0          |           |
MAKE  |I          |RIGHT-FRONT|10         |0          |INT-EXT    |0          |0          |           |
MAKE  |F          |FRONT-LEFT |1          |1          |IGNORE     |0          |0          |INFERNO    |
MAKE  |G          |FRONT-RIGHT|10         |-8         |INT-EXT    |0          |0          |           |
MAKE  |H          |FRONT-RIGHT|10         |-15        |INT-EXT    |0          |0          |           |
MAKE  |J          |FRONT-RIGHT|10         |-22        |INT-EXT    |0          |0          |           |
MAKE  |K          |FRONT-RIGHT|1          |-1         |IGNORE     |           |           |IN-WALL    |


      |VECTOR_____|INDEX__________|QTY_X_VECT_|TROOPNAME__|DELAY_DROP_|DELAYCHANGE|SLEEPAFTER_|___________|
DROP  |K          |1              |1          |JSpell     |50-70      |0          |100-200    |           |
DROP  |A          |1              |1          |WallW      |50-70      |27-50      |120-150    |           |
DROP  |A          |8,6,4,2,1      |5          |Giant      |50-70      |27-50      |15-20      |           |
DROP  |B          |1,2,4,6,8      |5          |Giant      |50-70      |27-50      |100-120    |           |
DROP  |A          |8,6,4,3,2,1    |6          |Witc       |50-70      |27-50      |15-20      |           |
DROP  |B          |1,2,3,5,6,8    |6          |Witc       |50-70      |27-50      |100-120    |           |
DROP  |A          |9,8,7,5,4,2,1  |7          |Bowl       |50-70      |27-50      |15-20      |           |
DROP  |B          |1,2,4,5,6,7,8,9|8          |Bowl       |50-70      |27-50      |100-120    |           |
DROP  |A          |1              |1          |Castle     |50-70      |37-50      |100-120    |           |
DROP  |C          |1              |1          |Rspell     |50-70      |0          |100-200    |           |
DROP  |A          |1              |1          |Warden     |50-70      |0          |100-120    |           |
DROP  |A          |1              |1          |KING       |50-70      |0          |100-120    |           |
DROP  |A          |1              |1          |Queen      |50-70      |0          |100-120    |           |
DROP  |D          |1              |1          |Pspell     |50-70      |0          |300-500    |           |
DROP  |G          |1              |1          |Hspell     |50-70      |0          |100-200    |           |
WAIT  |5599-5800  |               |           |           |           |           |           |           |
DROP  |D          |1              |1          |Rspell     |50-70      |0          |100-120    |           |
DROP  |H          |1              |1          |Hspell     |50-70      |0          |100-120    |           |
DROP  |F          |1              |1          |Fspell     |50-70      |0          |100-200    |           |
WAIT  |7000-7200  |               |           |           |           |           |           |           |
DROP  |E          |1              |1          |Rspell     |50-70      |0          |100-200    |           |
DROP  |J          |1              |1          |Hspell     |50-70      |0          |100-200    |           |
DROP  |I          |1              |8          |Arch       |50-70      |27-50      |100-120    |           |
DROP  |A          |1-10           |1          |Remain     |0          |0          |100-500    |           |
```

### TH12 LavaLoonion

```csv
NOTE  |Author: DUC4TI
NOTE  |TH-level: 12
NOTE  |set deploy line on "EXTERNAL EDGES"
NOTE  |TRAIN 2 Lava Hounds, 36 Balloons, 20 Minions, 3 Rage, 3 Haste, 2 freeze
NOTE  |CC requirements: 1 Rage, 8 Balloons, 1 Siege Machine
NOTE  |Siege setting: Any Siege Machine
      |           |           |           |           |           |           |           |           |
      |EXTR. GOLD |EXTR.ELIXIR|EXTR. DARK |DEPO. GOLD |DEPO.ELIXIR|DEPO. DARK |TOWNHALL   |FORCED SIDE|
SIDE  |0          |0          |0          |0          |0          |0          | 0         |           |
      |           |           |           |           |           |           |           |           |
      |EAGLE      |INFERNO    |XBOW       |WIZTOWER   |MORTAR     |AIRDEFENSE |AIRSWEEPER |           |
SIDEB |20         |0          |0          |0          |0          |0          |0          |           |
      |           |           |           |           |           |           |           |           |
      |VECTOR     |SIDE       |DROP_POINTS|ADDTILES   |VERSUS     |RANDOMX_PX |RANDOMY_PX |BUILDING   |
      |           |           |           |           |           |           |           |           |
MAKE  |A          |FRONT-LEFT |10         |2          |EXT-INT    |0          |0          |           |
MAKE  |B          |FRONT-RIGHT|10         |2          |INT-EXT    |0          |0          |           |
MAKE  |C          |FRONT-LEFT |10         |-4         |EXT-INT    |0          |0          |           |
MAKE  |D          |FRONT-RIGHT|10         |-5         |INT-EXT    |0          |0          |           |
MAKE  |E          |FRONT-LEFT |10         |-12        |EXT-INT    |0          |0          |           |
MAKE  |F          |FRONT-RIGHT|10         |-12        |INT-EXT    |0          |0          |           |
MAKE  |X          |FRONT-LEFT |1          |0          |IGNORE     |           |           |TOWNHALL   |
MAKE  |Y          |FRONT-LEFT |1          |0          |IGNORE     |           |           |EAGLE      |
      |           |           |           |           |           |           |           |           |
      |VECTOR     |INDEX      |QTY_X_VECT |TROOPNAME  |DELAY_DROP |DELAYCHANGE|SLEEPAFTER |           |
DROP  |A          |8          |1          |Lava       |70-90      |27-50      |200-250    |           |
DROP  |B          |3          |1          |Lava       |70-90      |27-50      |100-150    |           |
      |           |           |           |           |           |           |           |           |
DROP  |B          |1          |1          |Castle     |0          |0          |150-170    |           |
DROP  |B          |1          |1          |WallW      |0          |0          |150-170    |           |
DROP  |B          |1          |1          |BattleB    |0          |0          |150-170    |           |
DROP  |B          |1          |1          |StoneS     |0          |0          |150-170    |           |
      |           |           |           |           |           |           |           |           |
WAIT  |2000-2050  |           |           |           |           |           |           |           |
      |           |           |           |           |           |           |           |           |
DROP  |A          |6,7,8,9,10 |5          |Ball       |70-90      |27-50      |15-20      |           |
DROP  |B          |1,2,3,4,5  |5          |Ball       |70-90      |27-50      |15-20      |           |
DROP  |B          |4,3,2,1    |4          |Ball       |75-90      |27-50      |15-20      |           |
DROP  |A          |10,9,8,7   |4          |Ball       |70-90      |27-50      |15-20      |           |
DROP  |A          |6,7,8,9,10 |5          |Ball       |70-90      |27-50      |15-20      |           |
DROP  |B          |1,2,3,4,5  |5          |Ball       |70-90      |27-50      |15-20      |           |
DROP  |B          |4,3,2,1    |4          |Ball       |70-90      |27-50      |15-20      |           |
DROP  |A          |10,9,8,7   |4          |Ball       |70-90      |27-50      |15-20      |           |
DROP  |Y          |1          |1          |FSpell     |50-100     |0          |0          |           |
      |           |           |           |           |           |           |           |           |
DROP  |C          |8          |1          |HaSpell    |50-100     |0          |50-70      |           |
DROP  |D          |1          |1          |HaSpell    |50-100     |0          |50-70      |           |
DROP  |D          |4          |1          |HaSpell    |50-100     |0          |50-70      |           |
DROP  |B          |1          |1          |Warden     |70-100     |0          |100-150    |           |
      |           |           |           |           |           |           |           |           |
WAIT  |2000-2050  |           |           |           |           |           |           |           |
      |           |           |           |           |           |           |           |           |
DROP  |E          |8          |1          |RSpell     |50-100     |0          |50-70      |           |
DROP  |F          |1          |1          |RSpell     |50-100     |0          |50-70      |           |
DROP  |F          |4          |1          |RSpell     |50-100     |0          |50-70      |           |
      |           |           |           |           |           |           |           |           |
DROP  |A          |1,2,3,4,5  |5          |Mini       |75-90      |27-50      |40-70      |           |
DROP  |A          |6,7,8,9,10 |5          |Mini       |75-90      |27-50      |40-70      |           |
DROP  |B          |1,2,3,4,5  |5          |Mini       |75-90      |27-50      |40-70      |           |
DROP  |B          |6,7,8,9,10 |5          |Mini       |75-90      |27-50      |100-150    |           |
      |           |           |           |           |           |           |           |           |
WAIT  |2000-2050  |           |           |           |           |           |           |           |
      |           |           |           |           |           |           |           |           |
DROP  |B          |1          |1          |King       |70-100     |0          |150-180    |           |
DROP  |B          |1          |1          |Queen      |70-100     |0          |0          |           |
      |           |           |           |           |           |           |           |           |
WAIT  |60000      |TH,SIEGE   |           |           |           |           |           |           |
      |           |           |           |           |           |           |           |           |
DROP  |B          |1          |1          |Warden     |0          |0          |0          |           |Activate Grand Warden
DROP  |X          |1          |1          |FSpell     |50-100     |0          |0          |           |
DROP  |X          |1          |1          |RSpell     |0          |0          |0          |           |
      |           |           |           |           |           |           |           |           |
DROP  |B          |1          |1          |Remain     |75-90      |27-50      |90-100     |           |
```
