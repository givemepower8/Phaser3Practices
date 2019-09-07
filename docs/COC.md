# COC

Wisely deploy troops to destroy opponent's defensing system and town hall. For a multiplayer battle, player gets one star by 50% more destruction, one star by destroying the town hall, three stars by 100% destruction. In a clan war, leader decides the size of players, each player has two attacks, the clan who gets more stars wins the clan war. If two clans get the same number of stars, the clan has more destruction rate wins the war. In the league war, 7 days straight and one attack per player.

## Resources and Structures

Gold mine and elixir collector. Maximizing collectors is the thing to do so you can save time on looting. For a TH8 with maxed collectors, 600K gold and 600K elixir each day is great and it's free.

- TH8 can have 6 of each and maximum level 12.
- TH9 can have 7 of each.
- TH10 can have maximum level 13.

- Each level 12 generates 4200/h, 100.8K/day
- Each level 13 generates 4900/h. 117.6K/day

Dark elixir collector

- TH8 can have 2 of each and maximum level 3.
- Each level 3 generates 45/h, 1080/day
- TH9 can have level 4,5,6
- TH10 can have 3 of them with max level 7
- Each level 7 generates 120/h, 2880/day

### Wall

| Level | Color           | Cost Gold | Cumulative Cost | Cost Wall Ring | Hitpoints | TH Required | Total |
| ----- | --------------- | --------- | --------------- | -------------- | --------- | ----------- | ----- |
| 1     |                 | 50        | 50              | N/A            | 300       | 2           |       |
| 2     |                 | 1,000     | 1,050           | 1              | 500       | 2           | 25    |
| 3     |                 | 5,000     | 6,050           | 1              | 700       | 3           | 50    |
| 4     |                 | 10,000    | 16,050          | 1              | 900       | 4           | 75    |
| 5     | gold            | 25,000    | 41,050          | 1              | 1,400     | 5           | 100   |
| 6     | pink crystal    | 50,000    | 91,050          | 1              | 2,000     | 6           | 125   |
| 7     | purple crystal  | 100,000   | 191,050         | 1              | 2,500     | 7           | 175   |
| 8     | skull           | 250,000   | 441,050         | 1              | 3,000     | 8           | 225   |
| 9     | spike           | 500,000   | 941,050         | 1              | 4,000     | 9           | 250   |
| 10    | lava stripe top | 1,000,000 | 1,941,050       | 1              | 5,500     | 9           | 250   |
| 11    | lava side       | 2,000,000 | 3,941,050       | 2              | 7,000     | 10          | 275   |
| 12    | yellow          | 4,000,000 | 7,941,050       | 4              | 8,500     | 11          | 300   |
| 13    | blue            | 5,000,000 | 12,941,050      | 5              | 10,000    | 12          | 300   |

From level 9, elixir can be used for the upgrade.

## Troops

Troops are the attacking units.

### Moving speed

Moving speed to tiles ratio is 0.125.

- Move speed 32 is equivalent to 32 \* 0.125 = 4 tiles per second. Miner, Goblin, Minion
- Move speed 24 is equivalent to 24 \* 0.125 = 3 tiles per second. Archer, Wall breaker, Hog rider, Valkyrie
- Move speed 20 is equivalent to 20 \* 0.125 = 2.5 tiles per second. Lava hound
- Move speed 16 is equivalent to 16 \* 0.125 = 2 tiles per second. Barbarian, Wizard, Healer, Dragon, PEKKA, Baby Dragon
- Move speed 14 is equivalent to 14 \* 0.125 = 1.75 tiles per second. Bowler
- Move speed 12 is equivalent to 12 \* 0.125 = 1.5 tiles per second. Giant, Electro Dragon, Golem, Witch, Ice Golem
- Move speed 10 is equivalent to 10 \* 0.125 = 1.25 tiles per second. Balloon

### Attacking speed

- Attack speed 0.7s, Witch
- Attack speed 1s, Barbarian, Archer, Wall Breaker, Baby Dragon, Minion, Hog rider
- Attack speed 1.25s, Dragon
- Attack speed 1.5s, Wizard
- Attack speed 1.7s, Miner
- Attack speed 1.8s, Pekka, Valkyrie
- Attack speed 2s, Giant, Lava hound
- Attack speed 2.2s, Bowler
- Attack speed 2.4s, Golem, Ice Golem
- Attack speed 3s, Balloon
- Attack speed 3.5s, Electro Dragon

### Path AI

Most of troops have no preferred target when attacking, i.e., Barbarian, Archer, Wizard, Dragon, PEKKA, Baby Dragon, Miner, Electro Dragon, Minion, Valkyrie, Witch.

When troops have no preferred target when attacking, they will simply attack the closest building. However, once they become aware of enemy Clan Castle troops, heroes, or skeleton trap skeletons (either by being attacked themselves or by being near another friendly troop under attack), they will leave their previously targeted building and instead engage the enemy troops. Once all of the nearby enemy troops are defeated, the Bowlers will proceed to attack the nearest structure.

If the path to the target is blocked by walls, they will attack the wall to try to get through and destroy the building. Miner can burrow under the walls.

For troops have preferred target, they will bypass all other types of enemy buildings and troops while any defenses remain on the battlefield. This is true even if they are under attack by enemy Clan Castle troops, heroes or Skeleton Trap skeletons. Note that like all troops that prioritize defenses, Giants do not consider the Clan Castle to be a defense regardless of whether or not it contains enemy troops, but do consider the defending Grand Warden and the level 12 Town Hall(if its Giga Tesla has been triggered) to be defensive buildings.

- Giant prioritizes defensive structures above all other targets.
- Goblin prioritizes resource buildings above all other targets.
- Wall breakers prioritizes walls above all other targets, and will completely ignore any building or enemy troop while even a single segment of Wall exists on the battlefield. Wall breakers look for the nearest building that is enclosed (fully or partially) by Walls and target any Wall that surrounds them. They only attack by locating the nearest protected (wall enclosed) building and destroying its protective Walls. Note that Wall Breakers will not target single Walls. There needs to be at least 3 connected Walls for a Wall Breaker to target it, and it must be protecting a building fully or partially.
- Balloon prioritizes defensive structures above all other targets.
- Hog Rider prioritizes defensive structures above all other targets.
- Golem prioritizes defensive structures above all other targets.
- Lava Hound prioritizes air defenses above all other target.
- Ice Golem prioritizes defensive structures above all other targets.

### Barbarian

1 housing space, attack speed 1s, move speed: 16, range: 0.4 tile

No preferred target, attacks closest enemy troop then structures.

Strength: cheap and fast to train, only 1 housing space, works great as a group along with giant, heroes to distract and take off alone target.

Weakness: low DpS, the group is vulnerable to splash damage like mortar, wizard tower and bomb tower.

| Level | DpS | DpA | HP  | Cost | Research Cost | Laboratory | Research Time |
| ----- | --- | --- | --- | ---- | ------------- | ---------- | ------------- |
| 1     | 8   | 8   | 45  | 25   | N/A           | N/A        | N/A           |
| 2     | 11  | 11  | 54  | 40   | 50,000        | 1          | 6 hours       |
| 3     | 14  | 14  | 65  | 60   | 150,000       | 3          | 1 day         |
| 4     | 18  | 18  | 78  | 100  | 500,000       | 5          | 2 days        |
| 5     | 23  | 23  | 95  | 150  | 1,500,000     | 6          | 3 days        |
| 6     | 26  | 26  | 110 | 200  | 4,500,000     | 7          | 4 days        |
| 7     | 30  | 30  | 145 | 250  | 6,000,000     | 8          | 5 days        |
| 8     | 34  | 34  | 205 | 300  | 8,000,000     | 9          | 8 days        |

### Archer

1 housing space, attack speed 1s, move speed: 24, range: 3.5 tiles

No preferred target, attacks closest enemy troop then structures.

It's good to lure and destroy CC troops.

Strength: only 1 housing space, longer attack range, can attack over wall.

Weakness: low HP, vulnerable to splash damage and spells.

| Level | DpS | DpA | HP  | Cost | Research Cost | Laboratory | Research Time |
| ----- | --- | --- | --- | ---- | ------------- | ---------- | ------------- |
| 1     | 7   | 7   | 20  | 50   | N/A           | N/A        | N/A           |
| 2     | 9   | 9   | 23  | 80   | 50,000        | 1          | 12 hours      |
| 3     | 12  | 12  | 28  | 120  | 250,000       | 3          | 1 day         |
| 4     | 16  | 16  | 33  | 200  | 750,000       | 5          | 2 days        |
| 5     | 20  | 20  | 40  | 300  | 2,250,000     | 6          | 3 days        |
| 6     | 22  | 22  | 44  | 400  | 6,000,000     | 7          | 4 days        |
| 7     | 25  | 25  | 48  | 500  | 7,500,000     | 8          | 5 days        |
| 8     | 28  | 28  | 52  | 600  | 9,000,000     | 9          | 8 days        |

### Giant

Unlocked at TH 3.

5 housing space, attack speed 2s, move speed: 12, range: 1 tile

Prefer defensive structures.

Strength: higher HP so better distracting troop to protect the group.

Weakness: Slow and low attack. Giant will ignore troops while any defensive structures in range so it's vulnerable to defensing heros.

Giant is terrible at tearing down walls, must go with wizards as a meat shield for them.

| Level | DpS | DpA | HP    | Cost  | Research Cost | Laboratory | Research Time |
| ----- | --- | --- | ----- | ----- | ------------- | ---------- | ------------- |
| 1     | 11  | 22  | 300   | 250   | N/A           | N/A        | N/A           |
| 2     | 14  | 28  | 360   | 750   | 100,000       | 2          | 12 hours      |
| 3     | 19  | 38  | 430   | 1,250 | 250,000       | 4          | 1d 12h        |
| 4     | 24  | 48  | 520   | 1,750 | 750,000       | 5          | 2 days        |
| 5     | 31  | 62  | 720   | 2,250 | 2,250,000     | 6          | 3 days        |
| 6     | 43  | 86  | 940   | 3,000 | 5,000,000     | 7          | 5 days        |
| 7     | 50  | 100 | 1,280 | 3,500 | 6,000,000     | 8          | 6 days        |
| 8     | 57  | 114 | 1,480 | 4,000 | 9,500,000     | 9          | 10 days       |
| 9     | 64  | 128 | 1,660 | 4,500 | 12,000,000    | 10         | 14 days       |

### Goblins

1 housing space, attack speed 1s, move speed: 32, range: 0.4 tile

Prefer resource building.

Goblins and wall breakers are great for farming, a.k.a., goblin knife. The drawback of goblin knife is that it drops trophies fast.

Goblin is not intended for war.

Strength: Fastest unit which deals twice damage to resource building and town hall.

Weakness: low HP, vulnerable to splash damage and spells.

### Wall breaker

Unlocked at TH 4.

It should be on your top priority list to develop.

2 housing space, attack speed 1s, move speed: 24, range: 1 tile

Prefer the closest wall with building behind it.

Always bring 5-6 wall breakers in the army to bring the troop to the core. Giant and golem take forever to break the war, if there is defensing system behind the war, wizard will die very soon.

Strength: Splash damage radius 2, deals 40X damage to wall.

Weakness: low HP, vulnerable to splash damage and spells

| Level | Damage | Walls | HP  | Cost  | Research Cost | Laboratory | Research Time |
| ----- | ------ | ----- | --- | ----- | ------------- | ---------- | ------------- |
| 1     | 12     | 480   | 20  | 600   | N/A           | N/A        | N/A           |
| 2     | 16     | 640   | 24  | 800   | 100,000       | 2          | 12 hours      |
| 3     | 24     | 960   | 29  | 1,000 | 250,000       | 4          | 1d 12h        |
| 4     | 32     | 1,280 | 35  | 1,200 | 750,000       | 5          | 2 days        |
| 5     | 46     | 1,840 | 53  | 1,400 | 2,000,000     | 6          | 3 days        |
| 6     | 60     | 2,400 | 72  | 1,600 | 6,000,000     | 8          | 5 days        |
| 7     | 78     | 3,120 | 82  | 1,800 | 9,000,000     | 9          | 8 days        |
| 8     | 100    | 4,000 | 92  | 2,000 | 12,000,000    | 10         | 14 days       |

### Balloon

Unlocked at TH 4.

Balloon is a must have for air attacking strategies. dragon-loon or lava-loon.

5 housing space, attack speed 3s, move speed: 10, range: 0.5 tile

Prefer defensive structures.

Strength: Splash damage radius 1.2, ground defensive cannot attack balloons, when it's destroyed, explode and cause damage.

Weakness: slowest unit. Vulnerable to air defences.

| Level | DpS | DpA | Damage upon death | HP  | Cost  | Research Cost | Laboratory | Research Time |
| ----- | --- | --- | ----------------- | --- | ----- | ------------- | ---------- | ------------- |
| 1     | 25  | 75  | 25                | 150 | 1,750 | N/A           | N/A        | N/A           |
| 2     | 32  | 96  | 32                | 180 | 2,250 | 150,000       | 2          | 12 hours      |
| 3     | 48  | 144 | 48                | 216 | 2,750 | 450,000       | 4          | 1d 12h        |
| 4     | 72  | 216 | 72                | 280 | 3,500 | 1,350,000     | 5          | 2 days        |
| 5     | 108 | 324 | 108               | 390 | 4,000 | 2,500,000     | 6          | 3 days        |
| 6     | 162 | 486 | 162               | 545 | 4,500 | 6,000,000     | 7          | 5 days        |
| 7     | 198 | 594 | 214               | 690 | 5,000 | 9,500,000     | 9          | 10 days       |
| 8     | 236 | 708 | 268               | 840 | 5,500 | 12,000,000    | 10         | 14 days       |

### Wizard

Unlocked at TH 5.

It should be on your top priority list to develop.

4 housing space, attack speed 1.5s, move speed: 16, range: 3 tiles

No preferred target.

Strength: Splash damage radius 0.3, over wall attack.

Weakness: Fairly low HP so must go with some tanks like golem, pekka.

| Level | DpS | DpA   | HP  | Cost  | Research Cost | Laboratory | Research Time |
| ----- | --- | ----- | --- | ----- | ------------- | ---------- | ------------- |
| 1     | 50  | 75    | 75  | 1,000 | N/A           | N/A        | N/A           |
| 2     | 70  | 105   | 90  | 1,400 | 150,000       | 3          | 12 hours      |
| 3     | 90  | 135   | 108 | 1,800 | 450,000       | 4          | 1d 12h        |
| 4     | 125 | 187.5 | 130 | 2,200 | 1,350,000     | 5          | 2 days        |
| 5     | 170 | 255   | 156 | 2,600 | 2,500,000     | 6          | 3 days        |
| 6     | 185 | 277.5 | 175 | 3,000 | 5,000,000     | 7          | 5 days        |
| 7     | 200 | 300   | 190 | 3,400 | 7,000,000     | 8          | 6 days        |
| 8     | 215 | 322.5 | 210 | 3,800 | 9,000,000     | 9          | 10 days       |
| 9     | 230 | 345   | 230 | 4,200 | 11,000,000    | 10         | 14 days       |

### Healer

Unlocked at TH 7.

Healers will heal Heroes at a reduced rate of only 55% of her normal healing rate.

Healer is often used for supporting Queen.

14 housing space, heal speed 0.7s, move speed: 16, range: 5 tiles

Prefer radius 2 ground troop.

Strength: healing

Weakness: no attack, vulnerable to any air defence

| Level | Healing per Second | Healing per Pulse | HP    | Cost   | Research Cost | Laboratory | Research Time |
| ----- | ------------------ | ----------------- | ----- | ------ | ------------- | ---------- | ------------- |
| 1     | 35                 | 24.5              | 500   | 5,000  | N/A           | N/A        | N/A           |
| 2     | 42                 | 29.4              | 600   | 6,000  | 750,000       | 5          | 2 days        |
| 3     | 55                 | 38.5              | 840   | 8,000  | 1,500,000     | 6          | 3 days        |
| 4     | 65                 | 45.5              | 1,200 | 10,000 | 3,000,000     | 7          | 5 days        |
| 5     | 80                 | 56                | 1,500 | 14,000 | 9,500,000     | 9          | 14 days       |

### Dragon

