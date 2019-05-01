# COC

Wisely dispatch troops to destroy opponent's defensing system and town hall. For a multiplayer battle, player gets one star by 50% more destruction, one star by destroying the town hall, three stars by 100% destruction. In a clan war, leader decides the size of players, each player has two attacks, the clan who gets more stars wins the clan war. If two clans get the same number of stars, the clan has more destruction rate wins the war.

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

### Path AI

Most of troops have no preferred target when attacking, i.e., Barbarian, Archer, Wizard, Dragon, PEKKA, Baby Dragon, Miner, Electro Dragon, Minion, Valkyrie, Witch.

When troops have no preferred target when attacking, they will simply attack the closest building. However, once they become aware of enemy Clan Castle troops, Heroes, or Skeleton Trap skeletons (either by being attacked themselves or by being near another friendly troop under attack), they will leave their previously targeted building and instead engage the enemy troops. Once all of the nearby enemy troops are defeated, the Bowlers will proceed to attack the nearest structure.

If the path to the target is blocked by walls, they will attack the wall to try to get through and destroy the building. Miner can burrow through the walls.

For troops have preferred target, they will bypass all other types of enemy buildings and troops while any defenses remain on the battlefield. This is true even if they are under attack by enemy Clan Castle troops, heroes or Skeleton Trap skeletons. Note that like all troops that prioritize defenses, Giants do not consider the Clan Castle to be a defense regardless of whether or not it contains enemy troops, but do consider the defending Grand Warden and the level 12 Town Hall(if its Giga Tesla has been triggered) to be defensive buildings.

- Giant prioritizes defensive structures above all other targets.
- Goblin prioritizes resource buildings above all other targets.
- Wall breakers prioritizes walls above all other targets, and will completely ignore any building or enemy troop while even a single segment of Wall exists on the battlefield. Wall breakers look for the nearest building that is enclosed (fully or partially) by Walls and target any Wall that surrounds them. They only attack by locating the nearest protected (wall enclosed) building and destroying its protective Walls. Note that Wall Breakers will not target single Walls. There needs to be at least 3 connected Walls for a Wall Breaker to target it, and it must be protecting a building fully or partially.
- Balloon prioritizes defensive structures above all other targets.
- Hog Rider prioritizes defensive structures above all other targets.
- Golem prioritizes defensive structures above all other targets.
- Lava Hound prioritizes Air Defenses above all other target.
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

Unlocked at Unlocked at TH 3.

5 housing space, attack speed 2s, move speed: 12, range: 1 tile

Prefer defensive structures.

Strength: higher HP so better distracting troop to protect the group.

Weakness: Slow and low attack. Giant will ignore troops while any defensive structures in range so it's vulnerable to defensing heros.

Giant is terrible at tearing down walls, must go with wizard as a meat shield.

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

Unlocked at TH 4. It's on the top priority to develop.

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

Unlocked at Unlocked at TH 5. It's on the top priority to develop.

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

Unlocked at Unlocked at TH 7.

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

Unlocked at Unlocked at TH 7.

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

Unlocked at Unlocked at TH 8.

25 housing space, attack speed 1.8s, move speed: 16, range: 0.8 tile

No preferred target. Sometimes in cell base, PEKKA will get distracted easily. You need to create funnels to make best use of it.

Strength: High HP and DpS, can absorb lots of damage.

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

Unlocked at Unlocked at TH 9.

