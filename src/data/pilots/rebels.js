const rebel_pilots = [{
  id: 0,
  name: 'Wedge Antilles',
  faction: 'rebel',
  unique: true,
  ship: { name: 'X-wing', icon: 'xwing' },
  text: 'When attacking, reduce the defender\'s agility value by 1 (to a minimum of "0").',
  skill: 9,
  stats: { attack: 3, agility: 2, hull: 3, shield: 2 },
  value: 29,
  actions: ['focus', 'targetlock'],
  slots: [ 'elite', 'torpedo', 'astromech' ],
  image: ''
}, {
  id: 1,
  name: 'Garven Dreis',
  faction: 'rebel',
  unique: true,
  ship: { name: 'X-wing', icon: 'xwing' },
  text: 'After spending a focus token, you may place that token on any other friendly ship at range 1-2 (instead of discarding it).',
  skill: 6,
  stats: { attack: 3, agility: 2, hull: 3, shield: 2},
  value: 23,
  actions: ['focus', 'targetlock'],
  slots: [ 'torpedo', 'astromech' ],
  image: ''
}, {
 id: 2,
 name: 'Red Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'X-wing', icon: 'xwing' },
 text: 'Created as an elite starfighter squad, Red Squadron included some of the best pilots in the Rebel Alliance.',
 skill: 4,
 stats: { attack: 3, agility: 2, hull: 3, shield: 2},
 value: 23,
 actions: ['focus', 'targetlock'],
 slots: ['torpedo', 'astromech'],
 image: ''
}, {
 id: 3,
 name: 'Rookie Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'X-wing', icon: 'xwing' },
 text: 'Designed by Incom Corporation, the T-65 X-wing quickly proved to be one of the most effective military vehicles in the galaxy and a boon to the Rebellion.',
 skill: 2,
 stats: { attack: 3, agility: 2, hull: 3, shield: 2 },
 value: 21,
 actions: ['focus', 'targetlock'],
 slots: ['torpedo', 'astromech'],
 image: ''
},{
 id: 4,
 name: 'Biggs Darklighter',
 faction: 'rebel',
 unique: true,
 ship: { name: 'X-wing', icon: 'xwing' },
 text: 'Other friendly ships at Range 1 cannot be targeted by attacks if the attacker could target you instead.',
 skill: 5,
 stats: { attack: 3, agility: 2, hull: 3, shield: 2 },
 value: 25,
 actions: ['focus', 'targetlock'],
 slots: ['torpedo', 'astromech'],
 image: ''
},{
 id: 5,
 name: 'Luke Skywalker',
 faction: 'rebel',
 unique: true,
 ship: { name: 'X-wing', icon: 'xwing' },
 text: 'When defending, you may change 1 of your __focus__ results to a __evade__ result.',
 skill: 8,
 stats: { attack: 3, agility: 2, hull: 3, shield: 2 },
 value: 28,
 actions: ['focus', 'targetlock'],
 slots: ['elite', 'torpedo', 'astromech'],
 image: 'xwing-luke-skywalker.jpg'
}, {
 id: 6,
 name: 'Gray Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'Y-wing', icon: 'ywing' },
 text: 'Long after the Y-wing was to be phased out, its speed, durability, and weapon options helped it remain a staple of the Rebel fleet.',
 skill: 4,
 stats: { attack: 2, agility: 1, hull: 5, shield: 3 },
 value: 20,
 actions: ['focus', 'targetlock'],
 slots: ['turret', 'torpedo', 'torpedo', 'astromech'],
 image: ''
}, {
 id: 7,
 name: '"Dutch" Vander',
 faction: 'rebel',
 unique: true,
 ship: { name: 'Y-wing', icon: 'ywing' },
 text: 'After aquiring a target lock, choose another friendly ship at Range 1-2. The chosen ship my immediately aquire a target lock.',
 skill: 6,
 stats: { attack: 2, agility: 1, hull: 5, shield: 3 },
 value: 23,
 actions: ['focus', 'targetlock'],
 slots: ['turret', 'torpedo', 'torpedo', 'astromech'],
 image: ''
}, {
 id: 8,
 name: 'Horton Salm',
 faction: 'rebel',
 unique: true,
 ship: { name: 'Y-wing', icon: 'ywing' },
 text: 'When attacking at Range 2-3, you may reroll any of your blank results.',
 skill: 8,
 stats: { attack: 2, agility: 1, hull: 5, shield: 3 },
 value: 25,
 actions: ['focus', 'targetlock'],
 slots: ['turret', 'torpedo', 'torpedo', 'astromech'],
 image: ''
}, {
 id: 9,
 name: 'Gold Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'Y-wing', icon: 'ywing' },
 text: 'The versatile and reliable BTL-A4 Y-wing was the Rebellion\'s primary starfighter until the arrival of the T-65 X-wing.',
 skill: 2,
 stats: { attack: 2, agility: 1, hull: 5, shield: 3 },
 value: 18,
 actions: ['focus', 'targetlock'],
 slots: ['turret', 'torpedo', 'torpedo', 'astromech'],
 image: ''
}, {
 id: 29,
 name: 'Tycho Celchu',
 faction: 'rebel',
 unique: true,
 ship: { name: 'A-wing', icon: 'awing' },
 text: 'You may perform actions even while you have stress tokens.',
 skill: 8,
 stats: { attack: 2, agility: 3, hull: 2, shield: 2 },
 value: 26,
 actions: ['focus', 'targetlock', 'boost', 'evade'],
 slots: ['elite', 'missile'],
 image: ''
}, {
 id: 30,
 name: 'Arvel Crynyd',
 faction: 'rebel',
 unique: true,
 ship: { name: 'A-wing', icon: 'awing' },
 text: 'You may declare an enemy ship inside your firing arc that you are touching as the target of your attack.',
 skill: 6,
 stats: { attack: 2, agility: 3, hull: 2, shield: 2 },
 value: 23,
 actions: ['focus', 'targetlock', 'boost', 'evade'],
 slots: ['missile'],
 image: ''
}, {
 id: 31,
 name: 'Green Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'A-wing', icon: 'awing' },
 text: 'Conceived by General Dodonna, the RZ-1 A-wing interceptor proved its worth by crippling Star Destroyers during the Battle of Endor.',
 skill: 3,
 stats: { attack: 2, agility: 3, hull: 2, shield: 2 },
 value: 19,
 actions: ['focus', 'targetlock', 'boost', 'evade'],
 slots: ['elite', 'missile'],
 image: ''
}, {
 id: 32,
 name: 'Prototype Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'A-wing', icon: 'awing' },
 text: 'Due to its sensitive controls and high maneuverability, only the most talented pilots belong in an A-wing cockpit.',
 skill: 1,
 stats: { attack: 2, agility: 3, hull: 2, shield: 2 },
 value: 17,
 actions: ['focus', 'targetlock', 'boost', 'evade'],
 slots: ['missile'],
 image: ''
}, {
 id: 33,
 name: 'Outer Rim Smuggler',
 faction: 'rebel',
 unique: false,
 ship: { name: 'YT-1300', icon: 'yt1300' },
 text: 'Known for its durability and modular design, the YT-1300 is one of the most popular, midely used freighters in the galaxy.',
 skill: 1,
 stats: { attack: 2, agility: 1, hull: 6, shield: 4 },
 value: 27,
 actions: ['focus', 'targetlock'],
 slots: ['crew', 'crew'],
 image: ''
}, {
 id: 34,
 name: 'Chewbacca',
 faction: 'rebel',
 unique: true,
 ship: { name: 'YT-1300', icon: 'yt1300' },
 text: 'When you are dealt a faceup Damage card, immediately flip it facedown (without resolving its ability).',
 skill: 5,
 stats: { attack: 3, agility: 1, hull: 8, shield: 5 },
 value: 42,
 actions: ['focus', 'targetlock'],
 slots: ['elite', 'missle', 'crew', 'crew'],
 image: ''
}, {
 id: 35,
 name: 'Lando Calrissian',
 faction: 'rebel',
 unique: true,
 ship: { name: 'YT-1300', icon: 'yt1300' },
 text: 'After you execute a green maneuver, choose 1 other friendly ship at Range 1. That ship may perform 1 free action shown in its action bar.',
 skill: 7,
 stats: { attack: 3, agility: 1, hull: 8, shield: 5 },
 value: 44,
 actions: ['focus', 'targetlock'],
 slots: ['elite', 'missile', 'crew', 'crew'],
 image: ''
}, {
 id: 36,
 name: 'Han Solo',
 faction: 'rebel',
 unique: true,
 ship: { name: 'YT-1300', icon: 'yt1300' },
 text: 'When attacking, you may reroll all of your dice. If you choose to do so, you must reroll as many of your dice as possible.',
 skill: 9,
 stats: { attack: 3, agility: 1, hull: 8, shield: 5 },
 value: 46,
 actions: ['focus', 'targetlock'],
 slots: ['elite', 'missile', 'crew', 'crew'],
 image: ''
}, {
 id: 41,
 name: 'Ten Numb',
 faction: 'rebel',
 unique: true,
 ship: { name: 'B-wing', icon: 'bwing' },
 text: 'When attacking, 1 of your __crit__ results cannot be canceled by defense dice.',
 skill: 8,
 stats: { attack: 3, agility: 1, hull: 3, shield: 5 },
 value: 31,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['elite', 'system', 'cannon', 'torpedo', 'torpedo'],
 image: ''
}, {
 id: 42,
 name: 'Ibtisam',
 faction: 'rebel',
 unique: true,
 ship: { name: 'B-wing', icon: 'bwing' },
 text: 'When attacking or defending, if you have at least 1 stress token, you may reroll 1 of your dice.',
 skill: 6,
 stats: { attack: 3, agility: 1, hull: 3, shield: 5 },
 value: 28,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['elite', 'system', 'cannon', 'torpedo', 'torpedo'],
 image: ''
}, {
 id: 43,
 name: 'Dagger Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'B-wing', icon: 'bwing' },
 text: 'A unique gyrostabilization system surrounds the B-wing\'s cockpit, ensuring that the pilot always remains stationary during flight.',
 skill: 4,
 stats: { attack: 3, agility: 1, hull: 3, shield: 5 },
 value: 24,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['system', 'cannon', 'torpedo', 'torpedo'],
 image: ''
}, {
 id: 44,
 name: 'Blue Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'B-wing', icon: 'bwing' },
 text: 'Because of its heavy weapons array and resilient shielding, the B-wing solidified itself as the Alliance\'s most formidable assault fighter.',
 skill: 2,
 stats: { attack: 3, agility: 1, hull: 3, shield: 5 },
 value: 22,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['system', 'cannon', 'torpedo', 'torpedo'],
 image: ''
}, {
 id: 45,
 name: 'Rebel Operative',
 faction: 'rebel',
 unique: false,
 ship: { name: 'HWK-290', icon: 'hwk290' },
 text: 'Designed after a bird in flight by Corellian Engineering Corporation, the "hawk" series excelled in its role as a personel transport.',
 skill: 2,
 stats: { attack: 1, agility: 2, hull: 4, shield: 1 },
 value: 16,
 actions: ['focus', 'targetlock'],
 slots: ['turret', 'crew'],
 image: ''
}, {
 id: 46,
 name: 'Roark Garnet',
 faction: 'rebel',
 unique: true,
 ship: { name: 'HWK-290', icon: 'hwk290' },
 text: 'At the start of the Combat phase, choose 1 other friendly ship at Range 1-3. Until the end of the phase, treat that ship\'s pilot skill value as "12." ',
 skill: 4,
 stats: { attack: 1, agility: 2, hull: 4, shield: 1 },
 value: 19,
 actions: ['focus', 'targetlock'],
 slots: ['turret', 'crew'],
 image: ''
}, {
 id: 47,
 name: 'Kyle Katarn',
 faction: 'rebel',
 unique: true,
 ship: { name: 'HWK-290', icon: 'hwk290' },
 text: 'At the start of the Combat phase, you may assign 1 of your focus tokens to another friendly ship at Range 1-3.',
 skill: 6,
 stats: { attack: 1, agility: 2, hull: 4, shield: 1 },
 value: 21,
 actions: ['focus', 'targetlock'],
 slots: ['elite', 'turret', 'crew'],
 image: ''
}, {
 id: 48,
 name: 'Jan Ors',
 faction: 'rebel',
 unique: true,
 ship: { name: 'HWK-290', icon: 'hwk290' },
 text: 'When another friendly ship at Range 1-3 is attacking, if you have no stress tokens, you may receive 1 stress token to allow that ship to roll 1 additional attack die.',
 skill: 8,
 stats: { attack: 1, agility: 2, hull: 4, shield: 1 },
 value: 25,
 actions: ['focus', 'targetlock'],
 slots: ['elite', 'turret', 'crew'],
 image: ''
}, {
 id: 63,
 name: 'GR-75 Medium Transport',
 faction: 'rebel',
 unique: false,
 epic: true,
 ship: { name: 'GR-75 Medium Transport', icon: 'gr75mediumtransport' },
 text: 'The GR-75 played an integral role in the evacuation of Hoth, transporting the bulk of the Alliance\'s supplies and personnel to the rendezvous point.',
 skill: 3,
 stats: { energy: 4, attack: 0, agility: 0, hull: 8, shield: 4 },
 value: 30,
 actions: ['recover', 'reinforce', 'coordinate', 'jam'],
 slots: ['crew', 'crew', 'cargo', 'cargo', 'cargo'],
 image: ''
}, {
 id: 64,
 name: 'Bandit Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'Z95 Headhunter', icon: 'z95headhunter' },
 text: 'The AF4 series was the latest in a long line of Headhunter designs. Cheap and durable, it became a favorite among independent outfits like the Rebellion and Black Sun.',
 skill: 2,
 stats: { attack: 2, agility: 2, hull: 2, shield: 2 },
 value: 12,
 actions: ['focus', 'targetlock'],
 slots: ['missile'],
 image: ''
}, {
 id: 65,
 name: 'Tala Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'Z95 Headhunter', icon: 'z95headhunter' },
 text: 'Manufactured by Incom Corporation, the Z-95-AF4 was the primary inspiration for the design of the T-65 X-wing.',
 skill: 4,
 stats: { attack: 2, agility: 2, hull: 2, shield: 2 },
 value: 13,
 actions: ['focus', 'targetlock'],
 slots: ['missile'],
 image: ''
}, {
 id: 66,
 name: 'Lieutenant Blount',
 faction: 'rebel',
 unique: true,
 ship: { name: 'Z95 Headhunter', icon: 'z95headhunter' },
 text: 'When attacking, the defender is hit by your attack, even if he does not suffer any damage.',
 skill: 6,
 stats: { attack: 2, agility: 2, hull: 2, shield: 2 },
 value: 17,
 actions: ['focus', 'targetlock'],
 slots: ['elite', 'missile'],
 image: ''
}, {
 id: 67,
 name: 'Airen Cracken',
 faction: 'rebel',
 unique: true,
 ship: { name: 'Z95 Headhunter', icon: 'z95headhunter' },
 text: 'After you perform an attack, you may choose another friendly ship at Range 1. That ship may perform 1 free action.',
 skill: 8,
 stats: { attack: 2, agility: 2, hull: 2, shield: 2 },
 value: 19,
 actions: ['focus', 'targetlock'],
 slots: ['elite', 'missile'],
 image: ''
}, {
 id: 72,
 name: 'Knave Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'E-wing', icon: 'ewing' },
 text: 'Specifically designed to combine the best features of the X-wing series with the A-wing series, the E-wing boasted superior firepower, speed, and maneuverability.',
 skill: 1,
 stats: { attack: 3, agility: 3, hull: 2, shield: 3 },
 value: 27,
 actions: ['focus', 'targetlock', 'barrelroll', 'evade'],
 slots: ['system', 'torpedo', 'astromech'],
 image: ''
}, {
 id: 73,
 name: 'Blackmoon Squadron Pilot',
 faction: 'rebel',
 unique: false,
 ship: { name: 'E-wing', icon: 'ewing' },
 text: 'Originally designed with only the R7-series of astromech in mind, the E-wing was later retrofitted to equip the standard R2- and R5-series driods.',
 skill: 3,
 stats: { attack: 3, agility: 3, hull: 2, shield: 3 },
 value: 29,
 actions: ['focus', 'targetlock', 'barrelroll', 'evade'],
 slots: ['system', 'torpedo', 'astromech'],
 image: ''
}, {
 id: 74,
 name: 'Etahn A\'baht',
 faction: 'rebel',
 unique: true,
 ship: { name: 'E-wing', icon: 'ewing' },
 text: 'When an enemy ship inside your firing arc at Range 1-3 is defending, the attacker may change 1 of its __hit__ results to a __crit__ result.',
 skill: 5,
 stats: { attack: 3, agility: 3, hull: 2, shield: 3 },
 value: 32,
 actions: ['focus', 'targetlock', 'barrelroll', 'evade'],
 slots: ['elite', 'system', 'torpedo', 'astromech'],
 image: ''
}, {
 id: 75,
 name: 'Corran Horn',
 faction: 'rebel',
 unique: true,
 ship: { name: 'E-wing', icon: 'ewing' },
 text: 'At the start of the End phase, you may perform one attack. You cannot attack during the next round.',
 skill: 8,
 stats: { attack: 3, agility: 3, hull: 2, shield: 3 },
 value: 35,
 actions: ['focus', 'targetlock', 'barrelroll', 'evade'],
 slots: ['elite', 'system', 'torpedo', 'astromech'],
 image: ''
}, {
 id: 80,
 name: 'CR90 Corvette (Fore)',
 faction: 'rebel',
 unique: false,
 epic: true,
 ship: { name: 'CR90 Corvette (Fore)', icon: 'cr90corvette' },
 text: 'When attacking with your primary weapon, you may spend 1 energy to roll 1 additional attack die.',
 skill: 4,
 stats: { attack: 4, agility: 0, hull: 8, shield: 5 },
 value: 50,
 actions: ['coordinate', 'targetlock'],
 slots: ['crew', 'hardpoint', 'hardpoint', 'team', 'team', 'cargo'],
 image: ''
}, {
 id: 81,
 name: 'CR90 Corvette (Aft)',
 faction: 'rebel',
 unique: false,
 epic: true,
 ship: { name: 'CR90 Corvette (Aft)', icon: 'cr90corvette' },
 text: 'Equipped with 11 Girodyne Ter58 high-output ion-turbine engines and a hardy hull, the Rebel Alliance prized the CR90 for its sublight speed and durability.',
 skill: 4,
 stats: { energy: 5, attack: 0, agility: 0, hull: 8, shield: 3 },
 value: 40,
 actions: ['recover', 'reinforce'],
 slots: ['crew', 'hardpoint', 'team', 'cargo'],
 image: ''
}, {
  id: 82,
  name: 'Wes Janson',
  faction: 'rebel',
  unique: true,
  ship: { name: 'X-wing', icon: 'xwing' },
  text: 'After you perform an attack, you may remove 1 focus, evade, or blue target lock token from the defender.',
  skill: 8,
  stats: { attack: 3, agility: 2, hull: 3, shield: 2 },
  value: 29,
  actions: ['focus', 'targetlock'],
  slots: [ 'elite', 'torpedo', 'astromech' ],
  image: ''
}, {
  id: 83,
  name: 'Jek Porkins',
  faction: 'rebel',
  unique: true,
  ship: { name: 'X-wing', icon: 'xwing' },
  text: ' When you receive a stress token, you may remove it and roll 1 attack die. On a __hit__ result, deal 1 facedown Damage card to this ship.',
  skill: 7,
  stats: { attack: 3, agility: 2, hull: 3, shield: 2 },
  value: 26,
  actions: ['focus', 'targetlock'],
  slots: [ 'elite', 'torpedo', 'astromech' ],
  image: ''
}, {
  id: 84,
  name: '"Hobbie" Klivian',
  faction: 'rebel',
  unique: true,
  ship: { name: 'X-wing', icon: 'xwing' },
  text: 'When you acquire or spend a target lock, you may remove 1 stress token from your ship.',
  skill: 5,
  stats: { attack: 3, agility: 2, hull: 3, shield: 2 },
  value: 25,
  actions: ['focus', 'targetlock'],
  slots: [ 'torpedo', 'astromech' ],
  image: ''
}, {
  id: 85,
  name: 'Tarn Mison',
  faction: 'rebel',
  unique: true,
  ship: { name: 'X-wing', icon: 'xwing' },
  text: 'When an enemy ship declares you as the target of an attack, you may acquire a target lock on that ship.',
  skill: 3,
  stats: { attack: 3, agility: 2, hull: 3, shield: 2 },
  value: 23,
  actions: ['focus', 'targetlock'],
  slots: [ 'torpedo', 'astromech' ],
  image: ''
}, {
  id: 86,
  name: 'Jake Farrell',
  faction: 'rebel',
  unique: true,
  ship: { name: 'A-wing', icon: 'awing' },
  text: 'After you perform a focus action or are assigned a focus token, you may perform a free boost or barrel roll action.',
  skill: 7,
  stats: { attack: 2, agility: 3, hull: 2, shield: 2 },
  value: 24,
  actions: ['focus', 'targetlock', 'boost', 'evade'],
  slots: [ 'elite', 'missile' ],
  image: ''
}, {
  id: 87,
  name: 'Gemmer Sojan',
  faction: 'rebel',
  unique: true,
  ship: { name: 'A-wing', icon: 'awing' },
  text: 'While you are at Range 1 of at least 1 enemy ship, increase your agility value by 1.',
  skill: 5,
  stats: { attack: 2, agility: 3, hull: 2, shield: 2 },
  value: 22,
  actions: ['focus', 'targetlock', 'boost', 'evade'],
  slots: [ 'missile' ],
  image: ''
}, {
  id: 88,
  name: 'Keyan Farlander',
  faction: 'rebel',
  unique: true,
  ship: { name: 'B-wing', icon: 'bwing' },
  text: 'When attacking, you may remove 1 stress token to change all of your __focus__ results to __hit__ results.',
  skill: 7,
  stats: { attack: 3, agility: 1, hull: 3, shield: 5 },
  value: 29,
  actions: ['focus', 'targetlock', 'barrelroll'],
  slots: [ 'elite', 'system', 'cannon', 'torpedo', 'torpedo' ],
  image: ''
}, {
  id: 89,
  name: 'Nera Datels',
  faction: 'rebel',
  unique: true,
  ship: { name: 'B-wing', icon: 'bwing' },
  text: 'You can perform __torpedo__ secondary weapon attacks against enemy ships outside your firing arc.',
  skill: 5,
  stats: { attack: 3, agility: 1, hull: 3, shield: 5 },
  value: 26,
  actions: ['focus', 'targetlock', 'barrelroll'],
  slots: [ 'elite', 'system', 'cannon', 'torpedo', 'torpedo' ],
  image: ''
}, {
  id: 90,
  name: 'CR90 Corvette (Crippled Fore)',
  faction: 'rebel',
  unique: false,
  epic: true,
  ship: { name: 'CR90 Corvette (Fore)', icon: 'cr90corvette' },
  text: 'Although the CR90 contained 8 Faberstien-Lago 37s escape pods, only 48 of the potential 165 passengers could safely escape.',
  skill: 4,
  stats: { attack: 2, agility: '-', hull: '-', shield: '-' },
  value: '-',
  actions: [],
  slots: ['crew'],
  image: ''
}, {
  id: 91,
  name: 'CR90 Corvette (Crippled Aft)',
  faction: 'rebel',
  unique: false,
  epic: true,
  ship: { name: 'CR90 Corvette (Aft)', icon: 'cr90corvette' },
  text: 'You cannot choose or execute [__straight__ 4], [__bankleft__ 2], or [__bankright__ 2] maneuvers.',
  skill: 4,
  stats: { energy: 1, agility: '-', hull: '-', shield: '-' },
  value: '-',
  actions: [],
  slots: ['cargo'],
  image: ''
}, {
  id: 93,
  name: 'Eaden Vrill',
  faction: 'rebel',
  unique: true,
  ship: { name: 'YT-2400', icon: 'yt2400' },
  text: 'When performing a primary weapon attack against a stressed ship, roll 1 additional attack die.',
  skill: 3,
  stats: { attack: 2, agility: 2, hull: 5, shield: 5 },
  value: 32,
  actions: ['focus', 'targetlock', 'barrelroll'],
  slots: [ 'cannon', 'missile', 'crew' ],
  image: ''
}, {
  id: 94,
  name: '"Leebo"',
  faction: 'rebel',
  unique: true,
  ship: { name: 'YT-2400', icon: 'yt2400' },
  text: 'When you are dealt a faceup Damage card, draw 1 additional Damage card, choose 1 to resolve, and discard the other.',
  skill: 5,
  stats: { attack: 2, agility: 2, hull: 5, shield: 5 },
  value: 34,
  actions: ['focus', 'targetlock', 'barrelroll'],
  slots: [ 'elite', 'cannon', 'missile', 'crew' ],
  image: ''
}, {
  id: 95,
  name: 'Dash Rendar',
  faction: 'rebel',
  unique: true,
  ship: { name: 'YT-2400', icon: 'yt2400' },
  text: 'You may ignore obstacles during the Activation phase and when performing actions.',
  skill: 7,
  stats: { attack: 2, agility: 2, hull: 5, shield: 5 },
  value: 36,
  actions: ['focus', 'targetlock', 'barrelroll'],
  slots: [ 'elite', 'cannon', 'missile', 'crew' ],
  image: ''
}, {
  id: 139,
  name: 'Miranda Doni',
  faction: 'rebel',
  unique: true,
  ship: { name: 'K-wing', icon: 'kwing' },
  text: 'Once per round when attacking, you may either spend 1 shield to roll 1 additional attack die or roll 1 fewer attack die to recover 1 shield.',
  skill: 8,
  stats: { attack: 2, agility: 1, hull: 5, shield: 4 },
  value: 29,
  actions: ['focus', 'targetlock', 'slam'],
  slots: [ 'turret', 'torpedo', 'torpedo', 'missile', 'crew', 'bomb' ],
  image: ''
}, {
  id: 140,
  name: 'Esege Tuketu',
  faction: 'rebel',
  unique: true,
  ship: { name: 'K-wing', icon: 'kwing' },
  text: 'When another friendly ship at Range 1-2 is attacking, it may treat your focus token as its own.',
  skill: 6,
  stats: { attack: 2, agility: 1, hull: 5, shield: 4 },
  value: 28,
  actions: ['focus', 'targetlock', 'slam'],
  slots: [ 'turret', 'torpedo', 'torpedo', 'missile', 'crew', 'bomb' ],
  image: ''
}, {
  id: 141,
  name: 'Guardian Squadron Pilot',
  faction: 'rebel',
  unique: false,
  ship: { name: 'K-wing', icon: 'kwing' },
  text: 'The K-wing\'s surprising acceleration, heavy armor plating, and devastating ordinance made it a favorite for hit-and-run operations.',
  skill: 4,
  stats: { attack: 2, agility: 1, hull: 5, shield: 4 },
  value: 25,
  actions: ['focus', 'targetlock', 'slam'],
  slots: [ 'turret', 'torpedo', 'torpedo', 'missile', 'crew', 'bomb' ],
  image: ''
}, {
  id: 142,
  name: 'Warden Squadron Pilot',
  faction: 'rebel',
  unique: false,
  ship: { name: 'K-wing', icon: 'kwing' },
  text: 'Koensayr Manufacturing\'s K-Wing boasted an advanced Sublight Acceleration Motor (SLAM) and an uprecedented 18 hard points, granting it unrivaled speed and firepower.',
  skill: 2,
  stats: { attack: 2, agility: 1, hull: 5, shield: 4 },
  value: 23,
  actions: ['focus', 'targetlock', 'slam'],
  slots: [ 'turret', 'torpedo', 'torpedo', 'missile', 'crew', 'bomb' ],
  image: ''
}, {
  id: 155,
  name: 'Hera Syndulla',
  faction: 'rebel',
  unique: true,
  ship: { name: 'VCX-100', icon: 'vcx100' },
  text: 'When you reveal a red or green maneuver, you may rotate your dial to another maneuver of the same difficulty.',
  skill: 7,
  stats: { attack: 4, agility: 0, hull: 10, shield: 6 },
  value: 40,
  actions: ['focus', 'targetlock', 'evade'],
  slots: [ 'system', 'turret', 'torpedo', 'torpedo', 'crew', 'crew' ],
  image: ''
}, {
  id: 156,
  name: 'Kanan Jarrus',
  faction: 'rebel',
  unique: true,
  ship: { name: 'VCX-100', icon: 'vcx100' },
  text: 'When an enemy ship at Range 1-2 is attacking, you may spend a focus token. If you do, the attacker rolls 1 fewer attack die.',
  skill: 5,
  stats: { attack: 4, agility: 0, hull: 10, shield: 6 },
  value: 38,
  actions: ['focus', 'targetlock', 'evade'],
  slots: [ 'system', 'turret', 'torpedo', 'torpedo', 'crew', 'crew' ],
  image: ''
}, {
  id: 157,
  name: '"Chopper"',
  faction: 'rebel',
  unique: true,
  ship: { name: 'VCX-100', icon: 'vcx100' },
  text: 'At the start of the Combat phase, each enemy ship you are touching receives 1 stress token.',
  skill: 4,
  stats: { attack: 4, agility: 0, hull: 10, shield: 6 },
  value: 37,
  actions: ['focus', 'targetlock', 'evade'],
  slots: [ 'system', 'turret', 'torpedo', 'torpedo', 'crew', 'crew' ],
  image: ''
}, {
  id: 158,
  name: 'Lothal Rebel',
  faction: 'rebel',
  unique: false,
  ship: { name: 'VCX-100', icon: 'vcx100' },
  text: 'Another successful Corellian Engineering Corporation freighter design, the VCX-100 was larger than the ubiquitous YT-series, boasting more living space and customizability.',
  skill: 3,
  stats: { attack: 4, agility: 0, hull: 10, shield: 6 },
  value: 35,
  actions: ['focus', 'targetlock', 'evade'],
  slots: [ 'system', 'turret', 'torpedo', 'torpedo', 'crew', 'crew' ],
  image: ''
}, {
  id: 159,
  name: 'Hera Syndulla (Attack Shuttle)',
  faction: 'rebel',
  unique: true,
  ship: { name: 'Attack Shuttle', icon: 'attackshuttle' },
  text: 'When you reveal a green or red maneuver, you may rotate your dial to another maneuver of the same difficulty.',
  skill: 7,
  stats: { attack: 3, agility: 2, hull: 2, shield: 2 },
  value: 22,
  actions: ['focus', 'barrelroll', 'evade'],
  slots: [ 'elite', 'turret', 'crew' ],
  image: ''
}, {
  id: 160,
  name: 'Sabine Wren',
  faction: 'rebel',
  unique: true,
  ship: { name: 'Attack Shuttle', icon: 'attackshuttle' },
  text: 'Immediately before you reveal your maneuver, you may perform a free boost or barrel roll action.',
  skill: 5,
  stats: { attack: 3, agility: 2, hull: 2, shield: 2 },
  value: 21,
  actions: ['focus', 'barrelroll', 'evade'],
  slots: [ 'elite', 'turret', 'crew' ],
  image: ''
}, {
  id: 161,
  name: 'Ezra Bridger',
  faction: 'rebel',
  unique: true,
  ship: { name: 'Attack Shuttle', icon: 'attackshuttle' },
  text: 'When defending, if you are stressed, you may change up to 2 of your __focus__ results to __evade__ results.',
  skill: 4,
  stats: { attack: 3, agility: 2, hull: 2, shield: 2 },
  value: 20,
  actions: ['focus', 'barrelroll', 'evade'],
  slots: [ 'elite', 'turret', 'crew' ],
  image: ''
}, {
  id: 162,
  name: '"Zeb" Orrelios',
  faction: 'rebel',
  unique: true,
  ship: { name: 'Attack Shuttle', icon: 'attackshuttle' },
  text: 'When defending, you may cancel __crit__ results before __hit__ results.',
  skill: 3,
  stats: { attack: 3, agility: 2, hull: 2, shield: 2 },
  value: 18,
  actions: ['focus', 'barrelroll', 'evade'],
  slots: [ 'turret', 'crew' ],
  image: ''
}, {
  id: 175,
  name: 'Poe Dameron',
  faction: 'rebel',
  unique: true,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'While attacking or defending, if you have a focus token, you may change 1 of your __focus__ results to a __hit__ or __evade__ result.',
  skill: 8,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 31,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'elite', 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 176,
  name: '"Blue Ace"',
  faction: 'rebel',
  unique: true,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'When performing a boost action, you may use the [__turnleft__ 1] or [__turnright__ 1] turn template.',
  skill: 5,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 27,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 177,
  name: 'Red Squadron Veteran',
  faction: 'rebel',
  unique: false,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'The modern incarnation of a classic design, the Incom T-70 X-wing fighter is the signature combat craft of the Resistance forces in their fight against the First Order.',
  skill: 4,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 26,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'elite', 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 178,
  name: 'Blue Squadron Novice',
  faction: 'rebel',
  unique: false,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'The T-70 model benefits from its redesigned thrusters with increased maneuverability in both space and atmospheric flight.',
  skill: 2,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 24,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 185,
  name: 'Ello Asty',
  faction: 'rebel',
  unique: true,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'While you are not stressed, you may treat your [__trollleft__] and [__trollright__] maneuvers as white maneuvers.',
  skill: 7,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 30,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'elite', 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 186,
  name: '"Red Ace"',
  faction: 'rebel',
  unique: true,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'The first time you remove a shield token from your ship each round, assign 1 evade token to your ship.',
  skill: 6,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 29,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 196,
  name: 'Poe Dameron (PS9)',
  faction: 'rebel',
  unique: true,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'While attacking or defending, if you have a focus token, you may change 1 of your __focus__ results to a __hit__ or __evade__ result.',
  skill: 9,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 33,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'elite', 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 197,
  name: 'Nien Nunb',
  faction: 'rebel',
  unique: true,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'When you recieve a stress token, if there is an enemy ship inside your firing arc at Range 1, you may discard that stress token.',
  skill: 7,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 29,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'elite', 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 198,
  name: '"Snap" Wexley',
  faction: 'rebel',
  unique: true,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'After you execute a 2-, 3- or 4-speed maneuver, if you are not touching a ship, you may perform a free boost action.',
  skill: 6,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 28,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'elite', 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 199,
  name: 'Jess Pava',
  faction: 'rebel',
  unique: true,
  ship: { name: 'T-70 X-wing', icon: 't70xwing' },
  text: 'When attacking or defending, you may reroll 1 of your dice for each other friendly ship at Range 1.',
  skill: 3,
  stats: { attack: 3, agility: 2, hull: 3, shield: 3 },
  value: 25,
  actions: ['focus', 'targetlock', 'boost'],
  slots: [ 'torpedo', 'astromech', 'tech' ],
  image: ''
}, {
  id: 200,
  name: 'Han Solo (TFA)',
  faction: 'rebel',
  unique: true,
  ship: { name: 'YT-1300', icon: 'yt1300' },
  text: 'When you are placed during setup, you can be placed anywhere in the play area beyond Range 3 of the enemy ships.',
  skill: 9,
  stats: { attack: 3, agility: 1, hull: 8, shield: 5 },
  value: 46,
  actions: ['focus', 'targetlock'],
  slots: [ 'elite', 'missile', 'crew', 'crew' ],
  image: ''
}, {
  id: 201,
  name: 'Rey',
  faction: 'rebel',
  unique: true,
  ship: { name: 'YT-1300', icon: 'yt1300' },
  text: 'When attacking or defending, if the enemy ship is inside your firing arc, you may reroll up to 2 of your blank results.',
  skill: 8,
  stats: { attack: 3, agility: 1, hull: 8, shield: 5 },
  value: 45,
  actions: ['focus', 'targetlock'],
  slots: [ 'elite', 'missile', 'crew', 'crew' ],
  image: ''
}, {
  id: 202,
  name: 'Chewbacca (TFA)',
  faction: 'rebel',
  unique: true,
  ship: { name: 'YT-1300', icon: 'yt1300' },
  text: 'When another friendly ship at Range 1-3 is destroyed (but has not fled the battlefield), you may perform an attack.',
  skill: 5,
  stats: { attack: 3, agility: 1, hull: 8, shield: 5 },
  value: 42,
  actions: ['focus', 'targetlock'],
  slots: [ 'elite', 'missile', 'crew', 'crew' ],
  image: ''
}, {
  id: 203,
  name: 'Resistance Sympathizer',
  faction: 'rebel',
  unique: false,
  ship: { name: 'YT-1300', icon: 'yt1300' },
  text: 'After the destruction of the Hosnian system, some spacers willingly aided the Resistance against the malevolent First Order.',
  skill: 3,
  stats: { attack: 3, agility: 1, hull: 8, shield: 5 },
  value: 38,
  actions: ['focus', 'targetlock'],
  slots: [ 'missile', 'crew', 'crew' ],
  image: ''
}, {
  id: 204,
  name: 'Nora Wexley',
  faction: 'rebel',
  unique: true,
  ship: { name: 'ARC-170', icon: 'arc170' },
  text: 'When attacking or defending, you may spend a target lock you have on the enemy ship to add 1 __focus__ result to your roll.',
  skill: 7,
  stats: { attack: 2, agility: 1, hull: 6, shield: 3 },
  value: 29,
  actions: ['focus', 'targetlock'],
  slots: [ 'elite', 'torpedo', 'crew', 'astromech' ],
  image: ''
}, {
  id: 205,
  name: 'Shara Bey',
  faction: 'rebel',
  unique: true,
  ship: { name: 'ARC-170', icon: 'arc170' },
  text: 'When another friendly ship at Range 1-2 is attacking, it may treat your blue target lock tokens as its own.',
  skill: 6,
  stats: { attack: 2, agility: 1, hull: 6, shield: 3 },
  value: 28,
  actions: ['focus', 'targetlock'],
  slots: [ 'elite', 'torpedo', 'crew', 'astromech' ],
  image: ''
}, {
  id: 206,
  name: 'Thane Kyrell',
  faction: 'rebel',
  unique: true,
  ship: { name: 'ARC-170', icon: 'arc170' },
  text: 'After an enemy ship inside your firing arc at Range 1-3 attacks another friendly ship, you may perform a free action.',
  skill: 4,
  stats: { attack: 2, agility: 1, hull: 6, shield: 3 },
  value: 26,
  actions: ['focus', 'targetlock'],
  slots: [ 'torpedo', 'crew', 'astromech' ],
  image: ''
}, {
  id: 207,
  name: 'Braylen Stramm',
  faction: 'rebel',
  unique: true,
  ship: { name: 'ARC-170', icon: 'arc170' },
  text: 'After you execute a maneuver, you may roll an attack die. On a __hit__ or __crit__ result, remove 1 stress token from your ship.',
  skill: 3,
  stats: { attack: 2, agility: 1, hull: 6, shield: 3 },
  value: 25,
  actions: ['focus', 'targetlock'],
  slots: [ 'torpedo', 'crew', 'astromech' ],
  image: ''
}, {
  id: 222,
  name: 'Ahsoka Tano',
  faction: 'rebel',
  unique: true,
  ship: { name: 'TIE Fighter', icon: 'tiefighter' },
  text: 'At the start of the Combat phase, you may spend 1 focus token to choose a friendly ship at Range 1. It may perform 1 free action.',
  skill: 7,
  stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
  value: 17,
  actions: ['focus', 'barrelroll', 'evade'],
  slots: [ 'elite' ],
  image: ''
}, {
  id: 223,
  name: 'Sabine Wren (TIE Fighter)',
  faction: 'rebel',
  unique: true,
  ship: { name: 'TIE Fighter', icon: 'tiefighter' },
  text: 'Immediately before you reveal your maneuver, you may perform a free boost or barrel roll action.',
  skill: 5,
  stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
  value: 15,
  actions: ['focus', 'barrelroll', 'evade'],
  slots: [ 'elite' ],
  image: ''
}, {
  id: 224,
  name: 'Captain Rex',
  faction: 'rebel',
  unique: true,
  ship: { name: 'TIE Fighter', icon: 'tiefighter' },
  text: 'After you perform an attack, assign the \'Suppressive Fire\' Condition card to the defender.',
  skill: 4,
  stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
  value: 14,
  actions: ['focus', 'barrelroll', 'evade'],
  slots: [],
  image: ''
}, {
  id: 225,
  name: '"Zeb" Orrelios (TIE Fighter)',
  faction: 'rebel',
  unique: true,
  ship: { name: 'TIE Fighter', icon: 'tiefighter' },
  text: 'When defending, you may cancel __crit__ results before __hit__ results.',
  skill: 3,
  stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
  value: 13,
  actions: ['focus', 'barrelroll', 'evade'],
  slots: [],
  image: ''
}, {
  id: 234,
  name: 'Cassian Andor',
  faction: 'rebel',
  unique: true,
  ship: { name: 'U-wing', icon: 'uwing' },
  text: 'At the start of the Activation phase, you may remove 1 stress token from 1 other friendly ship at Range 1-2.',
  skill: 6,
  stats: { attack: 3, agility: 1, hull: 4, shield: 4 },
  value: 27,
  actions: ['focus', 'targetlock'],
  slots: ['elite', 'system', 'torpedo', 'crew', 'crew'],
  image: ''
}, {
  id: 235,
  name: 'Bodhi Rook',
  faction: 'rebel',
  unique: true,
  ship: { name: 'U-wing', icon: 'uwing' },
  text: 'When a friendly ship acquires a target lock, that ship can lock onto an enemy ship at Range 1-3 of any friendly ship.',
  skill: 4,
  stats: { attack: 3, agility: 1, hull: 4, shield: 4 },
  value: 25,
  actions: ['focus', 'targetlock'],
  slots: ['system', 'torpedo', 'crew', 'crew'],
  image: ''
}, {
  id: 236,
  name: 'Heff Tobber',
  faction: 'rebel',
  unique: true,
  ship: { name: 'U-wing', icon: 'uwing' },
  text: 'After an enemy ship executes a maneuver that causes it to overlap your ship, you may perform a free action.',
  skill: 3,
  stats: { attack: 3, agility: 1, hull: 4, shield: 4 },
  value: 24,
  actions: ['focus', 'targetlock'],
  slots: ['system', 'torpedo', 'crew', 'crew'],
  image: ''
}, {
  id: 237,
  name: 'Blue Squadron Pathfinder',
  faction: 'rebel',
  unique: false,
  ship: { name: 'U-wing', icon: 'uwing' },
  text: 'Used for deploying troops under the cover of darkness or into the heat of battle, the U-wing fulfilled the Rebel Alliance\'s need for a hardy transport craft.',
  skill: 2,
  stats: { attack: 3, agility: 1, hull: 4, shield: 4 },
  value: 23,
  actions: ['focus', 'targetlock'],
  slots: ['system', 'torpedo', 'crew', 'crew'],
  image: ''
}, {
  id: 249,
  name: 'Kashyyyk Defender',
  faction: 'rebel',
  unique: false,
  ship: { name: 'Auzituck Gunship', icon: 'auzituckgunship' },
  text: '',
  skill: 1,
  stats: { attack: 3, agility: 1, hull: 6, shield: 3 },
  value: 24,
  actions: ['focus', 'reinforce'],
  slots: ['crew', 'crew'],
  image: ''
}, {
  id: 250,
  name: 'Wookiee ???',
  faction: 'rebel',
  unique: false,
  ship: { name: 'Auzituck Gunship', icon: 'auzituckgunship' },
  text: '',
  skill: 3,
  stats: { attack: 3, agility: 1, hull: 6, shield: 3 },
  value: 100,
  actions: [],
  slots: ['crew', 'crew'],
  image: ''
}, {
  id: 251,
  name: 'Lowhhrick',
  faction: 'rebel',
  unique: true,
  ship: { name: 'Auzituck Gunship', icon: 'auzituckgunship' },
  text: 'When another friendly ship at Range 1 is defending, you may spend 1 reinforce token. If you do, the defender adds 1 __evade__ result.',
  skill: 5,
  stats: { attack: 3, agility: 1, hull: 6, shield: 3 },
  value: 28,
  actions: ['focus', 'reinforce'],
  slots: ['elite', 'crew', 'crew'],
  image: ''
}, {
  id: 252,
  name: 'Wullffwarro',
  faction: 'rebel',
  unique: true,
  ship: { name: 'Auzituck Gunship', icon: 'auzituckgunship' },
  text: 'When attacking, if you have no shields and at least 1 Damage card assigned to you, roll 1 additional attack die.',
  skill: 7,
  stats: { attack: 3, agility: 1, hull: 6, shield: 3 },
  value: 30,
  actions: ['focus', 'reinforce'],
  slots: ['crew', 'crew'],
  image: ''
}, {
  id: 254,
  name: 'Captain Nym (Rebel)',
  faction: 'rebel',
  unique: true,
  ship: { name: 'Scurrg H-6 Bomber', icon: 'scurrgh6bomber' },
  text: '',
  skill: 8,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 100,
  actions: [],
  slots: ['elite', 'turret', 'torpedo', 'missile', 'crew', 'bomb', 'bomb'],
  image: ''
}]

export default rebel_pilots