[Dragon](https://clashofclans.fandom.com/wiki/Dragon)

Unlocked at TH 7.

20 housing space, attack speed 1.25s, move speed: 16, range: 3 tiles

No preferred target.

Strength: Splash damage radius 0.3, immune to ground troop, great in clan castle and war.

Weakness: If the base layout is not condensed, dragon may get distracted and circle around.

| Level | DpS | DpA   | HP    | Cost   | Research Cost | Laboratory | Research Time |
| ----- | --- | ----- | ----- | ------ | ------------- | ---------- | ------------- |
| 1     | 140 | 175   | 1,900 | 18,000 | N/A           | N/A        | N/A           |
| 2     | 160 | 200   | 2,100 | 20,000 | 2,000,000     | 5          | 4d 12h        |
| 3     | 180 | 225   | 2,300 | 22,000 | 3,000,000     | 6          | 6 days        |
| 4     | 210 | 262.5 | 2,600 | 24,000 | 5,000,000     | 7          | 6d 12h        |
| 5     | 240 | 300   | 3,000 | 26,000 | 7,000,000     | 8          | 8 days        |
| 6     | 270 | 337.5 | 3,300 | 28,000 | 9,000,000     | 9          | 11d 12h       |
| 7     | 310 | 387.5 | 3,600 | 30,000 | 11,000,000    | 10         | 14 days       |

### PEKKA

Unlocked at TH 8.

25 housing space, attack speed 1.8s, move speed: 16, range: 0.8 tile

No preferred target. Sometimes in cell base, PEKKA will get distracted easily when choosing closest. You need to create funnels to make best use of it.

Strength: High HP and DpS, one high level pekka is like a king. It can absorb lots of damage, Level 6 rules in TH10.

Weakness: Attack speed is a bit low.

| Level | DpS | DpA   | HP    | Cost   | Research Cost | Laboratory | Research Time |
| ----- | --- | ----- | ----- | ------ | ------------- | ---------- | ------------- |
| 1     | 240 | 432   | 2,800 | 21,000 | N/A           | N/A        | N/A           |
| 2     | 270 | 486   | 3,100 | 24,000 | 3,000,000     | 6          | 4d 12h        |
| 3     | 310 | 558   | 3,500 | 27,000 | 5,000,000     | 6          | 5d 12h        |
| 4     | 360 | 648   | 4,000 | 30,000 | 6,000,000     | 7          | 6 days        |
| 5     | 410 | 738   | 4,700 | 33,000 | 7,500,000     | 8          | 7d 12h        |
| 6     | 470 | 846   | 5,200 | 35,000 | 8,500,000     | 8          | 8d 12h        |
| 7     | 540 | 972   | 5,700 | 37,000 | 10,000,000    | 9          | 11d 12h       |
| 8     | 610 | 1,098 | 6,300 | 39,000 | 12,000,000    | 10         | 14 days       |

### Baby dragon

Unlocked at TH 9.

[Baby dragon](https://clashofclans.fandom.com/wiki/Baby_Dragon/Home_Village) is like a mini dragon.

It's good for creating funnels, cleaning up, test air bombs, etc.,.

10 housing space, area splash 0.3 Tile, attack speed 1s, move speed: 16, range: 2.75 tiles.

Strength: Splash damage radius 0.3, immune to ground troop, attack faster than dragon but with less range. Damage x2 when enraged.

Weakness: HP is not as endurable as dragon so more vulnerable to splash damage in group, DpS is much lower than dragon.

| Level | DpS | DpA | HP    | Cost   | Research Cost | Laboratory | Research Time |
| ----- | --- | --- | ----- | ------ | ------------- | ---------- | ------------- |
| 1     | 75  | 75  | 1,200 | 10,000 | N/A           | N/A        | N/A           |
| 2     | 85  | 85  | 1,300 | 11,000 | 5,000,000     | 7          | 5d 12h        |
| 3     | 95  | 95  | 1,400 | 12,000 | 6,000,000     | 8          | 6d 12h        |
| 4     | 105 | 105 | 1,500 | 13,000 | 7,000,000     | 8          | 8 days        |
| 5     | 115 | 115 | 1,600 | 14,000 | 8,000,000     | 9          | 11d 12h       |
| 6     | 125 | 125 | 1,700 | 15,000 | 9,000,000     | 10         | 14 days       |

### Miner

Unlocked at TH 10.

[Miner](https://clashofclans.fandom.com/wiki/Miner) is often used with hero's support.

Miner takes 6 housing space, attack speed 1.7s, move speed: 32, range: 0.5 tile

Strength: Can burrow under walls.

Weakness: Vulnerable to splash damage building like bomb tower, also vulnerable to giant bomb. No preferred targets so miner only goes after the closest building.

For TH12 opponents with maximized Giga tesla, miner strategy is a bit risky sometimes it deals with lots of destruction but gets only one star.

Miners' good companions are healers or meat shields around them. witches are good companions as well as skeletons distract queen or inferno towers.

| Level | DpS | DpA   | HP  | Cost  | Research Cost | Laboratory | Research Time |
| ----- | --- | ----- | --- | ----- | ------------- | ---------- | ------------- |
| 1     | 80  | 136   | 550 | 4,200 | N/A           | N/A        | N/A           |
| 2     | 88  | 149.6 | 610 | 4,800 | 6,000,000     | 8          | 5d 12h        |
| 3     | 96  | 163.2 | 670 | 5,200 | 7,000,000     | 8          | 6d 12h        |
| 4     | 104 | 176.8 | 730 | 5,600 | 8,000,000     | 9          | 8d            |
| 5     | 112 | 190.4 | 800 | 6,000 | 9,500,000     | 9          | 11d 12h       |
| 6     | 120 | 204   | 870 | 6,400 | 11,000,000    | 10         | 14d           |

### Electro Dragon

Unlocked at TH 11.

30 housing space, attack speed 3.5s, move speed: 12, range: 3 tiles

Strength: High HP and DpS

Weakness: Slow attack speed.

| Level | DpS | DpA   | Damage when destroyed | HP    | Cost   | Research Cost | Laboratory | Research Time |
| ----- | --- | ----- | --------------------- | ----- | ------ | ------------- | ---------- | ------------- |
| 1     | 240 | 840   | 50 x 6                | 3,200 | 28,000 | N/A           | N/A        | N/A           |
| 2     | 270 | 945   | 55 x 6                | 3,700 | 32,000 | 9,000,000     | 9          | 10 days       |
| 3     | 300 | 1,050 | 60 x 6                | 4,200 | 36,000 | 11,000,000    | 10         | 14 days       |

### Minion

Unlocked at TH 7.

2 housing space, attack speed 1s, move speed: 32, range: 2.75 tile

[Minion](https://clashofclans.fandom.com/wiki/Minion) is a part of a very efficient farming attack strategy for town hall 7s, 8s, 9s, and even 10s, called Loonion.

| Level | DpS | HP  | Cost (DE) | Research Cost (DE) | Laboratory | Research Time |
| ----- | --- | --- | --------- | ------------------ | ---------- | ------------- |
| 1     | 35  | 55  | 6         | N/A                | N/A        | N/A           |
| 2     | 38  | 60  | 7         | 10,000             | 5          | 3d 12h        |
| 3     | 42  | 66  | 8         | 20,000             | 6          | 4 days        |
| 4     | 46  | 72  | 9         | 30,000             | 6          | 4d 12h        |
| 5     | 50  | 78  | 10        | 40,000             | 7          | 6d 12h        |
| 6     | 54  | 84  | 11        | 100,000            | 8          | 8 days        |
| 7     | 58  | 90  | 12        | 140,000            | 9          | 11d 12h       |
| 8     | 62  | 96  | 13        | 180,000            | 10         | 14 days       |

### Hog rider

Unlocked at TH 7 and dark barrack level 2.

5 housing space, attack speed 1s, move speed: 24, range: 0.6 tile

Prefer defensive structures.

At TH8, level 4 hog rider is a very strong attacker in war.

Strength: Jump over walls.

Weakness: Vulnerable to splash damage, giant bomb, heros. Relatively expensive, it's not for looting. 20 level 4 hogs will cost 840 dark elixir already.

| Level | DpS | HP  | Cost (DE) | Research Cost (DE) | Laboratory | Research Time |
| ----- | --- | --- | --------- | ------------------ | ---------- | ------------- |
| 1     | 60  | 270 | 30        | N/A                | N/A        | N/A           |
| 2     | 70  | 312 | 34        | 20,000             | 5          | 3d 12h        |
| 3     | 80  | 360 | 38        | 30,000             | 6          | 4 days        |
| 4     | 92  | 415 | 42        | 40,000             | 6          | 4d 12h        |
| 5     | 105 | 480 | 48        | 50,000             | 7          | 6 days        |
| 6     | 118 | 590 | 60        | 100,000            | 8          | 7d 12h        |
| 7     | 135 | 700 | 80        | 150,000            | 9          | 11d 12h       |
| 8     | 148 | 810 | 100       | 200,000            | 10         | 14 days       |
| 9     | 161 | 920 | 120       | 240,000            | 10         | 14 days       |

### Valkyrie

Unlocked at TH 8.

8 housing space, attack speed 1.8s, move speed: 24, range: 0.5 tile

A group of valkyries can be a killer squad to destroy one condensed area.

Moving fast makes valkyrie very hard to control. Don't deploy valkyrie too soon. Only if the walls are opened enough, the area close to the core is a great battle field for valkyries. For bases with lots of compartments, use golem, wizards and wall breakers for the first wave to open walls as deep as can to get close to the core. Then deploy valkyries for the second wave so valkyries will not move out the inside base. If deployed too soon, they would finish the compartment quickly and move on, in most of the cases they will go out the core and circle around the outside base. Also if deployed too soon, at the beginning of the battle, if the opponent has high level walls, valkyries swarm together which makes them vulnerable to splash damage, giant bomb.

| Level | DpS | DpA   | HP    | Cost (DE) | Research Cost (DE) | Laboratory | Research Time |
| ----- | --- | ----- | ----- | --------- | ------------------ | ---------- | ------------- |
| 1     | 94  | 169.2 | 750   | 50        | N/A                | N/A        | N/A           |
| 2     | 106 | 190.8 | 800   | 65        | 50,000             | 6          | 4 days        |
| 3     | 119 | 214.2 | 850   | 80        | 60,000             | 7          | 5d 12h        |
| 4     | 133 | 239.4 | 900   | 100       | 70,000             | 7          | 6d 12h        |
| 5     | 148 | 266.4 | 1,100 | 130       | 110,000            | 8          | 8 days        |
| 6     | 163 | 293.4 | 1,200 | 160       | 150,000            | 9          | 11d 12h       |
| 7     | 178 | 320.4 | 1,300 | 190       | 190,000            | 10         | 14 days       |

Strength: Relatively high HP and DpS, very high move speed.

Weakness:

- Hard to control due to high move speed and no preferred target.
- Relatively expensive, it's not for looting. 10 valkyries will cost 500 dark elixir already.

### Golem

Unlocked at TH 8 and dark barrack level 4.

30 housing space, attack speed 2.4s, move speed: 12, range: 1 tile

Cause splash damage in 1.2 title when it dies.

For TH8 war strategies, one more golem should be always in the army.

Strength: High HP to distract defensing structures so to protect wizards, valkyries, or others.

Weakness: Very low DpS and very slow speed.

| Level | DpS | DpA   | Damage Upon Death | HP    | Cost (DE) | Research Cost (DE) | Laboratory | Research Time |
| ----- | --- | ----- | ----------------- | ----- | --------- | ------------------ | ---------- | ------------- |
| 1     | 38  | 91.2  | 350               | 5,100 | 200       | N/A                | N/A        | N/A           |
| 2     | 42  | 100.8 | 400               | 5,400 | 250       | 60,000             | 6          | 4 days        |
| 3     | 46  | 110.4 | 450               | 5,700 | 300       | 70,000             | 7          | 5d 12h        |
| 4     | 50  | 120   | 500               | 6,000 | 350       | 80,000             | 7          | 6d 12h        |
| 5     | 54  | 129.6 | 550               | 6,300 | 425       | 90,000             | 8          | 8 days        |
| 6     | 58  | 139.2 | 600               | 6,600 | 500       | 150,000            | 9          | 9d 12h        |
| 7     | 62  | 148.8 | 650               | 6,900 | 600       | 200,000            | 9          | 11d 12h       |
| 8     | 66  | 158.4 | 700               | 7,200 | 700       | 200,000            | 10         | 14 days       |
| 9     | 70  | 168   | 750               | 7,500 | 800       | 220,000            | 11         | 14 days       |

### Witch

Witch is unlocked at TH 9.

Witches will spawn skeletons to help the Giants.

12 housing space, attack speed 0.7s, summon cool down 7s, move speed: 12, range: 4 tiles

No preferred target.

Strength:

Weakness:

| Level | DpS | DpA | Maximum skeleton | HP  | Cost (DE) | Research Cost (DE) | Laboratory | Research Time |
| ----- | --- | --- | ---------------- | --- | --------- | ------------------ | ---------- | ------------- |
| 1     | 100 | 70  | 6                | 300 | 125       | N/A                | N/A        | N/A           |
| 2     | 110 | 77  | 8                | 320 | 150       | 75,000             | 7          | 6 days        |
| 3     | 140 | 98  | 10               | 400 | 175       | 120,000            | 8          | 9 days        |
| 4     | 160 | 112 | 12               | 440 | 225       | 160,000            | 9          | 12 days       |
| 5     | 180 | 126 | 14               | 480 | 275       | 200,000            | 10         | 14 days       |

### Lava Hound

Unlocked at TH 9 and dark barrack level 6.

30 housing space, attack speed 2s, move speed: 20, range: 1 tile

Lava hound is the air version golem. it's the meat shield for other air troops.

| Level | DpS | DpA | Damage upon death | Lava pups | HP    | Cost (DE) | Research Cost (DE) | Laboratory | Research Time |
| ----- | --- | --- | ----------------- | --------- | ----- | --------- | ------------------ | ---------- | ------------- |
| 1     | 10  | 20  | 100               | 8         | 6,100 | 390       | N/A                | N/A        | N/A           |
| 2     | 12  | 24  | 150               | 10        | 6,500 | 450       | 60,000             | 7          | 6d 12h        |
| 3     | 14  | 28  | 200               | 12        | 6,800 | 510       | 70,000             | 8          | 8 days        |
| 4     | 16  | 32  | 250               | 14        | 7,200 | 570       | 150,000            | 9          | 11d 12h       |
| 5     | 18  | 36  | 300               | 16        | 7,600 | 630       | 200,000            | 10         | 14 days       |

### Bowler

Bowler is unlocked at TH 10.

Bowler takes 6 housing space, attack speed 2.2s, move speed: 14, range: 3 tiles and the boulder causes splash damages in 3 tiles.

Bowler is kind of like a wizard with a bit more HP, longer splash damage and less DPS.

Bowlers have no preferred target when attacking; they will simply attack the closest building. However, once they become aware of enemy Clan Castle troops, heroes, or skeleton trap skeletons (either by being attacked themselves or by being near another friendly troop under attack), they will leave their previously targeted building and instead engage the enemy troops. Once all of the nearby enemy troops are defeated, the bowlers will proceed to attack the nearest structure. So in the group, there must be a meat shield or hero, otherwise bowlers will be separated so get destroyed easily. Bowlers are strong only when they stay together.

Bowlers have low HP. If not led by wall wrecker and heros, try not to attack from corner as they could get distracted away by the outside trash buildings and get easily picked off.

A meat shield like golem or a couple of giants are good companions of bowler. Or, 4 healers can keep the bowlers live for a while.

For spells, jump spell can take the bowlers to the core. Freeze spell is a must-have when they in range of inferno tower so to take it down. Rage spell is great while bowlers are going along with wall wreaker and heroes.

Due to low HP, bowler is very fragile to eagle artillery, two shots can wipe off a group of bowlers. Also make sure inferno tower can be destroyed on bowler's path. Try to use the wall wreaker or heroes to take off the eagle artillery first. Also the CC air troop is extremely annoying, for example, two dragons or hounds will kill the bowlers around.

Funneling for bowler is important as its goal is to keep the bowlers stay together as possible.

[Bowler](https://clashofclans.fandom.com/wiki/bowler) in group can destroy lots of defense buildings. If the funnel is done right, bowler with support from heros can destroy eagle artillery easily.

Strength: The stone can cause massive damage on condensed defense system as it can hit multiple targets in a line. Housing space is fair low.

Weakness: Low HP.

| Level | DpS | DpA | HP  | Cost (DE) | Research Cost (DE) | Laboratory | Research Time |
| ----- | --- | --- | --- | --------- | ------------------ | ---------- | ------------- |
| 1     | 60  | 132 | 290 | 70        | N/A                | N/A        | N/A           |
| 2     | 70  | 154 | 310 | 95        | 120,000            | 8          | 8d 12h        |
| 3     | 80  | 176 | 350 | 115       | 160,000            | 9          | 12 days       |
| 4     | 90  | 198 | 390 | 140       | 200,000            | 10         | 14 days       |

### Ice Golem

Unlocked at TH 11 dark barrack level 8.

15 housing space, attack speed 2.4s, move speed: 12, range: 1 tile

Cause freeze in 7.5 tiles when it dies.

Strength: High HP to distract defensing system so to protect wizards, valkyries, or others.

Weakness: Very low DpS. Not ideal for being sent in the siege machine.

| Level | DpS | DpA  | Damage Upon Death | defense | HP    | Cost (DE) | Research Cost (DE) | Laboratory | Research Time |
| ----- | --- | ---- | ----------------- | ------- | ----- | --------- | ------------------ | ---------- | ------------- |
| 1     | 24  | 57.6 | 4.0s              | 2.5s    | 2,600 | 220       | N/A                | N/A        | N/A           |
| 2     | 28  | 67.2 | 4.75s             | 2.75s   | 2,800 | 240       | 80,000             | 9          | 8 days        |
| 3     | 32  | 76.8 | 5.5s              | 3.0s    | 3,000 | 260       | 120,000            | 9          | 10 days       |
| 4     | 36  | 86.4 | 6.25s             | 3.25s   | 3,200 | 280       | 160,000            | 10         | 12 days       |
| 5     | 40  | 96   | 7.0s              | 3.5s    | 3,400 | 300       | 200,000            | 10         | 14 days       |

## Spells

### Lighting

As it takes 2 housing space, it's only useful in earlier town hall levels, for examples, in TH 8 air strategy, players use 2 level 5 lighting to take down one air defence. As the HP of building increases a lot in TH11, 12, it usually takes 3 or more spells to take down one building.

Radius 2 tiles, Random Radius 3.5 tiles, Number of Strikes 6, Time Between Strikes 0.4, Housing Space 2, Brewing Time 6 minutes, Spell Factory Level Required 1

| Level | Total Damage | Damage per Strike | Cost   | Research Cost | Research Time | Laboratory |
| ----- | ------------ | ----------------- | ------ | ------------- | ------------- | ---------- |
| 1     | 300          | 50                | 15,000 | N/A           | N/A           | N/A        |
| 2     | 360          | 60                | 16,500 | 200,000       | 1d            | 1          |
| 3     | 420          | 70                | 18,000 | 500,000       | 2d            | 2          |
| 4     | 480          | 80                | 20,000 | 1,000,000     | 3d            | 3          |
| 5     | 540          | 90                | 22,000 | 2,000,000     | 4d            | 6          |
| 6     | 600          | 100               | 24,000 | 6,000,000     | 6d            | 7          |
| 7     | 660          | 110               | 26,000 | 8,000,000     | 10d           | 8          |

### Healing

It's vital for keeping hog riders, miners live longer.

One spell lasts 12 seconds.

Radius 5, Number of Pulses 40, Time Between Pulses 0.3s, Housing Space 2, Brewing Time 6 minutes, Spell Factory Level Required 2.

| Level | Total healing | Heal per pulse | Cost   | Research Cost | Research Time | Laboratory |
| ----- | ------------- | -------------- | ------ | ------------- | ------------- | ---------- |
| 1     | 600           | 15             | 15,000 | N/A           | N/A           | N/A        |
| 2     | 800           | 20             | 16,500 | 300,000       | 1d            | 2          |
| 3     | 1,000         | 25             | 18,000 | 600,000       | 2d            | 4          |
| 4     | 1,200         | 30             | 19,000 | 1,200,000     | 3d            | 5          |
| 5     | 1,400         | 35             | 21,000 | 2,000,000     | 4d            | 6          |
| 6     | 1,600         | 40             | 23,000 | 4,000,000     | 6d            | 7          |
| 7     | 1,800         | 45             | 25,000 | 6,000,000     | 10d           | 8          |

### Rage

It's a must-have for boosting attacking.

One rage spell lasts 18 seconds.

Radius 5, Number of Pulses 60, Time Between Pulses 0.3s, Boost Time 1s, Housing Space 2, Brewing Time 6 minutes, Spell Factory Level Required 3.

The most effective placement of the Rage Spell is to position it approximately 3-4 tiles toward where your troops' next target will be; this will give your Troops the maximum amount of time inside the Rage Spell's area of effect as they destroy their current target and move to the next one. If you drop it directly under their feet, they will quickly move out of its range once they have finished with their current target.

The P.E.K.K.A and Balloon are especially well-suited for the Rage Spell, as they normally move and attack quite slowly.

The Barbarian King's Iron Fist ability does not stack with the Rage Spell, nor do the nearby enraged Barbarians that are affected by the ability.

| Level | Damage Increase | Speed Increase | Cost   | Research Cost | Research Time | Laboratory |
| ----- | --------------- | -------------- | ------ | ------------- | ------------- | ---------- |
| 1     | 130%            | 20             | 20,000 | N/A           | N/A           | N/A        |
| 2     | 140%            | 22             | 22,000 | 450,000       | 2d            | 3          |
| 3     | 150%            | 24             | 24,000 | 900,000       | 3d            | 4          |
| 4     | 160%            | 26             | 26,000 | 1,800,000     | 4d            | 5          |
| 5     | 170%            | 28             | 28,000 | 3,000,000     | 5d            | 6          |

### Jump

In higher town halls, as the wall level gets much higher, it's harder to break through the wall. Jump spell can brings troops to the core. It's often used with bowlers, witches and PEKKA smash strategy.

It works great on the wall intersections.

### Freeze

Radius 3.5 tiles, housing space 1

| Level | Freeze Time | Cost | Research Cost | Research Time | Laboratory |
| ----- | ------------| ---- | ------------- | ------------- | ---------- |
| 1     |2.5 seconds  |6,000 |N/A            |N/A            | 7          |
| 2     |3.0 seconds  |7,000 |3,000,000      |3d             | 8          |
| 3     |3.5 seconds  |8,000 |4,000,000      |4d 12h         | 8          |
| 4     |4.0 seconds  |9,000 |5,000,000      |6d 12h         | 8          |
| 5     |4.5 seconds  |10,000|7,000,000      |8d             | 8          |
| 6     |5.0 seconds  |11,000|9,500,000      |9d             | 9          |
| 7     |5.5 seconds  |12,000|11,000,000     |11d 12h        | 10         |

### Clone

Radius 3.5 tiles, housing space 3

### Poison

Radius 4 tiles, housing space 1

It's a must-have for taking CC troops.

| Level | Maximum Damage per Second |Speed Decrease|Attack Rate Decrease | Cost |Research Cost | Research Time | Laboratory |
| ----- | ------------------------- | ------------ | ------------------- | ---- | ------------ | ------------- | ---------- |
| 1     |90                         |26%           |35%                  |95    |N/A           |N/A            | N/A        |
| 2     |115                        |30%           |40%                  |110   |25,000        |2d 12h         | 6          |
| 3     |145                        |34%           |45%                  |125   |50,000        |4d             | 7          |
| 4     |180                        |38%           |50%                  |140   |75,000        |6d 12h         | 8          |
| 5     |220                        |40%           |55%                  |155   |150,000       |9d 12h         | 9          |

### Earthquake

### Haste

Haste does not increase damage but it increases more speed. Also it's housing capacity is only 1 as the rage is 2. It only lasts 10 seconds. It goes well with air troops.

### Skeleton

Skeleton spells could be very effective against single target inferno towers and other single target defence buildings. The skeletons will be able to distract the defences while other troops finish it off. However, multiple target inferno towers or splash damage dealing buildings like wizard tower wipes out the skeletons very quickly.

Skeleton works great in a open battle base. And it's a great add-on for hot rider as they will clear off the trash building quickly. For miners in a open fields, they can following with miners to speed up.

Skeleton spells can be used to destroy unguarded defenses with dead zones like the mortar or eagle artillery.

Each skeleton HP 30, move speed 24, DpS 25

- Level 2, 18 skeleton, TH10, DpS 450
- Level 3, 22 skeleton, TH10, DpS 550
- Level 4, 26 skeleton, TH11, DpS 650
- Level 5, 30 skeleton, TH12, DpS 750

### Bat

Bat prioritize defensive structures above all other targets, and will bypass all other types of enemy buildings and troops while any defenses remain on the battlefield.

Bats can distract and destroy most single-target exposed defenses relatively easily.

A good strategy for bat spell would be to place a lot of them down near the center of the base, along with a rage spell and a freeze spell aiming to destroy single target inferno Towers, air Defenses, and the eagle artillery at the beginning of an attack.

The issue with bat is that they can easily be stopped by wizard towers, air bombs, and multi-target inferno towers, air mode x-bows, cannons and archer towers. To avoid that, choose a starting point so to make the most use of it.

Another strategy is use bar at the end of attack to clean up.

Each bat HP 20, move speed 56, attack speed 2s, DpS 30

- Level 2, 9 bat, TH10, DpS 270
- Level 3, 11 bat, TH10, DpS 330
- Level 4, 16 bat, TH11, DpS 480
- Level 5, 21 bat, TH12, DpS 630

## Heroes

### Archer Queen

[Queen](https://clashofclans.fandom.com/wiki/Archer_Queen)

### Barbarian King

### Grand Warden

## Building

### Barracks

There are two kind of troops: elixir troop and dark elixir troop. So two kind of barracks, Barracks x 4 and Dark barracks x 3.

Barrack level unlocks new type of troops. Also the number and level of barracks determine how quick troops can be trained.

No need to protect barracks.

### Camp

The camp level determines how much housing capacity for the troops. Each army camp has housing space 50 at TH8, 55 at TH9, 60 at TH10, 65 at TH11, 70 at TH12. 4 Camps in total, so TH08 200, TH09 220, TH10 240, TH11 260, TH12 280 in total.

Camp should be always upgraded as early as possible so to strengthen the attack.

Each clan castle adds extra housing capacity. TH8 20, TH9 25, TH10 30, TH11 35, TH12 40.

No need to protect army camp.

### Laboratory

Laboratory enables research on higher level of troops. Laboratory should be always upgraded as early as possible so to get stronger troops.

| Level | Hitpoints | Build Cost Elixir | Build Time | Experience Gained XP | Town Hall Level Required |
| ----- | --------- | ----------------- | ---------- | -------------------- | ------------------------ |
| 1     | 500       | 25,000            | 30m        | 42                   | 3                        |
| 2     | 550       | 50,000            | 3h         | 103                  | 4                        |
| 3     | 600       | 90,000            | 8h         | 169                  | 5                        |
| 4     | 650       | 270,000           | 16h        | 240                  | 6                        |
| 5     | 700       | 500,000           | 1d 8h      | 339                  | 7                        |
| 6     | 750       | 1,000,000         | 2d 16h     | 480                  | 8                        |
| 7     | 830       | 2,500,000         | 3d 8h      | 536                  | 9                        |
| 8     | 950       | 4,000,000         | 4d         | 587                  | 10                       |
| 9     | 1,070     | 6,000,000         | 6d         | 720                  | 11                       |
| 10    | 1,140     | 8,000,000         | 8d         | 831                  | 12                       |

<https://clashofclans.fandom.com/wiki/Laboratory>

<https://cocland.com/guides/laboratory>

![Laboratory](https://cocland.com/wp-content/uploads/2015/04/elixir-upgrades.jpg)

## Defensing Structures

### Cannon

### Mortar

Mortar's range is 4 to 11. Mortar cannot target troops within 4 tiles.

## Strategies

Study your opponent's base. Take out opponent's defence so to launch more effective attack.

Maximize the troops to have a balanced air and ground attack system.

If the base air defence level is low, use air troops.

If the base ground defence level is strong, use tank like golem to distract along with hog rider, bowler, miner.

[Strategy_Guides](https://clashofclans.fandom.com/wiki/Strategy_Guides)

### CC lure

In war, enemies have clan castle troop. For example, lower level TH has dragon, witch, valkyrie in common. Higher level has ice golems to again queen. If they are not dealt ahead of time, they cause serious trouble to the attacking troops.

Check the client castle range to see if any troop can reach the CC range, also check for holes nearby. Send one archer or fast troop like hog rider can reach the clan castle range so the CC troop will come out, send another archer to attack the corner so the CC troop will go after the archer. When they are close, if slow CC troop like dragon, circle around with archers and use one poison on top of them. As dragons deal splash damage, circling around the dragon is the key. Don't spent to much time using archers, using 6 wizard to circle the dragon inside the poisoned area. If any one wizard is destroyed, drop an new one. Double poison can help to damage the dragon. If fast troop like valkyrie, keep deploying one archer in the center of poison area so to keep the valkyrie inside the poison or use Pekka and wizard to destroy them. Witch cannot spawn skeleton in the poisoned area as skeletons has low HP.

Poison spell is a must-have to take down the cc troops.

Sometimes, the CC is right at the core of the base so it's hard to lure it out.

### Funneling

Many troops have no preferred target so the actions are controlled by AI. Once a troop is dispatched, they select and attack the closest building and won't change target. Once that building is destroyed, they will repeat the building selection and attacking while they are alive. You cannot control where it goes explicitly but you can control the path by sending other troops to coordinate which clean up the distracting buildings to create the path to the target like the eagle artillery and town halls. Otherwise, the troop will select closest building on their own according to their position, usually the closest building or enemy troops engaged, so they will get distracted easily.

For example, without proper funneling, when bowlers and pekkas are the close to eagle artillery and town hall, they will get distracted if other trash building in a moat is not cleared up. Then they will get destroyed by the x-bows and inferno or eagle artillery around.

In a nutshell, funneling is to clear the outside distracting building of the target like town hall and eagle artillery so the main attacking can move towards the target and destroy it.

#### Funneling troop

The path to the target needs to be planned ahead of time.

Wall wrecker

, wall breaker and jump spell can create the path to the targeted building. For example, wall breaker creates a path after breaking the first layer of the base. Bowlers, air troops can create funnels as they can destroy condensed buildings massively.

Funneling depends on the attacking strategy and opponent's base. Timing is very important.

Creating the funnel depends on the attacking strategy. For example,

- clear the outside buildings so to keep bowlers, pekkas inside the base
- clear one corner with the eagle artillery
- use wall breaker, stone slammer or jump spell so the troops can get close to the core
- Sometimes, heros will launch suicide attack to destroy defensing structures to create the funnels for attacking troops.

Baby dragons and wizards are often used to clear the outside trash buildings. Wizards is a bit expensive as 1 wizard takes up 4 housing capacity but one baby dragon only takes 10 housing capacity which usually can take a few building without air defence around.

Heros with queen charge can clear two outsides of base or with wall breaker they can clear one corner of the base to create the L shape so the attacking troops will be more effective to destroy the buildings.

#### Anti funneling

Anti wall wrecker - cannons and x-bows

Build the walls properly to against the queen and bowlers. Queen's attacking range is 5 and bowler's is 3. Surround your town hall and eagle with a layer of walls.

More compartments.

One of hidden tesla's function is to lead the troop out.

### TH 8 Strategies

Maximize gold mine, elixir collector and dark elixir collector.

- TH8 can have 6 of each and maximum level 12. Each level 12 generates 4200/h, 100.8K/day. Roughly 600K gold and elixir a day.
- TH8 can have 2 Dark elixir collector and maximum level 3. Each level 3 generates 45/h, 1080/day. Roughly 2K a day.

Maximize the camps' house capacity. TH 8 has 200 house capacity and 25 CC house capacity.

Maximize the troops

- Barbarian lvl 5, HP 95, DpS 23, attack 1s
- Archer lvl 5, HP 40, DpS 20
- Giant lvl 5, HP 720, DpS 31, DpA 52, attack 2s
- Goblin lvl 5, HP 56, DpS 32, attack 1s
- Wall breakers lvl 5, HP 53, DpS 1840 on wall.
- Balloon lvl 5, HP 390, DpS 108, DpA 324, attack 3s
- Wizard lvl 5, HP 156, DpS 170, DpA 255, attack 1.5s
- Healer lvl 3, HP 840, healing per second 55
- Dragon lvl 3, HP 2300, DpS 180, DpA 225, attack 1.25s
- PEKKA lvl 3, HP 3500, DpS 310, DpA 558, attack 1.8s
- Minion lvl 4, HP 72, DpS 46, attack 1s
- Hog rider lvl 4, HP 415, DpS 92, attack 1s
- Valkyrie lvl 2, HP 800, DpS 106, DpA 190.8, attack 1.8s
- Golem lvl 2, HP 5400, DpS 42, DpA 100.8, attack 2.4s
- Barbarian King 10, Attack speed 1.2s, HP 2153, DpA 171.6, DpS 143, summon 8 barbarians, ability 10s, DpS in ability 244

Maximize the spells

- Lighting lvl 5
- Healing lvl 5
- Rage lvl 5
- Poison lvl 2
- Earthquake lvl 2

Maximize the defence

- Cannon lvl 10 x 5, can gear up, HP 960, DpS 64, DpA 51.2, attack 0.8s, Range 9
- Archer tower lvl 10 x 5, HP 810, DpS 63, DpA 31.5, attack 0.5s, Range 10
- Mortar lvl 6 x 4, can gear up if builder hall level 8, HP 650, DpS 11, DpA 55, attack 5s, Range 4-11 tiles
- Air defense lvl 6 x 3, HP 1050, DpS 230, Range 10
- Wizard tower lvl 6 x 3, HP 960, DpS 32, DpA 41.6, attack 1.3s, Range 7 tiles
- Air sweeper lvl 4 x 1, HP 900, push 2.8 tiles
- Hidden Tesla lvl 6, HP 770, DpS 75, DpA 45, attack 0.6s, Range 7 tiles
- Bomb tower lvl 2, HP 700, DpS 28, DpA 30.8, attack 1.1s, Range 6 tiles
- Bombs lvl 5 x 6, damage 42 in 3 tiles
- Spring traps lvl 3, capacity 17
- Air bomb lvl 3 x 2, damage 120 in 3 tiles
- Giant bomb lvl 3, damage 225 in 3.5 tiles
- Seeking air mine lvl 1 x 1, damage 1500
- Skeleton trap lvl 2

#### Facts

Most of the TH8 opponents wall level is level 7 purple crystal HP 2500 to level 8 skull stone HP 3000.

Wall breaker is crucial to create the path to the core of base. Wall breakers lvl 5 HP 53, move speed 24, can cause 1,840 damage on the walls. 1 wall breaker can one-shot take down gold (lvl 5) and lower level walls. 2 wall breakers can take down pink, purple crystal walls and skull walls (lvl 6,7,8). Don't deploy it close to cannon, archer tower if there is no meat shield, otherwise it will be destroyed instantly as cannon and archer fires very fast. For mortars which attack every 5 seconds, a lvl 5 wall breaker can take one lvl 5 mortar splash damage, but lvl 5 wall breaker will be instantly killed by lvl 6 motors. For wizard tower, lvl 5 wall breaker can withstand 1 attack damage but the window is 2 seconds.

Wizard lvl 5 housing space 4, attack speed 1.5s, move speed: 16, range: 3 tiles, HP 156, damage per attack 255, DpS 170 (255/1.5). Wizard can be main attackers protected by meat shields or it acts a very import role to clear the trash building which may distract the troops.

Golem housing space 30, attack speed 2.4s, move speed: 12, range: 1 tile, lvl 1 HP 5100, damage per attack 91.2, damage upon death 350, DpS 38. lvl 2 HP 5400, damage per attack 100.8, damage upon death 400, DpS 42. As its HP is extremely high, one or two can be a great meat shield for other high DpS troops like wizard.

PEKKA lvl 3 housing space 25, attack speed 1.8s, move speed: 16, range: 0.8 tile, HP 3500, damage per attack 558, DpS 310.

Valkyrie lvl 2 housing space 8, attack speed 1.8s, move speed: 24, range: 0.5 tile, HP 800, damage per attack 190.8, DpS 106.

Hog rider lvl 4 housing space 5, attack speed 1s, move speed: 24, range: 0.6 tile, HP 415, damage per attack 92, DpS 92.

Cannon HP 880 lvl 9 to 960 lvl 10, attack speed 0.8s, DpA 44.8, DpS 56 lvl 9; DpA 51.2 DpS 64 lvl 10, range 9.

Archer tower HP 750 lvl 9 to 810 lvl 10, attack speed 0.5s, DpS 56 lvl 9, 63 lvl 10, range 10.

Wizard tower HP 840 lvl 5 to 960 lvl 6, attack speed 1.3s, DpS 24 lvl 5, 32 lvl 6, range 7.

Bomb tower HP 650 lvl 1 to 700 lvl 2, attack speed 1.1s, DpS 24 lvl 1, 28 lvl 2, range 6.

Mortar HP 600 lvl 5 to 650 lvl 6, attack speed 5s, DpA 45, DpS 9 lvl 5, DpA 55, DpS 11 lvl 6, range 4 to 11.

Hidden tesla HP 730 lvl 5 to 770 lvl 6, attack speed 0.6s, DpS 75 lvl 5, 87 lvl 6, range 7.

Lighting spell lvl 4 480 damage, lvl 5 540 damage.

Healing spell 12 seconds, 40 pulses 0.3s each, each pulse lvl 4 30 (1200 total) to lvl 5 35 (1400 total).

Rage spell 18 seconds, 40 pulses 0.3s each, damage increase 1vl 4 160% to lvl 5 170%, speed increase 26 lvl 4 to 28 lvl 5.

Poison spell causes troops in 4 tiles 90 damage per second lvl 1, 115 lvl 2, speed decrease 26% to 30%, attack rate decrease 35% to 40%.

#### TH8 War Strategy

The goal is to 3 star.

Depending on your opponent's base, you can choose using air troop or ground troop. If your target's air defense is weak, prefer air attack. Otherwise, prefer ground attack.

Always try to lure the CC troop out first. Lure the CC troops to corner, and drop poison spell and deploy 6 to 8 archers circle around to kill CC troops. Circle will make the CC troop stay in the poison longer. But if valkyrie is the CC troop, it's hard to circle around as they move and attack fast, drop a high HP troop like Pekka or Giant in the circle to absorb the damage.

The following strategy may vary:

- Air attack

  - DragLoon: 9 Dragons + 4 Balloons , 2 Lightning Spell, 1 Rage Spell + 5 Balloons and Earthquake Spell in CC.

  DragLoon is to look at the air sweeper to decide which way to attack. You don't want to attack the area which is covered by the air sweeper which slows down the air troop. Use 2 lightning spells to take out 1 air defense which is closest to the core. Depends on the base layout, the balloons can try to get the rest 2 air defenses or try to funnel the outside buildings so the dragons stay inside. If air defence is reachable, deploy dragons to create path to the rest 2 air defenses and clear the wizard towers as they will damage the balloons. Before they can be hit by the air defence, be aware of the timing to deploy the balloons. Rage or haze the balloons to destroy the rest 2 air defences. Send in the king to clean up. Check the corner builder huts as the dragons move very slow.

- Ground attack

  - GoWiPe
  - GoWiVa
  - GoHo
  - GoVaHo

As the opponent's defense building level goes higher, golem is a must-have in the army to absorb damages for wizards and other high DPS dealers. After golem is unlocked, for regular raiding, focus on upgrading PEKKA to level 3 as it's harder to farm dark elixir and you need dark elixir to maximize king's level to 10 as fast as you can. Golem level 1 is good enough as it needs 60K dark elixir to upgrade to level 2.

Wall breaker is a must-have in the army, always bring 6 wall breakers. Wait till golem or giants distracted the defensing building, then deploy 2-3 wall breakers. If there is mortar in range, wait the mortar fire first because it gives you 5 seconds break, then immediately deploy the wall breakers. Wall breakers picks up walls that have building behind it.

Golem is a must-have as they are the meat shields for the wizard or hog rider. If deploying 2 golems, they must be at least 8 to 10 tiles away from each other, so they will last longer from splash damage. The timing is when they are absorbing the damages, send in wall breakers to tear down the first layer of wall. 6 to 8 wizards should clear enough outside buildings and be able to enter to the wall. Leave 6 to 8 wizards handy for later clean up. Once the path is created, send in PEKKA, king and the rest wizards.

Once PEKKA is at level 3, update either valkyrie, or hog riders, but one at a time as they need lots of dark elixir. Hog riders is recommended as they dominate in ground attack and dragon loons dominate in air attack in TH8 war.

Choosing the attacking strategy depends on the opponent's base and CC troop. For ground attack, CC troop must be cleared first and should be done as soon as possible. Dragons or other flying units will ruin the ground attack. Witch or valkyrie creates lots of headache. Watch out for the CC clear-up time and try to make it finished as soon as possible, as pekka attacks slow.

##### TH8 GoWiPe

1 Golem + 3 Pekka + 18 Wizards + 6 Wall Breakers + 1 Hog (CC lure) + 6 Archers + 1 Healing + 2 Rage + Poison Spell and 1 level 8 Pekka + Poison Spell in CC.

With level 3 pekkas and one CC level 8 pekka, GoWiPe is pretty effective in TH8 war for middle to high level TH8 opponents. With luck, it can 3 star maxed TH8.

PEKKA needs proper funneling. Outside building must be cleared up before pekka goes there, otherwise Pekka will chop the wall and go outside of the core to attack some trash building around the base.

Don't send all the wizards too soon. Look at the base layout and check where the majority of mortars are as they have long range and splash damage which wipes off wizards quickly. The strategy is to use golem as the meat shield grouped with pekkas, 3 wall breakers open the first layer once the golem distracted the defensing buildings. Sending the level 8 pekka which speeds up the attack, 2 pekkas, the king, along with 5 to 8 wizards which follow behind. Only after the outside trash building is cleared, then use rage in the first open compartment as it helps King and pekka deal damages faster. If the wizards hit bombs or great bombs so get killed, always have 4 to 5 wizards follow the pekkas so they can attack defensing buildings over the walls. Send in the rest wall breakers to open more inside walls, and send more wizards to the core, usually town hall and other defensing structures like hidden teslas are exposed at this moment, use rage one more time so to destroy town hall and teslas. Healing spell can be saved to use on rest building like remaining teslas, wizard towers when the survived troops are covered mostly.

Send the king with the level 8 pekka as the main attacking troop, because rage spells work well on Pekka and king. Have one pekka with 3 to 5 wizards to destroy the outside building so inner pekkas can move forward and won't move outside. 3 to 5 wizards to clear the other outside.

Wizards are the key for the win. For a nearly maxed out TH8, GoWiPe can get 2 stars easily, but you need luck to get 3 stars as PEKKA's attacking speed is slow without wizard's help. If wizards get hit on giant bomb or bomb, the second wave may fail as so PEKKAs will get destroyed by higher level defensing buildings like teslas and burst cannons if they are not destroyed in a fast manner by wizards. The key is destroy the splash dealing building as soon as possible as they kill wizards fast, and don't send in all the wizards at first otherwise they will be wiped out by splash damage dealing buildings and great bombs.

##### TH8 GoWiVa

GoWiVa is for attacking some low level TH9, the base is a more open with less layer as they are covered by x-bows, valkyries can do much better than wizards, as x-bows destroy wizards very quickly and wizards attack is slower than valkyries.

1 Golem + 13 Valkyries + 12 Wizards + 6 Wall Breakers + 6 Archers + 1 rage spell + 2 Healing Spell + 1 earthquake and 1 Pekka + 1 Poison Spell in CC

Valkyrie attacks and moves faster than pekka, and their HP is much higher than wizards. Once the access to x-bow is open, use valkyrie to take it down. Valkyries are harder to control when the base has lots of condensed compartments as they will leave the core and go outside to attack the outside trash buildings, especially after rage. Don't drop the rage spell on Valkyrie directly, drop to the area 2 tiles in front of the valkyries. For GoWiVa, wizards' mission is to clear the outside buildings to keep the valkyries inside.

##### TH8 GoHo

2 Golem + 16 Hogs + 6 Wall Breakers + 11 Wizards + 4 Archers + 3 Healing Spell + Poison and 5 Hogs + 1 Poison in CC.

Archers and wizards are for the CC troop and clean up outside buildings.

2 golems should keep away from each other to minimize the splash damage. 3 wall breakers to tear down the first layer of base so to let the golems get closer to the core and absorb more damage for the hog riders.

For maxed out TH8 opponent or low level TH 9 opponent, upgrade hog rider to level 4.

Pick the side where most splash damage dealing building located because splash damage dealing buildings are very annoying in late battle.

The king and queen are deadly enemies for hog riders as hog riders won't attack them if they are in the middle of attacking one building. If the hog riders are attacking the town hall or high HP building, the king or queen nearby will destroy most of them.

Don't spam in all the hog riders. Spring traps, bombs, giant bombs destroy swarmed hog rider very quickly.

##### TH8 GoVaHo

GoHo is powerful on compact bases if there are lots of compartments so 2 meat shield if needed. If the base is not that compact or some not enclosed TH8 war base, use 4 valkyries to replace 1 golem which speeds up the attack greatly.

1 Golem + 4 Valkyries + 10 Wizards + 18 Hogs + 4 Wall Breakers + 3 Healing Spell + 1 poison, and 3 Valkyries + 2 Archer + Poison / freeze Spell in CC.

#### TH 8 Farming

Upgrade the barracks to shorten the training time.

Barch farming

Use barbarians, archers and wall breakers. Adding some goblins may speed up the process as well. Works best in gold league trophy level 1700 to 1800, and above, lots of players have collectors left outside the base and storages are behind the outside-most wall. The strategy is aiming for the storages, overwhelming the defensing buildings with lots of barbarians and archers. And even no spell is required. You can 1 star the opponent and get lots of loots with higher ROI.

But usually dark elixir is at the core of base so barch farming is good for farming gold and elixir.

To farm for dark elixir, you need to use 15 Giants / 20 Wizards / Archers / 8 Wall breakers / 1 or 2 Peeka to farm dark elixir. The aim is to 1 or 2 star and get most of the resources, first dark elixir, then elixir, gold.

GiBarch farming

<https://www.allclash.com/farming-with-gibarch/>

Loonion farming

The strategy is targets players with lots of loots.

Balloons and minions are better at maximized level to make the farming more effective. Lighting spell is better at level 5. 2 level 5 lightening spells deals 540 damages each so it can take down one air defense level 5 (HP 1000) or level 6 ( HP 1050).

Make a wall of Balloons where the air-targeting defences mostly are, and if needed, support them with either a haste spell or a rage spell.

Then, deploy the minions to clean up behind once the first layer of defenses are taken down and send in the King.

However, air Bombs can seriously ruin this attack if many balloons or minions were clumped up because Air Bombs can fully take out minions and leave Balloons damaged, or even destroyed completely unless a well-timed healing spell is dropped to prevent the balloons from being destroyed.

### TH 9 strategies

TH9 enables new buildings: 2 X-bows, 1 more archer tower, wizard tower, hidden tesla, and 25 walls. 1 more gold collector and storage, 1 more elixir collector and storage.

Upgrade priority: x-bows, air defence, air seeking mine, air bombs, giant bombs, bombs and traps.

Queen is unlocked.

With upgraded camps, troop housing capacity is 220.

With upgraded clan castle, the CC troop housing capacity is 30 and 1 spell.

Wall level can go up to 9 (spike) and 10 (lava stripe on top). Wall rings are great to upgrade from spike to lava stripe on top as it has the max value.

Once queen and king level up to 30, queen walk is very powerful with 4 level 4 healers. Then based on the opponent's weakness, queen walks works great to help lavaloonion air attack, hog riders or witch ground attack.

New troops baby dragon, witch, and lava hound are unlocked.

For air attack, with x-bows in air & ground mode, one more air seeking mine and air defence, it adds more difficulty for dragon strategy. Dragons are not over powered anymore in TH9. Instead, new strategy lava loonion can be used to replace the dragon loon strategy as balloon level 5 to 6 upgrade has a significant boost on DpS and HP.

Baby dragon is not the main attacker, but it's a great for funneling and cleaning up.

Level 2 witch is valuable for many strategies.

Haste spell, freeze spell and jump spell are unlocked. But freeze spell is up to level 1 so it's basically useless.

Valkyrie and golem can be upgraded up 2 level to level 4.

Maximize the hero levels.

- Queen lvl 30
- King lvl 30

Maximize the troop levels.

- Barbarian lvl 6
- Archer lvl 6
- Giant lvl 6
- Goblin lvl 5
- Wall breakers lvl 5
- Balloon lvl 6
- Wizard lvl 6
- Healer lvl 4
- Dragon lvl 4
- PEKKA lvl 4
- Baby dragon lvl 2
- Minion lvl 4
- Hog rider lvl 5
- Valkyrie lvl 4
- Golem lvl 4
- Witch lvl 2
- Lava Hound lvl 2

Maximize the spells

- Lighting lvl 6
- Healing lvl 6
- Rage lvl 5 Max
- Jump lvl 2
- Freeze lvl 1
- Poison lvl 3
- Earthquake lvl 3
- Haste lvl 2

Maximize the defence

- Cannon lvl 11 x 5, can gear up, HP 1,060, DpS 74, Range 9
- Archer tower lvl 11 x 6, HP 890, DpS 70, Range 10
- Mortar lvl 7 x 4, can gear up, HP 700, DpS 15, Range 4-11
- Air defense lvl 7 x 4, HP 1,100, DpS 280
- Wizard tower lvl 7 x 4, HP 1,200, DpS 40, Range 7
- Air sweeper lvl 5 x 2 Max, HP 1,050
- Hidden Tesla lvl 7 x 4, HP 810, DpS 87, Range 7
- Bomb tower lvl 3 x 1, HP 750, DpS 32
- Bombs lvl 6 x 6, splash damage 54 in 3 titles
- Spring traps lvl 4 x 6 Max, wipe off 18 capacity in 0.7 tiles
- Air bomb lvl 4 x 4, splash damage 173 in 3 tiles
- Giant bomb lvl 3 x 4, splash damage 225 in 3.5 tiles
- Seeking air mine lvl 2 x 4, damage 1,800 in 4 tiles
- Skeleton trap lvl 3 x 2, 4 spawned skeletons HP 30, DpS 25 each
- X-Bows lvl 3 x 2, HP 3,100, DpS 80, Range 14

Queen walk / charger

At this stage, queen charge is mainly used to take out x-bows, CC or air defence to facilitate other main troops like balloons and hog riders.

When the healers die or get distracted, queen will have a hard time.

- Put a balloon when to deploy the queen to trigger the seeking air mine.
- Protect the healers. Make sure no other troops will take away the healers.
- Use offensive spells around queen
- Rage spell to increase the queen DPS also the healing speed.

#### TH9 farming strategies

GoWiPe

- 4 archers
- 7 wall breakers
- 1 golem
- 4 pekka
- 18 wizards
- 2 rage spell
- 2 healing spell
- 1 poison spell
- CC can be electro dragon and 1 freeze spell

Queen charge lavaloonion

- 5 healers
- 2 lava hounds
- 1? balloons
- 2? minions

Use queen charge to destroy CC, enemy queen, possibly one air defence.

Queen charge Hog rider

- 5 healers (70)
- 20 hog riders (100)
- cleaning up troop - witch / valkyrie / wizard

### TH 10 strategies

Inferno tower.

New troops: miner and bowler.

CC castle can have donated siege machine (wall wrecker / stone slammer / battle blimp)

With upgraded clan castle, the CC troop housing capacity is 35 and 1 spell housing space.

Maximize the hero levels.

- Queen lvl 40
- King lvl 40

Maximize the troop levels.

- Barbarian lvl 7
- Archer lvl 7
- Giant lvl 7
- Goblin lvl 7 Max
- Wall breakers lvl 6
- Balloon lvl 6
- Wizard lvl 7
- Healer lvl 4
- Dragon lvl 5
- PEKKA lvl 6
- Baby dragon lvl 4
- Miner lvl 3
- Minion lvl 6
- Hog rider lvl 6
- Valkyrie lvl 5
- Golem lvl 5
- Witch lvl 3
- Lava Hound lvl 3
- Bowler lvl 2

Maximize the spells

- Lighting lvl 7 Max
- Healing lvl 7 Max
- Rage lvl 5 Max
- Jump lvl 3 Max
- Freeze lvl 5
- Clone lvl 3
- Poison lvl 4
- Earthquake lvl 4
- Haste lvl 4
- Skeleton lvl 3

Maximize the defence

- Cannon lvl 13 x 6, can gear up, HP 1,260, DpS 80, Range 9
- Archer tower lvl 13 x 7, HP 1050, DpS 80, Range 10
- Mortar lvl 8 x 4, can gear up, HP 750, DpS 20, Range 4-11
- Air defense lvl 8 x 4, HP 1,200, DpS 320
- Wizard tower lvl 9 x 4, HP 1,680, DpS 54, Range 7
- Air sweeper lvl 6 x 2, HP 950
- Hidden Tesla lvl 8 x 4, HP 850, DpS 99, Range 7
- Bomb tower lvl 4 x 2, HP 850, DpS 40
- Bombs lvl 7 x 6, splash damage 72 in 3 titles
- Spring traps lvl 5 x 6 Max, wipe off 19 capacity in 0.7 tiles
- Air bomb lvl 4 x 5, splash damage 173 in 3 tiles
- Giant bomb lvl 4 x 5, splash damage 250 in 3.5 tiles
- Seeking air mine lvl 3 x 5, damage 2100 in 4 tiles
- Skeleton trap lvl 4 x 3, 5 spawned skeletons HP 30, DpS 25 each
- X-Bows lvl 4 x 3, HP 3,100, DpS 95, Range 14
- Inferno lvl 3 x 2, HP 2100, DPS 45, Range 9

#### TH10 Minor

#### TH10 Bowler

### TH11 strategies

Grand Warden joins in the village.

- Heroes maxed 50/50/20
- CC castle can have donated siege machine (wall wrecker / stone slammer / battle blimp)
- Troops (260 Camp + 35 Clan Castle)
  - CC troop 35 and 2 spell housing space
  - Primary troop (miner, bowler, pekka, dragon loon, electro dragon ...)
  - Supplementary troop (healer, wall breaker...)
- Spells

Maximize the hero levels.

- Queen lvl 50
- King lvl 50
- Grand Warden lvl 20.

Maximize the troops

- Barbarian lvl 8 Max
- Archer lvl 8 Max
- Giant lvl 8
- Goblin lvl 7 Max
- Wall breakers lvl 7
- Balloon lvl 7
- Wizard lvl 8
- Healer lvl 5 Max
- Dragon lvl 6
- PEKKA lvl 7
- Baby dragon lvl 5
- Miner lvl 5
- Electro Dragon lvl 2
- Minion lvl 7
- Hog rider lvl 7
- Valkyrie lvl 6
- Golem lvl 7
- Witch lvl 4
- Lava Hound lvl 4
- Bowler lvl 3
- Ice golem lvl 3

Maximize the spells

- Lighting lvl 7 Max
- Healing lvl 7 Max
- Rage lvl 5 Max
- Jump lvl 3 Max
- Freeze lvl 7 Max
- Clone lvl 5 Max
- Poison lvl 5 Max
- Earthquake lvl 4 Max
- Haste lvl 4 Max
- Skeleton lvl 4
- Bat lvl 4

Maximize the defence

- Cannon lvl 15 x 7, can gear up, HP 1,500, DpS 118, Range 9
- Archer tower lvl 15 x 8, HP 1,230, DpS 104, Range 10
- Mortar lvl 10 x 4, can gear up, HP 850, DpS 150, Range 4-11
- Air defense lvl 9 x 4, HP 1,300, DpS 360
- Wizard tower lvl 10 x 5, HP 2,000, DpS 62, Range 7
- Air sweeper lvl 7 x 2 Max, HP 1050
- Hidden Tesla lvl 9 x 4, HP 900, DpS 110, Range 7
- Bomb tower lvl 6 x 2, HP 1,200, DpS 52
- Bombs lvl 8 x 6 Max, splash damage 92 in 3 titles
- Spring traps lvl 5 x 6 Max, wipe off 19 capacity in 0.7 tiles
- Air bomb lvl 5 x 5, splash damage 200 in 3 tiles
- Giant bomb lvl 5 x 5 Max, splash damage 275 in 4 tiles
- Seeking air mine lvl 3 x 5 Max, damage 2000 in 4 tiles
- Skeleton trap lvl 4 x 3 Max, 5 spawned skeletons HP 30, DpS 25 each
- Tornado trap lvl 2 x 1, 6 seconds and damage 48 in 3 tiles
- X-Bows lvl 5 x 4, HP 3100, DpS 125, Range 14
- Inferno tower lvl 5 x 2, HP 2700, DpS 70 in multiple, in single 175 after 1.5s, 1750 after 5.5s, Range 9
- Eagle artillery lvl 2 x 1

- Level 11 town hall HP 6,800
- Level 12 town hall HP 7,500

#### Level 3 Bowler

Bowlers is a very useful killer squad to clear one corner with inferno and x-bows. Bowlers can be the main attackers with queen walk, it's very easy to get 2 stars but hard to 3 star.

Bowler killer squad

With luck, support from healers or meat shields, bowler can get to the core.

Bowler and healer

This typically is comprised of around 30 bowlers and 6-8 healers.

Without wall wrecker, the strategy is to choose the side closest to the eagle artillery or the town hall. Make sure the path goes from eagle artillery to town hall, at least you can get most of it on the path. The entry point which can be the half point of one side or the corner the base. Once the plan of the attacking path is made, first, funnel the path to the entry point. Use one bowler or wizard to clear off the buildings if there is any on the edge to break the connection so force the bowlers deployed there will go to the entry point. Deploy 6 to 8 bowlers on those two corners with 3 or 4 healers behind each group. The goal is to make the army go toward the center of the base. Make sure the eagle artillery is on that path while troops are marching otherwise bowlers are very fragile.

Each group will take down the outer and nearby buildings, and they walk towards the entry point. Before they meet, put the jump spell over the wall and make it cover as much as it can. This creates a straight forward path into the middle of the base. Drop the queen, king, giants before the bowlers. Once they meet, drop the rest of the bowlers with Warden. Put the rage spell 2 tiles before them. Along the way the army is marching, drop freeze spell on eagle artillery and inferno towers to ensure that the army can get to the town hall, drop healing spell to cover most of them. Use Warden's ability to save from one eagle artillery's shot. Once town hall is destroyed, there is the possibility to have a couple of healers at this stage to help keep the bowlers up. Put another jump spell so to make sure the army can exit the center and march further. From there, usually several blowers will get separated, or most of bowlers will get wiped out by eagle artillery or other defences due to low HP. The beauty of this attack is that the bowlers can clear lots of building when enraged, and if done correctly they can move into the center and destroy the town hall. At that time, you already get 2 stars extremely quickly. Often in the center of the case you still have a bunch of healers survived which will then help keep your heroes live helping you get that important 3 star.

With wall wrecker, the attack can be even easier. Load 1 max level golem and 1 max level giant inside the wall wreaker and get 1 rage spell. Same as before, funnel with bowlers first, once the entry point is reached, send in the wall wrecker and followed by giants, heroes and witches. Golem and giant can be the meat shield to absorb some damages for the troops. Witch can slow down inferno tower and single target defences.

#### Level 5 Miner

Level 5 miner HP 800, move speed 32, DpS 112 with attacking speed 1.7s.

Miners strategy is solid to 2-star other middle level TH11 or any TH10. But against maxed TH11 with high level eagle artillery, inferno tower in multiple mode and level 5 x-bows, it's very risky. When facing TH12 with giga tesla, often miner strategy can get only 1 star but high percentage as TH12 has 3 inferno towers, higher level defence with higher DpS, and giga tesla cause massive 4-target damage to miners.

To attack TH11, watch out for the eagle artillery and 2 inferno towers. Multiple targeted inferno is an headache for miners but not for heroes. Ground CC troops especially witches will cause a headache for miners but air CC troops will not as miners move fast underground.

Take out the eagle artillery first, use wall wrecker with heroes to take down the eagle artillery and CC troops if possible.

Another key is to narrow down the miner attack path. Miners are strong when they swarm. If they get separated, they can easily get picked off by x-bows and inferno towers, even splash damage dealing buildings. So for a square base layout, use heroes to clear one corner with eagle artillery to create a L shape and some troops to clear some trash building outside, so to make minor stay together while moving forward.

Once the queen is strong, level 45 and up, use a powerful queen charge to take out eagle artillery and CC troops, then deploy miners. Don't send Warden along with queen as it will make the healers target to Warden so queen will get destroyed very soon. Warden will help out miners once they reach the middle. Keep the heroes alive in the middle of the base is one of keys to 3 star. King's mission is often to clear the outside buildings as much as possible.

2 Health, 3 freeze and 2 rage spells are often used in miner strategy.

#### Level 7 hog rider

High level walls slow down pekka smash.

Walls do not block hog rider and miner. Hog rider jumps overs walls, like the miner burrows under walls.

Level 5 miner vs. level 7 hog rider

Hog rider housing space 5 and miner is 6, so you can bring a couple more hog riders in the army.

Level 5 miner HP 800, move speed 32, DpS 112 with attacking speed 1.7s.

Level 7 hog riders HP 700, move speed 24, DpS 135 with attacking speed 1.

Hog riders attack defensing structure first, miner attacks nearest building first.

In TH11, they are kind of at the same level.

In TH12, hog rider max level is 9 and miner max level is 6.

Level 6 miner HP 870, move speed 32, DpS 120 with attacking speed 1.7s.

Level 9 hog riders HP 920, move speed 24, DpS 161 with attacking speed 1.

So in TH12, hog rider is slightly better than miner.

If the opponent's Giga tesla is maxed which deals massive damages on 4 target, and inferno is set to multiple, which damages DpS 81 on 5 troops, without healing spell, it's hard to make the miner and hog rider survive.

#### Level 7 Pekka

Level 7 Pekka HP 5700, attacking speed 1.8s, DpA 972, DpS 540

Level 8 Pekka HP 6300, attacking speed 1.8s, DpA 1098, DpS 610

Pekka smash is often a strong 2 star strategy.

Pekka's strength is their high HP and DpS. They can break walls easily on their own and they can tank to the core. If the inferno is set to multiple, it takes multiple target inferno 70 seconds to destroy a pekka. But a single mode inferno takes 6 to 7 seconds to destroy the Pekka.

One of the issue is that Pekka attacks nearest buildings even under attach from long range buildings, they may go zigzag in the base to attack trash buildings so take lots damages from high DpS dealing buildings.

#### TH 11 Level 2 electro dragon

Electro dragon has 30 housing space, attack speed 3.5s, move speed: 12, range: 3 tiles

TH11 only has 240 housing capacity with maximized camps can take 8 electro dragons. As you need balloons in the army so the setup is like 12 balloons and 6 electro dragons. In addition to the one electro dragon and one balloon in CC, at most TH11 can get up to 7 dragons and 13 balloons.

TH12 has 280 housing capacity and the setup is usually 14 balloons and 7 electro dragons. With 8 balloons in CC, 7 dragons and 22 balloons makes big difference.

Use 6 level 2 electro dragon on TH11 opponents with high air defence and high level queen is hard for 3 stars but it can be a solid strategy to get 2 stars even against Th12. Occasionally, if your TH12 opponent's base has town hall exposed, TH11 electro dragon can get 1 star or 2 easily but usually impossible for 3 star.

The attack is strong when heroes are strong. Usually, king and queen will launch a kind of suicide attack on the 2 sides of the base, so to leave the path narrower so the dragons can move forward faster. Or heroes can take out eager artillery and inferno tower and air defence. Grand Warden should be set to air mode always and follow the dragons for his ability support.

Clone spell can help if it is done right.

Bat spell can help to take down one air defence.

#### TH11 Dragon bat

#### TH11 farming

Miner farming

Miner farming with queen charge is very effective for dead bases or TH11 with medium level defensing systems.

29 miners, 1 baby dragon, 5 healers, 6 archers.

Baby dragon is cheap for removing the outside trash building. Keep it away from the air defence. Or If the air defence is exposed, use queen to take it out. When queen level is not high enough, watch out for the CC troop.

Use queen and 5 healers to clear one side, use baby dragon, king and warden the other side to clear the buildings within range. Once the outside is a bit cleared, send in the miners and make them alive with health spell and freeze spell. King has to be a bit strong to absorb damages, and king might not survive at last. But at that time, warden come to middle to help out the minors.

Lava loonion

A little bit costy but very effective.

- 3 Lava hound
- 26 Balloons
- 21 Minions
- 4 Wall Breakers
- 3 Rage Spell
- 1 Healing Spell
- 1 Freeze Spell
- 1 Haste Spell

<https://www.youtube.com/watch?v=_IVqeAipX5g>

<https://www.allclash.com/farming-with-lavaloonian/>

Loonion variation with queen walk

- 4 Healers
- 26 Balloons
- 21 Minions
- 4 Wall Breakers
- 3 Rage Spell
- 1 Healing Spell
- 1 Freeze Spell
- 1 Haste Spell

[farming elixir strategy](https://www.allclash.com/farming-elixir-strategy/)

<https://www.allclash.com/farming-strategies-for-all-town-hall-level/>

<https://www.allclash.com/queen-charge-mass-miner-farming-trophy-pushing-strategy/>

<https://www.allclash.com/best-th11-farming-base-layouts/>

<https://www.allclash.com/farming-with-goblin-knife/>

<https://cocland.com/guides/bowler-attack-strategy>

### TH12 war strategies

Rules of thumb

- Don't be greedy. Don't go for holes, some fishy weak points usually have traps.
- Don't panic. If you made some mistakes and fall in a trap, keep calm.
- Timing the spellings. Don't use up at the beginning or stringent.
- Don't attack from the strongest side unless you want to take risk.
- For air attack, as air stoops are powerful yet slow, don't attack against air sweeper.

Maximize the hero levels.

- Queen lvl 65
- King lvl 65
- Grand Warden lvl 40.

Maximize the troops

- Barbarian lvl 8 Max
- Archer lvl 8 Max
- Giant lvl 9 Max
- Goblin lvl 7 Max
- Wall breakers lvl 8 Max
- Balloon lvl 8 Max
- Wizard lvl 9 Max
- Healer lvl 5 Max
- Dragon lvl 7 Max
- PEKKA lvl 8 Max
- Baby dragon lvl 6 Max
- Miner lvl 6 Max
- Electro Dragon lvl 3 Max
- Minion lvl 8 Max
- Hog rider lvl 9 Max
- Valkyrie lvl 7 Max
- Golem lvl 9 Max
- Witch lvl 5 Max
- Lava Hound lvl 5 Max
- Bowler lvl 4 Max
- Ice golem lvl 5 Max

Maximize the spells

- Lighting lvl 7 Max
- Healing lvl 7 Max
- Rage lvl 6 Max
- Jump lvl 3 Max
- Freeze lvl 7 Max
- Clone lvl 5 Max
- Poison lvl 6 Max
- Earthquake lvl 5 Max
- Haste lvl 4 Max
- Skeleton lvl 6 Max
- Bat lvl 5 Max

Maximize the defence

- Cannon lvl 17 x 7, can gear up one in burst mode
- Archer tower lvl 17 x 8, can gear up one if there is one level archer tower in builder hall level 6.
- Mortar lvl 12 x 4, can gear up in multi-mortar when mortar in builder hall reaches level 8.
- Air defense lvl 10 x 4
- Wizard tower lvl 11 x 5
- Air sweeper lvl 7 x 2
- Hidden Tesla lvl 10 x 5
- Bomb tower lvl 7 x 2
- Bombs lvl 8 x 6
- Spring traps lvl 5 x 8
- Air bomb lvl 6 x 6
- Giant bomb lvl 5 x 6
- Seeking air mine lvl 3 x 6
- Skeleton trap lvl 4 x 3
- Tornado trap lvl 3 x 1
- X-Bows lvl 6 x 4
- Inferno tower lvl 6 x 3
- Eagle artillery lvl 3 x 1
- Giga Tesla lvl 5 x 1

The forces you have:

- Heroes
- Workshop is unlocked to build seige machines Wall wreckers / Battle blimp / Stone slammer or you can request CC seige machine.
- Main troop 280 capacity (miner / hog rider, bowler, pekka, dragon loon, electro dragon)
- CC troop (40 capacity)
- Supplementary troop, archers, wall breakers, etc.,
- Spells 11 capacity and 2 capacity from CC

Make a plan for 2 star or 3 star as it's different. 2 star focuses on taking out town hall and some trash building as long as the town hall is destroyed and 50% destruction rate is reached. 3 star is to wipe off everything.

There is no one versatile strategy can 3 star any base. It's based on your opponent's base then choose the most effective strategy accordingly aiming for the weakness of the base. For example, use bowler or air strategy to attack a very separated or distributed layout will be a disaster as bowler or air strategy works better on the compact bases. Use queen charge and divide and conquer will be more effective. Choose the most effective way by taking advantage of weakness of your opponent's base.

CC troop is always in war so it adds more difficulties.

Analyze the base based on your air or ground strategy. If ground, get the rough idea about the main obstacles like inferno towers, x-bows, wizard towers. If air, watch out for air sweeper and air defence. No matter what, eagle artillery has to be cleared out first.

If in base layout, the opponent put town hall and all the defences in the center, it's a perfect target for bowler.

Some more advance players have 3 or more main areas with inferno tower and x-bows to against 3 star, you need to plan ahead of time.

No matter what, notice where is the clan castle, eagle artillery are located.

#### TH12 Heros

Heros usually work on some suicide missions so to clear obstacle and CC troops, or create path for main troops or protect them as meat shield.

Facts about queen,

Queen's attack speed 0.75s, move speed 24, range 5 tiles, search range 10 tiles.

- Level 40 queen HP 1,630 DpS 419, DpA 314.25. When in ability, DpS 1,238 in 5.0s, Health Recovery 325, Summon 12 archers
- Level 45 queen HP 1,809 DpS 474, DpA 355.50. When in ability, DpS 1,394 in 5.2s, Health Recovery 350, Summon 13 archers
- Level 50 queen HP 2,007 DpS 536, DpA 402.00. When in ability, DpS 1,556 in 5.4s, Health Recovery 375, Summon 14 archers
- Level 55 queen HP 2,274 DpS 594, DpA 445.50. When in ability, DpS 1,714 in 5.4s, Health Recovery 400, Summon 15 archers
- Level 60 queen HP 2,575 DpS 658, DpA 493.50. When in ability, DpS 1,778 in 5.8s, Health Recovery 425, Summon 16 archers
- Level 65 queen HP 2,913 DpS 726, DpA 544.50. When in ability, DpS 1,946 in 6.0s, Health Recovery 450, Summon 17 archers

Facts about king

King's attack speed 1.2s, move speed 16, range 1 tile, search range 9 tiles, ability time 10s.

- Level 40 king HP 4,453 DpS 259, DpA 310.8. When in ability, DpS 673 in 10s, Health Recovery 1,692, Summon 20 barbarians
- Level 45 king HP 5,038 DpS 299, DpA 358.8. When in ability, DpS 777 in 10s, Health Recovery 1,963, Summon 22 barbarians
- Level 50 king HP 5,700 DpS 332, DpA 398.4. When in ability, DpS 878 in 10s, Health Recovery 2,263, Summon 24 barbarians
- Level 55 king HP 6,452 DpS 369, DpA 442.8. When in ability, DpS 987 in 10s, Health Recovery 2,592, Summon 26 barbarians
- Level 60 king HP 7,303 DpS 410, DpA 492.0. When in ability, DpS 1,028 in 10s, Health Recovery 2,592, Summon 28 barbarians
- Level 65 king HP 8,264 DpS 453, DpA 543.6. When in ability, DpS 1,147 in 10s, Health Recovery 2,980, Summon 30 barbarians

Facts about Grand Warden

Grand Warden's attack speed 1.8s, move speed 16, range 7 tile, search range 10 tiles.

- Level 15 Grand Warden HP 1,350 DpS 90, DpA 162. Eternal Tome 4.5s, Life Aura 40%.
- Level 20 Grand Warden HP 1,500 DpS 110, DpA 198. Eternal Tome 5s, Life Aura 50%.
- Level 25 Grand Warden HP 1,658 DpS 136, DpA 244.8. Eternal Tome 5.5s, Life Aura 60%.
- Level 30 Grand Warden HP 1,833 DpS 168, DpA 302.4. Eternal Tome 6s, Life Aura 70%.
- Level 35 Grand Warden HP 2,026 DpS 206, DpA 370.8. Eternal Tome 6.5s, Life Aura 80%.
- Level 40 Grand Warden HP 2,240 DpS 253, DpA 455.4. Eternal Tome 7s, Life Aura 90%.

#### TH12 enemy defences

The first priority is to take out the eagle artillery.

Eagle Artillery targets the area with the largest density of hitpoints. It fires a volley of three successive shots at regular 10 second intervals.

- Level 2 HP 4,400, damage per hit is 350
- Level 3 HP 4,800, damage per hit is 400

It's better to take out eagle artillery first before it's activated.

Eagle Artillery will be activated after 180 (level 2) - 200 housing spaces (level 3) worth of troops. Each hero is worth 25 troop housing spaces, and each spell housing space is worth 5 troop housing spaces. Wall wrecker counts as 1, but when the CC troop is out, the total amount will add up quickly. As queen and warden take 50 already, the healers take 70 already, there is not much room left to avoid activating eagle artillery.

Queen can avoid one hit by using the timely cloak ability.

Warden can protect the troops covered in his range by timely ability as well.

Once eagle artillery is taken down, try to destroy multiple target inferno and x-bows as they deals with great damages to minor, hog riders, etc.

The opponent's high level queen can cause headache to the attacking troops.

Inferno tower range 9, multiple target 5, TH11 has 2 and TH12 has 3, attacking speed 0.128s

- Inferno tower level 4, HP 2400, DpS 57 when set to multiple, DpS 155 when set to single after 1.5s and DpS 1,550 after 5.25s, TH11
- Inferno tower level 5, HP 2700, DpS 70 when set to multiple, DpS 175 when set to single after 1.5s and DpS 1,750 after 5.25s, TH11
- Inferno tower level 6, HP 3000, DpS 81 when set to multiple, DpS 200 when set to single after 1.5s and DpS 2,000 after 5.25s, TH12

Multiple target inferno is against miner, bowler, hog rider strategy.

Single target inferno is against queen charge strategy, heroes, pekka, but a pack of hog riders, miners, bat spell or skeleton spell can take down one single target inferno easily.

Queen charge can take down multiple target inferno easily as the DpS is fair low. If the wall is broken, Pekka and king can take down multiple target inferno easily. But for single target inferno, queen has to use cloak ability to take it down. King and Pekka do stand a chance without a timely freeze spell.

X-bows x 4, range 14 in ground, range 11 in air and ground, attacking speed 0.128s

- X-bows level 4 HP 2,700, DpS 95, DpA 12.16, TH11
- X-bows level 5 HP 3,100, DpS 125, DpA 16, TH11
- X-bows level 6 HP 3,500, DpS 155, DpA 19.84, TH12

X-bows are headaches for their long range and very high DpS. They shoot fast so they can destroy any low hp troop very quickly.

Also they can set into air & ground mode to defeat the electro dragon strategy.

Hidden Tesla x 5, range 7

- Hidden Tesla level 9, HP 900, DpS 110, TH11
- Hidden Tesla level 10, HP 950, DpS 120, TH12

Hidden Tesla are hidden and will only expose themselves after 51% destruction, or any troops enter in 6 tiles range. Usually war base design put teslas in a farm so to sabotage the queen walk. 5 teslas DpS 600 can destroy queen or any troop nearby very quickly.

Wizard tower x 5, range 7, attack speed 1.3s, splash 1 tile

- Wizard tower level 9 HP 1,680, DpS 54, DpA 70.2
- Wizard tower level 10 HP 2,000, DpS 62, DpA 80.6
- Wizard tower level 11 HP 2,240, DpS 70, DpA 91

Wizard tower causes splash damages which is the worst enemy to bat spells and skeletons spawned by witch, also barbarians and archers summoned by king and queen. Wizard tower can target air troops so they are deadly to balloons swarmed.

Cannon x 7, range 9

- Cannon level 14 HP 1,380, DpS 110
- Cannon level 15 HP 1,500, DpS 118
- Cannon level 16 HP 1,620, DpS 125
- Cannon level 17 HP 1,740, DpS 132

Archer tower x 8, range 10

- Archer tower level 14, HP 1,130, DpS 92
- Archer tower level 15, HP 1,230, DpS 104
- Archer tower level 16, HP 1,330, DpS 116
- Archer tower level 17, HP 1,430, DpS 122

Cannon and Archer tower are single unit target defences which have fast attack speed.

Geared up cannon or archer tower shoots fast but less range in burst mode.

Mortar x 4, rage 4-11, attack speed 5s, splash 1.5s

- Mortar level 9, HP 800, DpS 25, DpA 125, TH11
- Mortar level 10, HP 850, DpS 30, DpA 150, TH11
- Mortar level 11, HP 900, DpS 35, DpA 170, TH12

A geared up multi mortar in home village requires a level 8 multi mortar in builder hall 8. Multi mortar has shorter range but shoots 3 at a time in burst mode.

Giga tesla level 5 DpS 200 deals 4 targets, and cause 1,000 splash damage when destroyed.

As the level 5 giga tesla targets 4 troops so it's better have queen and healers around it to absorb damages for other troops. Also giga tesla will deal 1000 damages on attacking troops around it, attack the level 5 TH12 town hall at last or use Warden's ability is Warden is nearby to avoid that it wipes off all the attacking troops.

Air sweeper x 2, range 1-15, attack speed 5s

- Air sweeper level 6, HP 1,000, push strength 3.6 tiles
- Air sweeper level 7, HP 1,050, push strength 4.0 tiles

Air defense x 4,range 10

- Air defense level 8 HP 1,200, DpS 320
- Air defense level 9 HP 1,300, DpS 360
- Air defense level 10 HP 1,400, DpS 400

Air defense is a great menace for air troops and healers.

#### TH12 Siege machine

In TH12, workshop is unlocked. Level 3 workshop enables to build 3 type of siege machines.

##### Wall wrecker

Most war bases have the town hall centralized, wall breaker will break all the walls and obstacles between itself and the town hall. It disassembles when it arrives at the town hall and releases the CC troop. Wall wrecker is a powerful group attacking strategy as bowlers, pekkas, heros can follow along as the walls get broken. CC troop inside the wall wrecker will help the battle in the core.

Some war base design leaves the town hall out at the corner so wall wreaker cannot benefit much.

##### Battle blimp

Like wall wreaker, battle blimp sends in the CC troop but by air.

Battle blimp sends the CC troop on top of the town hall much quicker. In air troop strategy, it's often used with clone spell when battle blimps sends 8 balloons or 1 electro dragon and 1 balloon on top of town hall. Clone spell brings in more balloons or one more electro dragon to speed up the attack. With rage spell, it cause massive damage close to town hall which eases up the attacks by following air troops.

Still, it the war base design has the town hall out at the edge, battle blimp is not that useful.

If the opponent put the air sweeper in wrong position, blimp and clone spell can cause massive damage in the town hall area.

##### Stone slammer

Stone slammer is just a giant balloon. Its preferred target is defence building, which ignores the town halls unless giga tesla town hall is triggered.

#### TH12 Spells

Don't use up the spells to early and don't be too conservative to use them. Well-planed timely spells usage is the key to victory.

- Troop boosting spells, rage, haste, clone, jump
- Enemy building destruction spells, lightening, earthquake, freeze
- Enemy troop weakening spells, poison
- Summoning spells, skeleton, bat

- Lightening lvl 7 Max
- Healing lvl 7 Max
- Rage lvl 6 Max
- Jump lvl 3 Max
- Freeze lvl 7 Max
- Clone lvl 5 Max
- Poison lvl 6 Max
- Earthquake lvl 5 Max
- Haste lvl 5 Max
- Skeleton lvl 6 Max
- Bat lvl 5 Max

Lighting in TH12 is not quite useful any more as all the buildings have much higher HP.

Healing is a must have for miners, hog riders, bowlers as it extends their lives for 12 seconds.

Rage is a must have for queen change, bowlers, pekka, king, etc.,

Freeze is a must have for attacking infernos, x-bows, giga teslas. For air troops, timely freeze on air defence is the key to win.

Clone is only used in some special strategies like the electro dragon and balloon strategy.

Poison is a must have in war to take down the CC troop. In raiding, usually not all your opponents have CC troop. Poison is very effective for electro dragon as it's attack speed is very low.

Earthquake can get the wall breaker goes further but it's not that great.

Haste does not increase damage but it increases more speed. Also it's housing capacity is only 1 as the rage is 2. It only lasts for 10 seconds and rage spell lasts for 18 seconds. It goes well with air troops.

Skeleton spells could be very effective against single target inferno towers and other single target defence buildings. The skeletons will be able to distract the defences while other troops finish it off. However, multiple target inferno towers or splash damage dealing buildings like wizard tower wipes out the skeletons very quickly.

Skeleton works great in a open battle base. And it's a great add-on for hot rider as they will clear off the trash building quickly. For miners in a open fields, they can following with miners to speed up.

Skeleton spells can be used to destroy unguarded defenses with dead zones like the mortar or eagle artillery.

Each skeleton HP 30, move speed 24, DpS 25

- Level 2, 18 skeleton, TH10, DpS 450
- Level 3, 22 skeleton, TH10, DpS 550
- Level 4, 26 skeleton, TH11, DpS 650
- Level 5, 30 skeleton, TH12, DpS 750

##### Level 5 Bat Maxed

Bat spell has 1 housing capacity.

Bat prioritize defensive structures above all other targets, and will bypass all other types of enemy buildings and troops while any defenses remain on the battlefield.

Bats can distract and destroy most single-target exposed defenses relatively easily.

A good strategy for bat spell would be to place a lot of them down near the center of the base, along with a rage spell and a freeze spell aiming to destroy single target inferno Towers, air Defenses, and the eagle artillery at the beginning of an attack.

The issue with bat is that they can easily be stopped by wizard towers, air bombs, and multi target inferno towers, air mode x-bows, cannons and archer towers. To avoid that, choose a starting point so to make the most use of it.

Another strategy is use bat at the end of attack to clean up.

Each bat HP 20, move speed 56, attack speed 2s, DpS 30

- Level 2, 9 bat, TH10, DpS 270
- Level 3, 11 bat, TH10, DpS 330
- Level 4, 16 bat, TH11, DpS 480
- Level 5, 21 bat, TH12, DpS 630

If the air defence (HP 1200 level 8 - 1400 level 10) is not protected properly by wizard towers or x-bows, it can be taken down by one bat spell in 3 seconds.

Usually 6 bat spells summons 132 bats (21 x 6), the DpS can go up to 3780 if dropped at the same spot. Level 3 eagle artillery 4800 can be destroyed in 1 to 2 seconds, and level 6 inferno HP 3000, level 10 air defense 1400.

For multi mode inferno, it kills bat very fast. 7 bats per second and 5 targets, so unless the multi inferno is frozen.

Inferno attacking speed 0.128s, 7 bats per second,

Hidden tesla attacking speed 0.6s, 3 bats per second

Giga tesla attacking speed 0.5s, 4 targets, 8 bats per second.

X-bows 3.5 bats per second.

- X-bows level 4 HP 2,700, DpS 95, DpA 12.16, TH11
- X-bows level 5 HP 3,100, DpS 125, DpA 16, TH11
- X-bows level 6 HP 3,500, DpS 155, DpA 19.84, TH12

#### TH12 Queen

Queen has a very high DpS but low HP.

Queen's strategy depends on with or without healers.

##### Queen charge

Queen with 5 healers is known for queen charge.

###### When and when not to use queen charge

The idea behind queen charge strategy is to divide and conquer. Queen charge is very effective at war bases which have multiple distributed compartments which against air strategies. As the inferno, x-bows are distributed, queen walk can destroy eagle artillery first, and one or more distributed compartments. Also, in air strategy, taking out your opponent's high level queen is the key to 3 star.

Usually those war bases do not have lots of small inner compartments. It's a good place for queen charge, otherwise the queen may spend lots of time hitting on the walls before attacking. Lots of good war bases are designed to have lots of small empty compartments to block the path of queen walk and the attack range that queen cannot reach.

Queen walk is also good for raiding some home villages with two layers of walls and without many compartments in-between. Once queen gets in, she can help the main attacking troop a lot.

Some very centralized defence design war base is not recommended to use queen walk. For example, queen walk will fail for sure when entering a battle field is covered by multiple defence building like x-bows. In that case, use bowlers or air strategy will be more effective. Or deploy the queen and king with the wall wrecker so to get to the core. You have to send in other troops like minors or giants, golems to absorb the damage for the queen.

###### Queen charge healers

Level 5 healer HP has 1,500, heal speed 0.7s, healing per pulse 56, healing per second 80. So 5 healers max healing is close to 400, which enable the queen to live for a long enough time under multiple attacks. If in 2 x-bows and one other cannon or archer tower, the total DpS is around 500, it takes around less than 15 seconds to destroy the queen.

To perform the queen charge, level up the queen to 45+ at least, ideally 60, so queen can get higher DpS and HP. The idea is to use queen charge to take out one corner of the base with eagle artillery better with multiple target inferno to create the L shape, so the troops can target the remaining buildings easily. If the healers made it to survive to the core at last, they enable troops to absorb damages from Giga tesla.

If attacking TH11 opponents, with 5 level 5 healers, 1 or 2 rage spells, queen should last long enough to clear one corner of the base. TH11 against TH12 using queen charge is not a good idea as queen is very fragile against high DpS structures unless the TH12 is very rushed. For example, attacking high level TH12, queen cannot survive in range of 2 level 6 X-Bows with one other defensing buildings or another queen.

One major issue is that queen may lost support from healers. For example, each air seeking mine x 3 is a menace to healer; air defence takes down healer very quickly; air bombs deals splash damages to healers. So in queen charge, you need to watch out for healers very closely. For example, watch out when queen and healer are close to the air blower. If the healers are pushed back by air blower, queen will immediately die if under attack from 2 or more single target defence buildings. Don't deploy slow troops and King around queen with healers. If the healers are distracted by troops nearby when queen is under attack, queen will die very soon as well.

Keep the queen and healers alive is one of the keys. Always watching out on queen's health and danger zones. Often the case, when you were deploying other troops or watching other battle field, you saw queen's HP is high so let guard down. But a second later, queen got destroyed when entered a danger zone covered by crossfire of long range defence buildings like x-bows within 3 to 4 seconds.

Air defence and air seeking mine can destroy healers very fast. Experts always deploy a balloon or baby dragon first to trigger air seeking mine around. Maxed air defence DpS 200, 7.5 seconds kill a healer, one seeking air mine can one shot one healer. So experts often launch a balloon first or baby dragon to test.

Once the queen's HP is very low, use range spell to boost up healers and queen so to speed up the healing process. Mark the queen charge danger zone on the map and get prepared when queen enters those area. Always watch out queen's health and use rage cover healers and queen if needed when queen enters into a danger zone. Or, you can use queen's cloak ability which makes queen disappear for 5 seconds and recover a small portion of HP. Queen's ability is better saved when massive DpS is needed.

One drawback is that 5 healers take up 70 housing space already. You only have 210 housing space for others but it's worth it.

##### Queen charge attacking plan

The plan A is use queen to remove as many obstacles as possible so make it easier for main attacking troop. Queen charge is mainly for facilitating other troops, air or ground, depending on opponent's base layout.

Set you expectation reasonably, don't expect the queen is powerful enough to clear out lots of buildings. The goals of queen charge usually are to take out eagle artillery first, and take down the CC troops, then enemy heroes and infernos, x-bows, air defences if they are on the way, as they are the main obstacles for your attacking troops.

The path planing is to choose eagle artillery side first if it is not centered, then lure out the CC troops, and one multiple target inferno tower or enemy heros if they are on the way. It's good enough once this plan is carried off. If possible, plan the path which queen can take out most of splash damage buildings like wizard tower, bomb tower, multiple target inferno tower on the way.

Queen charge is slow as queen is fighting alone. Don't let the queen charge proceed for too along, one attack ends in only 3 minutes, deploy other troops sooner when partial goal is achieved. Before doing that, make sure the queen is not in a danger zone and won't get in danger soon as your focus need to shift to other troops.

Once the eagle artillery is destroyed and queen will be safe for a while, deploy wall wrecker along with other troops or other killer squad on other sides. Don't deploy troops on the same side so to keep the healers stay with queen. If it's the bowler witch strategy, you can deploy them on the same side as bowlers are strong with healers.

Use other killer squads for other inferno towers, use wall breaker with CC troops or stone slammer for town hall, use King or other troops to clear the outside trash buildings.

Before deploying main troops like hog rider or miner, it's better to have the remaining buildings in the L shape if possible so to narrow the path being attacked by the main troops.

Before deploying air units, choose the path which queen can take out air defences, air blowers after eager artillery is gone. If you are lucky to get queen with a couple of healers survived to the giga tesla, queen with healers can absorb lots of damages so to protect the main attacking troops nearby.

Queen's other enemies are tesla farm, single mode inferno, x-bows farm.

To enable the queen to move closer to the target, some funneling troop like giants/wizards, hog rider, pekka can clear some building which may distract the queen. On the way to the target, queen will sometimes leave the path to choose some trash building. It end up that queen keeps hitting walls so get the time wasted.

Always have plan B for queen got destroyed too early.

##### Warden or no Warden in queen walk

It's debateful that if put Warden beside queen. The pro side is Warden's long range shot, which extends queen and healer's health in his coverage, ability to protect them from one eagle artillery's shot. The con side is Warden sometimes leaves the queen to attack some nearby troops or building and healers will be pulled away from the queen. If queen is in a danger zone, she will get destroyed out of the blue because of the sudden lose of healer's support.

Depends on the base layout and divide and conquer strategy, if the opponent's base has all the trash building outside and only x-bows, inferno, town halls in the center distributed in separated compartments, it's better put Warden beside queen to destroy 2 compartments.

If you are using main attack troop like miner or hog riders, Warden should go with the main attack troop which adds more value.

#### TH12 Level 4 Bowler

Level 4 Bowler's HP 390, DpS 90, DpA 198, move speed 14.

Bowlers is used for a killer squad to clear a large condensed area. The strength of bowler is their long range boulders. 
If the opponent's base is very crowded on one main path, for example, several intersected squares, so main defence buildings can be reached from one end to the another, bowler can deal massive damages to close buildings as the boulders deal great damages in long range.

Or, if the defense buildings are centralized in the core, bowler strategy will work well as bowlers are able to clear up a large area.

The weakness is their very low HP, so bowler is powerful yet fragile. Bowlers cannot do close combat without meat shields. Never send in the bowlers first except for using a few to funnel. Use bowlers as the main attacker only they are protected by meat shields (Pekka, golem, giant). Otherwise they won't last long against any defences, each bowler can be destroyed by any defence within 4 to 5 seconds. Also level 3 eagle artillery will wipe out them very quickly just in one shot. If there are CC troops, bowlers will be destroyed very soon.

Giant bombs and bombs will also kill a group of bowlers very quickly. Meat shields must go before the bowlers to trigger the bombs and spring traps, and absorb the damages for bowlers. Bowlers must go after a couple of meat shields. If they are in the front of the army, they will get destroyed very soon. If the front line can absorb lots of damages, then bowlers' long range boulders can deal great damages to the around buildings. Golem and giant are meat shield options as they have high HP and prefer defence buildings, but golem and giant's move speed is 12 which is too slow. When bowler is enraged, they will go to the front line and suicide. Drop the rage spell on the troops in front of bowlers. Pekka's moving speed is 16, which moves faster than bowler but they may leave the army when enraged as they go after any building nearby.

If lots of compartments in the base, it is against bowlers.

It's highly risky with very high rewards.

Witches are great companions for bowlers. Witch's HP is 440 level 4 to 480 level 5 which is not high enough, but Witch's skeletons summoned 12 to 14 can keep defences and troops busy for a little while which extends the bowlers' life.

Healers are bowlers' good friends as well. It's often used after the queen charge, when queen cleared the path to town hall and queen is approaching to the town hall, send in the bowler army to destroy the town halls.

Proper funneling must be done for bowlers so to keep bowlers together and keep the same march direction.

Usually choose the path from eagle artillery to town hall. To deploy the army, funnel the outside with giants and wizards so no one inside will come out, also the funnelling should make sure bowlers will follow the wall wreaker later on. Put giant the first line close to the line, a couple of bowlers 2 tiles behind, drop one balloon to test the air seeking mines, send in the wall wrecker along with king, queen with healers, send in witches to help out clearing nearby buildings, send in the rest bowlers and Warden. Use the first range two or three tiles in front of the bowlers. Prepare for Warden's ability if eagle artillery is activated. Also drop one healing spell so to make bowlers alive. Always freeze eagle artillery and defences close to bowlers. Put ice golem, golem or giants in the wall wrecker will help out a lot.

Rage spell is a must have for bowler. Don't drop the spell on the target building which may send the bowlers away to other buildings, drop it 4 to 5 tiles before the bowlers reach to the target so bowlers can use long range boulder while enraged. Don't drop the rage directly on bowlers which may trigger the bowler to leave the march army to attach buildings not on the path.

Healing spell is better placed before the target buildings as bowlers lose lots of HP when bowlers get there. Or it should be the place when is covered by multiple defence building to make sure bowlers can contribute more before they got destroyed.

Warden must follow and cover the majority of them so bowlers can get some extra HP. Once the group of bowlers is locked by eagle artillery, Warden must use the ability, otherwise the group of bowlers will be wiped off.

Bowler and Witch (BoWitch) with wall wrecker

<https://www.clashtrack.com/en/v/9_K9levlTzM/top-tips-for-bowitch-attack-strategy-explained-clash-of-clans>

Bowler Witch and Healer

With healers, you can do a powerful queen charge first or just mix the healers with bowler and witch.

Or you can have a powerful queen charge first, queen should destroy as many defences as possible. Otherwise, bowlers are very easy to get destroyed.

- 5 Healer
- 17 Bowler
- 8 Witch
- 4 Wall breaker
- 4 Archer
- 3 Rage spell
- 1 Jump spell
- 1 Poison spell
- 2 Freeze spell
- Wall wrecker and CC 1 PEKKA + 1 Ice Golem + 1 Rage spell

- 8 giants
- 1 balloon, 1 wizard, 1 archer, 1 baby drag
- 5 healer
- 4 Witch
- 17 Bowler
- 2 healing
- 2 Rage spell
- 2 Freeze spell
- 1 poison spell
- Wall wrecker and CC 5 Bowler + 1 Rage spell

The attack is queen charge first with warden, when close to the entry point, use giants and witches and king to clear the further buildings. Deploy the wall wrecker, the bowlers will follow it and merge with the queen and healers.

Bowler Witch Bat

- 1 Balloon
- 1 Electro dragon
- 2 Ice Golems
- 12 witches
- 6 Bowlers
- 1 Pekka
- 2 Wizard
- 2 Archer
- 7 Bat spell
- 1 Poison
- 3 Freeze
- Wall wrecker and CC 1 PEKKA + 1 Ice Golem + 1 Rage spell

Bowler Witch and Bat

- 2 Golem or Ice golems or equivalent giants
- 10 Witch
- 16 Bowler
- 2 Minion
- 7 Bat spell
- 1 Rage spell
- 2 Freeze spell
- Wall wrecker and CC 5 Bowler + 1 Rage spell

Bowler Pekka farming

See the Pekka smash strategy bellow

While looting, bowler strategy is very effective for looting dark elixir. Targeting the dark elixir usually close to town hall, send the wall wrecker followed by meat shield (giants or golems), heros, healers and bowlers. With rage spell, one healing spell and warden's ability, bowlers should be able to destroy the dark elixir storage in the long range. If the town hall is the area, it's very easy to get 50% more destruction rate and the town hall so to get 2 star. But most of the bowlers will be lost.

#### TH12 level 8 PEKKA

King's attack speed 1.2s, move speed 16, range 1 tile, search range 9 tiles

- Level 50 king HP 5,700 DpS 332, DpA 398.4. When in ability, DpS 878 in 10s
- Level 55 king HP 6,452 DpS 369, DpA 442.8. When in ability, DpS 987 in 10s
- Level 60 king HP 7,303 DpS 410, DpA 492.0. When in ability, DpS 1,028 in 10s

PEKKA attack speed 1.8s, move speed 16, range 0.8 tile, housing space 25

- Level 7 PEKKA HP 5,700 DpS 540, DpA 972
- Level 8 PEKKA HP 6,300 DpS 610, DpA 1098

Level 7 PEKKA is kind of a level 50 king and Level 8 PEKKA is kind of a level 55 king.

PEKKA Smash strategy

The idea is to use bowlers as the killer squad to destroy the town hall adn the center where has the most defence building then pekkas can keep going as PEKKA's HP is very high.

The setup:

- 5 PEKKA
- 4 Wizard
- 8 Bowler
- 4 Healer
- 1 Balloon
- 1 Electro dragon
- 3 Rage spell
- 1 Jump spell
- 1 Healing spell
- 1 Freeze spell
- Wall wrecker and CC 1 PEKKA + 1 Ice Golem + 1 Rage spell

The execution of plan:

Choose the path which is from eagle artillery to town hall.

Use 1 electro dragon, and 1 balloon / PEKKA with wizards to clear the trash building outside and behind the first layer of wall.

Clean up the trash buildings outside so troops won't get out, use Electro dragon on one side and a little bit queen charge on the other side.

Once queen close to the break through entry point, deploy wall wrecker with ice golem and golem, send in king, pekkas so queen and healers will merge into the troop. Let them march a bit further to clear the buildings a bit and if there is CC troop wait for the queen to clear up the CC. Send in the bowlers and Warden. Freeze the infernos and drop the rage 2 tiles before bowlers. Watch out for king and queen's health and use king and queen's ability if necessary. If the town hall is level 5 giga tesla, when the town hall's HP is low, use warden's ability so to avoid the 1000 damage. Once the area is about to cleared, drop the jump spell so bowlers, pekkas, heroes can still move forward. It's often 2 star quickly guaranteed but hard to get 3 star.

PeBoBat strategy

One problem is the above PEKKA smash is too slow and often runs out of time. That's why bat spell can be used for the clean up.

PEKKA + Bowler + Bat spell variations

- 4 PEKKA
- 3 Wizard
- 10 Bowler
- 2 Archer
- 4 Healer
- 10 Hog Rider
- 1 Rage spell
- 6 Bat spell
- 1 Poison spell
- 2 Freeze spell
- Wall wrecker and CC 1 PEKKA + 1 Ice Golem + 1 Rage spell

- 4 PEKKA
- 3 Wizard
- 8 Bowler
- 1 electro dragon
- 5 Healer
- 1 Giant
- 3 Balloons
- 1 Rage spell
- 1 Jump spell
- 5 Bat spell
- 2 Freeze spell
- Wall wrecker and CC 1 PEKKA + 1 Ice Golem + 1 Rage spell

<https://www.youtube.com/watch?v=ukKuTDAApMw>

The execution of plan is like above but replaced 2 rage and 1 jump spell with 6 or more bat spells. 1 poison spell is recommended for taking down the CC troop.

Try to destroy as much wizard towers as possible. Usually one or two Pekka and queen will survive and use bats to clean up.

#### TH12 level 6 Miner / level 9 hog rider

- Level 6 miner HP 870, move speed 32, DpS 120 with attacking speed 1.7s.
- Level 9 hog riders HP 920, move speed 24, DpS 161 with attacking speed 1.

Usually at this stage, you are facing TH12 level 5 with Giga tesla and multiple inferno tower which will destroy the miners or hog riders extremely quickly.

If 5 hog riders managed to reach the inferno tower not covered by other defences, within 4 to 5 seconds they should be able to take down the inferno.

#### TH12 Air strategy - Electro dragon

There are lots of ground defensing systems, but for air, there are not that much. If your opponent has not upgraded the air defences or didn't put the air defences in a good place, for example, can be easily accessed by balloon or bat spell, it's a perfect target for air strategies, mainly electro dragons, drag bat, lava loonion and so on.

Electro dragon has a special attack - chain lightening, it can hit up to 5 building connected. Chain lightening damage dealt will decrease 20% for chained buildings. The buildings must be at most one tile apart. If they are two tiles apart, chain lightening will be prevented.

To attack a higher level TH12 with very high ground DpS dealing defences and very high level walls, miner or bowler often cannot get the town hall if heavy defence is around. If you are aiming at 3 stars just want to 2 star your enemy clan's top war rank players, electro dragon is a solid strategy. Focus on taking down the town hall and get a 50% more destruction rate with electro dragons is not that hard and easier than other ground attacking strategies.

If the war base is a distributed design with trash buildings spread out all over the map, it's not a good idea to use electro dragon as the electro dragon loses the chain lightening power and takes more time to destroy every building in its range, also sometime it will fly away from the core to attack outside trash buildings, unless you use some troops to funnel timely or in advance.

If lots of trash buildings are outside the wall and the defence buildings are condensed in the center, it's a good target as funneling can be properly done by king and one electro dragon. High level king can clear one side, and one electro dragon can clear the other. Once both sides are cleared a bit so no trashing building will distract the electro dragons, the rest air troops can move forward faster towards the center with rage or haste spell and destroy the center very fast.

Electro dragon strategy is as following:

- troops
  - 12 balloons first wave attack, 1 baby dragon to clean up, 7 electro dragons, 3 rage spells, 5 freeze spells
  - with 8 more CC balloons and 1 rage or 1 haste and 1 freeze
- base analyze
  - with low level heroes, aiming at 2 star with high percentage. Most bases put the defence focus on right and bottom.
  - some anti 3-star base design has the town hall exposed or at the corner, king and queen might be able to take it down on their own
  - notice the possible freeze and poison spell drop positions, make sure it can cover most of the defence building
    - air sweeper is the most annoying enemy to electro dragon
    - eagle artillery can be annoying
  - locate the air sweepers, usually it's close to town hall or eagle artillery, get the freeze spell plan. Electro dragons won't move forward against the air push unless rage/haste or freeze spell is used
  - locate the clan castle as you need to get the poison spell well planned
  - locate the enemy queen as you need to get the poison spell well planned, enemy queen destroys the electro dragons quickly.
  - it's better to have eagle artillery on the path
  - avoid the air defences at the beginning  
    - if the air defence is located at the middle of inner layer, funnel from conner
    - if the air defence is located at the corner of inner layer, funnel from the middle
    - any exposed air defence so the king or queen can do a suicide attack
  - multi-target inferno doesn't damage electro dragon much but single inferno needs to be reset and it takes 10 seconds to kill anything.
- funnelling to choose the side or corner
  - the goal is to make the attacking path narrower so the e dragon will not go astray. Once the attack path is defined, if starts from conner, clear the adjacent sides middle. If starts from the middle of the side, clear the adjacent two corners.
- siege machine selection
  - wall wrecker doesn't require funnelling as it goes straight to town hall. It has to have some balloons protected, otherwise it cannot reach far. King and queen should follow with wall wrecker to take out some CC and enemy queen. If the wall level is too high, it may cause issue to the wall wrecker.
  - stone slammer prefers defence buildings. It is for funneling or cleaning up.
    - use it only the proper funneling is done.
  - battle blimp goes well with maxed clone spell to send in one more balloons. It should be deployed when the path to the town hall is cleared.
- attack process
  - funneling with coconut loon first to test seeking air mine where the funneling electro dragon will be deployed
  - use king or electro dragon for funneling, be patient for the disconnected building
  - deploy the first wall of balloons and electro dragons, not to close to each other to avoid air bomb and trigger as many seeking air mines as it can.
  - deploy the electro dragons, keep 2-3 tiles away from each other
  - deploy Warden in air mode following the dragons as Warden can extend dragon's HP in range and Warden's ability help the dragons get a few extremely important seconds in the core which could totally change the game
  - deploy the siege machine behind the air troop
  - deploy the queen and king to follow with the wall wrecker if needed
- Spells is the key to win
  - patient, calm, don't panic
  - if board side, two rage side by side when balloons enter in. If conner, in tandem. The goal is to help the balloons move fast towards the air defence.
  - the third rage is to get the most in the center when most of the troops get close to the center, put the third rage there so hopefully the troops can destroy the town hall, only 2 -3 tiles ahead of the target.
  - poison is for enemy queen and CC
  - free air sweeper, air defence and eagle artillery while the balloons and dragons are approaching to the center

The main obstacle of electro dragon is air sweeper, air defence, single target inferno.

While the electro dragons are slowly marching, you need to protect them. You have 5 freeze spells. Watch out for the army marching forward, use the freeze when the army in contact with inferno, air blower, air defence in range, cover as many as you can.

And you have two rage spells, never drop them directly on the troops which will scatter them away, focus on the target to destroy, drop it 2 tiles before the area they will enter in.

Use Warden's ability is another key. The priority is to save the ability for the level 5 giga tesla town hall. When Warden is around the town hall and town hall's HP run low, use it because it deals 1000 damage to the surrounding buildings. If not level 5 giga tesla, then you can save it later. If the electro dragons in Warden's range are locked by eagle artillery, after eagle artillery fired, use Warden's ability. Or once the hidden tesla farm or giga tesla are exposed in the center, Warden's ability can make the troop invisible for a few seconds which the dragon may be able to destroy the teslas.

Also watch out for king's and queen's hp, use their abilities timely.

In a nutshell, choose the better side to start with the attack, the proper funneling, the timing to deploy the balloons and dragons with Warden, seige machine and queen. The coordination between the heroes and dragons, and the timing with rage, freeze spell and Warden's ability, those are the key factors for the win.

#### TH12 Air strategy - Dragon Bat

Dragon Bat strategy is often using 10 dragons, 10 balloons to take down air defence, 7 bat spell and 2 freeze and 2 rage spell to launch the bats, one baby dragon and some minions for cleanup.

Each bat DpS 30.

Each level 5 bat spell summons 21 bats and DpS 630. If the air defence (HP 1200 - 1400) is not protected properly, it can be taken down by the bat wave in 3 seconds.

Usually 6 bat spells summons 132 bats (21 x 6), the DpS can go up to 3780 if dropped at the same spot. Level 3 eagle artillery 4800 can be destroyed in 1 to 2 seconds, and level 6 inferno HP 3000, level 10 air defense 1400.

Bats prefer defence structures, path selection is they choose the next closest defence structure.

Bat spell can help at the beginning, middle and end game.

If the opponent's war base is not properly designed for bats, for example, no wizard tower to protect the target and x-bows are set to ground only, then you can take advantage by making good use of the bat spell. At the beginning mark out the defence structures and choose a path which are not covered by the wizard towers. If there is one or two, freeze spells can help. If town hall giga tesla is triggered, they are considered as defence structure. Level 5 town hall can destroy the bat wave easily like the multiple inferno.

For dragon bat strategy, mark out all the wizard towers and air and ground x-bows as they are the main enemies for bats. Choose the side which balloons and dragons can easily access and destroy most of them. Use heroes, and stone hammer as a killer squad to destroy some obstacles like x-bows, infernos and eagle artillery. If possible, use the queen to create a L shape and use king to clear up trash buildings outside. While dragons marching with Warden, release the bats to speed up the dragon attack and they can distract the air defences for the dragons and balloons.

Sometimes you can save the bats at last while most of the defences and attacking dragons are gone, release bats before baby dragon and minion clean up.

Level 3 electro dragon DpS 300 DpA HP 4,200, move speed 16, housing space 30

Level 7 dragon DpS 310 DpA 387.5 HP 3,600, move speed 12, housing space 20

Electro dragon's lighting can hit 5 building connected, dragon can deal splash damage.

#### TH12 Air strategy - Hero and lava loons

Heros can use the suicide hero strategy or queen charge.

- Queen walk with healers and wall breakers to take out eagle artillery, CC troop, and possibly enemy queen, town hall.
- King clear out the trash buildings outside
- Stone slammer
- 2 Lava hound to take down the air defence
- Warden with massive balloons 3 finger
- 3 rage and 4 haze and 1 poison

## TH12 Farming

Farming strategy is very different from war strategy. You are not looking for 3 stars but just for maximum profit.

Easy farming strategy is use electro dragons, lavaloonion, miners, pekka bowler.

## TH12 Base design

Home village usually protects resource storages, but in war base, those ones become trash building.

## League

![League](https://www.allclash.com/farming-elixir-strategy/star-and-league-bonus/)

## Wars

<https://www.allclash.com/ultimate-clan-wars-army-setup/>

## Readings

[Flammy's Strategy Guides](https://clashofclans.fandom.com/wiki/Flammy%27s_Strategy_Guides)

<https://www.allclash.com/>

<http://www.cocland.com>

<https://cocbases.com/>

<https://www.clashpedia.com/>

<https://www.clashtrack.com/>

<https://www.clashfordummies.com/>

## Upgrade Progress

Resources (gold, elixir, and dark elixir) are required to upgrade all the buildings, defences, troops, walls and heros.

Never rush the town hall level, be patient and max out all and then progress to the next level.

Heroes and troops enables to 3 star in war. Defences and walls make your opponent harder to get 3 star from you.

### Lancelot

Progress

- TH 12 Level 186, King 32 Queen 53 Warden 18 as of 05/02/2019
- TH 12 Level 188, King 35 Queen 54 Warden 20 as of 05/22/2019
- TH 12 Level 190, King 36 Queen 55 Warden 20 as of 06/02/2019
- TH 12 Level 191, King 36 Queen 58 Warden 20 as of 06/16/2019
- TH 12 Level 194, King 38 Queen 60 Warden 23 as of 07/02/2019
- TH 12 Level 195, King 39 Queen 62 Warden 26 as of 07/15/2019
- TH 12 Level 197, King 42 Queen 64 Warden 29 as of 08/02/2019
- TH 12 Level 199, King 43 Queen 65 Warden 30 as of 08/15/2019
- TH 12 Level 201, King 47 Queen 65 Warden 34 as of 09/02/2019
- TH 12 Level 201, King 47 Queen 65 Warden 35 as of 09/15/2019

- Walls: level 11 x 81, level 10 x 218, level 9 x 1, as of 05/02/2019
- Walls: level 11 x 95, level 10 x 205 as of 05/22/2019
- Walls: level 11 x 127, level 10 x 173 as of 06/02/2019
- Walls: level 11 x 148, level 10 x 152 as of 06/16/2019
- Walls: level 11 x 174, level 10 x 126 as of 07/02/2019
- Walls: level 11 x 221, level 10 x 79 as of 07/15/2019
- Walls: level 12 x 14, level 11 x 286 as of 08/02/2019
- Walls: level 13 x 10, level 12 x 60, level 11 x 230 as of 08/15/2019
- Walls: level 13 x 10, level 12 x 190, level 11 x 100 as of 09/02/2019
- Walls: level 13 x 10, level 12 x 236, level 11 x 54 as of 09/15/2019

Priority list

- Hero level up

Maximize the troops

- x Barbarian lvl 8 Max
- x Archer lvl 8 Max
- x Giant lvl 9 Max
- Goblin lvl 7 Max, now 6
- x Wall breakers lvl 8 Max
- x Balloon lvl 8 Max
- x Wizard lvl 9 Max
- x Healer lvl 5 Max
- x Dragon lvl 7 Max
- x PEKKA lvl 8 Max
- x Baby dragon lvl 6 Max
- x Miner lvl 6 Max
- x Electro Dragon lvl 3 Max
- x Minion lvl 8 Max
- x Hog rider lvl 9 Max
- x Valkyrie lvl 7 Max
- Golem lvl 9 Max, now 6
- x Witch lvl 5 Max
- x Lava Hound lvl 5 Max
- x Bowler lvl 4 Max
- x Ice golem lvl 5 Max

Seige machine

- x Wall wrecker 3 Max
- Battle blimp 3 Max, now 2
- x Stone slammer 3 Max

Maximize the spells

- x Lighting lvl 7 Max
- x Healing lvl 7 Max
- x Rage lvl 6 Max
- x Jump lvl 3 Max
- x Freeze lvl 7 Max
- Clone lvl 5 Max, now 2
- x Poison lvl 6 Max
- x Earthquake lvl 5 Max
- x Haste lvl 5 Max
- Skeleton lvl 6 Max, now 3
- x Bat lvl 5 Max

### warshong

- TH 12 Level 161, King 32 Queen 39 Warden 20 as of 03/23/2019
- TH 12 Level 169, King 35 Queen 48 Warden 20 as of 05/07/2019
- TH 12 Level 171, King 35 Queen 52 Warden 20 as of 05/22/2019
- TH 12 Level 172, King 35 Queen 54 Warden 20 as of 06/02/2019
- TH 12 Level 173, King 35 Queen 56 Warden 20 as of 06/16/2019
- TH 12 Level 175, King 36 Queen 60 Warden 20 as of 07/02/2019
- TH 12 Level 179, King 36 Queen 63 Warden 22 as of 08/09/2019
- TH 12 Level 181, King 40 Queen 65 Warden 28 as of 09/02/2019
- TH 12 Level 181, King 40 Queen 65 Warden 30 as of 09/15/2019

- Walls: level 12 x 3, level 11 x 134, level 10 x 163 as of 05/02/2019
- Walls: level 12 x 3, level 11 x 165, level 10 x 132 as of 05/22/2019
- Walls: level 12 x 3, level 11 x 235, level 10 x 62 as of 06/16/2019
- Walls: level 12 x 3, level 11 x 278, level 10 x 19 as of 07/02/2019
- Walls: level 12 x 53, level 11 x 247 as of 08/02/2019
- Walls: level 12 x 75, level 11 x 225 as of 08/15/2019
- Walls: level 12 x 147, level 11 x 153 as of 09/02/2019
- Walls: level 12 x 200, level 11 x 100 as of 09/15/2019

Maximize the troops

- x Barbarian lvl 8 Max
- x Archer lvl 8 Max
- Giant lvl 9 Max, now 8
- Goblin lvl 7 Max, now 5
- Wall breakers lvl 8 Max, now 7
- x Balloon lvl 8 Max
- x Wizard lvl 9 Max
- x Healer lvl 5 Max
- Dragon lvl 7 Max, now 6
- PEKKA lvl 8 Max, now 7
- Baby dragon lvl 6 Max, now 3
- x Miner lvl 6 Max
- x Electro Dragon lvl 3 Max
- x Minion lvl 8 Max
- Hog rider lvl 9 Max, now 7
- Valkyrie lvl 7 Max, now 6
- Golem lvl 9 Max, now 7
- x Witch lvl 5 Max
- x Lava Hound lvl 5 Max
- x Bowler lvl 4 Max
- x Ice golem lvl 5 Max

Seige machine

- x Wall wrecker 3 Max
- Battle blimp 3 Max, now 1
- x Stone slammer 3 Max

Maximize the spells

- Lighting lvl 7 Max, now 6
- x Healing lvl 7 Max
- x Rage lvl 6 Max
- x Jump lvl 3 Max
- x Freeze lvl 7 Max
- Clone lvl 5 Max, now 2
- x Poison lvl 6 Max
- Earthquake lvl 5 Max, now 3
- x Haste lvl 5 Max
- Skeleton lvl 6 Max, now 1
- Bat lvl 5 Max, now 1

### givemepower8

- TH 11 Level 142, King 25 Queen 34 Warden 2 as of 03/23/2019
- TH 11 Level 150, King 29 Queen 40 Warden 8 as of 05/02/2019
- TH 11 Level 152, King 30 Queen 42 Warden 9 as of 05/22/2019
- TH 11 Level 154, King 30 Queen 46 Warden 11 as of 06/02/2019
- TH 11 Level 156, King 31 Queen 47 Warden 11 as of 06/16/2019
- TH 11 Level 159, King 33 Queen 49 Warden 11 as of 07/02/2019
- TH 11 Level 161, King 35 Queen 50 Warden 14 as of 07/22/2019
- TH 11 Level 162, King 36 Queen 50 Warden 15 as of 08/02/2019
- TH 11 Level 164, King 38 Queen 50 Warden 16 as of 08/15/2019
- TH 12 Level 166, King 43 Queen 50 Warden 19 as of 09/02/2019
- TH 12 Level 167, King 43 Queen 50 Warden 19 as of 09/15/2019

- Walls: level 11 x 89, level 10 x 211 as of 05/02/2019
- Walls: level 11 x 100, level 10 x 200 as of 05/22/2019
- Walls: level 11 x 120, level 10 x 180 as of 06/02/2019
- Walls: level 11 x 125, level 10 x 175 as of 06/16/2019
- Walls: level 11 x 148, level 10 x 152 as of 07/02/2019
- Walls: level 11 x 189, level 10 x 111 as of 07/22/2019
- Walls: level 11 x 296, level 10 x 4 as of 08/02/2019
- Walls: level 12 x 60, level 11 x 240 as of 08/15/2019
- Walls: level 12 x 233, level 11 x 67 as of 09/02/2019
- Walls: level 12 x 276, level 11 x 24 as of 09/15/2019

Priority list

- Heroes
- Miner to level 6
- Witch to level 5 - ongoing
- Freeze to level 7

Maximize the troops

- x Barbarian lvl 8 Max
- x Archer lvl 8 Max
- Giant lvl 9 Max, now 8
- Goblin lvl 7 Max, now 6
- Wall breakers lvl 8 Max, now 7
- x Balloon lvl 8 Max
- Wizard lvl 9 Max, now 8
- x Healer lvl 5 Max
- Dragon lvl 7 Max, now 6
- PEKKA lvl 8 Max, now 7
- Baby dragon lvl 6 Max, now 5
- Miner lvl 6 Max, now 5
- x Electro Dragon lvl 3 Max
- Minion lvl 8 Max, now 7
- Hog rider lvl 9 Max, now 7
- Valkyrie lvl 7 Max, now 6
- Golem lvl 9 Max, now 7
- Witch lvl 5 Max, now 4
- Lava Hound lvl 5 Max, now 4
- x Bowler lvl 4 Max
- Ice golem lvl 5 Max, now 3

Maximize the spells

- x Lighting lvl 7 Max
- x Healing lvl 7 Max
- x Rage lvl 6 Max
- x Jump lvl 3 Max
- Freeze lvl 7 Max, now 6
- Clone lvl 5 Max, now 2
- x Poison lvl 6 Max
- x Earthquake lvl 5 Max
- x Haste lvl 5 Max
- Skeleton lvl 6 Max, now 4
- Bat lvl 5 Max, now 2