[Baby dragon](https://clashofclans.fandom.com/wiki/Baby_Dragon/Home_Village) is like a mini dragon. It's good for creating funnels.

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

Unlocked at Unlocked at TH 10.

[Miner](https://clashofclans.fandom.com/wiki/Miner) is often used with hero's support.

Miner takes 6 housing space, attack speed 1.7s, move speed: 32, range: 0.5 tile

Strength: Can burrow under walls.

Weakness: Vulnerable to splash damage building like bomb tower, also vulnerable to giant bomb.

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

Unlocked at Unlocked at TH 11.

30 housing space, attack speed 3.5s, move speed: 12, range: 3 tiles

Strength:

Weakness:

| Level | DpS | DpA   | Damage when destroyed | HP    | Cost   | Research Cost | Laboratory | Research Time |
| ----- | --- | ----- | --------------------- | ----- | ------ | ------------- | ---------- | ------------- |
| 1     | 240 | 840   | 50 x6                 | 3,200 | 28,000 | N/A           | N/A        | N/A           |
| 2     | 270 | 945   | 55 x6                 | 3,700 | 32,000 | 9,000,000     | 9          | 10 days       |
| 3     | 300 | 1,050 | 60 x6                 | 4,200 | 36,000 | 11,000,000    | 10         | 14 days       |

### Minion

Unlocked at Unlocked at TH 7.

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

Unlocked at Unlocked at TH 7 and dark barrack level 2.

5 housing space, attack speed 1s, move speed: 24, range: 0.6 tile

Prefer defensive structures.

At TH8, level 4 hog rider is a very strong attacker in war.

Strength: Jump over walls.

Weakness: Vulnerable to splash damage, giant bomb. Relatively expensive, it's not for looting. 20 level 4 hogs will cost 800 dark elixir already.

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
| 5     | 54  | 129.6 | 530               | 6,300 | 425       | 90,000             | 8          | 8 days        |
| 6     | 58  | 139.2 | 530               | 6,600 | 500       | 150,000            | 9          | 9d 12h        |
| 7     | 62  | 148.8 | 530               | 6,900 | 600       | 200,000            | 9          | 11d 12h       |
| 8     | 66  | 158.4 | 530               | 7,200 | 700       | 200,000            | 10         | 14 days       |

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

Unlocked at at TH 9 and dark barrack level 6.

30 housing space, attack speed 2s, move speed: 20, range: 1 tile

Meat shield for other air troops.

| Level | DpS | DpA | Damage upon death | Lava pups | HP    | Cost (DE) | Research Cost (DE) | Laboratory | Research Time |
| ----- | --- | --- | ----------------- | --------- | ----- | --------- | ------------------ | ---------- | ------------- |
| 1     | 10  | 20  | 100               | 8         | 6,100 | 390       | N/A                | N/A        | N/A           |
| 2     | 12  | 24  | 150               | 10        | 6,500 | 450       | 60,000             | 7          | 6d 12h        |
| 3     | 14  | 28  | 200               | 12        | 6,800 | 510       | 70,000             | 8          | 8 days        |
| 4     | 16  | 32  | 250               | 14        | 7,200 | 570       | 150,000            | 9          | 11d 12h       |
| 5     | 18  | 36  | 300               | 16        | 7,600 | 630       | 200,000            | 10         | 14 days       |

### Bowler

Bowler is unlocked at TH 10.

Bowler takes 6 housing space, attack speed 2.2s, move speed: 14, range: 3 tiles

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

Radius 2 tiles, Random Radius,3.5 tiles, Number of Strikes 6, Time Between Strikes 0.4, Housing Space 2, Brewing Time 6 minutes, Spell Factory Level Required 1

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

It's vital for keeping hog riders, miners live. One spell lasts 12 seconds.

Radius 5, Number of Pulses 40, Time Between Pulses 0.3s, Housing Space 2, Brewing Time 6 minutes, Spell Factory Level Required 2.

| Level | Total Damage | Damage per Strike | Cost   | Research Cost | Research Time | Laboratory |
| ----- | ------------ | ----------------- | ------ | ------------- | ------------- | ---------- |
| 1     | 600          | 15                | 15,000 | N/A           | N/A           | N/A        |
| 2     | 800          | 20                | 16,500 | 300,000       | 1d            | 2          |
| 3     | 1,000        | 25                | 18,000 | 600,000       | 2d            | 4          |
| 4     | 1,200        | 30                | 19,000 | 1,200,000     | 3d            | 5          |
| 5     | 1,400        | 35                | 21,000 | 2,000,000     | 4d            | 6          |
| 6     | 1,600        | 40                | 23,000 | 4,000,000     | 6d            | 7          |
| 7     | 1,800        | 45                | 25,000 | 6,000,000     | 10d           | 8          |

### Rage

It's a must-have for boosting attacking. One spell lasts 18 seconds.

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

In higher town halls, as the wall level gets much higher, it's harder to break through the wall. Jump spell can brings troops to the core. It can be used on the wall intersections.

### Freeze

### Clone

### Poison

It's a must-have for taking CC troops.

### Earthquake

### Haste

For slow air attacking units.

### Skeleton

### Bat

## Heroes

### Archer Queen

[Queen](https://clashofclans.fandom.com/wiki/Archer_Queen)

### Barbarian King

### Great Warden

## Building

### Barracks

There are two kind of troops: elixir troop and dark elixir troop.

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

Mortar cannot target troops within 4 tiles.

## Strategies

Study your opponent's base. Take out opponent's defence so to launch more effective attack.

Maximize the troops to have a balanced air and ground attack system.

If the base air defence level is low, use air troops.

If the base ground defence level is strong, use tank like golem to distract along with hog rider, bowler, miner.

[Strategy_Guides](https://clashofclans.fandom.com/wiki/Strategy_Guides)

### CC lure

In war, enemies have clan castle troop. For example, lower level TH has dragon, witch in common. Higher level has ice golems. If they are not dealt ahead of time, they cause lots of trouble to the attacking troops.

Send one archer or fast troop close to the clan castle so the troop will come out, send another archer to attack the corner

Poison spell is a must-have to take down the cc troops.

Sometimes, the CC is right at the core of the base so it's hard to lure it out.

### Funneling

Many troops have no preferred target so the actions are controlled by AI. Once a troop is dispatched, you cannot control where it goes explicitly but you can control the path by sending other troops to create the path. Otherwise, the troop will pick attacking target on their own, usually the closet building or enemy troops engaged, and get distracted easily.

For example, without funneling, heros and pekkas will go around the outside of the base to destroy the closest non-defensing building while still under the attack of defensing building inside the wall.

Funneling is to create the path so to guild the troop to go to the expected location by breaking walls and eliminating those distractions at the right timing. For example, wall breaker creates a funnel after breaking the first layer of the base. Bowlers, air troops can create funnels as they can destroy buildings massively.

Sometimes, heros will launch suicide attack to destroy defensing structures to create the funnels for attacking troops.

Creating the funnel depends on the attacking strategy. For example,

- clear the outside buildings
- clear one corner with the eagle artillery
- use wall breaker, stone slammer or jump spell so the troops can get close to the core

Baby dragons and wizards are often used to clear the outside buildings. Wizards is a bit expensive as 6 wizards takes up 24 housing capacity but one baby dragon only takes 10 housing capacity which usually can take a few building without air defence.

Heros with queen charge can clear two outsides of base or with wall breaker they can clear one corner of the base to create the L shape so the attacking troops will be more effective to destroy the buildings.

### TH 8 Strategies

Maximize gold mine, elixir collector and dark elixir collector.

- TH8 can have 6 of each and maximum level 12. Each level 12 generates 4200/h, 100.8K/day. Roughly 600K gold and elixir a day.
- TH8 can have 2 Dark elixir collector and maximum level 3. Each level 3 generates 45/h, 1080/day. Roughly 2K a day.

Maximize the camps' house capacity. TH 8 has 200 house capacity and 25 CC house capacity.

Maximize the troops

- Barbarian lvl 5
- Archer lvl 5
- Giant lvl 5
- Goblin lvl 5
- Wall breakers lvl 5
- Balloon lvl 5
- Wizard lvl 5
- Healer lvl 3
- Dragon lvl 3
- PEKKA lvl 3
- Minion lvl 4
- Hog rider lvl 4
- Valkyrie lvl 2
- Golem lvl 2
- Barbarian King 10

Maximize the spells

- Lighting lvl 5
- Healing lvl 5
- Rage lvl 5
- Poison lvl 2
- Earthquake lvl 2

maximize the defence

- Cannon lvl 10, can gear up
- Archer tower lvl 10
- Mortar lvl 6, can gear up if builder hall level 8
- Air defense lvl 6
- Wizard tower lvl 6
- Air sweeper lvl 4
- Hidden Tesla lvl 6
- Bomb tower lvl 2
- Bombs lvl 5
- Spring traps lvl 3
- Air bomb lvl 3
- Giant bomb lvl 3
- Seeking air mine lvl 1
- Skeleton trap lvl 2

#### Facts

Most of the TH8 opponents wall level is level 7 purple crystal HP 2500 to level 8 skull stone HP 3000.

Wall breaker is crucial to create the path to the core of base. Wall breakers lvl 5 HP 53, move speed 24, can cause 1,840 damage on the walls. 1 wall breaker can one-shot take down gold (lvl 5) and lower level walls. 2 wall breakers can take down pink, purple crystal walls and skull walls (lvl 6,7,8). Don't deploy it close to cannon, archer tower if there is no meat shield, otherwise it will be destroyed instantly as cannon and archer fires very fast. For mortars which attack every 5 seconds, a lvl 5 wall breaker can take one lvl 5 mortar splash damage, but will be instantly killed by lvl 6 motors. For wizard tower, it can withstand 1 attack damage but the window is 2 seconds.

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

  DragLoon is to look at the air sweeper to decide which way to attack. You don't want to attack the area which is covered by the air sweeper which slows the air troop. Use 2 lightning spells to take out 1 air defense which is closest to the core. Depends on the base layout, the balloons can try to get the rest 2 air defenses or try to funnel the outside buildings so the dragons stay inside. If air defence is reachable, deploy dragons to create path to the rest 2 air defenses and clear the wizard tower as they will damage the balloons. Before they can be hit by the air defence, be aware of the timing to deploy the balloons. Rage or haze the balloons to destroy the rest 2 air defences. Send in the king to clean up. Check the corner builder huts as the dragons move very slow.

- Ground attack

  - GoWiPe
  - GoWiVa
  - GoHo
  - GoVaHo

As the opponent's defense building level goes higher, golem is a must-have in the army to absorb the for wizards and other high DPS dealers. After golem is unlocked, for regular raiding, focus on upgrading PEKKA to level 3 as it's harder to farm dark elixir and you need dark elixir to maximize king's level to 10 as fast as you can. Golem level 1 is good enough as it needs 60K dark elixir to upgrade to level 2. If possible, go get 120 medal badges in league war to get the hammer.

Wall breaker is a must-have in the army, always bring 6 wall breakers. Wait till golem or giants distracted the defensing building, then deploy 2-3 wall breakers. If there is mortar in range, wait the mortar fire first because it gives you 5 seconds break, then immediately deploy the wall breakers.

If deploying 2 golems, they must be at least 8 to 10 tiles away from each other, so they will not die easily from splash damage. The timing is when they are absorbing the damages, send in wall breakers to tear down the first layer of wall. 6 to 8 wizards should clear enough outside buildings and be able to enter to the wall. Leave 6 to 8 wizards handy for later clean up. Once the path is created, send in PEKKA and king and the rest wizards.

Once PEKKA is at level 3, update either valkyrie, or hog riders, but one at a time. Hog riders is recommended as they dominate in TH8 war.

Choosing the attacking strategy depends on the opponent's base and cc troop. CC troop must be cleared first and should be done as soon as possible. Dragons or other flying units will ruin the ground attack. Witch or valkyrie creates lots of headache. Watch out for the CC clear-up time as pekka attacks slow.

##### TH8 GoWiPe

1 Golem + 3 Pekka + 18 Wizards + 6 Wall Breakers + 1 Hog (CC lure) + 6 Archers + 1 Healing + 2 Rage + Poison Spell and 1 Pekka + Poison Spell in CC.

With level 3 pekkas and one CC level 8 pekka, GoWiPe is pretty effective in TH8 war for middle level TH8 opponents.

PEKKA needs proper funneling. Outside building must be cleared up before pekka goes there, otherwise Pekka will chop the wall and go outside to attack some trash building outside.

The strategy is to use golem as the meat shield grouped with pekkas, 3 wall breakers open the first layer once the golem distracted the defensing buildings. Sending the level 8 pekka which speeds up the attack, 2 pekkas, the king, along with 5 to 8 wizards. Use rage in the first open compartment as it helps King and pekka damages faster. If the wizards hit bombs or great bombs so get killed, always have 4 to 5 wizards follow the pekkas so they can attack defensing buildings over the walls. Send in the rest wall breakers to open more inside walls, and send more wizards to the core, usually town hall and other defensing structures are exposed at this moment, use rage one more time so to destroy town hall. Healing spell can be saved to use on rest building like remaining teslas, wizard towers when the survived troops are covered mostly.

Send the king with the level 8 pekka as the main attacking troop, rage spells work well on Pekka and kings. Have one pekka with 3 to 5 wizards to destroy the outside building so inner pekkas can move forward and won't move outside. 3 to 5 wizards to clear the other outside.

But for a nearly maxed out TH8, GoWiPe can get 2 stars but it is hard to get 3 stars as it's attacking speed is slow so maybe get destroyed by higher level defensing buildings like teslas and burst cannons.

##### TH8 GoWiVa

For attacking some low level TH9, their base is a more open with less layer as they are covered by x-bows, massive valkyries can do better.

1 Golem + 13 Valkyries + 12 Wizards + 6 Wall Breakers + 6 Archers + 1 rage spell + 2 Healing Spell + 1 earthquake and 1 Pekka + 1 Poison Spell in CC

Valkyrie attacks and moves faster than pekka, and their HP is much higher than wizards. But they are harder to control when the base has lots of condensed compartments as they will leave the core and go outside to attack the outside trash buildings. Wizards need to clear the outside buildings.

##### TH8 GoHo

2 Golem + 16 Hogs + 6 Wall Breakers + 11 Wizards + 4 Archers + 3 Healing Spell + Poison and 5 Hogs + 1 Poison in CC.

For maxed out TH8 opponent or low level TH 9 opponent, GoHo with level 4 hogs is more effective.

Pick the side where most splash damage dealing building located because splash damage dealing buildings are very annoying in late battle.

##### TH8 GoVaHo

1 Golem + 4 Valkyries + 10 Wizards + 18 Hogs + 4 Wall Breakers + 3 Healing Spell + Poison Spell/3 Earthquake 2 Healing and 3 Valkyries + 1 Archer + Poison/Earthquake Spell in CC.

#### TH 8 Farming

Upgrade the barracks to shorten the training time.

Barch farming

Use barbarians, archers and wall breakers. Adding some goblins may speed up the process as well. Works best in gold league trophy level 1700 to 1800, and above, lots of players have collectors left outside the base and storages are behind the outside-most wall. The strategy is aiming for the storages,overwhelming the defensing buildings with lots of barbarians and archers. And even no spell is required. You can 1 star the opponent and get lots of loots with higher ROI.

But usually dark elixir is at the core of base so barch farming is good for farming gold and elixir.

To farm for dark elixir, you need to use 15 Giants / 20 Wizards / Archers / 8 Wall breakers / 1 or 2 Peeka to farm dark elixir. The aim is to 1 or 2 star and get most of the resources, first dark elixir, then elixir, gold.

GiBarch farming

<https://www.allclash.com/farming-with-gibarch/>

Loonion farming

The strategy is targets players with lots of loots.

Balloons and minors are better at maximized level to make the farming more effective. Lighting spell is better at level 5. 2 level 5 lightening spells deals 540 damages each so it can take down one air defense level 5 (HP 1000) or level 6 ( HP 1050).

Make a wall of Balloons where the air-targeting defences mostly are, and if needed, support them with either a haste spell or a rage spell.

Then, deploy the minions to clean up behind once the first layer of defenses are taken down and send in the King.

However, Air Bombs can seriously ruin this attack if many balloons or minions were clumped up because Air Bombs can fully take out minions and leave Balloons damaged, or even destroyed completely unless a well-timed healing spell is dropped to prevent the balloons from being destroyed.

### TH 9 strategies

Queen is unlocked. Wall level can go up to 9 (spike) and 10 (lava stripe on top).

2 X-bows are unlocked.

Other new buildings:

New troops baby dragon, witch and Lava Hound are unlocked, so new strategy lavaloonion can be used.

Valkyrie can be upgraded up 2 level to level 4.

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

Queen walk / charger

At this stage, queen charge is mainly used to take out x-bows or air defence to facilitate other main troops.

When the healers die or separate, queen will have a hard time.

- Put a balloon when to deploy the queen to trigger the seeking air mine.
- Protect the healers. Make sure no other troops will take away the healers.
- Use offensive spells around queen

  - Rage spell to increase the queen DPS also the healing speed.

### TH 10 strategies

Inferno tower.

Maximize the hero levels.

- Queen lvl 40
- King lvl 40

### TH11 strategies

Great warden joins in the village.

- Heroes maxed 50/50/20
- Donated Wall wreckers / Stone slammer
- Troops (260 Camp + 35 Clan Castle)
  - CC troop 35
  - Primary troop (miner, bowler, pekka, dragon loon, electro dragon ...)
  - Supplementary troop (healer, wall breaker...)
- Spells

Maximize the hero levels.

- Queen lvl 50
- King lvl 50
- Great warden lvl 20.

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

Bowlers is a very useful killer squad to clear one corner with inferno and x-bows. Bowlers can be the main attackers with queen walk, it's very easy to get 2 start but hard to 3 star.

Bowler killer squad

With luck, support from healer or meat shield, bowler can get to the core.

Bowler and healer

This typically is comprised of around 30 bowlers and 6-8 healers.

Without wall wrecker, the strategy is to choose the entry point which can be the half point of one side or the corner the base. Start from there, the goal is to make the path to the center of the base and make sure the eagle artillery is on that path while troops are marching.

Once the plan of path is made, first, funnel a little bit and deploy 6 to 8 bowlers on two adjacent corners of the base with 3 or 4 healers behind each group. Each group will take down the outer and nearby buildings, and they walk towards the entry point. Before they meet, put the jump spell over the wall and make it cover as much as it can. This creates a straight forward path into the middle of the base. Drop the heroes, giants and the rest of the bowlers. Put the rage spell 2 tiles before them. Along the way the army is marching, drop freeze spell on eagle artillery and inferno towers to ensure that the army can get to the town hall. Once town hall is destroyed, there is the possibility to have a couple of healers at this stage to help keep the bowlers up. Put another jump spell so to make sure the army can exit the center and march further. From there, usually several blowers will get separated, or most of bowlers will get wiped out by eagle artillery or other defences due to low HP. The beauty of this attack is that the bowlers can clear lots of building when enraged, and if done correctly they can move into the center and destroy the town hall. At that time, you already get 2 stars extremely quickly. Often the case you still have a bunch of healers survived which will then help keep your heroes live helping you get that important 3 star.

With wall wrecker, the attack can be even easier. Load 1 max golem and 1 max giant inside the wall wreaker and get 1 rage spell. Same as before, funnel with bowlers first, once the entry point is reached, send in the wall wrecker and followed by giants, heroes and witches. Golem and giant can be the meat shield to absorb some damages for the troops. Witch can slow down inferno tower.

Bowler and Witch (BOWITCH)

The combination for BOWITCH includes 20 Bowlers and 10 Witches, in spells it includes 2 Jump spells, 2 Rage spells, 1 Freeze spell and 1 Poison spell. In the clan castle you have to take max golem and 1 max giant and rage spell.

First drop 4 witches and 4 bowlers on the adjacent sides of the base and then in the middle, drop the first jump on the outer wall (put the jump such that it can also cover the inner wall if possible). Now drop the clan castle followed by remaining bowlers and witches and then warden and king and queen. As soon as the troops enter the base, drop the poison spell on the clan castle troops and drop the second jump spell such that troops can have an access to the core of the base. As soon as the bowlers come in contact with the first inferno, drop the freeze spell on that inferno tower and also use first rage along with freeze spell. Now when the bowlers come in contact with the second inferno, then use the Warden's Ability and use the second rage again. Now check where there are more bowlers and drop the third rage on them accordingly.

This strategy will help you easily 2 star any TH11 base (sometimes even 3 stars if the bowlers don't get separated ) and this strategy should 3 star almost all th 10's if you execute the troops and spells in proper manner as they don't have eagle artillery.

<https://www.clashtrack.com/en/v/9_K9levlTzM/top-tips-for-bowitch-attack-strategy-explained-clash-of-clans>

#### Level 5 Miner

Miners strategy is solid to 2-star other middle level TH11. But against maxed TH11 with high level eagle artillery, inferno tower in multiple mode and level 5 x-bows, it's very risky. When facing TH12 with giga tesla, often miner strategy gets only 1 star but high percentage as giga tesla cause massive 4-target damage to miners.

The rule of thumb is to narrow down the miner attack path. Miners are strong when they swarm. So for a square base layout, use heroes to clear one corner to create a L shape and some wizard to clear some trash building, so to make minor stay together while moving forward.

Once the queen is strong enough, use a powerful queen charge to take out eagle artillery and CC troops, then deploy miners. Send warden to the middle of the base will help out, too.

Ground CC troops especially witches will cause a headache for miners but air CC troops will not as miners move fast.

Health, freeze and rage spells are used in miner strategy.

#### Level 7 hog rider

Hog rider jumps overs walls, like the miner burrows under walls.

Level 5 miner vs. level 7 hog rider

Hog rider housing space 5 and miner is 6, so you can bring a couple more hog riders in the army.

Level 5 miner HP 800, move speed 32, DpS 112 with attacking speed 1.7s.
Level 7 hog riders HP 700, move speed 24, DpS 135 with attacking speed 1.

Hog riders attack defensing structure first, miner attacks nearest building first.

In TH11, they are kind of the same level.

In TH12, hog rider max level is 9 and miner max level is 6.

Level 6 miner HP 870, move speed 32, DpS 120 with attacking speed 1.7s.
Level 9 hog riders HP 920, move speed 24, DpS 161 with attacking speed 1.

So in TH12, hog rider is slightly better than miner.

If the opponent's Giga tesla is maxed which deals massive damages on 4 target, and inferno is set to multiple, which damages DpS 81 on 5 troops, without healing spell, it's hard to make the troops survive.

#### Level 7 pekka

Level 7 pekka HP 5700, attacking speed 1.8s, DpA 972, DpS 540
Level 8 pekka HP 6300, attacking speed 1.8s, DpA 1098, DpS 610

Pekka smash is often a strong 2 star strategy.

#### Level 2 electro dragon

Electro dragon has 30 housing space, attack speed 3.5s, move speed: 12, range: 3 tiles

TH12 with maximized camps can take 9 electro dragons and TH11 with maximized camps can take 8 electro dragons.

The attack is strong when heroes are strong. Usually, king and queen will launch a kind of suicide attack on the 2 sides of the base, so to leave the path narrower so the dragons can move forward faster. Or heros can take out eager artillery and inferno tower and air defence. Grand warden will follow the dragons for his abilities support.

Clone spell if is done right.

Bat spell can help to take down one air defence.

#### TH11 Dragon bat

#### TH11 farming

Miner farming

Miner farming with queen charge is very effective for dead bases or TH11 with medium level defensing systems.

29 miners, 1 baby dragon, 5 healers, 6 archers.

Baby dragon is cheap for removing the outside trash building. Keep it away from the air defence. Or If the air defence is exposed, use queen to take it out. When queen level is not high enough, watch out for the CC troop.

Use queen and 5 healers to clear one side, use baby dragon, king and warden the other side to clear the buildings within range. Once the outside is a bit cleared, send in the miners and make them alive with health spell and freeze spell. King has to be a bit strong to absorb damages, and king might not survive at last. But at that time, warden come to middle to help out the minors.

Lavaloonian

A little bit costy but very effective.

- 3 Lavahound
- 26 Balloons
- 21 Minions
- 4 Wall Breakers
- 3 Rage Spell
- 1 Healing Spell
- 1 Freeze Spell
- 1 Haze Spell

<https://www.youtube.com/watch?v=_IVqeAipX5g>

<https://www.allclash.com/farming-with-lavaloonian/>

A variation with queen walk

- 4 Healers
- 26 Balloons
- 21 Minions
- 4 Wall Breakers
- 3 Rage Spell
- 1 Healing Spell
- 1 Freeze Spell
- 1 Haze Spell

[farming elixir strategy](https://www.allclash.com/farming-elixir-strategy/)

<https://www.allclash.com/farming-strategies-for-all-town-hall-level/>

<https://www.allclash.com/queen-charge-mass-miner-farming-trophy-pushing-strategy/>

<https://www.allclash.com/best-th11-farming-base-layouts/>

<https://www.allclash.com/farming-with-goblin-knife/>

<https://cocland.com/guides/bowler-attack-strategy>

### TH12 war strategies

Workshop is unlocked at Th12.

The resources you have:

- Heroes
- Wall wreckers / Stone slammer
- Troops (280 Camp + 40 Clan Castle)
  - CC troop
  - Primary troop (miner, bowler, pekka, dragon loon, electro dragon)
  - Supplementary troop
- Spells

Maximize the hero levels.

- Queen lvl 60
- King lvl 60
- Great warden lvl 30.

Maximize the troops

- Barbarian lvl 8 Max
- Archer lvl 8 Max
- Giant lvl 9 Max
- Goblin lvl 8 Max
- Wall breakers lvl 8 Max
- Balloon lvl 8 Max
- Wizard lvl 8 Max
- Healer lvl 5 Max
- Dragon lvl 7 Max
- PEKKA lvl 8 Max
- Baby dragon lvl 6 Max
- Miner lvl 6 Max
- Electro Dragon lvl 3 Max
- Minion lvl 8 Max
- Hog rider lvl 9 Max
- Valkyrie lvl 7 Max
- Golem lvl 8 Max
- Witch lvl 5 Max
- Lava Hound lvl 5 Max
- Bowler lvl 4 Max
- Ice golem lvl 5 Max

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
- Skeleton lvl 5 Max
- Bat lvl 5 Max

Maximize the defence

- Cannon lvl 17 x 7, can gear up
- Archer tower lvl 17 x 8
- Mortar lvl 11 x 4, can gear up
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
- Inferno tower lvl 5 x 3
- Eagle artillery lvl 2 x 1
- Giga Tesla lvl 5 x 1

There is no one exact strategy can 3 star any base. It's based on your opponent's base then choose the most effective strategy accordingly.

Facts about queen,

Queen's attack speed 0.75s, move speed 24, range 5 tiles, search range 10 tiles.

- Level 40 queen HP 1,630 DpS 419, DpA 314.25. When in ability, DpS 1,238 in 5.0s, Health Recovery 325, Summon 12 archers
- Level 45 queen HP 1,809 DpS 474, DpA 355.5. When in ability, DpS 1,394 in 5.2s, Health Recovery 350, Summon 13 archers
- Level 50 queen HP 2,007 DpS 536, DpA 402. When in ability, DpS 1,556 in 5.4s, Health Recovery 375, Summon 14 archers
- Level 55 queen HP 2,274 DpS 594, DpA 445.5. When in ability, DpS 1,714 in 5.4s, Health Recovery 400, Summon 15 archers
- Level 60 queen HP 2,575 DpS 658, DpA 493.5. When in ability, DpS 1,778 in 5.8s, Health Recovery 425, Summon 16 archers

Facts about king

King's attack speed 1.2s, move speed 16, range 1 tile, search range 9 tiles, ability time 10s.

- Level 40 king HP 4,453 DpS 259, DpA 310.8. When in ability, DpS 673 in 10s, Health Recovery 1,692, Summon 20 barbarians
- Level 45 king HP 5,038 DpS 299, DpA 358.8. When in ability, DpS 777 in 10s, Health Recovery 1,963, Summon 22 barbarians
- Level 50 king HP 5,700 DpS 332, DpA 398.4. When in ability, DpS 878 in 10s, Health Recovery 2,263, Summon 24 barbarians
- Level 55 king HP 6,452 DpS 369, DpA 442.8. When in ability, DpS 987 in 10s, Health Recovery 2,592, Summon 26 barbarians
- Level 60 king HP 7,303 DpS 410, DpA 492.0. When in ability, DpS 1,028 in 10s, Health Recovery 2,592, Summon 28 barbarians

Facts about Grand Warden

Grand Warden's attack speed 1.8s, move speed 16, range 7 tile, search range 10 tiles.

- Level 15 Grand Warden HP 1,350 DpS 90, DpA 162. Eternal Tome 4.5s, Life Aura 40%.
- Level 20 Grand Warden HP 1,500 DpS 110, DpA 198. Eternal Tome 5s, Life Aura 50%.
- Level 25 Grand Warden HP 1,658 DpS 136, DpA 244.8. Eternal Tome 5.5s, Life Aura 60%.
- Level 30 Grand Warden HP 1,833 DpS 168, DpA 302.4. Eternal Tome 6s, Life Aura 70%.

### Queen charge

Queen charge is for facilitating other troops, air or ground, depending on opponent's base layout. If the war base does not have lots of compartments, it's a good place for queen charge, otherwise the queen will spend lots of time hitting on the walls.

As the level 5 giga tesla will wipe off most attacking troops around it, attack the town hall at last.

To perform the queen charge, level up the queen to 45+ at least. The idea is to use queen charge to take out one corner with eagle artillery to create the L shape, so the troops can target the remaining buildings easily. Possibly absorb damages from Giga tesla so to support other troops. Drawback of queen charge is it may be very slow to create the funnel. TH11 against TH12 using queen charge is not a good idea as queen is very fragile again high DpS structures.

At your disposal, you have queen and 5 healers, wall wrecker /stone slammer with CC troop, king, grand warden, companion troops and main troops.

Keep the queen alive is one of the key. This is done by healers.

Level 5 healer HP has 1,500, heal speed 0.7s, healing per pulse 56, healing per second 80. So 5 healers max healing is 400 or less, which enable the queen to live for a long enough time under multiple fire. If in 2 x-bows and other cannon or archer tower, the total DpS is around 500, it takes around 20 seconds to destroy the queen.

Maxed air defence DpS 200, 7.5 seconds kill a healer, one seeking air mine can one shot one healer.

Once the queen's HP is very low, use range spell to boost up healers and queen so to speed up the healing process. Ability is better saved when massive DpS is needed.

Planning for queen is another key. If queen charge takes too long, the destruction rate will be very low because it's only queen is attacking. To move queen forward, some funneling troop like giants/wizards, hog rider, pekka can clear some building which may distract the queen.

Ideally, queen can take down CC troops, destroy EA and one inferno, use another killer squad for another inferno, or use bowler witch clear the outside buildings, keep the remaining buildings on a narrowed path being attacked.

Choose the most effective way.

Queen's mission is to destroy eagle artillery before it's activated, and funnel for the troops.

Eagle Artillery targets the area with the largest density of hitpoints. It fires a volley of three successive shots at regular 10 second intervals.

- Level 2 HP 4,400, damage per hit is 350
- Level 3 HP 4,800, damage per hit is 400

Eagle Artillery will be activated after 180 - 200 housing spaces worth of troops. Each Hero is worth 25 troop housing spaces, and each Spell housing space is worth 5 troop housing spaces.

Once eagle is taken down, try to destroy multiple target inferno and x-bows as they deals with great damages to minor, hog riders, etc.

Inferno tower range 9, multiple target 5

- Inferno tower level 4, HP 2400, DpS 57 when set to multiple, DpS 155 when set to single after 1.5s and DpS 1,550 after 5.25s
- Inferno tower level 5, HP 2700, DpS 70 when set to multiple, DpS 175 when set to single after 1.5s and DpS 1,750 after 5.25s
- Inferno tower level 6, HP 3000, DpS 81 when set to multiple, DpS 200 when set to single after 1.5s and DpS 2,000 after 5.25s

multiple is against miner, bowler, hog rider strategy, single is again queen charge strategy.

Giga tesla level 5 DpS 200 deals 4 targets, and cause 1,000 damage when destroyed.

Cannon range 9

- Cannon level 14 HP 1,380, DpS 110
- Cannon level 15 HP 1,500, DpS 118

Archer tower range 10

- Archer tower level 14, HP 1,130, DpS 92
- Archer tower level 15, HP 1,230, DpS 104

X-bows range 14

- X-bows level 4 HP 2,700, DpS 95
- X-bows level 5 HP 3,100, DpS 125
- X-bows level 6 HP 3,500, DpS 155

If attacking TH11 opponents, with 4 max healers (level 5), 1 or 2 rage spells, queen should last long enough to clear one corner of the base. But for attacking high level TH12, queen cannot survive in range of 2 level 6 X-Bows with other defensing buildings.

### Level 6 Miner

Usually at this stage, you are facing TH12 with Giga tesla and multiple inferno tower which will destroy the miners extremely quickly.

## League

![League](https://www.allclash.com/farming-elixir-strategy/star-and-league-bonus/)

## Wars

<https://www.allclash.com/ultimate-clan-wars-army-setup/>

## Readings

[Flammy's Strategy Guides](https://clashofclans.fandom.com/wiki/Flammy%27s_Strategy_Guides)

<https://www.allclash.com/>

<https://www.clashpedia.com/>
