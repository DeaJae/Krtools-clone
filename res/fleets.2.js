var fleets = [];
fleets[FLEET_EMPTY] = {
	commander: FLEET_COMMANDER_EMPTY,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_1_BALLISTIC] = {
	name: '1-Ballistic',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ESTRELLA_A, count: 5 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ESTRELLA_A, count: 10 },
		{ build: BUILD_ESTRELLA_A, count: 5 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ESTRELLA_A, count: 5 }
	]
};

// 2

fleets[FLEET_3_MISSLE] = {
	name: '3-Missle',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_PARKE, count: 5 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_PARKE, count: 5 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_PARKE, count: 5 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_PARKE, count: 5 }
	]
};
fleets[FLEET_4_SHIP_BASED] = {
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ESTRELLA_B, count: 10 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ESTRELLA_B, count: 10 },
		{ build: BUILD_ESTRELLA_B, count: 10 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ESTRELLA_B, count: 10 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_5_BALLISTIC] = {
	name: '5-Ballistic',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_WANDERER_A, count: 10 },
		{ build: BUILD_WANDERER_A, count: 10 },
		{ build: BUILD_WANDERER_A, count: 20 },
		{ build: BUILD_WANDERER_A, count: 20 },
		{ build: BUILD_WANDERER_A, count: 20 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_WANDERER_A, count: 10 },
		{ build: BUILD_WANDERER_A, count: 20 }
	]
};
fleets[FLEET_6_LASER] = {
	name: '6-Laser',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_RV369, count: 10 },
		{ build: BUILD_RV369, count: 10 },
		{ build: BUILD_RV369, count: 10 },
		{ build: BUILD_RV369, count: 10 },
		{ build: BUILD_RV369, count: 10 },
		{ build: BUILD_RV369, count: 10 },
		{ build: BUILD_RV369, count: 10 },
		{ build: BUILD_RV369, count: 10 },
		{ build: BUILD_RV369, count: 10 }
	]
};
fleets[FLEET_7_MISSLE] = {
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_BOMBER, count: 20 },
		{ build: BUILD_BOMBER, count: 10 },
		{ build: BUILD_DEF, count: 10 },
		{ build: BUILD_DEF, count: 10 },
		{ build: BUILD_BOMBER, count: 10 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_BOMBER, count: 20 },
		{ build: BUILD_BOMBER, count: 10 }
	]
};
fleets[FLEET_8_SHIP_BASED] = {
	name: '8-Ship-Based',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_WANDERER_B, count: 10 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_WANDERER_B, count: 15 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_WANDERER_B, count: 20 },
		{ build: BUILD_DEF, count: 5 },
		{ build: BUILD_WANDERER_B, count: 10 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_WANDERER_B, count: 15 }
	]
};
// 9

fleets[FLEET_10_LASER] = {
	name: '10-Laser',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_DEF, count: 10 },
		{ build: BUILD_TIAZ, count: 30 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_DEF, count: 10 },
		{ build: BUILD_TIAZ, count: 30 },
		{ build: BUILD_TIAZ, count: 45 },
		{ build: BUILD_DEF, count: 10 },
		{ build: BUILD_TIAZ, count: 30 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_11_MISSLE] = {
	name: '11-Missle',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_NADESICO, count: 30 },
		{ build: BUILD_DEF, count: 20 },
		{ build: BUILD_DEF, count: 20 },
		{ build: BUILD_NADESICO, count: 30 },
		{ build: BUILD_DEF, count: 20 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_NADESICO, count: 30 },
		{ build: BUILD_DEF, count: 20 }
	]
};
fleets[FLEET_12_SHIP_BASED] = {
	name: '12-Ship-Based',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_BATTLESHIP_B, count: 20 },
		{ build: BUILD_BATTLESHIP_B, count: 10 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_BATTLESHIP_B, count: 20 },
		{ build: BUILD_BATTLESHIP_B, count: 10 },
		{ build: BUILD_DEF, count: 20 },
		{ build: BUILD_BATTLESHIP_B, count: 20 },
		{ build: BUILD_BATTLESHIP_B, count: 10 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_13_BALLISTIC] = {
	name: '13-Ballistic',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_JUMPER_A, count: 30 },
		{ build: BUILD_JUMPER_A, count: 30 },
		{ build: BUILD_JUMPER_A, count: 30 },
		{ build: BUILD_JUMPER_A, count: 30 },
		{ build: BUILD_DEF, count: 50 },
		{ build: BUILD_JUMPER_A, count: 30 },
		{ build: BUILD_JUMPER_A, count: 30 },
		{ build: BUILD_JUMPER_A, count: 30 },
		{ build: BUILD_JUMPER_A, count: 30 }
	]
};

// 14

fleets[FLEET_15_MISSLE] = {
	name: '15-Missle',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_INTERCEPTOR, count: 50 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_DEF, count: 50 },
		{ build: BUILD_INTERCEPTOR, count: 50 },
		{ build: BUILD_DEF, count: 50 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_INTERCEPTOR, count: 50 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};

// 16 17

fleets[FLEET_18_LASER] = {
	name: '18-Laser',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_PALENQUE, count: 80 },
		{ build: BUILD_PALENQUE, count: 70 },
		{ build: BUILD_PALENQUE, count: 60 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_PALENQUE, count: 70 },
		{ build: BUILD_DEF, count: 80 },
		{ build: BUILD_PALENQUE, count: 80 },
		{ build: BUILD_PALENQUE, count: 70 },
		{ build: BUILD_PALENQUE, count: 60 }
	]
};
fleets[FLEET_19_MISSLE] = {
	name: '19-Missle',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_HUNTER, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_HUNTER, count: 100 },
		{ build: BUILD_HUNTER, count: 80 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_HUNTER, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_20_SHIP_BASED] = {
	name: '20-Ship-Based',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_U8_B, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_U8_B, count: 100 },
		{ build: BUILD_U8_B, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_U8_B, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_21_BALLISTIC] = {
	name: '23-Ballistic',
	commander: FLEET_COMMANDER_SOFIA_A,
	stacks: [
		{ build: BUILD_FRIGATE, count: 150 },
		{ build: BUILD_FRIGATE, count: 150 },
		{ build: BUILD_FRIGATE, count: 150 },
		{ build: BUILD_FRIGATE, count: 150 },
		{ build: BUILD_FRIGATE, count: 150 },
		{ build: BUILD_FRIGATE, count: 150 },
		{ build: BUILD_FRIGATE, count: 150 },
		{ build: BUILD_FRIGATE, count: 150 },
		{ build: BUILD_FRIGATE, count: 150 }
	]
};
fleets[FLEET_22_LASER] = {
	name: '22-Laser',
	commander: FLEET_COMMANDER_ALICIA_A,
	stacks: [
		{ build: BUILD_TRACKER_A, count: 150 },
		{ build: BUILD_TRACKER_A, count: 150 },
		{ build: BUILD_TRACKER_A, count: 150 },
		{ build: BUILD_TRACKER_A, count: 150 },
		{ build: BUILD_TRACKER_A, count: 150 },
		{ build: BUILD_TRACKER_A, count: 150 },
		{ build: BUILD_TRACKER_A, count: 150 },
		{ build: BUILD_TRACKER_A, count: 150 },
		{ build: BUILD_TRACKER_A, count: 150 }
	]
};
fleets[FLEET_23_MISSLE] = {
	name: '23-Missle',
	commander: FLEET_COMMANDER_RAYLLF_A,
	stacks: [
		{ build: BUILD_CRUISING, count: 150 },
		{ build: BUILD_CRUISING, count: 150 },
		{ build: BUILD_DEF, count: 150 },
		{ build: BUILD_DEF, count: 150 },
		{ build: BUILD_CRUISING, count: 150 },
		{ build: BUILD_DEF, count: 150 },
		{ build: BUILD_CRUISING, count: 150 },
		{ build: BUILD_CRUISING, count: 150 },
		{ build: BUILD_DEF, count: 150 }
	]
};
fleets[FLEET_24_SHIP_BASED] = {
	name: '24-Ship-Based',
	commander: FLEET_COMMANDER_DONNA_A,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_TRACKER_B, count: 150 },
		{ build: BUILD_TRACKER_B, count: 150 },
		{ build: BUILD_DEF, count: 150 },
		{ build: BUILD_TRACKER_B, count: 150 },
		{ build: BUILD_DEF, count: 150 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_TRACKER_B, count: 150 },
		{ build: BUILD_TRACKER_B, count: 150 }
	]
};
fleets[FLEET_25_BALLISTIC] = {
	name: '25-Ballistic',
	commander: FLEET_COMMANDER_ALICIA_A,
	stacks: [
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 100 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 100 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 100 }
	]
};
fleets[FLEET_26_LASER] = {
	name: '26-Laser',
	commander: FLEET_COMMANDER_JASON_A,
	stacks: [
		{ build: BUILD_GHOSTY, count: 100 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 100 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 100 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 }
	]
};
fleets[FLEET_27_MISSLE] = {
	name: '27-Missle',
	commander: FLEET_COMMANDER_MANTIE_A,
	stacks: [
		{ build: BUILD_VORTEX_A, count: 200 },
		{ build: BUILD_VORTEX_A, count: 200 },
		{ build: BUILD_MEATSHIELD, count: 200 },
		{ build: BUILD_VORTEX_A, count: 200 },
		{ build: BUILD_VORTEX_A, count: 200 },
		{ build: BUILD_MEATSHIELD, count: 200 },
		{ build: BUILD_VORTEX_A, count: 200 },
		{ build: BUILD_VORTEX_A, count: 200 },
		{ build: BUILD_MEATSHIELD, count: 200 }
	]
};
fleets[FLEET_28_SHIP_BASED] = {
	name: '28-Ship-Based',
	commander: FLEET_COMMANDER_SOFIA_A,
	stacks: [
		{ build: BUILD_VORTEX_B, count: 250 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MEATSHIELD, count: 200 },
		{ build: BUILD_VORTEX_B, count: 250 },
		{ build: BUILD_MEATSHIELD, count: 200 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_B, count: 250 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MEATSHIELD, count: 200 }
	]
};
fleets[FLEET_29_BALLISTIC] = {
	name: '29-Ballistic',
	commander: FLEET_COMMANDER_JEROME_A,
	stacks: [
		{ build: BUILD_ENCRATOS_A, count: 250 },
		{ build: BUILD_MEATSHIELD, count: 250 },
		{ build: BUILD_REDWOLF, count: 250 },
		{ build: BUILD_ENCRATOS_A, count: 250 },
		{ build: BUILD_ENCRATOS_A, count: 250 },
		{ build: BUILD_REDWOLF, count: 250 },
		{ build: BUILD_ENCRATOS_A, count: 250 },
		{ build: BUILD_MEATSHIELD, count: 250 },
		{ build: BUILD_REDWOLF, count: 250 }
	]
};
fleets[FLEET_30_LASER] = {
	name: '30-Laser',
	commander: FLEET_COMMANDER_ALICIA_A,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_CERBERUS, count: 250 },
		{ build: BUILD_GHOSTY, count: 250 },
		{ build: BUILD_MEATSHIELD, count: 250 },
		{ build: BUILD_MEATSHIELD, count: 250 },
		{ build: BUILD_GHOSTY, count: 250 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_CERBERUS, count: 250 },
		{ build: BUILD_GHOSTY, count: 250 }
	]
};

// 31

fleets[FLEET_32_SHIP_BASED] = {
	name: '32-Ship-Based',
	commander: FLEET_COMMANDER_SANDORA_A,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ENCRATOS_B, count: 250 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_B, count: 250 },
		{ build: BUILD_MEATSHIELD, count: 250 },
		{ build: BUILD_VORTEX_B, count: 250 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ENCRATOS_B, count: 250 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_33_BALLISTIC] = {
	name: '33-Ballistic',
	commander: FLEET_COMMANDER_WAYNE_B,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_JUMPER_A, count: 300 },
		{ build: BUILD_JUMPER_A, count: 300 },
		{ build: BUILD_JUMPER_A, count: 300 },
		{ build: BUILD_JUMPER_A, count: 300 },
		{ build: BUILD_JUMPER_A, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_JUMPER_A, count: 300 },
		{ build: BUILD_JUMPER_A, count: 300 }
	]
};
fleets[FLEET_34_LASER] = {
	name: '34-Laser',
	commander: FLEET_COMMANDER_MAXIUS_B,
	stacks: [
		{ build: BUILD_LANDING, count: 300 },
		{ build: BUILD_LANDING, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_LANDING, count: 300 },
		{ build: BUILD_LANDING, count: 300 },
		{ build: BUILD_LANDING, count: 300 },
		{ build: BUILD_LANDING, count: 300 },
		{ build: BUILD_LANDING, count: 300 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_35_MISSLE] = {
	name: '35-Missle',
	commander: FLEET_COMMANDER_RAYLLF_B,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_INTERCEPTOR, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_INTERCEPTOR, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_INTERCEPTOR, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 }
	]
};
fleets[FLEET_36_SHIP_BASED] = {
	name: '36-Ship-Based',
	commander: FLEET_COMMANDER_KELLY_B,
	stacks: [
		{ build: BUILD_JUMPER_B, count: 300 },
		{ build: BUILD_JUMPER_B, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_JUMPER_B, count: 300 },
		{ build: BUILD_JUMPER_B, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 }
	]
};

// 37

fleets[FLEET_38_LASER] = {
	name: 'A10-Laser',
	commander: FLEET_COMMANDER_SHABA_B,
	stacks: [
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 }
	]
};
fleets[FLEET_39_MISSLE] = {
	name: 'A10-Missle',
	commander: FLEET_COMMANDER_VINNA_B,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_HUNTER, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_HUNTER, count: 300 },
		{ build: BUILD_HUNTER, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_HUNTER, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 }
	]
};
fleets[FLEET_40_SHIP_BASED] = {
	name: 'A10-Ship-Based',
	commander: FLEET_COMMANDER_MANTIE_B,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_U8_B, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_U8_B, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_U8_B, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_U8_B, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 }
	]
};

// 41

fleets[FLEET_42_LASER] = {
	name: '42-Laser',
	commander: FLEET_COMMANDER_JASON_B,
	stacks: [
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_PALENQUE, count: 300 }
	]
};
fleets[FLEET_43_MISSLE] = {
	name: 'A11-Missle',
	commander: FLEET_COMMANDER_ALICIA_B,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_CRUISING, count: 300 },
		{ build: BUILD_HUNTER, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_HUNTER, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_CRUISING, count: 300 },
		{ build: BUILD_HUNTER, count: 300 }
	]
};
fleets[FLEET_44_SHIP_BASED] = {
	name: 'A11-Ship-Based',
	commander: FLEET_COMMANDER_NATIYA_B,
	stacks: [
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 400 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_45_BALLISTIC] = {
	name: 'A12-Ballistic',
	commander: FLEET_COMMANDER_LINDA_B,
	stacks: [
		{ build: BUILD_REDWOLF, count: 350 },
		{ build: BUILD_REDWOLF, count: 350 },
		{ build: BUILD_REDWOLF, count: 350 },
		{ build: BUILD_REDWOLF, count: 350 },
		{ build: BUILD_REDWOLF, count: 350 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_REDWOLF, count: 350 },
		{ build: BUILD_REDWOLF, count: 350 },
		{ build: BUILD_REDWOLF, count: 350 }
	]
};
fleets[FLEET_46_LASER] = {
	name: 'A12-Laser',
	commander: FLEET_COMMANDER_ANNA_B,
	stacks: [
		{ build: BUILD_GHOSTY, count: 350 },
		{ build: BUILD_GHOSTY, count: 350 },
		{ build: BUILD_GHOSTY, count: 350 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_GHOSTY, count: 350 },
		{ build: BUILD_GHOSTY, count: 350 },
		{ build: BUILD_GHOSTY, count: 350 },
		{ build: BUILD_GHOSTY, count: 350 },
		{ build: BUILD_GHOSTY, count: 350 }
	]
};
fleets[FLEET_47_MISSLE] = {
	name: 'A12-Missle',
	commander: FLEET_COMMANDER_RINGEL_B,
	stacks: [
		{ build: BUILD_VORTEX_A, count: 350 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_A, count: 350 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_A, count: 350 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_A, count: 350 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_A, count: 350 }
	]
};
fleets[FLEET_48_SHIP_BASED] = {
	name: 'A12-Ship-Based',
	commander: FLEET_COMMANDER_PENNI_B,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_B, count: 350 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MEATSHIELD, count: 350 },
		{ build: BUILD_VORTEX_B, count: 350 },
		{ build: BUILD_VORTEX_B, count: 350 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_B, count: 350 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_49_BALLISTIC] = {
	name: 'A13-Ballistic',
	commander: FLEET_COMMANDER_REGGIE_B,
	stacks: [
		{ build: BUILD_U8_A, count: 350 },
		{ build: BUILD_U8_A, count: 350 },
		{ build: BUILD_U8_A, count: 400 },
		{ build: BUILD_U8_A, count: 350 },
		{ build: BUILD_U8_A, count: 350 },
		{ build: BUILD_U8_A, count: 400 },
		{ build: BUILD_U8_A, count: 350 },
		{ build: BUILD_U8_A, count: 350 },
		{ build: BUILD_U8_A, count: 400 }
	]
};
fleets[FLEET_50_LASER] = {
	name: 'A13-Laser',
	commander: FLEET_COMMANDER_SHABA_B,
	stacks: [
		{ build: BUILD_PALENQUE, count: 400 },
		{ build: BUILD_PALENQUE, count: 400 },
		{ build: BUILD_PALENQUE, count: 400 },
		{ build: BUILD_PALENQUE, count: 400 },
		{ build: BUILD_PALENQUE, count: 400 },
		{ build: BUILD_PALENQUE, count: 400 },
		{ build: BUILD_PALENQUE, count: 400 },
		{ build: BUILD_PALENQUE, count: 400 },
		{ build: BUILD_PALENQUE, count: 400 }
	]
};
fleets[FLEET_51_MISSLE] = {
	name: 'A13-Missle',
	commander: FLEET_COMMANDER_RAYLLF_B,
	stacks: [
		{ build: BUILD_HUNTER, count: 400 },
		{ build: BUILD_HUNTER, count: 400 },
		{ build: BUILD_HUNTER, count: 400 },
		{ build: BUILD_HUNTER, count: 400 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_HUNTER, count: 400 },
		{ build: BUILD_HUNTER, count: 400 },
		{ build: BUILD_HUNTER, count: 400 }
	]
};
fleets[FLEET_52_SHIP_BASED] = {
	name: 'A13-Ship-Based',
	commander: FLEET_COMMANDER_JEROME_B,
	stacks: [
		{ build: BUILD_U8_B, count: 400 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_U8_B, count: 400 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_U8_B, count: 400 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_U8_B, count: 400 }
	]
};
fleets[FLEET_53_BALLISTIC] = {
	name: 'A14-Ballistic',
	commander: FLEET_COMMANDER_PANIS_B,
	stacks: [
		{ build: BUILD_FRIGATE, count: 400 },
		{ build: BUILD_FRIGATE, count: 400 },
		{ build: BUILD_FRIGATE, count: 400 },
		{ build: BUILD_FRIGATE, count: 400 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_FRIGATE, count: 400 },
		{ build: BUILD_FRIGATE, count: 400 },
		{ build: BUILD_FRIGATE, count: 400 },
		{ build: BUILD_FRIGATE, count: 400 }
	]
};
fleets[FLEET_54_LASER] = {
	name: 'A14-Laser',
	commander: FLEET_COMMANDER_ALICIA_B,
	stacks: [
		{ build: BUILD_TRACKER_A, count: 400 },
		{ build: BUILD_TRACKER_A, count: 400 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_TRACKER_A, count: 400 },
		{ build: BUILD_TRACKER_A, count: 400 },
		{ build: BUILD_TRACKER_A, count: 400 },
		{ build: BUILD_TRACKER_A, count: 400 },
		{ build: BUILD_TRACKER_A, count: 400 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_55_MISSLE] = {
	name: 'A14-Missle',
	commander: FLEET_COMMANDER_NICK_B,
	stacks: [
		{ build: BUILD_CRUISING, count: 400 },
		{ build: BUILD_MEATSHIELD, count: 450 },
		{ build: BUILD_CRUISING, count: 400 },
		{ build: BUILD_CRUISING, count: 400 },
		{ build: BUILD_MEATSHIELD, count: 450 },
		{ build: BUILD_CRUISING, count: 400 },
		{ build: BUILD_CRUISING, count: 400 },
		{ build: BUILD_MEATSHIELD, count: 450 },
		{ build: BUILD_CRUISING, count: 400 }
	]
};
fleets[FLEET_56_SHIP_BASED] = {
	name: 'A14-Ship-Based',
	commander: FLEET_COMMANDER_EVELINE_B,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MEATSHIELD, count: 450 },
		{ build: BUILD_MEATSHIELD, count: 450 },
		{ build: BUILD_TRACKER_B, count: 450 },
		{ build: BUILD_TRACKER_B, count: 450 },
		{ build: BUILD_TRACKER_B, count: 450 },
		{ build: BUILD_TRACKER_B, count: 450 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_EMPTY, count: 0 }
	]
};
fleets[FLEET_57_BALLISTIC] = {
	name: 'A15-Ballistic',
	commander: FLEET_COMMANDER_GASTAF_B,
	stacks: [
		{ build: BUILD_REDWOLF, count: 450 },
		{ build: BUILD_REDWOLF, count: 450 },
		{ build: BUILD_REDWOLF, count: 450 },
		{ build: BUILD_REDWOLF, count: 450 },
		{ build: BUILD_REDWOLF, count: 450 },
		{ build: BUILD_REDWOLF, count: 450 },
		{ build: BUILD_REDWOLF, count: 450 },
		{ build: BUILD_REDWOLF, count: 450 },
		{ build: BUILD_REDWOLF, count: 450 }
	]
};
fleets[FLEET_58_LASER] = {
	name: 'A15-Laser',
	commander: FLEET_COMMANDER_ANNATA_B,
	stacks: [
		{ build: BUILD_GHOSTY, count: 450 },
		{ build: BUILD_GHOSTY, count: 450 },
		{ build: BUILD_GHOSTY, count: 500 },
		{ build: BUILD_GHOSTY, count: 450 },
		{ build: BUILD_GHOSTY, count: 450 },
		{ build: BUILD_GHOSTY, count: 500 },
		{ build: BUILD_GHOSTY, count: 450 },
		{ build: BUILD_GHOSTY, count: 450 },
		{ build: BUILD_GHOSTY, count: 500 }
	]
};
fleets[FLEET_59_MISSLE] = {
	name: 'A15-Missle',
	commander: FLEET_COMMANDER_SOFIA_B,
	stacks: [
		{ build: BUILD_CRUISING, count: 450 },
		{ build: BUILD_CRUISING, count: 450 },
		{ build: BUILD_CRUISING, count: 450 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_VORTEX_A, count: 450 },
		{ build: BUILD_VORTEX_A, count: 450 },
		{ build: BUILD_VORTEX_A, count: 450 }
	]
};
fleets[FLEET_60_SHIP_BASED] = {
	name: 'A15-Ship-Based',
	commander: FLEET_COMMANDER_NATIYA_B,
	stacks: [
		{ build: BUILD_MEATSHIELD, count: 500 },
		{ build: BUILD_VORTEX_B, count: 450 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 500 },
		{ build: BUILD_VORTEX_B, count: 450 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_MEATSHIELD, count: 500 },
		{ build: BUILD_VORTEX_B, count: 450 },
		{ build: BUILD_TRACKER_B, count: 300 }
	]
};
fleets[FLEET_61_BALLISTIC] = {
	name: 'A16-Ballistic',
	commander: FLEET_COMMANDER_LEO_C,
	stacks: [
		{ build: BUILD_ENCRATOS_A, count: 450 },
		{ build: BUILD_ENCRATOS_A, count: 450 },
		{ build: BUILD_ENCRATOS_A, count: 450 },
		{ build: BUILD_ENCRATOS_A, count: 450 },
		{ build: BUILD_ENCRATOS_A, count: 450 },
		{ build: BUILD_ENCRATOS_A, count: 450 },
		{ build: BUILD_ENCRATOS_A, count: 450 },
		{ build: BUILD_ENCRATOS_A, count: 450 },
		{ build: BUILD_ENCRATOS_A, count: 450 }
	]
};
fleets[FLEET_62_LASER] = {
	name: 'A16-Laser',
	commander: FLEET_COMMANDER_EVELINE_C,
	stacks: [
		{ build: BUILD_CERBERUS, count: 450 },
		{ build: BUILD_CERBERUS, count: 450 },
		{ build: BUILD_CERBERUS, count: 450 },
		{ build: BUILD_CERBERUS, count: 450 },
		{ build: BUILD_CERBERUS, count: 450 },
		{ build: BUILD_CERBERUS, count: 450 },
		{ build: BUILD_CERBERUS, count: 450 },
		{ build: BUILD_CERBERUS, count: 450 },
		{ build: BUILD_CERBERUS, count: 450 }
	]
};
fleets[FLEET_63_MISSLE] = {
	name: 'A16-Missle',
	commander: FLEET_COMMANDER_GASTAF_C,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_PROMETHEUS, count: 450 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_PROMETHEUS, count: 450 },
		{ build: BUILD_PROMETHEUS, count: 450 },
		{ build: BUILD_PROMETHEUS, count: 500 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_PROMETHEUS, count: 450 },
		{ build: BUILD_MEATSHIELD, count: 600 }
	]
};
fleets[FLEET_64_SHIP_BASED] = {
	name: 'A16-Ship-Based',
	commander: FLEET_COMMANDER_RINGEL_C,
	stacks: [
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_ENCRATOS_B, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_ENCRATOS_B, count: 500 },
		{ build: BUILD_ENCRATOS_B, count: 500 },
		{ build: BUILD_ENCRATOS_B, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_ENCRATOS_B, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 600 }
	]
};
fleets[FLEET_65_BALLISTIC] = {
	name: 'A17-Ballistic',
	commander: FLEET_COMMANDER_ANNA_C,
	stacks: [
		{ build: BUILD_FRIGATE, count: 500 },
		{ build: BUILD_FRIGATE, count: 500 },
		{ build: BUILD_FRIGATE, count: 500 },
		{ build: BUILD_FRIGATE, count: 500 },
		{ build: BUILD_FRIGATE, count: 500 },
		{ build: BUILD_FRIGATE, count: 500 },
		{ build: BUILD_FRIGATE, count: 500 },
		{ build: BUILD_FRIGATE, count: 500 },
		{ build: BUILD_FRIGATE, count: 500 }
	]
};
fleets[FLEET_66_LASER] = {
	name: 'A17-Laser',
	commander: FLEET_COMMANDER_LINDA_C,
	stacks: [
		{ build: BUILD_TRACKER_A, count: 500 },
		{ build: BUILD_TRACKER_A, count: 500 },
		{ build: BUILD_TRACKER_A, count: 500 },
		{ build: BUILD_TRACKER_A, count: 500 },
		{ build: BUILD_TRACKER_A, count: 500 },
		{ build: BUILD_TRACKER_A, count: 500 },
		{ build: BUILD_TRACKER_A, count: 500 },
		{ build: BUILD_TRACKER_A, count: 500 },
		{ build: BUILD_TRACKER_A, count: 500 }
	]
};
fleets[FLEET_67_MISSLE] = {
	name: 'A17-Missle',
	commander: FLEET_COMMANDER_AILEEN_C,
	stacks: [
		{ build: BUILD_CRUISING, count: 500 },
		{ build: BUILD_CRUISING, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_CRUISING, count: 500 },
		{ build: BUILD_CRUISING, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_CRUISING, count: 500 },
		{ build: BUILD_CRUISING, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 600 }
	]
};
fleets[FLEET_68_SHIP_BASED] = {
	name: 'A17-Ship-Based',
	commander: FLEET_COMMANDER_SANDORA_C,
	stacks: [
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_TRACKER_B, count: 500 },
		{ build: BUILD_TRACKER_B, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_TRACKER_B, count: 500 },
		{ build: BUILD_TRACKER_B, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 600 },
		{ build: BUILD_TRACKER_B, count: 500 },
		{ build: BUILD_TRACKER_B, count: 500 }
	]
};
fleets[FLEET_69_BALLISTIC] = {
	name: 'A18-Ballistic',
	commander: FLEET_COMMANDER_PENNI_C,
	stacks: [
		{ build: BUILD_REDWOLF, count: 550 },
		{ build: BUILD_REDWOLF, count: 550 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_REDWOLF, count: 550 },
		{ build: BUILD_REDWOLF, count: 550 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_REDWOLF, count: 550 },
		{ build: BUILD_REDWOLF, count: 550 },
		{ build: BUILD_MEATSHIELD, count: 700 }
	]
};
fleets[FLEET_70_LASER] = {
	name: 'A18-Laser',
	commander: FLEET_COMMANDER_LEO_C,
	stacks: [
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_GHOSTY, count: 550 },
		{ build: BUILD_GHOSTY, count: 550 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_GHOSTY, count: 550 },
		{ build: BUILD_GHOSTY, count: 550 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_GHOSTY, count: 550 },
		{ build: BUILD_GHOSTY, count: 550 }
	]
};

// 71

fleets[FLEET_72_SHIP_BASED] = {
	name: 'A18-Ship-Based',
	commander: FLEET_COMMANDER_NICK_C,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_MEATSHIELD, count: 750 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_MEATSHIELD, count: 750 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_MEATSHIELD, count: 750 }
	]
};



// 72


fleets[FLEET_73_BALLISTIC] = {
	name: 'A19-Ballistic',
	commander: FLEET_COMMANDER_GASTAF_C,
	stacks: [
		{ build: BUILD_ENCRATOS_A, count: 600 },
		{ build: BUILD_ENCRATOS_A, count: 600 },
		{ build: BUILD_ENCRATOS_A, count: 600 },
		{ build: BUILD_ENCRATOS_A, count: 600 },
		{ build: BUILD_ENCRATOS_A, count: 600 },
		{ build: BUILD_ENCRATOS_A, count: 600 },
		{ build: BUILD_ENCRATOS_A, count: 600 },
		{ build: BUILD_ENCRATOS_A, count: 600 },
		{ build: BUILD_ENCRATOS_A, count: 600 }
	]
};
fleets[FLEET_74_LASER] = {
	name: 'A19-Laser',
	commander: FLEET_COMMANDER_SANDORA_C,
	stacks: [
		{ build: BUILD_CERBERUS, count: 600 },
		{ build: BUILD_CERBERUS, count: 600 },
		{ build: BUILD_CERBERUS, count: 600 },
		{ build: BUILD_CERBERUS, count: 600 },
		{ build: BUILD_CERBERUS, count: 600 },
		{ build: BUILD_CERBERUS, count: 600 },
		{ build: BUILD_CERBERUS, count: 600 },
		{ build: BUILD_CERBERUS, count: 600 },
		{ build: BUILD_CERBERUS, count: 600 }
	]
};
fleets[FLEET_75_MISSLE] = {
	name: 'A19-Missle',
	commander: FLEET_COMMANDER_RINGEL_C,
	stacks: [
		{ build: BUILD_PROMETHEUS, count: 700 },
		{ build: BUILD_PROMETHEUS, count: 700 },
		{ build: BUILD_PROMETHEUS, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_PROMETHEUS, count: 700 },
		{ build: BUILD_PROMETHEUS, count: 700 },
		{ build: BUILD_PROMETHEUS, count: 700 },
		{ build: BUILD_PROMETHEUS, count: 700 }
	]
};
fleets[FLEET_76_SHIP_BASED] = {
	name: 'A19-Ship-Based',
	commander: FLEET_COMMANDER_ANNATA_C,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ENCRATOS_B, count: 600 },
		{ build: BUILD_ENCRATOS_B, count: 600 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_ENCRATOS_B, count: 600 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ENCRATOS_B, count: 600 },
		{ build: BUILD_ENCRATOS_B, count: 600 }
	]
};
fleets[FLEET_77_BALLISTIC] = {
	name: 'A20-Ballistic',
	commander: FLEET_COMMANDER_RINGEL_C,
	stacks: [
		{ build: BUILD_HAWK, count: 600 },
		{ build: BUILD_HAWK, count: 600 },
		{ build: BUILD_HAWK, count: 600 },
		{ build: BUILD_HAWK, count: 600 },
		{ build: BUILD_HAWK, count: 600 },
		{ build: BUILD_HAWK, count: 600 },
		{ build: BUILD_HAWK, count: 600 },
		{ build: BUILD_HAWK, count: 600 },
		{ build: BUILD_HAWK, count: 600 }
	]
};

// 78 79

fleets[FLEET_80_SHIP_BASED] = {
	name: 'A20-Ship-Based',
	commander: FLEET_COMMANDER_RINGEL_C,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_NYX_B, count: 600 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_NYX_B, count: 700 },
		{ build: BUILD_NYX_B, count: 600 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_NYX_B, count: 600 },
		{ build: BUILD_MEATSHIELD, count: 700 }
	]
};
fleets[FLEET_81_BALLISTIC] = {
	name: 'A21-Ballistic',
	commander: FLEET_COMMANDER_LEO_D,
	stacks: [
		{ build: BUILD_REDWOLF, count: 650 },
		{ build: BUILD_REDWOLF, count: 650 },
		{ build: BUILD_REDWOLF, count: 650 },
		{ build: BUILD_REDWOLF, count: 650 },
		{ build: BUILD_REDWOLF, count: 650 },
		{ build: BUILD_REDWOLF, count: 650 },
		{ build: BUILD_REDWOLF, count: 650 },
		{ build: BUILD_REDWOLF, count: 650 },
		{ build: BUILD_REDWOLF, count: 650 }
	]
};
fleets[FLEET_82_LASER] = {
	name: 'A21-Laser',
	commander: FLEET_COMMANDER_PENNI_D,
	stacks: [
		{ build: BUILD_GHOSTY, count: 650 },
		{ build: BUILD_GHOSTY, count: 650 },
		{ build: BUILD_GHOSTY, count: 650 },
		{ build: BUILD_GHOSTY, count: 650 },
		{ build: BUILD_GHOSTY, count: 650 },
		{ build: BUILD_GHOSTY, count: 650 },
		{ build: BUILD_GHOSTY, count: 650 },
		{ build: BUILD_GHOSTY, count: 650 },
		{ build: BUILD_GHOSTY, count: 650 }
	]
};
fleets[FLEET_83_MISSLE] = {
	name: 'A21-Missle',
	commander: FLEET_COMMANDER_AILEEN_D,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_PROMETHEUS, count: 650 },
		{ build: BUILD_PROMETHEUS, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 },
		{ build: BUILD_MEATSHIELD, count: 800 },
		{ build: BUILD_PROMETHEUS, count: 650 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_PROMETHEUS, count: 650 },
		{ build: BUILD_PROMETHEUS, count: 650 }
	]
};
fleets[FLEET_84_SHIP_BASED] = {
	name: 'A21-Ship-Based',
	commander: FLEET_COMMANDER_PENNI_D,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ENCRATOS_B, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 },
		{ build: BUILD_ENCRATOS_B, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 },
		{ build: BUILD_ENCRATOS_B, count: 650 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_ENCRATOS_B, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 }
	]
};
fleets[FLEET_85_BALLISTIC] = {
	name: 'A22-Ballistic',
	commander: FLEET_COMMANDER_GASTAF_D,
	stacks: [
		{ build: BUILD_HAWK, count: 650 },
		{ build: BUILD_HAWK, count: 650 },
		{ build: BUILD_HAWK, count: 650 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_HAWK, count: 650 },
		{ build: BUILD_HAWK, count: 650 },
		{ build: BUILD_HAWK, count: 650 },
		{ build: BUILD_HAWK, count: 650 },
		{ build: BUILD_HAWK, count: 650 }
	]
};
fleets[FLEET_86_LASER] = {
	name: 'A22-Laser',
	commander: FLEET_COMMANDER_GASTAF_D,
	stacks: [
		{ build: BUILD_NYX_A, count: 650 },
		{ build: BUILD_NYX_A, count: 650 },
		{ build: BUILD_NYX_A, count: 650 },
		{ build: BUILD_NYX_A, count: 650 },
		{ build: BUILD_NYX_A, count: 650 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_NYX_A, count: 650 },
		{ build: BUILD_NYX_A, count: 650 },
		{ build: BUILD_NYX_A, count: 650 }
	]
};
fleets[FLEET_87_MISSLE] = {
	name: 'A22-Missle',
	commander: FLEET_COMMANDER_GASTAF_D,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_THE_HEAVENLY_START, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 },
		{ build: BUILD_THE_HEAVENLY_START, count: 650 },
		{ build: BUILD_THE_HEAVENLY_START, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_THE_HEAVENLY_START, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 }
	]
};
fleets[FLEET_88_SHIP_BASED] = {
	name: 'A22-Ship-Based',
	commander: FLEET_COMMANDER_GASTAF_D,
	stacks: [
		{ build: BUILD_NYX_B, count: 650 },
		{ build: BUILD_NYX_B, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 },
		{ build: BUILD_NYX_B, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 },
		{ build: BUILD_MEATSHIELD, count: 800 },
		{ build: BUILD_NYX_B, count: 650 },
		{ build: BUILD_NYX_B, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 800 }
	]
};
fleets[FLEET_89_BALLISTIC] = {
	name: 'A23-Ballistic',
	commander: FLEET_COMMANDER_AILEEN_D,
	stacks: [
		{ build: BUILD_MAX_A, count: 650 },
		{ build: BUILD_MAX_A, count: 650 },
		{ build: BUILD_MAX_A, count: 650 },
		{ build: BUILD_MAX_A, count: 650 },
		{ build: BUILD_MAX_A, count: 650 },
		{ build: BUILD_MAX_A, count: 650 },
		{ build: BUILD_MAX_A, count: 650 },
		{ build: BUILD_MAX_A, count: 650 },
		{ build: BUILD_MAX_A, count: 650 }
	]
};
fleets[FLEET_90_LASER] = {
	name: 'A23-Laser',
	commander: FLEET_COMMANDER_AILEEN_D,
	stacks: [
		{ build: BUILD_MAX_B, count: 650 },
		{ build: BUILD_MAX_B, count: 650 },
		{ build: BUILD_MAX_B, count: 650 },
		{ build: BUILD_MAX_B, count: 650 },
		{ build: BUILD_MAX_B, count: 650 },
		{ build: BUILD_MAX_B, count: 650 },
		{ build: BUILD_MAX_B, count: 650 },
		{ build: BUILD_MAX_B, count: 650 },
		{ build: BUILD_MAX_B, count: 650 }
	]
};
fleets[FLEET_91_MISSLE] = {
	name: 'A23-Missle',
	commander: FLEET_COMMANDER_AILEEN_D,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MAX_C, count: 650 },
		{ build: BUILD_MAX_C, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_MAX_C, count: 650 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MAX_C, count: 650 },
		{ build: BUILD_MAX_C, count: 650 }
	]
};
fleets[FLEET_92_SHIP_BASED] = {
	name: 'A23-Ship-Based',
	commander: FLEET_COMMANDER_AILEEN_D,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_MAX_D, count: 650 },
		{ build: BUILD_MAX_D, count: 650 },
		{ build: BUILD_MAX_D, count: 650 },
		{ build: BUILD_MAX_D, count: 650 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_MAX_D, count: 650 }
	]
};
fleets[FLEET_93_BALLISTIC] = {
	name: 'A24-Ballistic',
	commander: FLEET_COMMANDER_ANNATA_D,
	stacks: [
		{ build: BUILD_BOSS_1, count: 650 },
		{ build: BUILD_BOSS_1, count: 650 },
		{ build: BUILD_BOSS_1, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_1, count: 650 },
		{ build: BUILD_BOSS_1, count: 650 },
		{ build: BUILD_BOSS_1, count: 650 },
		{ build: BUILD_BOSS_1, count: 650 },
		{ build: BUILD_BOSS_1, count: 650 }
	]
};
fleets[FLEET_94_LASER] = {
	name: 'A24-Laser',
	commander: FLEET_COMMANDER_ANNATA_D,
	stacks: [
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_2, count: 650 },
		{ build: BUILD_BOSS_2, count: 650 },
		{ build: BUILD_BOSS_2, count: 650 },
		{ build: BUILD_BOSS_2, count: 650 },
		{ build: BUILD_BOSS_2, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_2, count: 650 },
		{ build: BUILD_BOSS_2, count: 650 }
	]
};
fleets[FLEET_95_MISSLE] = {
	name: 'A24-Missle',
	commander: FLEET_COMMANDER_ANNATA_D,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_BOSS_3, count: 650 },
		{ build: BUILD_BOSS_3, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_3, count: 650 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_BOSS_3, count: 650 },
		{ build: BUILD_BOSS_3, count: 650 }
	]
};
fleets[FLEET_96_SHIP_BASED] = {
	name: 'A24-Ship-Based',
	commander: FLEET_COMMANDER_ANNATA_D,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_BOSS_4, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_4, count: 650 },
		{ build: BUILD_BOSS_4, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_BOSS_4, count: 650 },
		{ build: BUILD_MEATSHIELD, count: 1000 }
	]
};
fleets[FLEET_97_BALLISTIC] = {
	name: 'A25-Ballistic',
	commander: FLEET_COMMANDER_SANDORA_D,
	stacks: [
		{ build: BUILD_BOSS_1, count: 700 },
		{ build: BUILD_BOSS_1, count: 700 },
		{ build: BUILD_BOSS_1, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_1, count: 700 },
		{ build: BUILD_BOSS_1, count: 700 },
		{ build: BUILD_BOSS_1, count: 700 },
		{ build: BUILD_BOSS_1, count: 700 }
	]
};
fleets[FLEET_98_LASER] = {
	name: 'A25-Laser',
	commander: FLEET_COMMANDER_SANDORA_D,
	stacks: [
		{ build: BUILD_BOSS_2, count: 750 },
		{ build: BUILD_BOSS_2, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_2, count: 750 },
		{ build: BUILD_BOSS_2, count: 700 },
		{ build: BUILD_BOSS_2, count: 700 },
		{ build: BUILD_BOSS_2, count: 750 },
		{ build: BUILD_BOSS_2, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 1000 }
	]
};
fleets[FLEET_99_MISSLE] = {
	name: 'A25-Missle',
	commander: FLEET_COMMANDER_SANDORA_D,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_BOSS_3, count: 800 },
		{ build: BUILD_BOSS_3, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_3, count: 700 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_BOSS_3, count: 800 },
		{ build: BUILD_BOSS_3, count: 700 }
	]
};
fleets[FLEET_100_SHIP_BASED] = {
	name: 'A25-Ship-Based',
	commander: FLEET_COMMANDER_SANDORA_D,
	stacks: [
		{ build: BUILD_BOSS_4, count: 800 },
		{ build: BUILD_BOSS_4, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_4, count: 800 },
		{ build: BUILD_BOSS_4, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 1000 },
		{ build: BUILD_BOSS_4, count: 800 },
		{ build: BUILD_BOSS_4, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 1000 }
	]
};
fleets[FLEET_CHALLENGE_1_A] = {
	name: 'Challenge-1-A',
	commander: FLEET_COMMANDER_BRUCE_B,
	stacks: [
		{ build: BUILD_FRIGATE, count: 100 },
		{ build: BUILD_FRIGATE, count: 100 },
		{ build: BUILD_FRIGATE, count: 100 },
		{ build: BUILD_FRIGATE, count: 100 },
		{ build: BUILD_FRIGATE, count: 100 },
		{ build: BUILD_FRIGATE, count: 100 },
		{ build: BUILD_FRIGATE, count: 100 },
		{ build: BUILD_FRIGATE, count: 100 },
		{ build: BUILD_FRIGATE, count: 100 }
	]
};
fleets[FLEET_CHALLENGE_1_B] = {
	name: 'Challenge-1-B',
	commander: FLEET_COMMANDER_BRUCE_B,
	stacks: [
		{ build: BUILD_TRACKER_A, count: 80 },
		{ build: BUILD_TRACKER_A, count: 80 },
		{ build: BUILD_TRACKER_A, count: 80 },
		{ build: BUILD_TRACKER_A, count: 80 },
		{ build: BUILD_TRACKER_A, count: 80 },
		{ build: BUILD_TRACKER_A, count: 80 },
		{ build: BUILD_TRACKER_A, count: 80 },
		{ build: BUILD_TRACKER_A, count: 80 },
		{ build: BUILD_TRACKER_A, count: 80 }
	]
};
fleets[FLEET_CHALLENGE_1_C] = {
	name: 'Challenge-1-C',
	commander: FLEET_COMMANDER_BRUCE_B,
	stacks: [
		{ build: BUILD_CRUISING, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_CRUISING, count: 80 },
		{ build: BUILD_CRUISING, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_CRUISING, count: 80 },
		{ build: BUILD_CRUISING, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_CRUISING, count: 80 }
	]
};
fleets[FLEET_CHALLENGE_1_D] = {
	name: 'Challenge-1-D',
	commander: FLEET_COMMANDER_BRUCE_B,
	stacks: [
		{ build: BUILD_TRACKER_B, count: 80 },
		{ build: BUILD_TRACKER_B, count: 80 },
		{ build: BUILD_TRACKER_B, count: 80 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_DEF, count: 100 },
		{ build: BUILD_TRACKER_B, count: 80 },
		{ build: BUILD_TRACKER_B, count: 80 },
		{ build: BUILD_TRACKER_B, count: 80 }
	]
};
fleets[FLEET_CHALLENGE_2_A] = {
	name: 'Challenge-2-A',
	commander: FLEET_COMMANDER_BRUCE_B,
	stacks: [
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 },
		{ build: BUILD_REDWOLF, count: 200 }
	]
};
fleets[FLEET_CHALLENGE_2_B] = {
	name: 'Challenge-2-B',
	commander: FLEET_COMMANDER_BRUCE_B,
	stacks: [
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 },
		{ build: BUILD_GHOSTY, count: 200 }
	]
};
fleets[FLEET_CHALLENGE_3_A] = {
	name: 'Challenge-3-A',
	commander: FLEET_COMMANDER_BRUCE_B,
	stacks: [
		{ build: BUILD_ENCRATOS_A, count: 300 },
		{ build: BUILD_ENCRATOS_A, count: 300 },
		{ build: BUILD_ENCRATOS_A, count: 300 },
		{ build: BUILD_ENCRATOS_A, count: 300 },
		{ build: BUILD_ENCRATOS_A, count: 300 },
		{ build: BUILD_ENCRATOS_A, count: 300 },
		{ build: BUILD_ENCRATOS_A, count: 300 },
		{ build: BUILD_ENCRATOS_A, count: 300 },
		{ build: BUILD_ENCRATOS_A, count: 300 }
	]
};
fleets[FLEET_CHALLENGE_3_B] = {
	name: 'Challenge-3-B',
	commander: FLEET_COMMANDER_ANGLA_A,
	stacks: [
		{ build: BUILD_CERBERUS, count: 300 },
		{ build: BUILD_CERBERUS, count: 300 },
		{ build: BUILD_CERBERUS, count: 300 },
		{ build: BUILD_CERBERUS, count: 300 },
		{ build: BUILD_DEF, count: 300 },
		{ build: BUILD_CERBERUS, count: 300 },
		{ build: BUILD_CERBERUS, count: 300 },
		{ build: BUILD_CERBERUS, count: 300 },
		{ build: BUILD_CERBERUS, count: 300 }
	]
};
fleets[FLEET_CHALLENGE_3_C] = {
	name: 'Challenge-3-C',
	commander: FLEET_COMMANDER_BRUCE_B,
	stacks: [
		{ build: BUILD_DEF, count: 300 },
		{ build: BUILD_PROMETHEUS, count: 300 },
		{ build: BUILD_PROMETHEUS, count: 300 },
		{ build: BUILD_PROMETHEUS, count: 300 },
		{ build: BUILD_DEF, count: 300 },
		{ build: BUILD_PROMETHEUS, count: 300 },
		{ build: BUILD_DEF, count: 300 },
		{ build: BUILD_PROMETHEUS, count: 300 },
		{ build: BUILD_PROMETHEUS, count: 300 }
	]
};
fleets[FLEET_CHALLENGE_3_D] = {
	name: 'Challenge-3-D',
	commander: FLEET_COMMANDER_BRUCE_B,
	stacks: [
		{ build: BUILD_ENCRATOS_B, count: 300 },
		{ build: BUILD_ENCRATOS_B, count: 300 },
		{ build: BUILD_DEF, count: 300 },
		{ build: BUILD_ENCRATOS_B, count: 300 },
		{ build: BUILD_ENCRATOS_B, count: 300 },
		{ build: BUILD_DEF, count: 300 },
		{ build: BUILD_ENCRATOS_B, count: 300 },
		{ build: BUILD_ENCRATOS_B, count: 300 },
		{ build: BUILD_DEF, count: 300 }
	]
};
fleets[FLEET_CHALLENGE_4_A] = {
	name: 'Challenge-4-A',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_HAWK, count: 500 },
		{ build: BUILD_HAWK, count: 500 },
		{ build: BUILD_HAWK, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 500 },
		{ build: BUILD_HAWK, count: 500 },
		{ build: BUILD_HAWK, count: 500 },
		{ build: BUILD_HAWK, count: 500 },
		{ build: BUILD_HAWK, count: 500 },
		{ build: BUILD_HAWK, count: 500 }
	]
};
fleets[FLEET_CHALLENGE_4_B] = {
	name: 'Challenge-4-B',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_NYX_A, count: 500 },
		{ build: BUILD_NYX_A, count: 500 },
		{ build: BUILD_NYX_A, count: 500 },
		{ build: BUILD_NYX_A, count: 500 },
		{ build: BUILD_NYX_A, count: 500 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_NYX_A, count: 500 },
		{ build: BUILD_NYX_A, count: 500 }
	]
};
fleets[FLEET_CHALLENGE_4_C] = {
	name: 'Challenge-4-C',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_THE_HEAVENLY_START, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 500 },
		{ build: BUILD_THE_HEAVENLY_START, count: 500 },
		{ build: BUILD_THE_HEAVENLY_START, count: 500 },
		{ build: BUILD_THE_HEAVENLY_START, count: 500 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_THE_HEAVENLY_START, count: 500 },
		{ build: BUILD_MEATSHIELD, count: 500 }
	]
};
fleets[FLEET_CHALLENGE_4_D] = {
	name: 'Challenge-4-D',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_NYX_B, count: 350 },
		{ build: BUILD_MEATSHIELD, count: 400 },
		{ build: BUILD_NYX_B, count: 350 },
		{ build: BUILD_NYX_B, count: 350 },
		{ build: BUILD_MEATSHIELD, count: 400 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_NYX_B, count: 350 },
		{ build: BUILD_MEATSHIELD, count: 400 }
	]
};
fleets[FLEET_CHALLENGE_5_A] = {
	name: 'Challenge-5-A',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_MAX_A, count: 700 },
		{ build: BUILD_MAX_A, count: 700 },
		{ build: BUILD_MAX_A, count: 700 },
		{ build: BUILD_MAX_A, count: 700 },
		{ build: BUILD_MAX_A, count: 700 },
		{ build: BUILD_MAX_A, count: 700 },
		{ build: BUILD_MAX_A, count: 700 },
		{ build: BUILD_MAX_A, count: 700 },
		{ build: BUILD_MAX_A, count: 700 }
	]
};
fleets[FLEET_CHALLENGE_5_B] = {
	name: 'Challenge-5-B',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_MAX_B, count: 700 },
		{ build: BUILD_MAX_B, count: 700 },
		{ build: BUILD_MAX_B, count: 700 },
		{ build: BUILD_MAX_B, count: 700 },
		{ build: BUILD_MAX_B, count: 700 },
		{ build: BUILD_MAX_B, count: 700 },
		{ build: BUILD_MAX_B, count: 700 },
		{ build: BUILD_MAX_B, count: 700 },
		{ build: BUILD_MAX_B, count: 700 }
	]
};
fleets[FLEET_CHALLENGE_5_C] = {
	name: 'Challenge-5-C',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_MAX_C, count: 700 },
		{ build: BUILD_MAX_C, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_MAX_C, count: 700 },
		{ build: BUILD_MAX_C, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_MAX_C, count: 700 },
		{ build: BUILD_MAX_C, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 700 }
	]
};
fleets[FLEET_CHALLENGE_5_D] = {
	name: 'Challenge-5-D',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_MAX_D, count: 700 },
		{ build: BUILD_MAX_D, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 700 },
		{ build: BUILD_MAX_D, count: 700 },
		{ build: BUILD_EMPTY, count: 0 },
		{ build: BUILD_MAX_D, count: 700 },
		{ build: BUILD_MAX_D, count: 700 },
		{ build: BUILD_MAX_D, count: 700 },
		{ build: BUILD_MEATSHIELD, count: 700 }
	]
};
fleets[FLEET_CHALLENGE_6_A] = {
	name: 'Challenge-6-A',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_BOSS_1, count: 1000 },
		{ build: BUILD_BOSS_1, count: 1000 },
		{ build: BUILD_BOSS_1, count: 1000 },
		{ build: BUILD_BOSS_1, count: 1000 },
		{ build: BUILD_BOSS_1, count: 1000 },
		{ build: BUILD_BOSS_1, count: 1000 },
		{ build: BUILD_BOSS_1, count: 1000 },
		{ build: BUILD_BOSS_1, count: 1000 },
		{ build: BUILD_BOSS_1, count: 1000 }
	]
};
fleets[FLEET_CHALLENGE_6_B] = {
	name: 'Challenge-6-B',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_BOSS_2, count: 1000 },
		{ build: BUILD_BOSS_2, count: 1000 },
		{ build: BUILD_BOSS_2, count: 1000 },
		{ build: BUILD_BOSS_2, count: 1000 },
		{ build: BUILD_BOSS_2, count: 1000 },
		{ build: BUILD_BOSS_2, count: 1000 },
		{ build: BUILD_BOSS_2, count: 1000 },
		{ build: BUILD_BOSS_2, count: 1000 },
		{ build: BUILD_BOSS_2, count: 1000 }
	]
};;
fleets[FLEET_CHALLENGE_6_C] = {
	name: 'Challenge-6-C',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_BOSS_3, count: 1000 },
		{ build: BUILD_BOSS_3, count: 1000 },
		{ build: BUILD_BOSS_3, count: 1000 },
		{ build: BUILD_BOSS_3, count: 1000 },
		{ build: BUILD_BOSS_3, count: 1000 },
		{ build: BUILD_BOSS_3, count: 1000 },
		{ build: BUILD_BOSS_3, count: 1000 },
		{ build: BUILD_BOSS_3, count: 1000 },
		{ build: BUILD_BOSS_3, count: 1000 }
	]
};;
fleets[FLEET_CHALLENGE_6_D] = {
	name: 'Challenge-6-D',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_BOSS_4, count: 1000 },
		{ build: BUILD_BOSS_4, count: 1000 },
		{ build: BUILD_BOSS_4, count: 1000 },
		{ build: BUILD_BOSS_4, count: 1000 },
		{ build: BUILD_BOSS_4, count: 1000 },
		{ build: BUILD_BOSS_4, count: 1000 },
		{ build: BUILD_BOSS_4, count: 1000 },
		{ build: BUILD_BOSS_4, count: 1000 },
		{ build: BUILD_BOSS_4, count: 1000 }
	]
};
fleets[FLEET_CHALLENGE_7_A] = {
	name: 'Challenge-7-A',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_WIKES_A, count: 1500 },
		{ build: BUILD_WIKES_A, count: 1500 },
		{ build: BUILD_WIKES_A, count: 1500 },
		{ build: BUILD_WIKES_A, count: 1500 },
		{ build: BUILD_WIKES_A, count: 1500 },
		{ build: BUILD_WIKES_A, count: 1500 },
		{ build: BUILD_WIKES_A, count: 1500 },
		{ build: BUILD_WIKES_A, count: 1500 },
		{ build: BUILD_WIKES_A, count: 1500 }
	]
};
fleets[FLEET_CHALLENGE_7_B] = {
	name: 'Challenge-7-B',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_WIKES_B, count: 1500 },
		{ build: BUILD_WIKES_B, count: 1500 },
		{ build: BUILD_WIKES_B, count: 1500 },
		{ build: BUILD_WIKES_B, count: 1500 },
		{ build: BUILD_WIKES_B, count: 1500 },
		{ build: BUILD_WIKES_B, count: 1500 },
		{ build: BUILD_WIKES_B, count: 1500 },
		{ build: BUILD_WIKES_B, count: 1500 },
		{ build: BUILD_WIKES_B, count: 1500 }
	]
};
fleets[FLEET_CHALLENGE_7_C] = {
	name: 'Challenge-7-C',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_WIKES_C, count: 1500 },
		{ build: BUILD_WIKES_C, count: 1500 },
		{ build: BUILD_WIKES_C, count: 1500 },
		{ build: BUILD_WIKES_C, count: 1500 },
		{ build: BUILD_WIKES_C, count: 1500 },
		{ build: BUILD_WIKES_C, count: 1500 },
		{ build: BUILD_WIKES_C, count: 1500 },
		{ build: BUILD_WIKES_C, count: 1500 },
		{ build: BUILD_WIKES_C, count: 1500 }
	]
};
fleets[FLEET_CHALLENGE_7_D] = {
	name: 'Challenge-7-D',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_WIKES_D, count: 1500 },
		{ build: BUILD_WIKES_D, count: 1500 },
		{ build: BUILD_WIKES_D, count: 1500 },
		{ build: BUILD_WIKES_D, count: 1500 },
		{ build: BUILD_WIKES_D, count: 1500 },
		{ build: BUILD_WIKES_D, count: 1500 },
		{ build: BUILD_WIKES_D, count: 1500 },
		{ build: BUILD_WIKES_D, count: 1500 },
		{ build: BUILD_WIKES_D, count: 1500 }
	]
};
fleets[FLEET_CHALLENGE_8_A] = {
	name: 'Challenge-8-A',
	commander: FLEET_COMMANDER_BRUCE_C,
	stacks: [
		{ build: BUILD_NEW_A, count: 2000 },
		{ build: BUILD_NEW_A, count: 2000 },
		{ build: BUILD_NEW_A, count: 2000 },
		{ build: BUILD_NEW_A, count: 2000 },
		{ build: BUILD_NEW_A, count: 2000 },
		{ build: BUILD_NEW_A, count: 2000 },
		{ build: BUILD_NEW_A, count: 2000 },
		{ build: BUILD_NEW_A, count: 2000 },
		{ build: BUILD_NEW_A, count: 2000 }
	]
};
fleets[FLEET_CHALLENGE_8_B] = {
	name: 'Challenge-8-B',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_B, count: 2000 },
		{ build: BUILD_NEW_B, count: 2000 },
		{ build: BUILD_NEW_B, count: 2000 },
		{ build: BUILD_NEW_B, count: 2000 },
		{ build: BUILD_NEW_B, count: 2000 },
		{ build: BUILD_NEW_B, count: 2000 },
		{ build: BUILD_NEW_B, count: 2000 },
		{ build: BUILD_NEW_B, count: 2000 },
		{ build: BUILD_NEW_B, count: 2000 }
	]
};
fleets[FLEET_CHALLENGE_8_C] = {
	name: 'Challenge-8-C',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_C, count: 2000 },
		{ build: BUILD_NEW_C, count: 2000 },
		{ build: BUILD_NEW_C, count: 2000 },
		{ build: BUILD_NEW_C, count: 2000 },
		{ build: BUILD_NEW_C, count: 2000 },
		{ build: BUILD_NEW_C, count: 2000 },
		{ build: BUILD_NEW_C, count: 2000 },
		{ build: BUILD_NEW_C, count: 2000 },
		{ build: BUILD_NEW_C, count: 2000 }
	]
};
fleets[FLEET_CHALLENGE_8_D] = {
	name: 'Challenge-8-D',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_D, count: 2000 },
		{ build: BUILD_NEW_D, count: 2000 },
		{ build: BUILD_MEATSHIELD, count: 2000 },
		{ build: BUILD_NEW_D, count: 2000 },
		{ build: BUILD_NEW_D, count: 2000 },
		{ build: BUILD_MEATSHIELD, count: 2000 },
		{ build: BUILD_NEW_D, count: 2000 },
		{ build: BUILD_NEW_D, count: 2000 },
		{ build: BUILD_MEATSHIELD, count: 2000 }
	]
};
fleets[FLEET_CHALLENGE_9_A] = {
	name: 'Challenge-9-A',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_E, count: 2400 },
		{ build: BUILD_NEW_E, count: 2400 },
		{ build: BUILD_NEW_E, count: 2400 },
		{ build: BUILD_NEW_E, count: 2400 },
		{ build: BUILD_NEW_E, count: 2400 },
		{ build: BUILD_NEW_E, count: 2400 },
		{ build: BUILD_NEW_E, count: 2400 },
		{ build: BUILD_NEW_E, count: 2400 },
		{ build: BUILD_NEW_E, count: 2400 }
	]
};
fleets[FLEET_CHALLENGE_9_B] = {
	name: 'Challenge-9-B',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_F, count: 2400 },
		{ build: BUILD_NEW_F, count: 2400 },
		{ build: BUILD_NEW_F, count: 2400 },
		{ build: BUILD_NEW_F, count: 2400 },
		{ build: BUILD_NEW_F, count: 2400 },
		{ build: BUILD_NEW_F, count: 2400 },
		{ build: BUILD_NEW_F, count: 2400 },
		{ build: BUILD_NEW_F, count: 2400 },
		{ build: BUILD_NEW_F, count: 2400 }
	]
};
fleets[FLEET_CHALLENGE_9_C] = {
	name: 'Challenge-9-C',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_G, count: 2400 },
		{ build: BUILD_NEW_G, count: 2400 },
		{ build: BUILD_NEW_G, count: 2400 },
		{ build: BUILD_NEW_G, count: 2400 },
		{ build: BUILD_NEW_G, count: 2400 },
		{ build: BUILD_NEW_G, count: 2400 },
		{ build: BUILD_NEW_G, count: 2400 },
		{ build: BUILD_NEW_G, count: 2400 },
		{ build: BUILD_NEW_G, count: 2400 }
	]
};
fleets[FLEET_CHALLENGE_9_D] = {
	name: 'Challenge-9-D',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_H, count: 2400 },
		{ build: BUILD_NEW_H, count: 2400 },
		{ build: BUILD_NEW_H, count: 2400 },
		{ build: BUILD_NEW_H, count: 2400 },
		{ build: BUILD_NEW_H, count: 2400 },
		{ build: BUILD_NEW_H, count: 2400 },
		{ build: BUILD_NEW_H, count: 2400 },
		{ build: BUILD_NEW_H, count: 2400 },
		{ build: BUILD_NEW_H, count: 2400 }
	]
};
fleets[FLEET_CHALLENGE_10_A] = {
	name: 'Challenge-10-A',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_I, count: 2800 },
		{ build: BUILD_NEW_I, count: 2800 },
		{ build: BUILD_NEW_I, count: 2800 },
		{ build: BUILD_NEW_I, count: 2800 },
		{ build: BUILD_NEW_I, count: 2800 },
		{ build: BUILD_NEW_I, count: 2800 },
		{ build: BUILD_NEW_I, count: 2800 },
		{ build: BUILD_NEW_I, count: 2800 },
		{ build: BUILD_NEW_I, count: 2800 }
	]
};
fleets[FLEET_CHALLENGE_10_B] = {
	name: 'Challenge-10-B',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_J, count: 2800 },
		{ build: BUILD_NEW_J, count: 2800 },
		{ build: BUILD_NEW_J, count: 2800 },
		{ build: BUILD_NEW_J, count: 2800 },
		{ build: BUILD_NEW_J, count: 2800 },
		{ build: BUILD_NEW_J, count: 2800 },
		{ build: BUILD_NEW_J, count: 2800 },
		{ build: BUILD_NEW_J, count: 2800 },
		{ build: BUILD_NEW_J, count: 2800 }
	]
};
fleets[FLEET_CHALLENGE_10_C] = {
	name: 'Challenge-10-C',
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_K, count: 2800 },
		{ build: BUILD_NEW_K, count: 2800 },
		{ build: BUILD_MEATSHIELD, count: 2800 },
		{ build: BUILD_NEW_K, count: 2800 },
		{ build: BUILD_NEW_K, count: 2800 },
		{ build: BUILD_NEW_K, count: 2800 },
		{ build: BUILD_NEW_K, count: 2800 },
		{ build: BUILD_NEW_K, count: 2800 },
		{ build: BUILD_MEATSHIELD, count: 2800 }
	]
};
fleets[FLEET_CHALLENGE_10_D] = {
	name: 'Challenge-10-D',
	target: TARGET_CLOSEST,
	commander: FLEET_COMMANDER_BRUCE_D,
	stacks: [
		{ build: BUILD_NEW_L, count: 2800 },
		{ build: BUILD_NEW_L, count: 2800 },
		{ build: BUILD_NEW_L, count: 2800 },
		{ build: BUILD_NEW_L, count: 2800 },
		{ build: BUILD_NEW_L, count: 2800 },
		{ build: BUILD_NEW_L, count: 2800 },
		{ build: BUILD_NEW_L, count: 2800 },
		{ build: BUILD_NEW_L, count: 2800 },
		{ build: BUILD_NEW_L, count: 2800 }
	]
};
fleets[FLEET_PIRATE_A1] = {
	name: 'Ghost-1',
	commander: FLEET_COMMANDER_WAYNE_1,
	stacks: [
		{ build: BUILD_PIRATE_A1, count: 600 },
		{ build: BUILD_PIRATE_A1, count: 600 },
		{ build: BUILD_PIRATE_A1, count: 600 },
		{ build: BUILD_PIRATE_A1, count: 600 },
		{ build: BUILD_PIRATE_A1, count: 600 },
		{ build: BUILD_PIRATE_A1, count: 600 },
		{ build: BUILD_PIRATE_A1, count: 600 },
		{ build: BUILD_PIRATE_A1, count: 600 },
		{ build: BUILD_PIRATE_A1, count: 600 }
	]
};
fleets[FLEET_PIRATE_A2] = {
	name: 'Ghost-2',
	commander: FLEET_COMMANDER_ALICIA_1,
	stacks: [
		{ build: BUILD_PIRATE_A2, count: 600 },
		{ build: BUILD_PIRATE_A2, count: 600 },
		{ build: BUILD_PIRATE_A2, count: 600 },
		{ build: BUILD_PIRATE_A2, count: 600 },
		{ build: BUILD_PIRATE_A2, count: 600 },
		{ build: BUILD_PIRATE_A2, count: 600 },
		{ build: BUILD_PIRATE_A2, count: 600 },
		{ build: BUILD_PIRATE_A2, count: 600 },
		{ build: BUILD_PIRATE_A2, count: 600 }
	]
};
fleets[FLEET_PIRATE_A3] = {
	name: 'Ghost-3',
	commander: FLEET_COMMANDER_JEROME_1,
	stacks: [
		{ build: BUILD_PIRATE_A3, count: 600 },
		{ build: BUILD_PIRATE_A3, count: 600 },
		{ build: BUILD_DEF, count: 600 },
		{ build: BUILD_PIRATE_A3, count: 600 },
		{ build: BUILD_PIRATE_A3, count: 600 },
		{ build: BUILD_DEF, count: 600 },
		{ build: BUILD_PIRATE_A3, count: 600 },
		{ build: BUILD_PIRATE_A3, count: 600 },
		{ build: BUILD_DEF, count: 600 }
	]
};
fleets[FLEET_PIRATE_A4] = {
	name: 'Ghost-4',
	commander: FLEET_COMMANDER_NATIYA_1,
	stacks: [
		{ build: BUILD_PIRATE_A4, count: 600 },
		{ build: BUILD_PIRATE_A4, count: 600 },
		{ build: BUILD_DEF, count: 600 },
		{ build: BUILD_PIRATE_A4, count: 600 },
		{ build: BUILD_DEF, count: 600 },
		{ build: BUILD_PIRATE_A4, count: 600 },
		{ build: BUILD_PIRATE_A4, count: 600 },
		{ build: BUILD_PIRATE_A4, count: 600 },
		{ build: BUILD_DEF, count: 600 }
	]
};
fleets[FLEET_PIRATE_B1] = {
	name: 'Ghost-5',
	commander: FLEET_COMMANDER_SOFIA_1,
	stacks: [
		{ build: BUILD_PIRATE_B1, count: 800 },
		{ build: BUILD_PIRATE_B1, count: 800 },
		{ build: BUILD_PIRATE_B1, count: 800 },
		{ build: BUILD_PIRATE_B1, count: 800 },
		{ build: BUILD_PIRATE_B1, count: 800 },
		{ build: BUILD_PIRATE_B1, count: 800 },
		{ build: BUILD_PIRATE_B1, count: 800 },
		{ build: BUILD_PIRATE_B1, count: 800 },
		{ build: BUILD_PIRATE_B1, count: 800 }
	]
};
fleets[FLEET_PIRATE_B2] = {
	name: 'Ghost-6',
	commander: FLEET_COMMANDER_VINNA_1,
	stacks: [
		{ build: BUILD_PIRATE_B2, count: 800 },
		{ build: BUILD_PIRATE_B2, count: 800 },
		{ build: BUILD_PIRATE_B2, count: 800 },
		{ build: BUILD_PIRATE_B2, count: 800 },
		{ build: BUILD_PIRATE_B2, count: 800 },
		{ build: BUILD_PIRATE_B2, count: 800 },
		{ build: BUILD_PIRATE_B2, count: 800 },
		{ build: BUILD_PIRATE_B2, count: 800 },
		{ build: BUILD_PIRATE_B2, count: 800 }
	]
};
fleets[FLEET_PIRATE_B3] = {
	name: 'Ghost-7',
	commander: FLEET_COMMANDER_SANDORA_1,
	stacks: [
		{ build: BUILD_PIRATE_B3, count: 800 },
		{ build: BUILD_PIRATE_B3, count: 800 },
		{ build: BUILD_PIRATE_B3, count: 800 },
		{ build: BUILD_PIRATE_B3, count: 800 },
		{ build: BUILD_PIRATE_B3, count: 800 },
		{ build: BUILD_PIRATE_B3, count: 800 },
		{ build: BUILD_PIRATE_B3, count: 800 },
		{ build: BUILD_PIRATE_B3, count: 800 },
		{ build: BUILD_PIRATE_B3, count: 800 }
	]
};
fleets[FLEET_PIRATE_B4] = {
	name: 'Ghost-8',
	commander: FLEET_COMMANDER_PENNI_1,
	stacks: [
		{ build: BUILD_PIRATE_B4, count: 800 },
		{ build: BUILD_PIRATE_B4, count: 800 },
		{ build: BUILD_DEF, count: 800 },
		{ build: BUILD_PIRATE_B4, count: 800 },
		{ build: BUILD_PIRATE_B4, count: 800 },
		{ build: BUILD_DEF, count: 800 },
		{ build: BUILD_PIRATE_B4, count: 800 },
		{ build: BUILD_PIRATE_B4, count: 800 },
		{ build: BUILD_DEF, count: 800 }
	]
};
fleets[FLEET_PIRATE_C1] = {
	name: 'Ghost-9',
	commander: FLEET_COMMANDER_ALICIA_2,
	stacks: [
		{ build: BUILD_PIRATE_C2, count: 1000 },
		{ build: BUILD_PIRATE_C2, count: 1000 },
		{ build: BUILD_PIRATE_C1, count: 1000 },
		{ build: BUILD_PIRATE_C2, count: 1000 },
		{ build: BUILD_PIRATE_C2, count: 1000 },
		{ build: BUILD_PIRATE_C1, count: 1000 },
		{ build: BUILD_PIRATE_C2, count: 1000 },
		{ build: BUILD_PIRATE_C2, count: 1000 },
		{ build: BUILD_PIRATE_C1, count: 1000 }
	]
};
fleets[FLEET_PIRATE_C2] = {
	name: 'Ghost-10',
	commander: FLEET_COMMANDER_WAYNE_2,
	stacks: [
		{ build: BUILD_PIRATE_C3, count: 1000 },
		{ build: BUILD_PIRATE_C3, count: 1000 },
		{ build: BUILD_PIRATE_C3, count: 1000 },
		{ build: BUILD_PIRATE_C3, count: 1000 },
		{ build: BUILD_PIRATE_C3, count: 1000 },
		{ build: BUILD_PIRATE_C3, count: 1000 },
		{ build: BUILD_PIRATE_C3, count: 1000 },
		{ build: BUILD_PIRATE_C3, count: 1000 },
		{ build: BUILD_PIRATE_C3, count: 1000 }
	]
};
fleets[FLEET_PIRATE_C3] = {
	name: 'Ghost-11',
	commander: FLEET_COMMANDER_EVELINE_2,
	stacks: [
		{ build: BUILD_PIRATE_C4, count: 1000 },
		{ build: BUILD_DEF, count: 1000 },
		{ build: BUILD_PIRATE_C4, count: 1000 },
		{ build: BUILD_PIRATE_C4, count: 1000 },
		{ build: BUILD_PIRATE_C4, count: 1000 },
		{ build: BUILD_PIRATE_C4, count: 1000 },
		{ build: BUILD_PIRATE_C4, count: 1000 },
		{ build: BUILD_DEF, count: 1000 },
		{ build: BUILD_PIRATE_C4, count: 1000 }
	]
};
fleets[FLEET_PIRATE_C4] = {
	name: 'Ghost-12',
	commander: FLEET_COMMANDER_GASTAF_2,
	stacks: [
		{ build: BUILD_PIRATE_C5, count: 1000 },
		{ build: BUILD_PIRATE_C5, count: 1000 },
		{ build: BUILD_DEF, count: 1000 },
		{ build: BUILD_PIRATE_C5, count: 1000 },
		{ build: BUILD_PIRATE_C5, count: 1000 },
		{ build: BUILD_DEF, count: 1000 },
		{ build: BUILD_PIRATE_C5, count: 1000 },
		{ build: BUILD_PIRATE_C5, count: 1000 },
		{ build: BUILD_DEF, count: 1000 }
	]
};
fleets[FLEET_PIRATE_D1] = {
	name: 'Ghost-13',
	commander: FLEET_COMMANDER_LEO_2,
	stacks: [
		{ build: BUILD_PIRATE_D1, count: 1200 },
		{ build: BUILD_PIRATE_D1, count: 1200 },
		{ build: BUILD_PIRATE_D1, count: 1200 },
		{ build: BUILD_PIRATE_D1, count: 1200 },
		{ build: BUILD_PIRATE_D1, count: 1200 },
		{ build: BUILD_PIRATE_D1, count: 1200 },
		{ build: BUILD_PIRATE_D1, count: 1200 },
		{ build: BUILD_PIRATE_D1, count: 1200 },
		{ build: BUILD_PIRATE_D1, count: 1200 }
	]
};
fleets[FLEET_PIRATE_D2] = {
	name: 'Ghost-14',
	commander: FLEET_COMMANDER_MARCUS_2,
	stacks: [
		{ build: BUILD_PIRATE_D2, count: 1200 },
		{ build: BUILD_PIRATE_D2, count: 1200 },
		{ build: BUILD_PIRATE_D2, count: 1200 },
		{ build: BUILD_PIRATE_D2, count: 1200 },
		{ build: BUILD_PIRATE_D2, count: 1200 },
		{ build: BUILD_PIRATE_D2, count: 1200 },
		{ build: BUILD_PIRATE_D2, count: 1200 },
		{ build: BUILD_PIRATE_D2, count: 1200 },
		{ build: BUILD_PIRATE_D2, count: 1200 }
	]
};
fleets[FLEET_PIRATE_D3] = {
	name: 'Ghost-15',
	commander: FLEET_COMMANDER_RAYO_2,
	stacks: [
		{ build: BUILD_PIRATE_D3, count: 1200 },
		{ build: BUILD_PIRATE_D3, count: 1200 },
		{ build: BUILD_DEF, count: 1200 },
		{ build: BUILD_PIRATE_D3, count: 1200 },
		{ build: BUILD_PIRATE_D3, count: 1200 },
		{ build: BUILD_PIRATE_D3, count: 1200 },
		{ build: BUILD_PIRATE_D3, count: 1200 },
		{ build: BUILD_PIRATE_D3, count: 1200 },
		{ build: BUILD_DEF, count: 1200 }
	]
};
fleets[FLEET_PIRATE_D4] = {
	name: 'Ghost-16',
	commander: FLEET_COMMANDER_NICK_2,
	stacks: [
		{ build: BUILD_PIRATE_D4, count: 1200 },
		{ build: BUILD_PIRATE_D4, count: 1200 },
		{ build: BUILD_DEF, count: 1200 },
		{ build: BUILD_PIRATE_D4, count: 1200 },
		{ build: BUILD_PIRATE_D4, count: 1200 },
		{ build: BUILD_DEF, count: 1200 },
		{ build: BUILD_PIRATE_D4, count: 1200 },
		{ build: BUILD_PIRATE_D4, count: 1200 },
		{ build: BUILD_DEF, count: 1200 }
	]
};
fleets[FLEET_PIRATE_E1] = {
	name: 'Ghost-17',
	commander: FLEET_COMMANDER_ANNATA_3,
	target: TARGET_COMMANDER,
	stacks: [
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 }
	]
};
fleets[FLEET_PIRATE_E2] = {
	name: 'Ghost-18',
	commander: FLEET_COMMANDER_GASTAF_3,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 }
	]
};
fleets[FLEET_PIRATE_E3] = {
	name: 'Ghost-19',
	commander: FLEET_COMMANDER_RINGEL_3,
	stacks: [
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_DEF, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_DEF, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 }
	]
};
fleets[FLEET_PIRATE_E4] = {
	name: 'Ghost-20',
	commander: FLEET_COMMANDER_AILEEN_3,
	stacks: [
		{ build: BUILD_DEF, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_DEF, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_DEF, count: 1400 }
	]
};
fleets[FLEET_PIRATE_F1] = {
	name: 'Ghost-21',
	commander: FLEET_COMMANDER_LINDA_3,
	target: TARGET_COMMANDER,
	stacks: [
		{ build: BUILD_PIRATE_F1, count: 1700 },
		{ build: BUILD_PIRATE_F1, count: 1700 },
		{ build: BUILD_PIRATE_F1, count: 1700 },
		{ build: BUILD_PIRATE_F1, count: 1700 },
		{ build: BUILD_PIRATE_F1, count: 1700 },
		{ build: BUILD_PIRATE_F1, count: 1700 },
		{ build: BUILD_PIRATE_F1, count: 1700 },
		{ build: BUILD_PIRATE_F1, count: 1700 },
		{ build: BUILD_PIRATE_F1, count: 1700 }
	]
};
fleets[FLEET_PIRATE_F2] = {
	name: 'Ghost-22',
	commander: FLEET_COMMANDER_ANNA_3,
	stacks: [
		{ build: BUILD_PIRATE_F2, count: 1700 },
		{ build: BUILD_PIRATE_F2, count: 1700 },
		{ build: BUILD_PIRATE_F2, count: 1700 },
		{ build: BUILD_PIRATE_F2, count: 1700 },
		{ build: BUILD_PIRATE_F2, count: 1700 },
		{ build: BUILD_PIRATE_F2, count: 1700 },
		{ build: BUILD_PIRATE_F2, count: 1700 },
		{ build: BUILD_PIRATE_F2, count: 1700 },
		{ build: BUILD_PIRATE_F2, count: 1700 }
	]
};
fleets[FLEET_PIRATE_F3] = {
	name: 'Ghost-23',
	commander: FLEET_COMMANDER_SANDORA_3,
	stacks: [
		{ build: BUILD_PIRATE_F3, count: 1700 },
		{ build: BUILD_PIRATE_F3, count: 1700 },
		{ build: BUILD_MEATSHIELD, count: 1700 },
		{ build: BUILD_PIRATE_F3, count: 1700 },
		{ build: BUILD_PIRATE_F3, count: 1700 },
		{ build: BUILD_MEATSHIELD, count: 1700 },
		{ build: BUILD_PIRATE_F3, count: 1700 },
		{ build: BUILD_PIRATE_F3, count: 1700 },
		{ build: BUILD_MEATSHIELD, count: 1700 }
	]
};
fleets[FLEET_PIRATE_F4] = {
	name: 'Ghost-24',
	commander: FLEET_COMMANDER_MARCUS_3,
	stacks: [
		{ build: BUILD_MEATSHIELD, count: 1700 },
		{ build: BUILD_PIRATE_F4, count: 1700 },
		{ build: BUILD_PIRATE_F4, count: 1700 },
		{ build: BUILD_PIRATE_F4, count: 1700 },
		{ build: BUILD_PIRATE_F4, count: 1700 },
		{ build: BUILD_PIRATE_F4, count: 1700 },
		{ build: BUILD_PIRATE_F4, count: 1700 },
		{ build: BUILD_PIRATE_F4, count: 1700 },
		{ build: BUILD_MEATSHIELD, count: 1700 }
	]
};
fleets[FLEET_PIRATE_G1] = {
	name: 'Ghost-25',
	commander: FLEET_COMMANDER_LEO_4,
	stacks: [
		{ build: BUILD_PIRATE_G1, count: 2000 },
		{ build: BUILD_PIRATE_G1, count: 2000 },
		{ build: BUILD_PIRATE_G1, count: 2000 },
		{ build: BUILD_PIRATE_G1, count: 2000 },
		{ build: BUILD_PIRATE_G1, count: 2000 },
		{ build: BUILD_PIRATE_G1, count: 2000 },
		{ build: BUILD_PIRATE_G1, count: 2000 },
		{ build: BUILD_PIRATE_G1, count: 2000 },
		{ build: BUILD_PIRATE_G1, count: 2000 }
	]
};
fleets[FLEET_PIRATE_G2] = {
	name: 'Ghost-26',
	commander: FLEET_COMMANDER_STANI_3,
	target: TARGET_COMMANDER,
	stacks: [
		{ build: BUILD_PIRATE_G2, count: 2000 },
		{ build: BUILD_PIRATE_G2, count: 2000 },
		{ build: BUILD_PIRATE_G2, count: 2000 },
		{ build: BUILD_PIRATE_G2, count: 2000 },
		{ build: BUILD_PIRATE_G2, count: 2000 },
		{ build: BUILD_PIRATE_G2, count: 2000 },
		{ build: BUILD_PIRATE_G2, count: 2000 },
		{ build: BUILD_PIRATE_G2, count: 2000 },
		{ build: BUILD_PIRATE_G2, count: 2000 }
	]
};
fleets[FLEET_PIRATE_G3] = {
	name: 'Ghost-27',
	commander: FLEET_COMMANDER_NICK_4,
	stacks: [
		{ build: BUILD_MEATSHIELD, count: 2000 },
		{ build: BUILD_PIRATE_G3, count: 2000 },
		{ build: BUILD_MEATSHIELD, count: 2000 },
		{ build: BUILD_PIRATE_G3, count: 2000 },
		{ build: BUILD_PIRATE_G3, count: 2000 },
		{ build: BUILD_PIRATE_G3, count: 2000 },
		{ build: BUILD_MEATSHIELD, count: 2000 },
		{ build: BUILD_PIRATE_G3, count: 2000 },
		{ build: BUILD_MEATSHIELD, count: 2000 }
	]
};
fleets[FLEET_PIRATE_G4] = {
	name: 'Ghost-28',
	commander: FLEET_COMMANDER_MALETIZ_4,
	stacks: [
		{ build: BUILD_PIRATE_G4, count: 2000 },
		{ build: BUILD_PIRATE_G4, count: 2000 },
		{ build: BUILD_MEATSHIELD, count: 2000 },
		{ build: BUILD_PIRATE_G4, count: 2000 },
		{ build: BUILD_PIRATE_G4, count: 2000 },
		{ build: BUILD_MEATSHIELD, count: 2000 },
		{ build: BUILD_PIRATE_G4, count: 2000 },
		{ build: BUILD_PIRATE_G4, count: 2000 },
		{ build: BUILD_MEATSHIELD, count: 2000 }
	]
};
fleets[FLEET_PIRATE_H1] = {
	name: 'Ghost-29',
	commander: FLEET_COMMANDER_BART_4,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_PIRATE_H1, count: 2300 },
		{ build: BUILD_PIRATE_H1, count: 2300 },
		{ build: BUILD_PIRATE_H1, count: 2300 },
		{ build: BUILD_PIRATE_H1, count: 2300 },
		{ build: BUILD_PIRATE_H1, count: 2300 },
		{ build: BUILD_PIRATE_H1, count: 2300 },
		{ build: BUILD_PIRATE_H1, count: 2300 },
		{ build: BUILD_PIRATE_H1, count: 2300 },
		{ build: BUILD_PIRATE_H1, count: 2300 }
	]
};
fleets[FLEET_PIRATE_H2] = {
	name: 'Ghost-30',
	commander: FLEET_COMMANDER_BART_4,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_PIRATE_H2, count: 2300 },
		{ build: BUILD_PIRATE_H2, count: 2300 },
		{ build: BUILD_PIRATE_H2, count: 2300 },
		{ build: BUILD_PIRATE_H2, count: 2300 },
		{ build: BUILD_PIRATE_H2, count: 2300 },
		{ build: BUILD_PIRATE_H2, count: 2300 },
		{ build: BUILD_PIRATE_H2, count: 2300 },
		{ build: BUILD_PIRATE_H2, count: 2300 },
		{ build: BUILD_PIRATE_H2, count: 2300 }
	]
};
fleets[FLEET_PIRATE_H3] = {
	name: 'Ghost-31',
	commander: FLEET_COMMANDER_SANDORA_4,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_PIRATE_H3, count: 2300 },
		{ build: BUILD_PIRATE_H3, count: 2300 },
		{ build: BUILD_PIRATE_H3, count: 2300 },
		{ build: BUILD_PIRATE_H3, count: 2300 },
		{ build: BUILD_PIRATE_H3, count: 2300 },
		{ build: BUILD_PIRATE_H3, count: 2300 },
		{ build: BUILD_PIRATE_H3, count: 2300 },
		{ build: BUILD_PIRATE_H3, count: 2300 },
		{ build: BUILD_PIRATE_H3, count: 2300 }
	]
};
fleets[FLEET_PIRATE_H4] = {
	name: 'Ghost-32',
	commander: FLEET_COMMANDER_NORA_4,
	target: TARGET_MAX_DURABILITY,
	stacks: [
		{ build: BUILD_PIRATE_H4, count: 2300 },
		{ build: BUILD_PIRATE_H4, count: 2300 },
		{ build: BUILD_PIRATE_H4, count: 2300 },
		{ build: BUILD_PIRATE_H4, count: 2300 },
		{ build: BUILD_PIRATE_H4, count: 2300 },
		{ build: BUILD_PIRATE_H4, count: 2300 },
		{ build: BUILD_PIRATE_H4, count: 2300 },
		{ build: BUILD_PIRATE_H4, count: 2300 },
		{ build: BUILD_PIRATE_H4, count: 2300 }
	]
};
fleets[FLEET_PIRATE_I1] = {
	name: 'Ghost-33',
	commander: FLEET_COMMANDER_ANNA_5,
	stacks: [
		{ build: BUILD_PIRATE_I1, count: 2600 },
		{ build: BUILD_PIRATE_I1, count: 2600 },
		{ build: BUILD_PIRATE_I1, count: 2600 },
		{ build: BUILD_PIRATE_I1, count: 2600 },
		{ build: BUILD_PIRATE_I1, count: 2600 },
		{ build: BUILD_PIRATE_I1, count: 2600 },
		{ build: BUILD_PIRATE_I1, count: 2600 },
		{ build: BUILD_PIRATE_I1, count: 2600 },
		{ build: BUILD_PIRATE_I1, count: 2600 }
	]
};
fleets[FLEET_PIRATE_I2] = {
	name: 'Ghost-34',
	commander: FLEET_COMMANDER_LINDA_5,
	stacks: [
		{ build: BUILD_PIRATE_I2, count: 2600 },
		{ build: BUILD_PIRATE_I2, count: 2600 },
		{ build: BUILD_PIRATE_I2, count: 2600 },
		{ build: BUILD_PIRATE_I2, count: 2600 },
		{ build: BUILD_PIRATE_I2, count: 2600 },
		{ build: BUILD_PIRATE_I2, count: 2600 },
		{ build: BUILD_PIRATE_I2, count: 2600 },
		{ build: BUILD_PIRATE_I2, count: 2600 },
		{ build: BUILD_PIRATE_I2, count: 2600 }
	]
};
fleets[FLEET_PIRATE_I3] = {
	name: 'Ghost-35',
	commander: FLEET_COMMANDER_GASTAF_5,
	stacks: [
		{ build: BUILD_PIRATE_I3, count: 2600 },
		{ build: BUILD_PIRATE_I3, count: 2600 },
		{ build: BUILD_SHIELD_X, count: 2600 },
		{ build: BUILD_SHIELD_X, count: 2600 },
		{ build: BUILD_PIRATE_I3, count: 2600 },
		{ build: BUILD_PIRATE_I3, count: 2600 },
		{ build: BUILD_PIRATE_I3, count: 2600 },
		{ build: BUILD_PIRATE_I3, count: 2600 },
		{ build: BUILD_SHIELD_X, count: 2600 }
	]
};
fleets[FLEET_PIRATE_I4] = {
	name: 'Ghost-36',
	commander: FLEET_COMMANDER_NICK_5,
	stacks: [
		{ build: BUILD_SHIELD_X, count: 2600 },
		{ build: BUILD_PIRATE_I4, count: 2600 },
		{ build: BUILD_PIRATE_I4, count: 2600 },
		{ build: BUILD_PIRATE_I4, count: 2600 },
		{ build: BUILD_PIRATE_I4, count: 2600 },
		{ build: BUILD_SHIELD_X, count: 2600 },
		{ build: BUILD_SHIELD_X, count: 2600 },
		{ build: BUILD_PIRATE_I4, count: 2600 },
		{ build: BUILD_PIRATE_I4, count: 2600 }
	]
};
fleets[FLEET_PIRATE_J1] = {
	name: 'Ghost-37',
	commander: FLEET_COMMANDER_DILIRA_5,
	stacks: [
		{ build: BUILD_PIRATE_J1, count: 3000 },
		{ build: BUILD_PIRATE_J1, count: 3000 },
		{ build: BUILD_PIRATE_J1, count: 3000 },
		{ build: BUILD_PIRATE_J1, count: 3000 },
		{ build: BUILD_PIRATE_J1, count: 3000 },
		{ build: BUILD_PIRATE_J1, count: 3000 },
		{ build: BUILD_PIRATE_J1, count: 3000 },
		{ build: BUILD_PIRATE_J1, count: 3000 },
		{ build: BUILD_PIRATE_J1, count: 3000 }
	]
};
fleets[FLEET_PIRATE_J2] = {
	name: 'Ghost-38',
	commander: FLEET_COMMANDER_ROBERT_5,
	stacks: [
		{ build: BUILD_PIRATE_J2, count: 3000 },
		{ build: BUILD_PIRATE_J2, count: 3000 },
		{ build: BUILD_PIRATE_J2, count: 3000 },
		{ build: BUILD_PIRATE_J2, count: 3000 },
		{ build: BUILD_PIRATE_J2, count: 3000 },
		{ build: BUILD_PIRATE_J2, count: 3000 },
		{ build: BUILD_PIRATE_J2, count: 3000 },
		{ build: BUILD_PIRATE_J2, count: 3000 },
		{ build: BUILD_PIRATE_J2, count: 3000 }
	]
};
fleets[FLEET_PIRATE_J3] = {
	name: 'Ghost-39',
	commander: FLEET_COMMANDER_SINGHRI_5,
	stacks: [
		{ build: BUILD_PIRATE_J3, count: 3000 },
		{ build: BUILD_PIRATE_J3, count: 3000 },
		{ build: BUILD_SHIELD_X, count: 3000 },
		{ build: BUILD_SHIELD_X, count: 3000 },
		{ build: BUILD_PIRATE_J3, count: 3000 },
		{ build: BUILD_PIRATE_J3, count: 3000 },
		{ build: BUILD_PIRATE_J3, count: 3000 },
		{ build: BUILD_PIRATE_J3, count: 3000 },
		{ build: BUILD_SHIELD_X, count: 3000 }
	]
};
fleets[FLEET_PIRATE_J4] = {
	name: 'Ghost-40',
	commander: FLEET_COMMANDER_HELLEN_5,
	stacks: [
		{ build: BUILD_PIRATE_J4, count: 3000 },
		{ build: BUILD_PIRATE_J4, count: 3000 },
		{ build: BUILD_SHIELD_X, count: 3000 },
		{ build: BUILD_PIRATE_J4, count: 3000 },
		{ build: BUILD_PIRATE_J4, count: 3000 },
		{ build: BUILD_SHIELD_X, count: 3000 },
		{ build: BUILD_PIRATE_J4, count: 3000 },
		{ build: BUILD_PIRATE_J4, count: 3000 },
		{ build: BUILD_SHIELD_X, count: 3000 }
	]
};
fleets[FLEET_SHIELD_X] = {
	name: 'BUILD_SHIELD_X',
	commander: FLEET_COMMANDER_EMPTY,
	stacks: [
		{ build: BUILD_SHIELD_X, count: 1000 },
		{ build: BUILD_SHIELD_X, count: 1000 },
		{ build: BUILD_SHIELD_X, count: 1000 },
		{ build: BUILD_SHIELD_X, count: 1000 },
		{ build: BUILD_SHIELD_X, count: 1000 },
		{ build: BUILD_SHIELD_X, count: 1000 },
		{ build: BUILD_SHIELD_X, count: 1000 },
		{ build: BUILD_SHIELD_X, count: 1000 },
		{ build: BUILD_SHIELD_X, count: 1000 }
	]
};
fleets[FLEET_UNKNOWN_1] = {
	name: 'Unknown 1',
	commander: FLEET_COMMANDER_LINDA_1,
	stacks: [
		{ build: BUILD_WANDERER_A, count: 800 },
		{ build: BUILD_WANDERER_A, count: 800 },
		{ build: BUILD_WANDERER_A, count: 800 },
		{ build: BUILD_WANDERER_A, count: 800 },
		{ build: BUILD_WANDERER_A, count: 800 },
		{ build: BUILD_WANDERER_A, count: 800 },
		{ build: BUILD_WANDERER_A, count: 800 },
		{ build: BUILD_WANDERER_A, count: 800 },
		{ build: BUILD_WANDERER_A, count: 800 }
	]
};
fleets[FLEET_UNKNOWN_2] = {
	name: 'Unknown 2',
	commander: FLEET_COMMANDER_ANNA_1,
	stacks: [
		{ build: BUILD_RV369, count: 800 },
		{ build: BUILD_RV369, count: 800 },
		{ build: BUILD_RV369, count: 800 },
		{ build: BUILD_RV369, count: 800 },
		{ build: BUILD_RV369, count: 800 },
		{ build: BUILD_RV369, count: 800 },
		{ build: BUILD_RV369, count: 800 },
		{ build: BUILD_RV369, count: 800 },
		{ build: BUILD_RV369, count: 800 }
	]
};
fleets[FLEET_UNKNOWN_3] = {
	name: 'Unknown 3',
	commander: FLEET_COMMANDER_PENNI_1,
	stacks: [
		{ build: BUILD_BOMBER, count: 800 },
		{ build: BUILD_BOMBER, count: 800 },
		{ build: BUILD_BOMBER, count: 800 },
		{ build: BUILD_BOMBER, count: 800 },
		{ build: BUILD_BOMBER, count: 800 },
		{ build: BUILD_BOMBER, count: 800 },
		{ build: BUILD_BOMBER, count: 800 },
		{ build: BUILD_BOMBER, count: 800 },
		{ build: BUILD_BOMBER, count: 800 }
	]
};
fleets[FLEET_UNKNOWN_5] = {
	name: 'Unknown 5',
	commander: FLEET_COMMANDER_LINDA_1,
	stacks: [
		{ build: BUILD_WANDERER_A, count: 830 },
		{ build: BUILD_WANDERER_A, count: 830 },
		{ build: BUILD_WANDERER_A, count: 830 },
		{ build: BUILD_WANDERER_A, count: 830 },
		{ build: BUILD_WANDERER_A, count: 830 },
		{ build: BUILD_WANDERER_A, count: 830 },
		{ build: BUILD_WANDERER_A, count: 830 },
		{ build: BUILD_WANDERER_A, count: 830 },
		{ build: BUILD_WANDERER_A, count: 830 }
	]
};
fleets[FLEET_UNKNOWN_6] = {
	name: 'Unknown 6',
	commander: FLEET_COMMANDER_ANNA_1,
	stacks: [
		{ build: BUILD_RV369, count: 830 },
		{ build: BUILD_RV369, count: 830 },
		{ build: BUILD_RV369, count: 830 },
		{ build: BUILD_RV369, count: 830 },
		{ build: BUILD_RV369, count: 830 },
		{ build: BUILD_RV369, count: 830 },
		{ build: BUILD_RV369, count: 830 },
		{ build: BUILD_RV369, count: 830 },
		{ build: BUILD_RV369, count: 830 }
	]
};
fleets[FLEET_UNKNOWN_8] = {
	name: 'Unknown 8',
	commander: FLEET_COMMANDER_GASTAF_1,
	stacks: [
		{ build: BUILD_WANDERER_B, count: 830 },
		{ build: BUILD_WANDERER_B, count: 830 },
		{ build: BUILD_WANDERER_B, count: 830 },
		{ build: BUILD_WANDERER_B, count: 830 },
		{ build: BUILD_WANDERER_B, count: 830 },
		{ build: BUILD_WANDERER_B, count: 830 },
		{ build: BUILD_WANDERER_B, count: 830 },
		{ build: BUILD_WANDERER_B, count: 830 },
		{ build: BUILD_WANDERER_B, count: 830 }
	]
};
fleets[FLEET_UNKNOWN_9] = {
	name: 'Unknown 9',
	commander: FLEET_COMMANDER_LINDA_1,
	stacks: [
		{ build: BUILD_WANDERER_A, count: 860 },
		{ build: BUILD_WANDERER_A, count: 860 },
		{ build: BUILD_WANDERER_A, count: 860 },
		{ build: BUILD_WANDERER_A, count: 860 },
		{ build: BUILD_WANDERER_A, count: 860 },
		{ build: BUILD_WANDERER_A, count: 860 },
		{ build: BUILD_WANDERER_A, count: 860 },
		{ build: BUILD_WANDERER_A, count: 860 },
		{ build: BUILD_WANDERER_A, count: 860 }
	]
};
fleets[FLEET_UNKNOWN_11] = {
	name: 'Unknown 11',
	commander: FLEET_COMMANDER_LEO_2,
	stacks: [
		{ build: BUILD_BOMBER, count: 860 },
		{ build: BUILD_BOMBER, count: 860 },
		{ build: BUILD_BOMBER, count: 860 },
		{ build: BUILD_BOMBER, count: 860 },
		{ build: BUILD_BOMBER, count: 860 },
		{ build: BUILD_BOMBER, count: 860 },
		{ build: BUILD_BOMBER, count: 860 },
		{ build: BUILD_BOMBER, count: 860 },
		{ build: BUILD_BOMBER, count: 860 }
	]
};
fleets[FLEET_UNKNOWN_12] = {
	name: 'Unknown 12',
	commander: FLEET_COMMANDER_DONNA_2,
	stacks: [
		{ build: BUILD_WANDERER_B, count: 860 },
		{ build: BUILD_WANDERER_B, count: 860 },
		{ build: BUILD_WANDERER_B, count: 860 },
		{ build: BUILD_WANDERER_B, count: 860 },
		{ build: BUILD_WANDERER_B, count: 860 },
		{ build: BUILD_WANDERER_B, count: 860 },
		{ build: BUILD_WANDERER_B, count: 860 },
		{ build: BUILD_WANDERER_B, count: 860 },
		{ build: BUILD_WANDERER_B, count: 860 }
	]
};
fleets[FLEET_UNKNOWN_14] = {
	name: 'Unknown 14',
	commander: FLEET_COMMANDER_ANNA_1,
	stacks: [
		{ build: BUILD_RV369, count: 890 },
		{ build: BUILD_RV369, count: 890 },
		{ build: BUILD_RV369, count: 890 },
		{ build: BUILD_RV369, count: 890 },
		{ build: BUILD_RV369, count: 890 },
		{ build: BUILD_RV369, count: 890 },
		{ build: BUILD_RV369, count: 890 },
		{ build: BUILD_RV369, count: 890 },
		{ build: BUILD_RV369, count: 890 }
	]
};
fleets[FLEET_UNKNOWN_15] = {
	name: 'Unknown 15',
	commander: FLEET_COMMANDER_PENNI_1,
	stacks: [
		{ build: BUILD_BOMBER, count: 890 },
		{ build: BUILD_BOMBER, count: 890 },
		{ build: BUILD_BOMBER, count: 890 },
		{ build: BUILD_BOMBER, count: 890 },
		{ build: BUILD_BOMBER, count: 890 },
		{ build: BUILD_BOMBER, count: 890 },
		{ build: BUILD_BOMBER, count: 890 },
		{ build: BUILD_BOMBER, count: 890 },
		{ build: BUILD_BOMBER, count: 890 }
	]
};
fleets[FLEET_UNKNOWN_16] = {
	name: 'Unknown 16',
	commander: FLEET_COMMANDER_GASTAF_1,
	stacks: [
		{ build: BUILD_WANDERER_B, count: 890 },
		{ build: BUILD_WANDERER_B, count: 890 },
		{ build: BUILD_WANDERER_B, count: 890 },
		{ build: BUILD_WANDERER_B, count: 890 },
		{ build: BUILD_WANDERER_B, count: 890 },
		{ build: BUILD_WANDERER_B, count: 890 },
		{ build: BUILD_WANDERER_B, count: 890 },
		{ build: BUILD_WANDERER_B, count: 890 },
		{ build: BUILD_WANDERER_B, count: 890 }
	]
};
fleets[FLEET_UNKNOWN_17] = {
	name: 'Unknown 17',
	commander: FLEET_COMMANDER_LINDA_1,
	stacks: [
		{ build: BUILD_WANDERER_A, count: 920 },
		{ build: BUILD_WANDERER_A, count: 920 },
		{ build: BUILD_WANDERER_A, count: 920 },
		{ build: BUILD_WANDERER_A, count: 920 },
		{ build: BUILD_WANDERER_A, count: 920 },
		{ build: BUILD_WANDERER_A, count: 920 },
		{ build: BUILD_WANDERER_A, count: 920 },
		{ build: BUILD_WANDERER_A, count: 920 },
		{ build: BUILD_WANDERER_A, count: 920 }
	]
};
fleets[FLEET_UNKNOWN_18] = {
	name: 'Unknown 18',
	commander: FLEET_COMMANDER_ANNA_1,
	stacks: [
		{ build: BUILD_RV369, count: 920 },
		{ build: BUILD_RV369, count: 920 },
		{ build: BUILD_RV369, count: 920 },
		{ build: BUILD_RV369, count: 920 },
		{ build: BUILD_RV369, count: 920 },
		{ build: BUILD_RV369, count: 920 },
		{ build: BUILD_RV369, count: 920 },
		{ build: BUILD_RV369, count: 920 },
		{ build: BUILD_RV369, count: 920 }
	]
};
fleets[FLEET_UNKNOWN_21] = {
	name: 'Unknown 21',
	commander: FLEET_COMMANDER_LEO_2,
	stacks: [
		{ build: BUILD_BATTLESHIP_A, count: 950 },
		{ build: BUILD_BATTLESHIP_A, count: 950 },
		{ build: BUILD_BATTLESHIP_A, count: 950 },
		{ build: BUILD_BATTLESHIP_A, count: 950 },
		{ build: BUILD_BATTLESHIP_A, count: 950 },
		{ build: BUILD_BATTLESHIP_A, count: 950 },
		{ build: BUILD_BATTLESHIP_A, count: 950 },
		{ build: BUILD_BATTLESHIP_A, count: 950 },
		{ build: BUILD_BATTLESHIP_A, count: 950 }
	]
};
fleets[FLEET_UNKNOWN_22] = {
	name: 'Unknown 22',
	commander: FLEET_COMMANDER_ANNATA_2,
	stacks: [
		{ build: BUILD_TIAZ, count: 950 },
		{ build: BUILD_TIAZ, count: 950 },
		{ build: BUILD_TIAZ, count: 950 },
		{ build: BUILD_TIAZ, count: 950 },
		{ build: BUILD_TIAZ, count: 950 },
		{ build: BUILD_TIAZ, count: 950 },
		{ build: BUILD_TIAZ, count: 950 },
		{ build: BUILD_TIAZ, count: 950 },
		{ build: BUILD_TIAZ, count: 950 }
	]
};
fleets[FLEET_UNKNOWN_25] = {
	name: 'Unknown 25',
	commander: FLEET_COMMANDER_LEO_2,
	stacks: [
		{ build: BUILD_BATTLESHIP_A, count: 980 },
		{ build: BUILD_BATTLESHIP_A, count: 980 },
		{ build: BUILD_BATTLESHIP_A, count: 980 },
		{ build: BUILD_BATTLESHIP_A, count: 980 },
		{ build: BUILD_BATTLESHIP_A, count: 980 },
		{ build: BUILD_BATTLESHIP_A, count: 980 },
		{ build: BUILD_BATTLESHIP_A, count: 980 },
		{ build: BUILD_BATTLESHIP_A, count: 980 },
		{ build: BUILD_BATTLESHIP_A, count: 980 }
	]
};
fleets[FLEET_UNKNOWN_26] = {
	name: 'Unknown 26',
	commander: FLEET_COMMANDER_ANNATA_2,
	stacks: [
		{ build: BUILD_TIAZ, count: 980 },
		{ build: BUILD_TIAZ, count: 980 },
		{ build: BUILD_TIAZ, count: 980 },
		{ build: BUILD_TIAZ, count: 980 },
		{ build: BUILD_TIAZ, count: 980 },
		{ build: BUILD_TIAZ, count: 980 },
		{ build: BUILD_TIAZ, count: 980 },
		{ build: BUILD_TIAZ, count: 980 },
		{ build: BUILD_TIAZ, count: 980 }
	]
};
fleets[FLEET_UNKNOWN_27] = {
	name: 'Unknown 27',
	commander: FLEET_COMMANDER_EVELINE_2,
	stacks: [
		{ build: BUILD_NADESICO, count: 980 },
		{ build: BUILD_NADESICO, count: 980 },
		{ build: BUILD_NADESICO, count: 980 },
		{ build: BUILD_NADESICO, count: 980 },
		{ build: BUILD_NADESICO, count: 980 },
		{ build: BUILD_NADESICO, count: 980 },
		{ build: BUILD_NADESICO, count: 980 },
		{ build: BUILD_NADESICO, count: 980 },
		{ build: BUILD_NADESICO, count: 980 }
	]
};
fleets[FLEET_UNKNOWN_30] = {
	name: 'Unknown 30',
	commander: FLEET_COMMANDER_ANNATA_2,
	stacks: [
		{ build: BUILD_TIAZ, count: 1010 },
		{ build: BUILD_TIAZ, count: 1010 },
		{ build: BUILD_TIAZ, count: 1010 },
		{ build: BUILD_TIAZ, count: 1010 },
		{ build: BUILD_TIAZ, count: 1010 },
		{ build: BUILD_TIAZ, count: 1010 },
		{ build: BUILD_TIAZ, count: 1010 },
		{ build: BUILD_TIAZ, count: 1010 },
		{ build: BUILD_TIAZ, count: 1010 }
	]
};
fleets[FLEET_UNKNOWN_31] = {
	name: 'Unknown 31',
	commander: FLEET_COMMANDER_EVELINE_2,
	stacks: [
		{ build: BUILD_NADESICO, count: 1010 },
		{ build: BUILD_NADESICO, count: 1010 },
		{ build: BUILD_NADESICO, count: 1010 },
		{ build: BUILD_NADESICO, count: 1010 },
		{ build: BUILD_NADESICO, count: 1010 },
		{ build: BUILD_NADESICO, count: 1010 },
		{ build: BUILD_NADESICO, count: 1010 },
		{ build: BUILD_NADESICO, count: 1010 },
		{ build: BUILD_NADESICO, count: 1010 }
	]
};
fleets[FLEET_UNKNOWN_32] = {
	name: 'Unknown 32',
	commander: FLEET_COMMANDER_RINGEL_2,
	stacks: [
		{ build: BUILD_BATTLESHIP_B, count: 1010 },
		{ build: BUILD_BATTLESHIP_B, count: 1010 },
		{ build: BUILD_BATTLESHIP_B, count: 1010 },
		{ build: BUILD_BATTLESHIP_B, count: 1010 },
		{ build: BUILD_BATTLESHIP_B, count: 1010 },
		{ build: BUILD_BATTLESHIP_B, count: 1010 },
		{ build: BUILD_BATTLESHIP_B, count: 1010 },
		{ build: BUILD_BATTLESHIP_B, count: 1010 },
		{ build: BUILD_BATTLESHIP_B, count: 1010 }
	]
};
fleets[FLEET_UNKNOWN_33] = {
	name: 'Unknown 33',
	commander: FLEET_COMMANDER_LEO_2,
	stacks: [
		{ build: BUILD_BATTLESHIP_A, count: 1040 },
		{ build: BUILD_BATTLESHIP_A, count: 1040 },
		{ build: BUILD_BATTLESHIP_A, count: 1040 },
		{ build: BUILD_BATTLESHIP_A, count: 1040 },
		{ build: BUILD_BATTLESHIP_A, count: 1040 },
		{ build: BUILD_BATTLESHIP_A, count: 1040 },
		{ build: BUILD_BATTLESHIP_A, count: 1040 },
		{ build: BUILD_BATTLESHIP_A, count: 1040 },
		{ build: BUILD_BATTLESHIP_A, count: 1040 }
	]
};
fleets[FLEET_UNKNOWN_34] = {
	name: 'Unknown 34',
	commander: FLEET_COMMANDER_WAYNE_2,
	stacks: [
		{ build: BUILD_TIAZ, count: 1040 },
		{ build: BUILD_TIAZ, count: 1040 },
		{ build: BUILD_TIAZ, count: 1040 },
		{ build: BUILD_TIAZ, count: 1040 },
		{ build: BUILD_TIAZ, count: 1040 },
		{ build: BUILD_TIAZ, count: 1040 },
		{ build: BUILD_TIAZ, count: 1040 },
		{ build: BUILD_TIAZ, count: 1040 },
		{ build: BUILD_TIAZ, count: 1040 }
	]
};
fleets[FLEET_UNKNOWN_35] = {
	name: 'Unknown 35',
	commander: FLEET_COMMANDER_WAYNE_2,
	stacks: [
		{ build: BUILD_NADESICO, count: 1040 },
		{ build: BUILD_NADESICO, count: 1040 },
		{ build: BUILD_NADESICO, count: 1040 },
		{ build: BUILD_NADESICO, count: 1040 },
		{ build: BUILD_NADESICO, count: 1040 },
		{ build: BUILD_NADESICO, count: 1040 },
		{ build: BUILD_NADESICO, count: 1040 },
		{ build: BUILD_NADESICO, count: 1040 },
		{ build: BUILD_NADESICO, count: 1040 }
	]
};
fleets[FLEET_UNKNOWN_37] = {
	name: 'Unknown 37',
	commander: FLEET_COMMANDER_GASTAF_2,
	stacks: [
		{ build: BUILD_BATTLESHIP_A, count: 1070 },
		{ build: BUILD_BATTLESHIP_A, count: 1070 },
		{ build: BUILD_BATTLESHIP_A, count: 1070 },
		{ build: BUILD_BATTLESHIP_A, count: 1070 },
		{ build: BUILD_BATTLESHIP_A, count: 1070 },
		{ build: BUILD_BATTLESHIP_A, count: 1070 },
		{ build: BUILD_BATTLESHIP_A, count: 1070 },
		{ build: BUILD_BATTLESHIP_A, count: 1070 },
		{ build: BUILD_BATTLESHIP_A, count: 1070 }
	]
};
fleets[FLEET_UNKNOWN_38] = {
	name: 'Unknown 38',
	commander: FLEET_COMMANDER_GASTAF_2,
	stacks: [
		{ build: BUILD_TIAZ, count: 1070 },
		{ build: BUILD_TIAZ, count: 1070 },
		{ build: BUILD_TIAZ, count: 1070 },
		{ build: BUILD_TIAZ, count: 1070 },
		{ build: BUILD_TIAZ, count: 1070 },
		{ build: BUILD_TIAZ, count: 1070 },
		{ build: BUILD_TIAZ, count: 1070 },
		{ build: BUILD_TIAZ, count: 1070 },
		{ build: BUILD_TIAZ, count: 1070 }
	]
};
fleets[FLEET_UNKNOWN_41] = {
	name: 'Unknown 41',
	commander: FLEET_COMMANDER_NICK_2,
	stacks: [
		{ build: BUILD_JUMPER_A, count: 1100 },
		{ build: BUILD_JUMPER_A, count: 1100 },
		{ build: BUILD_JUMPER_A, count: 1100 },
		{ build: BUILD_JUMPER_A, count: 1100 },
		{ build: BUILD_JUMPER_A, count: 1100 },
		{ build: BUILD_JUMPER_A, count: 1100 },
		{ build: BUILD_JUMPER_A, count: 1100 },
		{ build: BUILD_JUMPER_A, count: 1100 },
		{ build: BUILD_JUMPER_A, count: 1100 }
	]
};
fleets[FLEET_UNKNOWN_42] = {
	name: 'Unknown 42',
	commander: FLEET_COMMANDER_NICK_2,
	stacks: [
		{ build: BUILD_LANDING, count: 1100 },
		{ build: BUILD_LANDING, count: 1100 },
		{ build: BUILD_LANDING, count: 1100 },
		{ build: BUILD_LANDING, count: 1100 },
		{ build: BUILD_LANDING, count: 1100 },
		{ build: BUILD_LANDING, count: 1100 },
		{ build: BUILD_LANDING, count: 1100 },
		{ build: BUILD_LANDING, count: 1100 },
		{ build: BUILD_LANDING, count: 1100 }
	]
};
fleets[FLEET_UNKNOWN_43] = {
	name: 'Unknown 43',
	commander: FLEET_COMMANDER_NICK_2,
	stacks: [
		{ build: BUILD_INTERCEPTOR, count: 1100 },
		{ build: BUILD_INTERCEPTOR, count: 1100 },
		{ build: BUILD_INTERCEPTOR, count: 1100 },
		{ build: BUILD_INTERCEPTOR, count: 1100 },
		{ build: BUILD_INTERCEPTOR, count: 1100 },
		{ build: BUILD_INTERCEPTOR, count: 1100 },
		{ build: BUILD_INTERCEPTOR, count: 1100 },
		{ build: BUILD_INTERCEPTOR, count: 1100 },
		{ build: BUILD_INTERCEPTOR, count: 1100 }
	]
};
fleets[FLEET_UNKNOWN_44] = {
	name: 'Unknown 44',
	commander: FLEET_COMMANDER_NICK_2,
	stacks: [
		{ build: BUILD_JUMPER_B, count: 1100 },
		{ build: BUILD_JUMPER_B, count: 1100 },
		{ build: BUILD_JUMPER_B, count: 1100 },
		{ build: BUILD_JUMPER_B, count: 1100 },
		{ build: BUILD_JUMPER_B, count: 1100 },
		{ build: BUILD_JUMPER_B, count: 1100 },
		{ build: BUILD_JUMPER_B, count: 1100 },
		{ build: BUILD_JUMPER_B, count: 1100 },
		{ build: BUILD_JUMPER_B, count: 1100 }
	]
};
fleets[FLEET_UNKNOWN_45] = {
	name: 'Unknown 45',
	commander: FLEET_COMMANDER_EVELINE_2,
	stacks: [
		{ build: BUILD_JUMPER_A, count: 1130 },
		{ build: BUILD_JUMPER_A, count: 1130 },
		{ build: BUILD_JUMPER_A, count: 1130 },
		{ build: BUILD_JUMPER_A, count: 1130 },
		{ build: BUILD_JUMPER_A, count: 1130 },
		{ build: BUILD_JUMPER_A, count: 1130 },
		{ build: BUILD_JUMPER_A, count: 1130 },
		{ build: BUILD_JUMPER_A, count: 1130 },
		{ build: BUILD_JUMPER_A, count: 1130 }
	]
};
fleets[FLEET_UNKNOWN_46] = {
	name: 'Unknown 46',
	commander: FLEET_COMMANDER_EVELINE_2,
	stacks: [
		{ build: BUILD_LANDING, count: 1130 },
		{ build: BUILD_LANDING, count: 1130 },
		{ build: BUILD_LANDING, count: 1130 },
		{ build: BUILD_LANDING, count: 1130 },
		{ build: BUILD_LANDING, count: 1130 },
		{ build: BUILD_LANDING, count: 1130 },
		{ build: BUILD_LANDING, count: 1130 },
		{ build: BUILD_LANDING, count: 1130 },
		{ build: BUILD_LANDING, count: 1130 }
	]
};
fleets[FLEET_UNKNOWN_47] = {
	name: 'Unknown 47',
	commander: FLEET_COMMANDER_EVELINE_2,
	stacks: [
		{ build: BUILD_INTERCEPTOR, count: 1130 },
		{ build: BUILD_INTERCEPTOR, count: 1130 },
		{ build: BUILD_INTERCEPTOR, count: 1130 },
		{ build: BUILD_INTERCEPTOR, count: 1130 },
		{ build: BUILD_INTERCEPTOR, count: 1130 },
		{ build: BUILD_INTERCEPTOR, count: 1130 },
		{ build: BUILD_INTERCEPTOR, count: 1130 },
		{ build: BUILD_INTERCEPTOR, count: 1130 },
		{ build: BUILD_INTERCEPTOR, count: 1130 }
	]
};
fleets[FLEET_UNKNOWN_48] = {
	name: 'Unknown 48',
	commander: FLEET_COMMANDER_EVELINE_2,
	stacks: [
		{ build: BUILD_JUMPER_B, count: 1130 },
		{ build: BUILD_JUMPER_B, count: 1130 },
		{ build: BUILD_JUMPER_B, count: 1130 },
		{ build: BUILD_JUMPER_B, count: 1130 },
		{ build: BUILD_JUMPER_B, count: 1130 },
		{ build: BUILD_JUMPER_B, count: 1130 },
		{ build: BUILD_JUMPER_B, count: 1130 },
		{ build: BUILD_JUMPER_B, count: 1130 },
		{ build: BUILD_JUMPER_B, count: 1130 }
	]
};
fleets[FLEET_UNKNOWN_49] = {
	name: 'Unknown 49',
	commander: FLEET_COMMANDER_PENNI_2,
	stacks: [
		{ build: BUILD_JUMPER_A, count: 1160 },
		{ build: BUILD_JUMPER_A, count: 1160 },
		{ build: BUILD_JUMPER_A, count: 1160 },
		{ build: BUILD_JUMPER_A, count: 1160 },
		{ build: BUILD_JUMPER_A, count: 1160 },
		{ build: BUILD_JUMPER_A, count: 1160 },
		{ build: BUILD_JUMPER_A, count: 1160 },
		{ build: BUILD_JUMPER_A, count: 1160 },
		{ build: BUILD_JUMPER_A, count: 1160 }
	]
};
fleets[FLEET_UNKNOWN_50] = {
	name: 'Unknown 50',
	commander: FLEET_COMMANDER_PENNI_2,
	stacks: [
		{ build: BUILD_LANDING, count: 1160 },
		{ build: BUILD_LANDING, count: 1160 },
		{ build: BUILD_LANDING, count: 1160 },
		{ build: BUILD_LANDING, count: 1160 },
		{ build: BUILD_LANDING, count: 1160 },
		{ build: BUILD_LANDING, count: 1160 },
		{ build: BUILD_LANDING, count: 1160 },
		{ build: BUILD_LANDING, count: 1160 },
		{ build: BUILD_LANDING, count: 1160 }
	]
};
fleets[FLEET_UNKNOWN_51] = {
	name: 'Unknown 51',
	commander: FLEET_COMMANDER_PENNI_2,
	stacks: [
		{ build: BUILD_INTERCEPTOR, count: 1160 },
		{ build: BUILD_INTERCEPTOR, count: 1160 },
		{ build: BUILD_INTERCEPTOR, count: 1160 },
		{ build: BUILD_INTERCEPTOR, count: 1160 },
		{ build: BUILD_INTERCEPTOR, count: 1160 },
		{ build: BUILD_INTERCEPTOR, count: 1160 },
		{ build: BUILD_INTERCEPTOR, count: 1160 },
		{ build: BUILD_INTERCEPTOR, count: 1160 },
		{ build: BUILD_INTERCEPTOR, count: 1160 }
	]
};
fleets[FLEET_UNKNOWN_52] = {
	name: 'Unknown 52',
	commander: FLEET_COMMANDER_PENNI_2,
	stacks: [
		{ build: BUILD_JUMPER_B, count: 1160 },
		{ build: BUILD_JUMPER_B, count: 1160 },
		{ build: BUILD_JUMPER_B, count: 1160 },
		{ build: BUILD_JUMPER_B, count: 1160 },
		{ build: BUILD_JUMPER_B, count: 1160 },
		{ build: BUILD_JUMPER_B, count: 1160 },
		{ build: BUILD_JUMPER_B, count: 1160 },
		{ build: BUILD_JUMPER_B, count: 1160 },
		{ build: BUILD_JUMPER_B, count: 1160 }
	]
};
fleets[FLEET_UNKNOWN_53] = {
	name: 'Unknown 53',
	commander: FLEET_COMMANDER_STANI_2,
	stacks: [
		{ build: BUILD_JUMPER_A, count: 1190 },
		{ build: BUILD_JUMPER_A, count: 1190 },
		{ build: BUILD_JUMPER_A, count: 1190 },
		{ build: BUILD_JUMPER_A, count: 1190 },
		{ build: BUILD_JUMPER_A, count: 1190 },
		{ build: BUILD_JUMPER_A, count: 1190 },
		{ build: BUILD_JUMPER_A, count: 1190 },
		{ build: BUILD_JUMPER_A, count: 1190 },
		{ build: BUILD_JUMPER_A, count: 1190 }
	]
};
fleets[FLEET_UNKNOWN_54] = {
	name: 'Unknown 54',
	commander: FLEET_COMMANDER_STANI_2,
	stacks: [
		{ build: BUILD_LANDING, count: 1190 },
		{ build: BUILD_LANDING, count: 1190 },
		{ build: BUILD_LANDING, count: 1190 },
		{ build: BUILD_LANDING, count: 1190 },
		{ build: BUILD_LANDING, count: 1190 },
		{ build: BUILD_LANDING, count: 1190 },
		{ build: BUILD_LANDING, count: 1190 },
		{ build: BUILD_LANDING, count: 1190 },
		{ build: BUILD_LANDING, count: 1190 }
	]
};
fleets[FLEET_UNKNOWN_55] = {
	name: 'Unknown 55',
	commander: FLEET_COMMANDER_STANI_2,
	stacks: [
		{ build: BUILD_INTERCEPTOR, count: 1190 },
		{ build: BUILD_INTERCEPTOR, count: 1190 },
		{ build: BUILD_INTERCEPTOR, count: 1190 },
		{ build: BUILD_INTERCEPTOR, count: 1190 },
		{ build: BUILD_INTERCEPTOR, count: 1190 },
		{ build: BUILD_INTERCEPTOR, count: 1190 },
		{ build: BUILD_INTERCEPTOR, count: 1190 },
		{ build: BUILD_INTERCEPTOR, count: 1190 },
		{ build: BUILD_INTERCEPTOR, count: 1190 }
	]
};
fleets[FLEET_UNKNOWN_56] = {
	name: 'Unknown 56',
	commander: FLEET_COMMANDER_STANI_2,
	stacks: [
		{ build: BUILD_JUMPER_B, count: 1190 },
		{ build: BUILD_JUMPER_B, count: 1190 },
		{ build: BUILD_JUMPER_B, count: 1190 },
		{ build: BUILD_JUMPER_B, count: 1190 },
		{ build: BUILD_JUMPER_B, count: 1190 },
		{ build: BUILD_JUMPER_B, count: 1190 },
		{ build: BUILD_JUMPER_B, count: 1190 },
		{ build: BUILD_JUMPER_B, count: 1190 },
		{ build: BUILD_JUMPER_B, count: 1190 }
	]
};
fleets[FLEET_UNKNOWN_57] = {
	name: 'Unknown 57',
	commander: FLEET_COMMANDER_MALETIZ_2,
	stacks: [
		{ build: BUILD_JUMPER_A, count: 1220 },
		{ build: BUILD_JUMPER_A, count: 1220 },
		{ build: BUILD_JUMPER_A, count: 1220 },
		{ build: BUILD_JUMPER_A, count: 1220 },
		{ build: BUILD_JUMPER_A, count: 1220 },
		{ build: BUILD_JUMPER_A, count: 1220 },
		{ build: BUILD_JUMPER_A, count: 1220 },
		{ build: BUILD_JUMPER_A, count: 1220 },
		{ build: BUILD_JUMPER_A, count: 1220 }
	]
};
fleets[FLEET_UNKNOWN_58] = {
	name: 'Unknown 58',
	commander: FLEET_COMMANDER_MALETIZ_2,
	stacks: [
		{ build: BUILD_LANDING, count: 1220 },
		{ build: BUILD_LANDING, count: 1220 },
		{ build: BUILD_LANDING, count: 1220 },
		{ build: BUILD_LANDING, count: 1220 },
		{ build: BUILD_LANDING, count: 1220 },
		{ build: BUILD_LANDING, count: 1220 },
		{ build: BUILD_LANDING, count: 1220 },
		{ build: BUILD_LANDING, count: 1220 },
		{ build: BUILD_LANDING, count: 1220 }
	]
};
fleets[FLEET_UNKNOWN_59] = {
	name: 'Unknown 59',
	commander: FLEET_COMMANDER_MALETIZ_2,
	stacks: [
		{ build: BUILD_INTERCEPTOR, count: 1220 },
		{ build: BUILD_INTERCEPTOR, count: 1220 },
		{ build: BUILD_INTERCEPTOR, count: 1220 },
		{ build: BUILD_INTERCEPTOR, count: 1220 },
		{ build: BUILD_INTERCEPTOR, count: 1220 },
		{ build: BUILD_INTERCEPTOR, count: 1220 },
		{ build: BUILD_INTERCEPTOR, count: 1220 },
		{ build: BUILD_INTERCEPTOR, count: 1220 },
		{ build: BUILD_INTERCEPTOR, count: 1220 }
	]
};
fleets[FLEET_UNKNOWN_60] = {
	name: 'Unknown 60',
	commander: FLEET_COMMANDER_MALETIZ_2,
	stacks: [
		{ build: BUILD_JUMPER_B, count: 1220 },
		{ build: BUILD_JUMPER_B, count: 1220 },
		{ build: BUILD_JUMPER_B, count: 1220 },
		{ build: BUILD_JUMPER_B, count: 1220 },
		{ build: BUILD_JUMPER_B, count: 1220 },
		{ build: BUILD_JUMPER_B, count: 1220 },
		{ build: BUILD_JUMPER_B, count: 1220 },
		{ build: BUILD_JUMPER_B, count: 1220 },
		{ build: BUILD_JUMPER_B, count: 1220 }
	]
};
fleets[FLEET_UNKNOWN_61] = {
	name: 'Unknown 61',
	commander: FLEET_COMMANDER_AILEEN_2,
	stacks: [
		{ build: BUILD_PIRATE_D1, count: 1250 },
		{ build: BUILD_PIRATE_D1, count: 1250 },
		{ build: BUILD_PIRATE_D1, count: 1250 },
		{ build: BUILD_PIRATE_D1, count: 1250 },
		{ build: BUILD_PIRATE_D1, count: 1250 },
		{ build: BUILD_PIRATE_D1, count: 1250 },
		{ build: BUILD_PIRATE_D1, count: 1250 },
		{ build: BUILD_PIRATE_D1, count: 1250 },
		{ build: BUILD_PIRATE_D1, count: 1250 }
	]
};
fleets[FLEET_UNKNOWN_62] = {
	name: 'Unknown 62',
	commander: FLEET_COMMANDER_AILEEN_2,
	stacks: [
		{ build: BUILD_PIRATE_D2, count: 1250 },
		{ build: BUILD_PIRATE_D2, count: 1250 },
		{ build: BUILD_PIRATE_D2, count: 1250 },
		{ build: BUILD_PIRATE_D2, count: 1250 },
		{ build: BUILD_PIRATE_D2, count: 1250 },
		{ build: BUILD_PIRATE_D2, count: 1250 },
		{ build: BUILD_PIRATE_D2, count: 1250 },
		{ build: BUILD_PIRATE_D2, count: 1250 },
		{ build: BUILD_PIRATE_D2, count: 1250 }
	]
};
fleets[FLEET_UNKNOWN_63] = {
	name: 'Unknown 63',
	commander: FLEET_COMMANDER_AILEEN_2,
	stacks: [
		{ build: BUILD_PIRATE_D3, count: 1250 },
		{ build: BUILD_PIRATE_D3, count: 1250 },
		{ build: BUILD_PIRATE_D3, count: 1250 },
		{ build: BUILD_PIRATE_D3, count: 1250 },
		{ build: BUILD_PIRATE_D3, count: 1250 },
		{ build: BUILD_PIRATE_D3, count: 1250 },
		{ build: BUILD_PIRATE_D3, count: 1250 },
		{ build: BUILD_PIRATE_D3, count: 1250 },
		{ build: BUILD_PIRATE_D3, count: 1250 }
	]
};
fleets[FLEET_UNKNOWN_64] = {
	name: 'Unknown 64',
	commander: FLEET_COMMANDER_AILEEN_2,
	stacks: [
		{ build: BUILD_PIRATE_D4, count: 1250 },
		{ build: BUILD_PIRATE_D4, count: 1250 },
		{ build: BUILD_PIRATE_D4, count: 1250 },
		{ build: BUILD_PIRATE_D4, count: 1250 },
		{ build: BUILD_PIRATE_D4, count: 1250 },
		{ build: BUILD_PIRATE_D4, count: 1250 },
		{ build: BUILD_PIRATE_D4, count: 1250 },
		{ build: BUILD_PIRATE_D4, count: 1250 },
		{ build: BUILD_PIRATE_D4, count: 1250 }
	]
};
fleets[FLEET_UNKNOWN_65] = {
	name: 'Unknown 65',
	commander: FLEET_COMMANDER_SANDORA_2,
	stacks: [
		{ build: BUILD_PIRATE_D1, count: 1280 },
		{ build: BUILD_PIRATE_D1, count: 1280 },
		{ build: BUILD_PIRATE_D1, count: 1280 },
		{ build: BUILD_PIRATE_D1, count: 1280 },
		{ build: BUILD_PIRATE_D1, count: 1280 },
		{ build: BUILD_PIRATE_D1, count: 1280 },
		{ build: BUILD_PIRATE_D1, count: 1280 },
		{ build: BUILD_PIRATE_D1, count: 1280 },
		{ build: BUILD_PIRATE_D1, count: 1280 }
	]
};
fleets[FLEET_UNKNOWN_66] = {
	name: 'Unknown 66',
	commander: FLEET_COMMANDER_SANDORA_2,
	stacks: [
		{ build: BUILD_PIRATE_D2, count: 1280 },
		{ build: BUILD_PIRATE_D2, count: 1280 },
		{ build: BUILD_PIRATE_D2, count: 1280 },
		{ build: BUILD_PIRATE_D2, count: 1280 },
		{ build: BUILD_PIRATE_D2, count: 1280 },
		{ build: BUILD_PIRATE_D2, count: 1280 },
		{ build: BUILD_PIRATE_D2, count: 1280 },
		{ build: BUILD_PIRATE_D2, count: 1280 },
		{ build: BUILD_PIRATE_D2, count: 1280 }
	]
};
fleets[FLEET_UNKNOWN_67] = {
	name: 'Unknown 67',
	commander: FLEET_COMMANDER_SANDORA_2,
	stacks: [
		{ build: BUILD_PIRATE_D3, count: 1280 },
		{ build: BUILD_PIRATE_D3, count: 1280 },
		{ build: BUILD_PIRATE_D3, count: 1280 },
		{ build: BUILD_PIRATE_D3, count: 1280 },
		{ build: BUILD_PIRATE_D3, count: 1280 },
		{ build: BUILD_PIRATE_D3, count: 1280 },
		{ build: BUILD_PIRATE_D3, count: 1280 },
		{ build: BUILD_PIRATE_D3, count: 1280 },
		{ build: BUILD_PIRATE_D3, count: 1280 }
	]
};
fleets[FLEET_UNKNOWN_68] = {
	name: 'Unknown 68',
	commander: FLEET_COMMANDER_SANDORA_2,
	stacks: [
		{ build: BUILD_PIRATE_D4, count: 1280 },
		{ build: BUILD_PIRATE_D4, count: 1280 },
		{ build: BUILD_PIRATE_D4, count: 1280 },
		{ build: BUILD_PIRATE_D4, count: 1280 },
		{ build: BUILD_PIRATE_D4, count: 1280 },
		{ build: BUILD_PIRATE_D4, count: 1280 },
		{ build: BUILD_PIRATE_D4, count: 1280 },
		{ build: BUILD_PIRATE_D4, count: 1280 },
		{ build: BUILD_PIRATE_D4, count: 1280 }
	]
};
fleets[FLEET_UNKNOWN_69] = {
	name: 'Unknown 69',
	commander: FLEET_COMMANDER_MARCUS_2,
	stacks: [
		{ build: BUILD_PIRATE_D1, count: 1310 },
		{ build: BUILD_PIRATE_D1, count: 1310 },
		{ build: BUILD_PIRATE_D1, count: 1310 },
		{ build: BUILD_PIRATE_D1, count: 1310 },
		{ build: BUILD_PIRATE_D1, count: 1310 },
		{ build: BUILD_PIRATE_D1, count: 1310 },
		{ build: BUILD_PIRATE_D1, count: 1310 },
		{ build: BUILD_PIRATE_D1, count: 1310 },
		{ build: BUILD_PIRATE_D1, count: 1310 }
	]
};
fleets[FLEET_UNKNOWN_70] = {
	name: 'Unknown 70',
	commander: FLEET_COMMANDER_MARCUS_2,
	stacks: [
		{ build: BUILD_PIRATE_D2, count: 1310 },
		{ build: BUILD_PIRATE_D2, count: 1310 },
		{ build: BUILD_PIRATE_D2, count: 1310 },
		{ build: BUILD_PIRATE_D2, count: 1310 },
		{ build: BUILD_PIRATE_D2, count: 1310 },
		{ build: BUILD_PIRATE_D2, count: 1310 },
		{ build: BUILD_PIRATE_D2, count: 1310 },
		{ build: BUILD_PIRATE_D2, count: 1310 },
		{ build: BUILD_PIRATE_D2, count: 1310 }
	]
};
fleets[FLEET_UNKNOWN_71] = {
	name: 'Unknown 71',
	commander: FLEET_COMMANDER_MARCUS_2,
	stacks: [
		{ build: BUILD_PIRATE_D3, count: 1310 },
		{ build: BUILD_PIRATE_D3, count: 1310 },
		{ build: BUILD_PIRATE_D3, count: 1310 },
		{ build: BUILD_PIRATE_D3, count: 1310 },
		{ build: BUILD_PIRATE_D3, count: 1310 },
		{ build: BUILD_PIRATE_D3, count: 1310 },
		{ build: BUILD_PIRATE_D3, count: 1310 },
		{ build: BUILD_PIRATE_D3, count: 1310 },
		{ build: BUILD_PIRATE_D3, count: 1310 }
	]
};
fleets[FLEET_UNKNOWN_72] = {
	name: 'Unknown 72',
	commander: FLEET_COMMANDER_MARCUS_2,
	stacks: [
		{ build: BUILD_PIRATE_D4, count: 1310 },
		{ build: BUILD_PIRATE_D4, count: 1310 },
		{ build: BUILD_PIRATE_D4, count: 1310 },
		{ build: BUILD_PIRATE_D4, count: 1310 },
		{ build: BUILD_PIRATE_D4, count: 1310 },
		{ build: BUILD_PIRATE_D4, count: 1310 },
		{ build: BUILD_PIRATE_D4, count: 1310 },
		{ build: BUILD_PIRATE_D4, count: 1310 },
		{ build: BUILD_PIRATE_D4, count: 1310 }
	]
};
fleets[FLEET_UNKNOWN_73] = {
	name: 'Unknown 73',
	commander: FLEET_COMMANDER_BART_2,
	stacks: [
		{ build: BUILD_PIRATE_D1, count: 1340 },
		{ build: BUILD_PIRATE_D1, count: 1340 },
		{ build: BUILD_PIRATE_D1, count: 1340 },
		{ build: BUILD_PIRATE_D1, count: 1340 },
		{ build: BUILD_PIRATE_D1, count: 1340 },
		{ build: BUILD_PIRATE_D1, count: 1340 },
		{ build: BUILD_PIRATE_D1, count: 1340 },
		{ build: BUILD_PIRATE_D1, count: 1340 },
		{ build: BUILD_PIRATE_D1, count: 1340 }
	]
};
fleets[FLEET_UNKNOWN_74] = {
	name: 'Unknown 74',
	commander: FLEET_COMMANDER_BART_2,
	stacks: [
		{ build: BUILD_PIRATE_D2, count: 1340 },
		{ build: BUILD_PIRATE_D2, count: 1340 },
		{ build: BUILD_PIRATE_D2, count: 1340 },
		{ build: BUILD_PIRATE_D2, count: 1340 },
		{ build: BUILD_PIRATE_D2, count: 1340 },
		{ build: BUILD_PIRATE_D2, count: 1340 },
		{ build: BUILD_PIRATE_D2, count: 1340 },
		{ build: BUILD_PIRATE_D2, count: 1340 },
		{ build: BUILD_PIRATE_D2, count: 1340 }
	]
};
fleets[FLEET_UNKNOWN_75] = {
	name: 'Unknown 75',
	commander: FLEET_COMMANDER_BART_2,
	stacks: [
		{ build: BUILD_PIRATE_D3, count: 1340 },
		{ build: BUILD_PIRATE_D3, count: 1340 },
		{ build: BUILD_PIRATE_D3, count: 1340 },
		{ build: BUILD_PIRATE_D3, count: 1340 },
		{ build: BUILD_PIRATE_D3, count: 1340 },
		{ build: BUILD_PIRATE_D3, count: 1340 },
		{ build: BUILD_PIRATE_D3, count: 1340 },
		{ build: BUILD_PIRATE_D3, count: 1340 },
		{ build: BUILD_PIRATE_D3, count: 1340 }
	]
};
fleets[FLEET_UNKNOWN_76] = {
	name: 'Unknown 76',
	commander: FLEET_COMMANDER_BART_2,
	stacks: [
		{ build: BUILD_PIRATE_D4, count: 1340 },
		{ build: BUILD_PIRATE_D4, count: 1340 },
		{ build: BUILD_PIRATE_D4, count: 1340 },
		{ build: BUILD_PIRATE_D4, count: 1340 },
		{ build: BUILD_PIRATE_D4, count: 1340 },
		{ build: BUILD_PIRATE_D4, count: 1340 },
		{ build: BUILD_PIRATE_D4, count: 1340 },
		{ build: BUILD_PIRATE_D4, count: 1340 },
		{ build: BUILD_PIRATE_D4, count: 1340 }
	]
};
fleets[FLEET_UNKNOWN_77] = {
	name: 'Unknown 77',
	commander: FLEET_COMMANDER_NORA_2,
	stacks: [
		{ build: BUILD_PIRATE_D1, count: 1370 },
		{ build: BUILD_PIRATE_D1, count: 1370 },
		{ build: BUILD_PIRATE_D1, count: 1370 },
		{ build: BUILD_PIRATE_D1, count: 1370 },
		{ build: BUILD_PIRATE_D1, count: 1370 },
		{ build: BUILD_PIRATE_D1, count: 1370 },
		{ build: BUILD_PIRATE_D1, count: 1370 },
		{ build: BUILD_PIRATE_D1, count: 1370 },
		{ build: BUILD_PIRATE_D1, count: 1370 }
	]
};
fleets[FLEET_UNKNOWN_78] = {
	name: 'Unknown 78',
	commander: FLEET_COMMANDER_NORA_2,
	stacks: [
		{ build: BUILD_PIRATE_D2, count: 1370 },
		{ build: BUILD_PIRATE_D2, count: 1370 },
		{ build: BUILD_PIRATE_D2, count: 1370 },
		{ build: BUILD_PIRATE_D2, count: 1370 },
		{ build: BUILD_PIRATE_D2, count: 1370 },
		{ build: BUILD_PIRATE_D2, count: 1370 },
		{ build: BUILD_PIRATE_D2, count: 1370 },
		{ build: BUILD_PIRATE_D2, count: 1370 },
		{ build: BUILD_PIRATE_D2, count: 1370 }
	]
};
fleets[FLEET_UNKNOWN_79] = {
	name: 'Unknown 79',
	commander: FLEET_COMMANDER_NORA_2,
	stacks: [
		{ build: BUILD_PIRATE_D3, count: 1370 },
		{ build: BUILD_PIRATE_D3, count: 1370 },
		{ build: BUILD_PIRATE_D3, count: 1370 },
		{ build: BUILD_PIRATE_D3, count: 1370 },
		{ build: BUILD_PIRATE_D3, count: 1370 },
		{ build: BUILD_PIRATE_D3, count: 1370 },
		{ build: BUILD_PIRATE_D3, count: 1370 },
		{ build: BUILD_PIRATE_D3, count: 1370 },
		{ build: BUILD_PIRATE_D3, count: 1370 }
	]
};
fleets[FLEET_UNKNOWN_80] = {
	name: 'Unknown 80',
	commander: FLEET_COMMANDER_NORA_2,
	stacks: [
		{ build: BUILD_PIRATE_D4, count: 1370 },
		{ build: BUILD_PIRATE_D4, count: 1370 },
		{ build: BUILD_PIRATE_D4, count: 1370 },
		{ build: BUILD_PIRATE_D4, count: 1370 },
		{ build: BUILD_PIRATE_D4, count: 1370 },
		{ build: BUILD_PIRATE_D4, count: 1370 },
		{ build: BUILD_PIRATE_D4, count: 1370 },
		{ build: BUILD_PIRATE_D4, count: 1370 },
		{ build: BUILD_PIRATE_D4, count: 1370 }
	]
};
fleets[FLEET_UNKNOWN_81] = {
	name: 'Unknown 81',
	commander: FLEET_COMMANDER_ANNATA_3,
	stacks: [
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 },
		{ build: BUILD_PIRATE_E1, count: 1400 }
	]
};
fleets[FLEET_UNKNOWN_82] = {
	name: 'Unknown 82',
	commander: FLEET_COMMANDER_ANNATA_3,
	stacks: [
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 },
		{ build: BUILD_PIRATE_E2, count: 1400 }
	]
};
fleets[FLEET_UNKNOWN_83] = {
	name: 'Unknown 83',
	commander: FLEET_COMMANDER_ANNATA_3,
	stacks: [
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 },
		{ build: BUILD_PIRATE_E3, count: 1400 }
	]
};
fleets[FLEET_UNKNOWN_84] = {
	name: 'Unknown 84',
	commander: FLEET_COMMANDER_ANNATA_3,
	stacks: [
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 },
		{ build: BUILD_PIRATE_E4, count: 1400 }
	]
};




fleets[FLEET_UNKNOWN_85] = {
	name: 'Unknown 85',
	commander: FLEET_COMMANDER_EVELINE_3,
	stacks: [
		{ build: BUILD_PIRATE_E1, count: 1430 },
		{ build: BUILD_PIRATE_E1, count: 1430 },
		{ build: BUILD_PIRATE_E1, count: 1430 },
		{ build: BUILD_PIRATE_E1, count: 1430 },
		{ build: BUILD_PIRATE_E1, count: 1430 },
		{ build: BUILD_PIRATE_E1, count: 1430 },
		{ build: BUILD_PIRATE_E1, count: 1430 },
		{ build: BUILD_PIRATE_E1, count: 1430 },
		{ build: BUILD_PIRATE_E1, count: 1430 }
	]
};
fleets[FLEET_UNKNOWN_86] = {
	name: 'Unknown 86',
	commander: FLEET_COMMANDER_EVELINE_3,
	stacks: [
		{ build: BUILD_PIRATE_E2, count: 1430 },
		{ build: BUILD_PIRATE_E2, count: 1430 },
		{ build: BUILD_PIRATE_E2, count: 1430 },
		{ build: BUILD_PIRATE_E2, count: 1430 },
		{ build: BUILD_PIRATE_E2, count: 1430 },
		{ build: BUILD_PIRATE_E2, count: 1430 },
		{ build: BUILD_PIRATE_E2, count: 1430 },
		{ build: BUILD_PIRATE_E2, count: 1430 },
		{ build: BUILD_PIRATE_E2, count: 1430 }
	]
};
fleets[FLEET_UNKNOWN_87] = {
	name: 'Unknown 87',
	commander: FLEET_COMMANDER_EVELINE_3,
	stacks: [
		{ build: BUILD_PIRATE_E3, count: 1430 },
		{ build: BUILD_PIRATE_E3, count: 1430 },
		{ build: BUILD_PIRATE_E3, count: 1430 },
		{ build: BUILD_PIRATE_E3, count: 1430 },
		{ build: BUILD_PIRATE_E3, count: 1430 },
		{ build: BUILD_PIRATE_E3, count: 1430 },
		{ build: BUILD_PIRATE_E3, count: 1430 },
		{ build: BUILD_PIRATE_E3, count: 1430 },
		{ build: BUILD_PIRATE_E3, count: 1430 }
	]
};
fleets[FLEET_UNKNOWN_88] = {
	name: 'Unknown 88',
	commander: FLEET_COMMANDER_AILEEN_3,
	stacks: [
		{ build: BUILD_PIRATE_E4, count: 1430 },
		{ build: BUILD_PIRATE_E4, count: 1430 },
		{ build: BUILD_PIRATE_E4, count: 1430 },
		{ build: BUILD_PIRATE_E4, count: 1430 },
		{ build: BUILD_PIRATE_E4, count: 1430 },
		{ build: BUILD_PIRATE_E4, count: 1430 },
		{ build: BUILD_PIRATE_E4, count: 1430 },
		{ build: BUILD_PIRATE_E4, count: 1430 },
		{ build: BUILD_PIRATE_E4, count: 1430 }
	]
};
fleets[FLEET_UNKNOWN_89] = {
	name: 'Unknown 89',
	commander: FLEET_COMMANDER_LINDA_3,
	stacks: [
		{ build: BUILD_PIRATE_E1, count: 1460 },
		{ build: BUILD_PIRATE_E1, count: 1460 },
		{ build: BUILD_PIRATE_E1, count: 1460 },
		{ build: BUILD_PIRATE_E1, count: 1460 },
		{ build: BUILD_PIRATE_E1, count: 1460 },
		{ build: BUILD_PIRATE_E1, count: 1460 },
		{ build: BUILD_PIRATE_E1, count: 1460 },
		{ build: BUILD_PIRATE_E1, count: 1460 },
		{ build: BUILD_PIRATE_E1, count: 1460 }
	]
};
fleets[FLEET_UNKNOWN_90] = {
	name: 'Unknown 90',
	commander: FLEET_COMMANDER_LINDA_3,
	stacks: [
		{ build: BUILD_PIRATE_E2, count: 1460 },
		{ build: BUILD_PIRATE_E2, count: 1460 },
		{ build: BUILD_PIRATE_E2, count: 1460 },
		{ build: BUILD_PIRATE_E2, count: 1460 },
		{ build: BUILD_PIRATE_E2, count: 1460 },
		{ build: BUILD_PIRATE_E2, count: 1460 },
		{ build: BUILD_PIRATE_E2, count: 1460 },
		{ build: BUILD_PIRATE_E2, count: 1460 },
		{ build: BUILD_PIRATE_E2, count: 1460 }
	]
};
fleets[FLEET_UNKNOWN_91] = {
	name: 'Unknown 91',
	commander: FLEET_COMMANDER_ANNA_3,
	stacks: [
		{ build: BUILD_PIRATE_E3, count: 1460 },
		{ build: BUILD_PIRATE_E3, count: 1460 },
		{ build: BUILD_PIRATE_E3, count: 1460 },
		{ build: BUILD_PIRATE_E3, count: 1460 },
		{ build: BUILD_PIRATE_E3, count: 1460 },
		{ build: BUILD_PIRATE_E3, count: 1460 },
		{ build: BUILD_PIRATE_E3, count: 1460 },
		{ build: BUILD_PIRATE_E3, count: 1460 },
		{ build: BUILD_PIRATE_E3, count: 1460 }
	]
};
fleets[FLEET_UNKNOWN_92] = {
	name: 'Unknown 92',
	commander: FLEET_COMMANDER_ANNA_3,
	stacks: [
		{ build: BUILD_PIRATE_E4, count: 1460 },
		{ build: BUILD_PIRATE_E4, count: 1460 },
		{ build: BUILD_PIRATE_E4, count: 1460 },
		{ build: BUILD_PIRATE_E4, count: 1460 },
		{ build: BUILD_PIRATE_E4, count: 1460 },
		{ build: BUILD_PIRATE_E4, count: 1460 },
		{ build: BUILD_PIRATE_E4, count: 1460 },
		{ build: BUILD_PIRATE_E4, count: 1460 },
		{ build: BUILD_PIRATE_E4, count: 1460 }
	]
};
fleets[FLEET_UNKNOWN_93] = {
	name: 'Unknown 93',
	commander: FLEET_COMMANDER_PENNI_3,
	stacks: [
		{ build: BUILD_PIRATE_E1, count: 1490 },
		{ build: BUILD_PIRATE_E1, count: 1490 },
		{ build: BUILD_PIRATE_E1, count: 1490 },
		{ build: BUILD_PIRATE_E1, count: 1490 },
		{ build: BUILD_PIRATE_E1, count: 1490 },
		{ build: BUILD_PIRATE_E1, count: 1490 },
		{ build: BUILD_PIRATE_E1, count: 1490 },
		{ build: BUILD_PIRATE_E1, count: 1490 },
		{ build: BUILD_PIRATE_E1, count: 1490 }
	]
};
fleets[FLEET_UNKNOWN_94] = {
	name: 'Unknown 94',
	commander: FLEET_COMMANDER_PENNI_3,
	stacks: [
		{ build: BUILD_PIRATE_E2, count: 1490 },
		{ build: BUILD_PIRATE_E2, count: 1490 },
		{ build: BUILD_PIRATE_E2, count: 1490 },
		{ build: BUILD_PIRATE_E2, count: 1490 },
		{ build: BUILD_PIRATE_E2, count: 1490 },
		{ build: BUILD_PIRATE_E2, count: 1490 },
		{ build: BUILD_PIRATE_E2, count: 1490 },
		{ build: BUILD_PIRATE_E2, count: 1490 },
		{ build: BUILD_PIRATE_E2, count: 1490 }
	]
};
fleets[FLEET_UNKNOWN_95] = {
	name: 'Unknown 95',
	commander: FLEET_COMMANDER_GASTAF_3,
	stacks: [
		{ build: BUILD_PIRATE_E3, count: 1490 },
		{ build: BUILD_PIRATE_E3, count: 1490 },
		{ build: BUILD_PIRATE_E3, count: 1490 },
		{ build: BUILD_PIRATE_E3, count: 1490 },
		{ build: BUILD_PIRATE_E3, count: 1490 },
		{ build: BUILD_PIRATE_E3, count: 1490 },
		{ build: BUILD_PIRATE_E3, count: 1490 },
		{ build: BUILD_PIRATE_E3, count: 1490 },
		{ build: BUILD_PIRATE_E3, count: 1490 }
	]
};
fleets[FLEET_UNKNOWN_96] = {
	name: 'Unknown 96',
	commander: FLEET_COMMANDER_GASTAF_3,
	stacks: [
		{ build: BUILD_PIRATE_E4, count: 1490 },
		{ build: BUILD_PIRATE_E4, count: 1490 },
		{ build: BUILD_PIRATE_E4, count: 1490 },
		{ build: BUILD_PIRATE_E4, count: 1490 },
		{ build: BUILD_PIRATE_E4, count: 1490 },
		{ build: BUILD_PIRATE_E4, count: 1490 },
		{ build: BUILD_PIRATE_E4, count: 1490 },
		{ build: BUILD_PIRATE_E4, count: 1490 },
		{ build: BUILD_PIRATE_E4, count: 1490 }
	]
};
fleets[FLEET_UNKNOWN_97] = {
	name: 'Unknown 97',
	commander: FLEET_COMMANDER_LINDA_3,
	stacks: [
		{ build: BUILD_PIRATE_E1, count: 1520 },
		{ build: BUILD_PIRATE_E1, count: 1520 },
		{ build: BUILD_PIRATE_E1, count: 1520 },
		{ build: BUILD_PIRATE_E1, count: 1520 },
		{ build: BUILD_PIRATE_E1, count: 1520 },
		{ build: BUILD_PIRATE_E1, count: 1520 },
		{ build: BUILD_PIRATE_E1, count: 1520 },
		{ build: BUILD_PIRATE_E1, count: 1520 },
		{ build: BUILD_PIRATE_E1, count: 1520 }
	]
};
fleets[FLEET_UNKNOWN_98] = {
	name: 'Unknown 98',
	commander: FLEET_COMMANDER_ANNA_3,
	stacks: [
		{ build: BUILD_PIRATE_E2, count: 1520 },
		{ build: BUILD_PIRATE_E2, count: 1520 },
		{ build: BUILD_PIRATE_E2, count: 1520 },
		{ build: BUILD_PIRATE_E2, count: 1520 },
		{ build: BUILD_PIRATE_E2, count: 1520 },
		{ build: BUILD_PIRATE_E2, count: 1520 },
		{ build: BUILD_PIRATE_E2, count: 1520 },
		{ build: BUILD_PIRATE_E2, count: 1520 },
		{ build: BUILD_PIRATE_E2, count: 1520 }
	]
};
fleets[FLEET_UNKNOWN_99] = {
	name: 'Unknown 99',
	commander: FLEET_COMMANDER_EVELINE_3,
	stacks: [
		{ build: BUILD_PIRATE_E3, count: 1520 },
		{ build: BUILD_PIRATE_E3, count: 1520 },
		{ build: BUILD_PIRATE_E3, count: 1520 },
		{ build: BUILD_PIRATE_E3, count: 1520 },
		{ build: BUILD_PIRATE_E3, count: 1520 },
		{ build: BUILD_PIRATE_E3, count: 1520 },
		{ build: BUILD_PIRATE_E3, count: 1520 },
		{ build: BUILD_PIRATE_E3, count: 1520 },
		{ build: BUILD_PIRATE_E3, count: 1520 }
	]
};
fleets[FLEET_UNKNOWN_100] = {
	name: 'Unknown 100',
	commander: FLEET_COMMANDER_NICK_3,
	stacks: [
		{ build: BUILD_PIRATE_E4, count: 1520 },
		{ build: BUILD_PIRATE_E4, count: 1520 },
		{ build: BUILD_PIRATE_E4, count: 1520 },
		{ build: BUILD_PIRATE_E4, count: 1520 },
		{ build: BUILD_PIRATE_E4, count: 1520 },
		{ build: BUILD_PIRATE_E4, count: 1520 },
		{ build: BUILD_PIRATE_E4, count: 1520 },
		{ build: BUILD_PIRATE_E4, count: 1520 },
		{ build: BUILD_PIRATE_E4, count: 1520 }
	]
};
fleets[FLEET_UNKNOWN_101] = {
	name: 'Unknown 101',
	commander: FLEET_COMMANDER_RAYO_3,
	stacks: [
		{ build: BUILD_PIRATE_F1, count: 1550 },
		{ build: BUILD_PIRATE_F1, count: 1550 },
		{ build: BUILD_PIRATE_F1, count: 1550 },
		{ build: BUILD_PIRATE_F1, count: 1550 },
		{ build: BUILD_PIRATE_F1, count: 1550 },
		{ build: BUILD_PIRATE_F1, count: 1550 },
		{ build: BUILD_PIRATE_F1, count: 1550 },
		{ build: BUILD_PIRATE_F1, count: 1550 },
		{ build: BUILD_PIRATE_F1, count: 1550 }
	]
};
fleets[FLEET_UNKNOWN_102] = {
	name: 'Unknown 102',
	commander: FLEET_COMMANDER_RAYO_3,
	stacks: [
		{ build: BUILD_PIRATE_F2, count: 1550 },
		{ build: BUILD_PIRATE_F2, count: 1550 },
		{ build: BUILD_PIRATE_F2, count: 1550 },
		{ build: BUILD_PIRATE_F2, count: 1550 },
		{ build: BUILD_PIRATE_F2, count: 1550 },
		{ build: BUILD_PIRATE_F2, count: 1550 },
		{ build: BUILD_PIRATE_F2, count: 1550 },
		{ build: BUILD_PIRATE_F2, count: 1550 },
		{ build: BUILD_PIRATE_F2, count: 1550 }
	]
};
fleets[FLEET_UNKNOWN_103] = {
	name: 'Unknown 103',
	commander: FLEET_COMMANDER_RAYO_3,
	stacks: [
		{ build: BUILD_PIRATE_F3, count: 1550 },
		{ build: BUILD_PIRATE_F3, count: 1550 },
		{ build: BUILD_PIRATE_F3, count: 1550 },
		{ build: BUILD_PIRATE_F3, count: 1550 },
		{ build: BUILD_PIRATE_F3, count: 1550 },
		{ build: BUILD_PIRATE_F3, count: 1550 },
		{ build: BUILD_PIRATE_F3, count: 1550 },
		{ build: BUILD_PIRATE_F3, count: 1550 },
		{ build: BUILD_PIRATE_F3, count: 1550 }
	]
};
fleets[FLEET_UNKNOWN_104] = {
	name: 'Unknown 104',
	commander: FLEET_COMMANDER_RAYO_3,
	stacks: [
		{ build: BUILD_PIRATE_F4, count: 1550 },
		{ build: BUILD_PIRATE_F4, count: 1550 },
		{ build: BUILD_PIRATE_F4, count: 1550 },
		{ build: BUILD_PIRATE_F4, count: 1550 },
		{ build: BUILD_PIRATE_F4, count: 1550 },
		{ build: BUILD_PIRATE_F4, count: 1550 },
		{ build: BUILD_PIRATE_F4, count: 1550 },
		{ build: BUILD_PIRATE_F4, count: 1550 },
		{ build: BUILD_PIRATE_F4, count: 1550 }
	]
};
fleets[FLEET_UNKNOWN_105] = {
	name: 'Unknown 105',
	commander: FLEET_COMMANDER_SANDORA_3,
	stacks: [
		{ build: BUILD_PIRATE_F1, count: 1580 },
		{ build: BUILD_PIRATE_F1, count: 1580 },
		{ build: BUILD_PIRATE_F1, count: 1580 },
		{ build: BUILD_PIRATE_F1, count: 1580 },
		{ build: BUILD_PIRATE_F1, count: 1580 },
		{ build: BUILD_PIRATE_F1, count: 1580 },
		{ build: BUILD_PIRATE_F1, count: 1580 },
		{ build: BUILD_PIRATE_F1, count: 1580 },
		{ build: BUILD_PIRATE_F1, count: 1580 }
	]
};
fleets[FLEET_UNKNOWN_106] = {
	name: 'Unknown 106',
	commander: FLEET_COMMANDER_SANDORA_3,
	stacks: [
		{ build: BUILD_PIRATE_F2, count: 1580 },
		{ build: BUILD_PIRATE_F2, count: 1580 },
		{ build: BUILD_PIRATE_F2, count: 1580 },
		{ build: BUILD_PIRATE_F2, count: 1580 },
		{ build: BUILD_PIRATE_F2, count: 1580 },
		{ build: BUILD_PIRATE_F2, count: 1580 },
		{ build: BUILD_PIRATE_F2, count: 1580 },
		{ build: BUILD_PIRATE_F2, count: 1580 },
		{ build: BUILD_PIRATE_F2, count: 1580 }
	]
};
fleets[FLEET_UNKNOWN_107] = {
	name: 'Unknown 107',
	commander: FLEET_COMMANDER_SANDORA_3,
	stacks: [
		{ build: BUILD_PIRATE_F3, count: 1580 },
		{ build: BUILD_PIRATE_F3, count: 1580 },
		{ build: BUILD_PIRATE_F3, count: 1580 },
		{ build: BUILD_PIRATE_F3, count: 1580 },
		{ build: BUILD_PIRATE_F3, count: 1580 },
		{ build: BUILD_PIRATE_F3, count: 1580 },
		{ build: BUILD_PIRATE_F3, count: 1580 },
		{ build: BUILD_PIRATE_F3, count: 1580 },
		{ build: BUILD_PIRATE_F3, count: 1580 }
	]
};
fleets[FLEET_UNKNOWN_108] = {
	name: 'Unknown 108',
	commander: FLEET_COMMANDER_SANDORA_3,
	stacks: [
		{ build: BUILD_PIRATE_F4, count: 1580 },
		{ build: BUILD_PIRATE_F4, count: 1580 },
		{ build: BUILD_PIRATE_F4, count: 1580 },
		{ build: BUILD_PIRATE_F4, count: 1580 },
		{ build: BUILD_PIRATE_F4, count: 1580 },
		{ build: BUILD_PIRATE_F4, count: 1580 },
		{ build: BUILD_PIRATE_F4, count: 1580 },
		{ build: BUILD_PIRATE_F4, count: 1580 },
		{ build: BUILD_PIRATE_F4, count: 1580 }
	]
};
fleets[FLEET_UNKNOWN_109] = {
	name: 'Unknown 109',
	commander: FLEET_COMMANDER_MARCUS_3,
	stacks: [
		{ build: BUILD_PIRATE_F1, count: 1610 },
		{ build: BUILD_PIRATE_F1, count: 1610 },
		{ build: BUILD_PIRATE_F1, count: 1610 },
		{ build: BUILD_PIRATE_F1, count: 1610 },
		{ build: BUILD_PIRATE_F1, count: 1610 },
		{ build: BUILD_PIRATE_F1, count: 1610 },
		{ build: BUILD_PIRATE_F1, count: 1610 },
		{ build: BUILD_PIRATE_F1, count: 1610 },
		{ build: BUILD_PIRATE_F1, count: 1610 }
	]
};
fleets[FLEET_UNKNOWN_110] = {
	name: 'Unknown 110',
	commander: FLEET_COMMANDER_MARCUS_3,
	stacks: [
		{ build: BUILD_PIRATE_F2, count: 1610 },
		{ build: BUILD_PIRATE_F2, count: 1610 },
		{ build: BUILD_PIRATE_F2, count: 1610 },
		{ build: BUILD_PIRATE_F2, count: 1610 },
		{ build: BUILD_PIRATE_F2, count: 1610 },
		{ build: BUILD_PIRATE_F2, count: 1610 },
		{ build: BUILD_PIRATE_F2, count: 1610 },
		{ build: BUILD_PIRATE_F2, count: 1610 },
		{ build: BUILD_PIRATE_F2, count: 1610 }
	]
};
fleets[FLEET_UNKNOWN_111] = {
	name: 'Unknown 111',
	commander: FLEET_COMMANDER_MARCUS_3,
	stacks: [
		{ build: BUILD_PIRATE_F3, count: 1610 },
		{ build: BUILD_PIRATE_F3, count: 1610 },
		{ build: BUILD_PIRATE_F3, count: 1610 },
		{ build: BUILD_PIRATE_F3, count: 1610 },
		{ build: BUILD_PIRATE_F3, count: 1610 },
		{ build: BUILD_PIRATE_F3, count: 1610 },
		{ build: BUILD_PIRATE_F3, count: 1610 },
		{ build: BUILD_PIRATE_F3, count: 1610 },
		{ build: BUILD_PIRATE_F3, count: 1610 }
	]
};
fleets[FLEET_UNKNOWN_112] = {
	name: 'Unknown 112',
	commander: FLEET_COMMANDER_MARCUS_3,
	stacks: [
		{ build: BUILD_PIRATE_F4, count: 1610 },
		{ build: BUILD_PIRATE_F4, count: 1610 },
		{ build: BUILD_PIRATE_F4, count: 1610 },
		{ build: BUILD_PIRATE_F4, count: 1610 },
		{ build: BUILD_PIRATE_F4, count: 1610 },
		{ build: BUILD_PIRATE_F4, count: 1610 },
		{ build: BUILD_PIRATE_F4, count: 1610 },
		{ build: BUILD_PIRATE_F4, count: 1610 },
		{ build: BUILD_PIRATE_F4, count: 1610 }
	]
};
fleets[FLEET_UNKNOWN_113] = {
	name: 'Unknown 113',
	commander: FLEET_COMMANDER_STANI_3,
	stacks: [
		{ build: BUILD_PIRATE_F1, count: 1640 },
		{ build: BUILD_PIRATE_F1, count: 1640 },
		{ build: BUILD_PIRATE_F1, count: 1640 },
		{ build: BUILD_PIRATE_F1, count: 1640 },
		{ build: BUILD_PIRATE_F1, count: 1640 },
		{ build: BUILD_PIRATE_F1, count: 1640 },
		{ build: BUILD_PIRATE_F1, count: 1640 },
		{ build: BUILD_PIRATE_F1, count: 1640 },
		{ build: BUILD_PIRATE_F1, count: 1640 }
	]
};
fleets[FLEET_UNKNOWN_114] = {
	name: 'Unknown 114',
	commander: FLEET_COMMANDER_STANI_3,
	stacks: [
		{ build: BUILD_PIRATE_F2, count: 1640 },
		{ build: BUILD_PIRATE_F2, count: 1640 },
		{ build: BUILD_PIRATE_F2, count: 1640 },
		{ build: BUILD_PIRATE_F2, count: 1640 },
		{ build: BUILD_PIRATE_F2, count: 1640 },
		{ build: BUILD_PIRATE_F2, count: 1640 },
		{ build: BUILD_PIRATE_F2, count: 1640 },
		{ build: BUILD_PIRATE_F2, count: 1640 },
		{ build: BUILD_PIRATE_F2, count: 1640 }
	]
};
fleets[FLEET_UNKNOWN_115] = {
	name: 'Unknown 115',
	commander: FLEET_COMMANDER_STANI_3,
	stacks: [
		{ build: BUILD_PIRATE_F3, count: 1640 },
		{ build: BUILD_PIRATE_F3, count: 1640 },
		{ build: BUILD_PIRATE_F3, count: 1640 },
		{ build: BUILD_PIRATE_F3, count: 1640 },
		{ build: BUILD_PIRATE_F3, count: 1640 },
		{ build: BUILD_PIRATE_F3, count: 1640 },
		{ build: BUILD_PIRATE_F3, count: 1640 },
		{ build: BUILD_PIRATE_F3, count: 1640 },
		{ build: BUILD_PIRATE_F3, count: 1640 }
	]
};
fleets[FLEET_UNKNOWN_116] = {
	name: 'Unknown 116',
	commander: FLEET_COMMANDER_STANI_3,
	stacks: [
		{ build: BUILD_PIRATE_F4, count: 1640 },
		{ build: BUILD_PIRATE_F4, count: 1640 },
		{ build: BUILD_PIRATE_F4, count: 1640 },
		{ build: BUILD_PIRATE_F4, count: 1640 },
		{ build: BUILD_PIRATE_F4, count: 1640 },
		{ build: BUILD_PIRATE_F4, count: 1640 },
		{ build: BUILD_PIRATE_F4, count: 1640 },
		{ build: BUILD_PIRATE_F4, count: 1640 },
		{ build: BUILD_PIRATE_F4, count: 1640 }
	]
};
fleets[FLEET_UNKNOWN_117] = {
	name: 'Unknown 117',
	commander: FLEET_COMMANDER_BART_3,
	stacks: [
		{ build: BUILD_PIRATE_F1, count: 1670 },
		{ build: BUILD_PIRATE_F1, count: 1670 },
		{ build: BUILD_PIRATE_F1, count: 1670 },
		{ build: BUILD_PIRATE_F1, count: 1670 },
		{ build: BUILD_PIRATE_F1, count: 1670 },
		{ build: BUILD_PIRATE_F1, count: 1670 },
		{ build: BUILD_PIRATE_F1, count: 1670 },
		{ build: BUILD_PIRATE_F1, count: 1670 },
		{ build: BUILD_PIRATE_F1, count: 1670 }
	]
};
fleets[FLEET_UNKNOWN_118] = {
	name: 'Unknown 118',
	commander: FLEET_COMMANDER_BART_3,
	stacks: [
		{ build: BUILD_PIRATE_F2, count: 1670 },
		{ build: BUILD_PIRATE_F2, count: 1670 },
		{ build: BUILD_PIRATE_F2, count: 1670 },
		{ build: BUILD_PIRATE_F2, count: 1670 },
		{ build: BUILD_PIRATE_F2, count: 1670 },
		{ build: BUILD_PIRATE_F2, count: 1670 },
		{ build: BUILD_PIRATE_F2, count: 1670 },
		{ build: BUILD_PIRATE_F2, count: 1670 },
		{ build: BUILD_PIRATE_F2, count: 1670 }
	]
};
fleets[FLEET_UNKNOWN_119] = {
	name: 'Unknown 119',
	commander: FLEET_COMMANDER_BART_3,
	stacks: [
		{ build: BUILD_PIRATE_F3, count: 1670 },
		{ build: BUILD_PIRATE_F3, count: 1670 },
		{ build: BUILD_PIRATE_F3, count: 1670 },
		{ build: BUILD_PIRATE_F3, count: 1670 },
		{ build: BUILD_PIRATE_F3, count: 1670 },
		{ build: BUILD_PIRATE_F3, count: 1670 },
		{ build: BUILD_PIRATE_F3, count: 1670 },
		{ build: BUILD_PIRATE_F3, count: 1670 },
		{ build: BUILD_PIRATE_F3, count: 1670 }
	]
};
fleets[FLEET_UNKNOWN_120] = {
	name: 'Unknown 120',
	commander: FLEET_COMMANDER_BART_3,
	stacks: [
		{ build: BUILD_PIRATE_F4, count: 1670 },
		{ build: BUILD_PIRATE_F4, count: 1670 },
		{ build: BUILD_PIRATE_F4, count: 1670 },
		{ build: BUILD_PIRATE_F4, count: 1670 },
		{ build: BUILD_PIRATE_F4, count: 1670 },
		{ build: BUILD_PIRATE_F4, count: 1670 },
		{ build: BUILD_PIRATE_F4, count: 1670 },
		{ build: BUILD_PIRATE_F4, count: 1670 },
		{ build: BUILD_PIRATE_F4, count: 1670 }
	]
};
fleets[FLEET_UNKNOWN_121] = {
	name: 'Unknown 121',
	commander: FLEET_COMMANDER_RINGEL_4,
	stacks: [
		{ build: BUILD_PIRATE_G1, count: 1700 },
		{ build: BUILD_PIRATE_G1, count: 1700 },
		{ build: BUILD_PIRATE_G1, count: 1700 },
		{ build: BUILD_PIRATE_G1, count: 1700 },
		{ build: BUILD_PIRATE_G1, count: 1700 },
		{ build: BUILD_PIRATE_G1, count: 1700 },
		{ build: BUILD_PIRATE_G1, count: 1700 },
		{ build: BUILD_PIRATE_G1, count: 1700 },
		{ build: BUILD_PIRATE_G1, count: 1700 }
	]
};
fleets[FLEET_UNKNOWN_122] = {
	name: 'Unknown 122',
	commander: FLEET_COMMANDER_RINGEL_4,
	stacks: [
		{ build: BUILD_PIRATE_G2, count: 1700 },
		{ build: BUILD_PIRATE_G2, count: 1700 },
		{ build: BUILD_PIRATE_G2, count: 1700 },
		{ build: BUILD_PIRATE_G2, count: 1700 },
		{ build: BUILD_PIRATE_G2, count: 1700 },
		{ build: BUILD_PIRATE_G2, count: 1700 },
		{ build: BUILD_PIRATE_G2, count: 1700 },
		{ build: BUILD_PIRATE_G2, count: 1700 },
		{ build: BUILD_PIRATE_G2, count: 1700 }
	]
};
fleets[FLEET_UNKNOWN_123] = {
	name: 'Unknown 123',
	commander: FLEET_COMMANDER_RINGEL_4,
	stacks: [
		{ build: BUILD_PIRATE_G3, count: 1700 },
		{ build: BUILD_PIRATE_G3, count: 1700 },
		{ build: BUILD_PIRATE_G3, count: 1700 },
		{ build: BUILD_PIRATE_G3, count: 1700 },
		{ build: BUILD_PIRATE_G3, count: 1700 },
		{ build: BUILD_PIRATE_G3, count: 1700 },
		{ build: BUILD_PIRATE_G3, count: 1700 },
		{ build: BUILD_PIRATE_G3, count: 1700 },
		{ build: BUILD_PIRATE_G3, count: 1700 }
	]
};
fleets[FLEET_UNKNOWN_124] = {
	name: 'Unknown 124',
	commander: FLEET_COMMANDER_RINGEL_4,
	stacks: [
		{ build: BUILD_PIRATE_G4, count: 1700 },
		{ build: BUILD_PIRATE_G4, count: 1700 },
		{ build: BUILD_PIRATE_G4, count: 1700 },
		{ build: BUILD_PIRATE_G4, count: 1700 },
		{ build: BUILD_PIRATE_G4, count: 1700 },
		{ build: BUILD_PIRATE_G4, count: 1700 },
		{ build: BUILD_PIRATE_G4, count: 1700 },
		{ build: BUILD_PIRATE_G4, count: 1700 },
		{ build: BUILD_PIRATE_G4, count: 1700 }
	]
};
fleets[FLEET_UNKNOWN_125] = {
	name: 'Unknown 125',
	commander: FLEET_COMMANDER_GASTAF_4,
	stacks: [
		{ build: BUILD_PIRATE_G1, count: 1730 },
		{ build: BUILD_PIRATE_G1, count: 1730 },
		{ build: BUILD_PIRATE_G1, count: 1730 },
		{ build: BUILD_PIRATE_G1, count: 1730 },
		{ build: BUILD_PIRATE_G1, count: 1730 },
		{ build: BUILD_PIRATE_G1, count: 1730 },
		{ build: BUILD_PIRATE_G1, count: 1730 },
		{ build: BUILD_PIRATE_G1, count: 1730 },
		{ build: BUILD_PIRATE_G1, count: 1730 }
	]
};
fleets[FLEET_UNKNOWN_126] = {
	name: 'Unknown 126',
	commander: FLEET_COMMANDER_GASTAF_4,
	stacks: [
		{ build: BUILD_PIRATE_G2, count: 1730 },
		{ build: BUILD_PIRATE_G2, count: 1730 },
		{ build: BUILD_PIRATE_G2, count: 1730 },
		{ build: BUILD_PIRATE_G2, count: 1730 },
		{ build: BUILD_PIRATE_G2, count: 1730 },
		{ build: BUILD_PIRATE_G2, count: 1730 },
		{ build: BUILD_PIRATE_G2, count: 1730 },
		{ build: BUILD_PIRATE_G2, count: 1730 },
		{ build: BUILD_PIRATE_G2, count: 1730 }
	]
};
fleets[FLEET_UNKNOWN_127] = {
	name: 'Unknown 127',
	commander: FLEET_COMMANDER_GASTAF_4,
	stacks: [
		{ build: BUILD_PIRATE_G3, count: 1730 },
		{ build: BUILD_PIRATE_G3, count: 1730 },
		{ build: BUILD_PIRATE_G3, count: 1730 },
		{ build: BUILD_PIRATE_G3, count: 1730 },
		{ build: BUILD_PIRATE_G3, count: 1730 },
		{ build: BUILD_PIRATE_G3, count: 1730 },
		{ build: BUILD_PIRATE_G3, count: 1730 },
		{ build: BUILD_PIRATE_G3, count: 1730 },
		{ build: BUILD_PIRATE_G3, count: 1730 }
	]
};
fleets[FLEET_UNKNOWN_128] = {
	name: 'Unknown 128',
	commander: FLEET_COMMANDER_GASTAF_4,
	stacks: [
		{ build: BUILD_PIRATE_G4, count: 1730 },
		{ build: BUILD_PIRATE_G4, count: 1730 },
		{ build: BUILD_PIRATE_G4, count: 1730 },
		{ build: BUILD_PIRATE_G4, count: 1730 },
		{ build: BUILD_PIRATE_G4, count: 1730 },
		{ build: BUILD_PIRATE_G4, count: 1730 },
		{ build: BUILD_PIRATE_G4, count: 1730 },
		{ build: BUILD_PIRATE_G4, count: 1730 },
		{ build: BUILD_PIRATE_G4, count: 1730 }
	]
};


fleets[FLEET_UNKNOWN_129] = {
	name: 'Unknown 129',
	commander: FLEET_COMMANDER_GASTAF_4,
	stacks: [
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 }
	]
};
fleets[FLEET_UNKNOWN_130] = {
	name: 'Unknown 130',
	commander: FLEET_COMMANDER_GASTAF_4,
	stacks: [
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 }
	]
};
fleets[FLEET_UNKNOWN_131] = {
	name: 'Unknown 131',
	commander: FLEET_COMMANDER_GASTAF_4,
	stacks: [
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 }
	]
};
fleets[FLEET_UNKNOWN_132] = {
	name: 'Unknown 132',
	commander: FLEET_COMMANDER_GASTAF_4,
	stacks: [
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 }
	]
};
fleets[FLEET_UNKNOWN_129] = {
	name: 'Unknown 129',
	commander: FLEET_COMMANDER_EVELINE_4,
	stacks: [
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 },
		{ build: BUILD_PIRATE_G1, count: 1760 }
	]
};
fleets[FLEET_UNKNOWN_130] = {
	name: 'Unknown 130',
	commander: FLEET_COMMANDER_EVELINE_4,
	stacks: [
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 },
		{ build: BUILD_PIRATE_G2, count: 1760 }
	]
};
fleets[FLEET_UNKNOWN_131] = {
	name: 'Unknown 131',
	commander: FLEET_COMMANDER_PENNI_4,
	stacks: [
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 },
		{ build: BUILD_PIRATE_G3, count: 1760 }
	]
};
fleets[FLEET_UNKNOWN_132] = {
	name: 'Unknown 132',
	commander: FLEET_COMMANDER_PENNI_4,
	stacks: [
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 },
		{ build: BUILD_PIRATE_G4, count: 1760 }
	]
};
fleets[FLEET_UNKNOWN_133] = {
	name: 'Unknown 133',
	commander: FLEET_COMMANDER_SYLLA_4,
	stacks: [
		{ build: BUILD_PIRATE_G1, count: 1790 },
		{ build: BUILD_PIRATE_G1, count: 1790 },
		{ build: BUILD_PIRATE_G1, count: 1790 },
		{ build: BUILD_PIRATE_G1, count: 1790 },
		{ build: BUILD_PIRATE_G1, count: 1790 },
		{ build: BUILD_PIRATE_G1, count: 1790 },
		{ build: BUILD_PIRATE_G1, count: 1790 },
		{ build: BUILD_PIRATE_G1, count: 1790 },
		{ build: BUILD_PIRATE_G1, count: 1790 }
	]
};
fleets[FLEET_UNKNOWN_134] = {
	name: 'Unknown 134',
	commander: FLEET_COMMANDER_SYLLA_4,
	stacks: [
		{ build: BUILD_PIRATE_G2, count: 1790 },
		{ build: BUILD_PIRATE_G2, count: 1790 },
		{ build: BUILD_PIRATE_G2, count: 1790 },
		{ build: BUILD_PIRATE_G2, count: 1790 },
		{ build: BUILD_PIRATE_G2, count: 1790 },
		{ build: BUILD_PIRATE_G2, count: 1790 },
		{ build: BUILD_PIRATE_G2, count: 1790 },
		{ build: BUILD_PIRATE_G2, count: 1790 },
		{ build: BUILD_PIRATE_G2, count: 1790 }
	]
};
fleets[FLEET_UNKNOWN_135] = {
	name: 'Unknown 135',
	commander: FLEET_COMMANDER_SYLLA_4,
	stacks: [
		{ build: BUILD_PIRATE_G3, count: 1790 },
		{ build: BUILD_PIRATE_G3, count: 1790 },
		{ build: BUILD_PIRATE_G3, count: 1790 },
		{ build: BUILD_PIRATE_G3, count: 1790 },
		{ build: BUILD_PIRATE_G3, count: 1790 },
		{ build: BUILD_PIRATE_G3, count: 1790 },
		{ build: BUILD_PIRATE_G3, count: 1790 },
		{ build: BUILD_PIRATE_G3, count: 1790 },
		{ build: BUILD_PIRATE_G3, count: 1790 }
	]
};
fleets[FLEET_UNKNOWN_136] = {
	name: 'Unknown 136',
	commander: FLEET_COMMANDER_SYLLA_4,
	stacks: [
		{ build: BUILD_PIRATE_G4, count: 1790 },
		{ build: BUILD_PIRATE_G4, count: 1790 },
		{ build: BUILD_PIRATE_G4, count: 1790 },
		{ build: BUILD_PIRATE_G4, count: 1790 },
		{ build: BUILD_PIRATE_G4, count: 1790 },
		{ build: BUILD_PIRATE_G4, count: 1790 },
		{ build: BUILD_PIRATE_G4, count: 1790 },
		{ build: BUILD_PIRATE_G4, count: 1790 },
		{ build: BUILD_PIRATE_G4, count: 1790 }
	]
};
fleets[FLEET_UNKNOWN_137] = {
	name: 'Unknown 137',
	commander: FLEET_COMMANDER_NICK_4,
	stacks: [
		{ build: BUILD_PIRATE_G1, count: 1820 },
		{ build: BUILD_PIRATE_G1, count: 1820 },
		{ build: BUILD_PIRATE_G1, count: 1820 },
		{ build: BUILD_PIRATE_G1, count: 1820 },
		{ build: BUILD_PIRATE_G1, count: 1820 },
		{ build: BUILD_PIRATE_G1, count: 1820 },
		{ build: BUILD_PIRATE_G1, count: 1820 },
		{ build: BUILD_PIRATE_G1, count: 1820 },
		{ build: BUILD_PIRATE_G1, count: 1820 }
	]
};
fleets[FLEET_UNKNOWN_138] = {
	name: 'Unknown 138',
	commander: FLEET_COMMANDER_NICK_4,
	stacks: [
		{ build: BUILD_PIRATE_G2, count: 1820 },
		{ build: BUILD_PIRATE_G2, count: 1820 },
		{ build: BUILD_PIRATE_G2, count: 1820 },
		{ build: BUILD_PIRATE_G2, count: 1820 },
		{ build: BUILD_PIRATE_G2, count: 1820 },
		{ build: BUILD_PIRATE_G2, count: 1820 },
		{ build: BUILD_PIRATE_G2, count: 1820 },
		{ build: BUILD_PIRATE_G2, count: 1820 },
		{ build: BUILD_PIRATE_G2, count: 1820 }
	]
};
fleets[FLEET_UNKNOWN_139] = {
	name: 'Unknown 139',
	commander: FLEET_COMMANDER_NICK_4,
	stacks: [
		{ build: BUILD_PIRATE_G3, count: 1820 },
		{ build: BUILD_PIRATE_G3, count: 1820 },
		{ build: BUILD_PIRATE_G3, count: 1820 },
		{ build: BUILD_PIRATE_G3, count: 1820 },
		{ build: BUILD_PIRATE_G3, count: 1820 },
		{ build: BUILD_PIRATE_G3, count: 1820 },
		{ build: BUILD_PIRATE_G3, count: 1820 },
		{ build: BUILD_PIRATE_G3, count: 1820 },
		{ build: BUILD_PIRATE_G3, count: 1820 }
	]
};
fleets[FLEET_UNKNOWN_140] = {
	name: 'Unknown 140',
	commander: FLEET_COMMANDER_NICK_4,
	stacks: [
		{ build: BUILD_PIRATE_G4, count: 1820 },
		{ build: BUILD_PIRATE_G4, count: 1820 },
		{ build: BUILD_PIRATE_G4, count: 1820 },
		{ build: BUILD_PIRATE_G4, count: 1820 },
		{ build: BUILD_PIRATE_G4, count: 1820 },
		{ build: BUILD_PIRATE_G4, count: 1820 },
		{ build: BUILD_PIRATE_G4, count: 1820 },
		{ build: BUILD_PIRATE_G4, count: 1820 },
		{ build: BUILD_PIRATE_G4, count: 1820 }
	]
};
fleets[FLEET_UNKNOWN_141] = {
	name: 'Unknown 141',
	commander: FLEET_COMMANDER_SINGHRI_4,
	stacks: [
		{ build: BUILD_PIRATE_H1, count: 1850 },
		{ build: BUILD_PIRATE_H1, count: 1850 },
		{ build: BUILD_PIRATE_H1, count: 1850 },
		{ build: BUILD_PIRATE_H1, count: 1850 },
		{ build: BUILD_PIRATE_H1, count: 1850 },
		{ build: BUILD_PIRATE_H1, count: 1850 },
		{ build: BUILD_PIRATE_H1, count: 1850 },
		{ build: BUILD_PIRATE_H1, count: 1850 },
		{ build: BUILD_PIRATE_H1, count: 1850 }
	]
};
fleets[FLEET_UNKNOWN_142] = {
	name: 'Unknown 142',
	commander: FLEET_COMMANDER_SINGHRI_4,
	stacks: [
		{ build: BUILD_PIRATE_H2, count: 1850 },
		{ build: BUILD_PIRATE_H2, count: 1850 },
		{ build: BUILD_PIRATE_H2, count: 1850 },
		{ build: BUILD_PIRATE_H2, count: 1850 },
		{ build: BUILD_PIRATE_H2, count: 1850 },
		{ build: BUILD_PIRATE_H2, count: 1850 },
		{ build: BUILD_PIRATE_H2, count: 1850 },
		{ build: BUILD_PIRATE_H2, count: 1850 },
		{ build: BUILD_PIRATE_H2, count: 1850 }
	]
};
fleets[FLEET_UNKNOWN_143] = {
	name: 'Unknown 143',
	commander: FLEET_COMMANDER_SINGHRI_4,
	stacks: [
		{ build: BUILD_PIRATE_H3, count: 1850 },
		{ build: BUILD_PIRATE_H3, count: 1850 },
		{ build: BUILD_PIRATE_H3, count: 1850 },
		{ build: BUILD_PIRATE_H3, count: 1850 },
		{ build: BUILD_PIRATE_H3, count: 1850 },
		{ build: BUILD_PIRATE_H3, count: 1850 },
		{ build: BUILD_PIRATE_H3, count: 1850 },
		{ build: BUILD_PIRATE_H3, count: 1850 },
		{ build: BUILD_PIRATE_H3, count: 1850 }
	]
};
fleets[FLEET_UNKNOWN_144] = {
	name: 'Unknown 144',
	commander: FLEET_COMMANDER_SINGHRI_4,
	stacks: [
		{ build: BUILD_PIRATE_H4, count: 1850 },
		{ build: BUILD_PIRATE_H4, count: 1850 },
		{ build: BUILD_PIRATE_H4, count: 1850 },
		{ build: BUILD_PIRATE_H4, count: 1850 },
		{ build: BUILD_PIRATE_H4, count: 1850 },
		{ build: BUILD_PIRATE_H4, count: 1850 },
		{ build: BUILD_PIRATE_H4, count: 1850 },
		{ build: BUILD_PIRATE_H4, count: 1850 },
		{ build: BUILD_PIRATE_H4, count: 1850 }
	]
};
fleets[FLEET_UNKNOWN_145] = {
	name: 'Unknown 145',
	commander: FLEET_COMMANDER_AILEEN_4,
	stacks: [
		{ build: BUILD_PIRATE_H1, count: 1880 },
		{ build: BUILD_PIRATE_H1, count: 1880 },
		{ build: BUILD_PIRATE_H1, count: 1880 },
		{ build: BUILD_PIRATE_H1, count: 1880 },
		{ build: BUILD_PIRATE_H1, count: 1880 },
		{ build: BUILD_PIRATE_H1, count: 1880 },
		{ build: BUILD_PIRATE_H1, count: 1880 },
		{ build: BUILD_PIRATE_H1, count: 1880 },
		{ build: BUILD_PIRATE_H1, count: 1880 }
	]
};
fleets[FLEET_UNKNOWN_146] = {
	name: 'Unknown 146',
	commander: FLEET_COMMANDER_AILEEN_4,
	stacks: [
		{ build: BUILD_PIRATE_H2, count: 1880 },
		{ build: BUILD_PIRATE_H2, count: 1880 },
		{ build: BUILD_PIRATE_H2, count: 1880 },
		{ build: BUILD_PIRATE_H2, count: 1880 },
		{ build: BUILD_PIRATE_H2, count: 1880 },
		{ build: BUILD_PIRATE_H2, count: 1880 },
		{ build: BUILD_PIRATE_H2, count: 1880 },
		{ build: BUILD_PIRATE_H2, count: 1880 },
		{ build: BUILD_PIRATE_H2, count: 1880 }
	]
};
fleets[FLEET_UNKNOWN_147] = {
	name: 'Unknown 147',
	commander: FLEET_COMMANDER_AILEEN_4,
	stacks: [
		{ build: BUILD_PIRATE_H3, count: 1880 },
		{ build: BUILD_PIRATE_H3, count: 1880 },
		{ build: BUILD_PIRATE_H3, count: 1880 },
		{ build: BUILD_PIRATE_H3, count: 1880 },
		{ build: BUILD_PIRATE_H3, count: 1880 },
		{ build: BUILD_PIRATE_H3, count: 1880 },
		{ build: BUILD_PIRATE_H3, count: 1880 },
		{ build: BUILD_PIRATE_H3, count: 1880 },
		{ build: BUILD_PIRATE_H3, count: 1880 }
	]
};
fleets[FLEET_UNKNOWN_148] = {
	name: 'Unknown 148',
	commander: FLEET_COMMANDER_AILEEN_4,
	stacks: [
		{ build: BUILD_PIRATE_H4, count: 1880 },
		{ build: BUILD_PIRATE_H4, count: 1880 },
		{ build: BUILD_PIRATE_H4, count: 1880 },
		{ build: BUILD_PIRATE_H4, count: 1880 },
		{ build: BUILD_PIRATE_H4, count: 1880 },
		{ build: BUILD_PIRATE_H4, count: 1880 },
		{ build: BUILD_PIRATE_H4, count: 1880 },
		{ build: BUILD_PIRATE_H4, count: 1880 },
		{ build: BUILD_PIRATE_H4, count: 1880 }
	]
};
fleets[FLEET_UNKNOWN_149] = {
	name: 'Unknown 149',
	commander: FLEET_COMMANDER_SANDORA_4,
	stacks: [
		{ build: BUILD_PIRATE_H1, count: 1910 },
		{ build: BUILD_PIRATE_H1, count: 1910 },
		{ build: BUILD_PIRATE_H1, count: 1910 },
		{ build: BUILD_PIRATE_H1, count: 1910 },
		{ build: BUILD_PIRATE_H1, count: 1910 },
		{ build: BUILD_PIRATE_H1, count: 1910 },
		{ build: BUILD_PIRATE_H1, count: 1910 },
		{ build: BUILD_PIRATE_H1, count: 1910 },
		{ build: BUILD_PIRATE_H1, count: 1910 }
	]
};
fleets[FLEET_UNKNOWN_150] = {
	name: 'Unknown 150',
	commander: FLEET_COMMANDER_SANDORA_4,
	stacks: [
		{ build: BUILD_PIRATE_H2, count: 1910 },
		{ build: BUILD_PIRATE_H2, count: 1910 },
		{ build: BUILD_PIRATE_H2, count: 1910 },
		{ build: BUILD_PIRATE_H2, count: 1910 },
		{ build: BUILD_PIRATE_H2, count: 1910 },
		{ build: BUILD_PIRATE_H2, count: 1910 },
		{ build: BUILD_PIRATE_H2, count: 1910 },
		{ build: BUILD_PIRATE_H2, count: 1910 },
		{ build: BUILD_PIRATE_H2, count: 1910 }
	]
};
fleets[FLEET_UNKNOWN_151] = {
	name: 'Unknown 151',
	commander: FLEET_COMMANDER_SANDORA_4,
	stacks: [
		{ build: BUILD_PIRATE_H3, count: 1910 },
		{ build: BUILD_PIRATE_H3, count: 1910 },
		{ build: BUILD_PIRATE_H3, count: 1910 },
		{ build: BUILD_PIRATE_H3, count: 1910 },
		{ build: BUILD_PIRATE_H3, count: 1910 },
		{ build: BUILD_PIRATE_H3, count: 1910 },
		{ build: BUILD_PIRATE_H3, count: 1910 },
		{ build: BUILD_PIRATE_H3, count: 1910 },
		{ build: BUILD_PIRATE_H3, count: 1910 }
	]
};
fleets[FLEET_UNKNOWN_152] = {
	name: 'Unknown 152',
	commander: FLEET_COMMANDER_SANDORA_4,
	stacks: [
		{ build: BUILD_PIRATE_H4, count: 1910 },
		{ build: BUILD_PIRATE_H4, count: 1910 },
		{ build: BUILD_PIRATE_H4, count: 1910 },
		{ build: BUILD_PIRATE_H4, count: 1910 },
		{ build: BUILD_PIRATE_H4, count: 1910 },
		{ build: BUILD_PIRATE_H4, count: 1910 },
		{ build: BUILD_PIRATE_H4, count: 1910 },
		{ build: BUILD_PIRATE_H4, count: 1910 },
		{ build: BUILD_PIRATE_H4, count: 1910 }
	]
};
fleets[FLEET_UNKNOWN_153] = {
	name: 'Unknown 153',
	commander: FLEET_COMMANDER_NORA_4,
	stacks: [
		{ build: BUILD_PIRATE_H1, count: 1940 },
		{ build: BUILD_PIRATE_H1, count: 1940 },
		{ build: BUILD_PIRATE_H1, count: 1940 },
		{ build: BUILD_PIRATE_H1, count: 1940 },
		{ build: BUILD_PIRATE_H1, count: 1940 },
		{ build: BUILD_PIRATE_H1, count: 1940 },
		{ build: BUILD_PIRATE_H1, count: 1940 },
		{ build: BUILD_PIRATE_H1, count: 1940 },
		{ build: BUILD_PIRATE_H1, count: 1940 }
	]
};
fleets[FLEET_UNKNOWN_154] = {
	name: 'Unknown 154',
	commander: FLEET_COMMANDER_NORA_4,
	stacks: [
		{ build: BUILD_PIRATE_H2, count: 1940 },
		{ build: BUILD_PIRATE_H2, count: 1940 },
		{ build: BUILD_PIRATE_H2, count: 1940 },
		{ build: BUILD_PIRATE_H2, count: 1940 },
		{ build: BUILD_PIRATE_H2, count: 1940 },
		{ build: BUILD_PIRATE_H2, count: 1940 },
		{ build: BUILD_PIRATE_H2, count: 1940 },
		{ build: BUILD_PIRATE_H2, count: 1940 },
		{ build: BUILD_PIRATE_H2, count: 1940 }
	]
};
fleets[FLEET_UNKNOWN_155] = {
	name: 'Unknown 155',
	commander: FLEET_COMMANDER_MARCUS_4,
	stacks: [
		{ build: BUILD_PIRATE_H3, count: 1940 },
		{ build: BUILD_PIRATE_H3, count: 1940 },
		{ build: BUILD_PIRATE_H3, count: 1940 },
		{ build: BUILD_PIRATE_H3, count: 1940 },
		{ build: BUILD_PIRATE_H3, count: 1940 },
		{ build: BUILD_PIRATE_H3, count: 1940 },
		{ build: BUILD_PIRATE_H3, count: 1940 },
		{ build: BUILD_PIRATE_H3, count: 1940 },
		{ build: BUILD_PIRATE_H3, count: 1940 }
	]
};
fleets[FLEET_UNKNOWN_156] = {
	name: 'Unknown 156',
	commander: FLEET_COMMANDER_MARCUS_4,
	stacks: [
		{ build: BUILD_PIRATE_H4, count: 1940 },
		{ build: BUILD_PIRATE_H4, count: 1940 },
		{ build: BUILD_PIRATE_H4, count: 1940 },
		{ build: BUILD_PIRATE_H4, count: 1940 },
		{ build: BUILD_PIRATE_H4, count: 1940 },
		{ build: BUILD_PIRATE_H4, count: 1940 },
		{ build: BUILD_PIRATE_H4, count: 1940 },
		{ build: BUILD_PIRATE_H4, count: 1940 },
		{ build: BUILD_PIRATE_H4, count: 1940 }
	]
};
fleets[FLEET_UNKNOWN_157] = {
	name: 'Unknown 157',
	commander: FLEET_COMMANDER_MALETIZ_4,
	stacks: [
		{ build: BUILD_PIRATE_H1, count: 1970 },
		{ build: BUILD_PIRATE_H1, count: 1970 },
		{ build: BUILD_PIRATE_H1, count: 1970 },
		{ build: BUILD_PIRATE_H1, count: 1970 },
		{ build: BUILD_PIRATE_H1, count: 1970 },
		{ build: BUILD_PIRATE_H1, count: 1970 },
		{ build: BUILD_PIRATE_H1, count: 1970 },
		{ build: BUILD_PIRATE_H1, count: 1970 },
		{ build: BUILD_PIRATE_H1, count: 1970 }
	]
};
fleets[FLEET_UNKNOWN_158] = {
	name: 'Unknown 158',
	commander: FLEET_COMMANDER_MALETIZ_4,
	stacks: [
		{ build: BUILD_PIRATE_H2, count: 1970 },
		{ build: BUILD_PIRATE_H2, count: 1970 },
		{ build: BUILD_PIRATE_H2, count: 1970 },
		{ build: BUILD_PIRATE_H2, count: 1970 },
		{ build: BUILD_PIRATE_H2, count: 1970 },
		{ build: BUILD_PIRATE_H2, count: 1970 },
		{ build: BUILD_PIRATE_H2, count: 1970 },
		{ build: BUILD_PIRATE_H2, count: 1970 },
		{ build: BUILD_PIRATE_H2, count: 1970 }
	]
};
fleets[FLEET_UNKNOWN_159] = {
	name: 'Unknown 159',
	commander: FLEET_COMMANDER_MALETIZ_4,
	stacks: [
		{ build: BUILD_PIRATE_H3, count: 1970 },
		{ build: BUILD_PIRATE_H3, count: 1970 },
		{ build: BUILD_PIRATE_H3, count: 1970 },
		{ build: BUILD_PIRATE_H3, count: 1970 },
		{ build: BUILD_PIRATE_H3, count: 1970 },
		{ build: BUILD_PIRATE_H3, count: 1970 },
		{ build: BUILD_PIRATE_H3, count: 1970 },
		{ build: BUILD_PIRATE_H3, count: 1970 },
		{ build: BUILD_PIRATE_H3, count: 1970 }
	]
};
fleets[FLEET_UNKNOWN_160] = {
	name: 'Unknown 160',
	commander: FLEET_COMMANDER_MALETIZ_4,
	stacks: [
		{ build: BUILD_PIRATE_H4, count: 1970 },
		{ build: BUILD_PIRATE_H4, count: 1970 },
		{ build: BUILD_PIRATE_H4, count: 1970 },
		{ build: BUILD_PIRATE_H4, count: 1970 },
		{ build: BUILD_PIRATE_H4, count: 1970 },
		{ build: BUILD_PIRATE_H4, count: 1970 },
		{ build: BUILD_PIRATE_H4, count: 1970 },
		{ build: BUILD_PIRATE_H4, count: 1970 },
		{ build: BUILD_PIRATE_H4, count: 1970 }
	]
};
fleets[FLEET_UNKNOWN_161] = {
	name: 'Unknown 161',
	commander: FLEET_COMMANDER_LINDA_5,
	stacks: [
		{ build: BUILD_PIRATE_I1, count: 2000 },
		{ build: BUILD_PIRATE_I1, count: 2000 },
		{ build: BUILD_PIRATE_I1, count: 2000 },
		{ build: BUILD_PIRATE_I1, count: 2000 },
		{ build: BUILD_PIRATE_I1, count: 2000 },
		{ build: BUILD_PIRATE_I1, count: 2000 },
		{ build: BUILD_PIRATE_I1, count: 2000 },
		{ build: BUILD_PIRATE_I1, count: 2000 },
		{ build: BUILD_PIRATE_I1, count: 2000 }
	]
};
fleets[FLEET_UNKNOWN_162] = {
	name: 'Unknown 162',
	commander: FLEET_COMMANDER_ANNA_5,
	stacks: [
		{ build: BUILD_PIRATE_I2, count: 2000 },
		{ build: BUILD_PIRATE_I2, count: 2000 },
		{ build: BUILD_PIRATE_I2, count: 2000 },
		{ build: BUILD_PIRATE_I2, count: 2000 },
		{ build: BUILD_PIRATE_I2, count: 2000 },
		{ build: BUILD_PIRATE_I2, count: 2000 },
		{ build: BUILD_PIRATE_I2, count: 2000 },
		{ build: BUILD_PIRATE_I2, count: 2000 },
		{ build: BUILD_PIRATE_I2, count: 2000 }
	]
};
fleets[FLEET_UNKNOWN_163] = {
	name: 'Unknown 163',
	commander: FLEET_COMMANDER_RINGEL_5,
	stacks: [
		{ build: BUILD_PIRATE_I3, count: 2000 },
		{ build: BUILD_PIRATE_I3, count: 2000 },
		{ build: BUILD_PIRATE_I3, count: 2000 },
		{ build: BUILD_PIRATE_I3, count: 2000 },
		{ build: BUILD_PIRATE_I3, count: 2000 },
		{ build: BUILD_PIRATE_I3, count: 2000 },
		{ build: BUILD_PIRATE_I3, count: 2000 },
		{ build: BUILD_PIRATE_I3, count: 2000 },
		{ build: BUILD_PIRATE_I3, count: 2000 }
	]
};
fleets[FLEET_UNKNOWN_164] = {
	name: 'Unknown 164',
	commander: FLEET_COMMANDER_NICK_5,
	stacks: [
		{ build: BUILD_PIRATE_I4, count: 2000 },
		{ build: BUILD_PIRATE_I4, count: 2000 },
		{ build: BUILD_PIRATE_I4, count: 2000 },
		{ build: BUILD_PIRATE_I4, count: 2000 },
		{ build: BUILD_PIRATE_I4, count: 2000 },
		{ build: BUILD_PIRATE_I4, count: 2000 },
		{ build: BUILD_PIRATE_I4, count: 2000 },
		{ build: BUILD_PIRATE_I4, count: 2000 },
		{ build: BUILD_PIRATE_I4, count: 2000 }
	]
};
fleets[FLEET_UNKNOWN_165] = {
	name: 'Unknown 165',
	commander: FLEET_COMMANDER_ANNATA_5,
	stacks: [
		{ build: BUILD_PIRATE_I1, count: 2030 },
		{ build: BUILD_PIRATE_I1, count: 2030 },
		{ build: BUILD_PIRATE_I1, count: 2030 },
		{ build: BUILD_PIRATE_I1, count: 2030 },
		{ build: BUILD_PIRATE_I1, count: 2030 },
		{ build: BUILD_PIRATE_I1, count: 2030 },
		{ build: BUILD_PIRATE_I1, count: 2030 },
		{ build: BUILD_PIRATE_I1, count: 2030 },
		{ build: BUILD_PIRATE_I1, count: 2030 }
	]
};
fleets[FLEET_UNKNOWN_166] = {
	name: 'Unknown 166',
	commander: FLEET_COMMANDER_ANNATA_5,
	stacks: [
		{ build: BUILD_PIRATE_I2, count: 2030 },
		{ build: BUILD_PIRATE_I2, count: 2030 },
		{ build: BUILD_PIRATE_I2, count: 2030 },
		{ build: BUILD_PIRATE_I2, count: 2030 },
		{ build: BUILD_PIRATE_I2, count: 2030 },
		{ build: BUILD_PIRATE_I2, count: 2030 },
		{ build: BUILD_PIRATE_I2, count: 2030 },
		{ build: BUILD_PIRATE_I2, count: 2030 },
		{ build: BUILD_PIRATE_I2, count: 2030 }
	]
};
fleets[FLEET_UNKNOWN_167] = {
	name: 'Unknown 167',
	commander: FLEET_COMMANDER_ANNATA_5,
	stacks: [
		{ build: BUILD_PIRATE_I3, count: 2030 },
		{ build: BUILD_PIRATE_I3, count: 2030 },
		{ build: BUILD_PIRATE_I3, count: 2030 },
		{ build: BUILD_PIRATE_I3, count: 2030 },
		{ build: BUILD_PIRATE_I3, count: 2030 },
		{ build: BUILD_PIRATE_I3, count: 2030 },
		{ build: BUILD_PIRATE_I3, count: 2030 },
		{ build: BUILD_PIRATE_I3, count: 2030 },
		{ build: BUILD_PIRATE_I3, count: 2030 }
	]
};
fleets[FLEET_UNKNOWN_168] = {
	name: 'Unknown 168',
	commander: FLEET_COMMANDER_ANNATA_5,
	stacks: [
		{ build: BUILD_PIRATE_I4, count: 2030 },
		{ build: BUILD_PIRATE_I4, count: 2030 },
		{ build: BUILD_PIRATE_I4, count: 2030 },
		{ build: BUILD_PIRATE_I4, count: 2030 },
		{ build: BUILD_PIRATE_I4, count: 2030 },
		{ build: BUILD_PIRATE_I4, count: 2030 },
		{ build: BUILD_PIRATE_I4, count: 2030 },
		{ build: BUILD_PIRATE_I4, count: 2030 },
		{ build: BUILD_PIRATE_I4, count: 2030 }
	]
};
fleets[FLEET_UNKNOWN_169] = {
	name: 'Unknown 169',
	commander: FLEET_COMMANDER_GASTAF_5,
	stacks: [
		{ build: BUILD_PIRATE_I1, count: 2060 },
		{ build: BUILD_PIRATE_I1, count: 2060 },
		{ build: BUILD_PIRATE_I1, count: 2060 },
		{ build: BUILD_PIRATE_I1, count: 2060 },
		{ build: BUILD_PIRATE_I1, count: 2060 },
		{ build: BUILD_PIRATE_I1, count: 2060 },
		{ build: BUILD_PIRATE_I1, count: 2060 },
		{ build: BUILD_PIRATE_I1, count: 2060 },
		{ build: BUILD_PIRATE_I1, count: 2060 }
	]
};
fleets[FLEET_UNKNOWN_170] = {
	name: 'Unknown 170',
	commander: FLEET_COMMANDER_GASTAF_5,
	stacks: [
		{ build: BUILD_PIRATE_I2, count: 2060 },
		{ build: BUILD_PIRATE_I2, count: 2060 },
		{ build: BUILD_PIRATE_I2, count: 2060 },
		{ build: BUILD_PIRATE_I2, count: 2060 },
		{ build: BUILD_PIRATE_I2, count: 2060 },
		{ build: BUILD_PIRATE_I2, count: 2060 },
		{ build: BUILD_PIRATE_I2, count: 2060 },
		{ build: BUILD_PIRATE_I2, count: 2060 },
		{ build: BUILD_PIRATE_I2, count: 2060 }
	]
};
fleets[FLEET_UNKNOWN_171] = {
	name: 'Unknown 171',
	commander: FLEET_COMMANDER_GASTAF_5,
	stacks: [
		{ build: BUILD_PIRATE_I3, count: 2060 },
		{ build: BUILD_PIRATE_I3, count: 2060 },
		{ build: BUILD_PIRATE_I3, count: 2060 },
		{ build: BUILD_PIRATE_I3, count: 2060 },
		{ build: BUILD_PIRATE_I3, count: 2060 },
		{ build: BUILD_PIRATE_I3, count: 2060 },
		{ build: BUILD_PIRATE_I3, count: 2060 },
		{ build: BUILD_PIRATE_I3, count: 2060 },
		{ build: BUILD_PIRATE_I3, count: 2060 }
	]
};
fleets[FLEET_UNKNOWN_172] = {
	name: 'Unknown 172',
	commander: FLEET_COMMANDER_GASTAF_5,
	stacks: [
		{ build: BUILD_PIRATE_I4, count: 2060 },
		{ build: BUILD_PIRATE_I4, count: 2060 },
		{ build: BUILD_PIRATE_I4, count: 2060 },
		{ build: BUILD_PIRATE_I4, count: 2060 },
		{ build: BUILD_PIRATE_I4, count: 2060 },
		{ build: BUILD_PIRATE_I4, count: 2060 },
		{ build: BUILD_PIRATE_I4, count: 2060 },
		{ build: BUILD_PIRATE_I4, count: 2060 },
		{ build: BUILD_PIRATE_I4, count: 2060 }
	]
};
fleets[FLEET_UNKNOWN_173] = {
	name: 'Unknown 173',
	commander: FLEET_COMMANDER_EVELINE_5,
	stacks: [
		{ build: BUILD_PIRATE_I1, count: 2090 },
		{ build: BUILD_PIRATE_I1, count: 2090 },
		{ build: BUILD_PIRATE_I1, count: 2090 },
		{ build: BUILD_PIRATE_I1, count: 2090 },
		{ build: BUILD_PIRATE_I1, count: 2090 },
		{ build: BUILD_PIRATE_I1, count: 2090 },
		{ build: BUILD_PIRATE_I1, count: 2090 },
		{ build: BUILD_PIRATE_I1, count: 2090 },
		{ build: BUILD_PIRATE_I1, count: 2090 }
	]
};
fleets[FLEET_UNKNOWN_174] = {
	name: 'Unknown 174',
	commander: FLEET_COMMANDER_EVELINE_5,
	stacks: [
		{ build: BUILD_PIRATE_I2, count: 2090 },
		{ build: BUILD_PIRATE_I2, count: 2090 },
		{ build: BUILD_PIRATE_I2, count: 2090 },
		{ build: BUILD_PIRATE_I2, count: 2090 },
		{ build: BUILD_PIRATE_I2, count: 2090 },
		{ build: BUILD_PIRATE_I2, count: 2090 },
		{ build: BUILD_PIRATE_I2, count: 2090 },
		{ build: BUILD_PIRATE_I2, count: 2090 },
		{ build: BUILD_PIRATE_I2, count: 2090 }
	]
};
fleets[FLEET_UNKNOWN_175] = {
	name: 'Unknown 175',
	commander: FLEET_COMMANDER_EVELINE_5,
	stacks: [
		{ build: BUILD_PIRATE_I3, count: 2090 },
		{ build: BUILD_PIRATE_I3, count: 2090 },
		{ build: BUILD_PIRATE_I3, count: 2090 },
		{ build: BUILD_PIRATE_I3, count: 2090 },
		{ build: BUILD_PIRATE_I3, count: 2090 },
		{ build: BUILD_PIRATE_I3, count: 2090 },
		{ build: BUILD_PIRATE_I3, count: 2090 },
		{ build: BUILD_PIRATE_I3, count: 2090 },
		{ build: BUILD_PIRATE_I3, count: 2090 }
	]
};
fleets[FLEET_UNKNOWN_176] = {
	name: 'Unknown 176',
	commander: FLEET_COMMANDER_EVELINE_5,
	stacks: [
		{ build: BUILD_PIRATE_I4, count: 2090 },
		{ build: BUILD_PIRATE_I4, count: 2090 },
		{ build: BUILD_PIRATE_I4, count: 2090 },
		{ build: BUILD_PIRATE_I4, count: 2090 },
		{ build: BUILD_PIRATE_I4, count: 2090 },
		{ build: BUILD_PIRATE_I4, count: 2090 },
		{ build: BUILD_PIRATE_I4, count: 2090 },
		{ build: BUILD_PIRATE_I4, count: 2090 },
		{ build: BUILD_PIRATE_I4, count: 2090 }
	]
};
fleets[FLEET_UNKNOWN_177] = {
	name: 'Unknown 177',
	commander: FLEET_COMMANDER_PENNI_5,
	stacks: [
		{ build: BUILD_PIRATE_I1, count: 2120 },
		{ build: BUILD_PIRATE_I1, count: 2120 },
		{ build: BUILD_PIRATE_I1, count: 2120 },
		{ build: BUILD_PIRATE_I1, count: 2120 },
		{ build: BUILD_PIRATE_I1, count: 2120 },
		{ build: BUILD_PIRATE_I1, count: 2120 },
		{ build: BUILD_PIRATE_I1, count: 2120 },
		{ build: BUILD_PIRATE_I1, count: 2120 },
		{ build: BUILD_PIRATE_I1, count: 2120 }
	]
};
fleets[FLEET_UNKNOWN_178] = {
	name: 'Unknown 178',
	commander: FLEET_COMMANDER_PENNI_5,
	stacks: [
		{ build: BUILD_PIRATE_I2, count: 2120 },
		{ build: BUILD_PIRATE_I2, count: 2120 },
		{ build: BUILD_PIRATE_I2, count: 2120 },
		{ build: BUILD_PIRATE_I2, count: 2120 },
		{ build: BUILD_PIRATE_I2, count: 2120 },
		{ build: BUILD_PIRATE_I2, count: 2120 },
		{ build: BUILD_PIRATE_I2, count: 2120 },
		{ build: BUILD_PIRATE_I2, count: 2120 },
		{ build: BUILD_PIRATE_I2, count: 2120 }
	]
};
fleets[FLEET_UNKNOWN_179] = {
	name: 'Unknown 179',
	commander: FLEET_COMMANDER_PENNI_5,
	stacks: [
		{ build: BUILD_PIRATE_I3, count: 2120 },
		{ build: BUILD_PIRATE_I3, count: 2120 },
		{ build: BUILD_PIRATE_I3, count: 2120 },
		{ build: BUILD_PIRATE_I3, count: 2120 },
		{ build: BUILD_PIRATE_I3, count: 2120 },
		{ build: BUILD_PIRATE_I3, count: 2120 },
		{ build: BUILD_PIRATE_I3, count: 2120 },
		{ build: BUILD_PIRATE_I3, count: 2120 },
		{ build: BUILD_PIRATE_I3, count: 2120 }
	]
};
fleets[FLEET_UNKNOWN_180] = {
	name: 'Unknown 180',
	commander: FLEET_COMMANDER_PENNI_5,
	stacks: [
		{ build: BUILD_PIRATE_I4, count: 2120 },
		{ build: BUILD_PIRATE_I4, count: 2120 },
		{ build: BUILD_PIRATE_I4, count: 2120 },
		{ build: BUILD_PIRATE_I4, count: 2120 },
		{ build: BUILD_PIRATE_I4, count: 2120 },
		{ build: BUILD_PIRATE_I4, count: 2120 },
		{ build: BUILD_PIRATE_I4, count: 2120 },
		{ build: BUILD_PIRATE_I4, count: 2120 },
		{ build: BUILD_PIRATE_I4, count: 2120 }
	]
};
fleets[FLEET_UNKNOWN_181] = {
	name: 'Unknown 181',
	commander: FLEET_COMMANDER_ANNATA_5,
	stacks: [
		{ build: BUILD_PIRATE_J1, count: 2150 },
		{ build: BUILD_PIRATE_J1, count: 2150 },
		{ build: BUILD_PIRATE_J1, count: 2150 },
		{ build: BUILD_PIRATE_J1, count: 2150 },
		{ build: BUILD_PIRATE_J1, count: 2150 },
		{ build: BUILD_PIRATE_J1, count: 2150 },
		{ build: BUILD_PIRATE_J1, count: 2150 },
		{ build: BUILD_PIRATE_J1, count: 2150 },
		{ build: BUILD_PIRATE_J1, count: 2150 }
	]
};
fleets[FLEET_UNKNOWN_182] = {
	name: 'Unknown 182',
	commander: FLEET_COMMANDER_PENNI_5,
	stacks: [
		{ build: BUILD_PIRATE_J2, count: 2150 },
		{ build: BUILD_PIRATE_J2, count: 2150 },
		{ build: BUILD_PIRATE_J2, count: 2150 },
		{ build: BUILD_PIRATE_J2, count: 2150 },
		{ build: BUILD_PIRATE_J2, count: 2150 },
		{ build: BUILD_PIRATE_J2, count: 2150 },
		{ build: BUILD_PIRATE_J2, count: 2150 },
		{ build: BUILD_PIRATE_J2, count: 2150 },
		{ build: BUILD_PIRATE_J2, count: 2150 }
	]
};
fleets[FLEET_UNKNOWN_183] = {
	name: 'Unknown 183',
	commander: FLEET_COMMANDER_NICK_5,
	stacks: [
		{ build: BUILD_PIRATE_J3, count: 2150 },
		{ build: BUILD_PIRATE_J3, count: 2150 },
		{ build: BUILD_PIRATE_J3, count: 2150 },
		{ build: BUILD_PIRATE_J3, count: 2150 },
		{ build: BUILD_PIRATE_J3, count: 2150 },
		{ build: BUILD_PIRATE_J3, count: 2150 },
		{ build: BUILD_PIRATE_J3, count: 2150 },
		{ build: BUILD_PIRATE_J3, count: 2150 },
		{ build: BUILD_PIRATE_J3, count: 2150 }
	]
};
fleets[FLEET_UNKNOWN_184] = {
	name: 'Unknown 184',
	commander: FLEET_COMMANDER_RINGEL_5,
	stacks: [
		{ build: BUILD_PIRATE_J4, count: 2150 },
		{ build: BUILD_PIRATE_J4, count: 2150 },
		{ build: BUILD_PIRATE_J4, count: 2150 },
		{ build: BUILD_PIRATE_J4, count: 2150 },
		{ build: BUILD_PIRATE_J4, count: 2150 },
		{ build: BUILD_PIRATE_J4, count: 2150 },
		{ build: BUILD_PIRATE_J4, count: 2150 },
		{ build: BUILD_PIRATE_J4, count: 2150 },
		{ build: BUILD_PIRATE_J4, count: 2150 }
	]
};
fleets[FLEET_UNKNOWN_185] = {
	name: 'Unknown 185',
	commander: FLEET_COMMANDER_RAYO_5,
	stacks: [
		{ build: BUILD_PIRATE_J1, count: 2180 },
		{ build: BUILD_PIRATE_J1, count: 2180 },
		{ build: BUILD_PIRATE_J1, count: 2180 },
		{ build: BUILD_PIRATE_J1, count: 2180 },
		{ build: BUILD_PIRATE_J1, count: 2180 },
		{ build: BUILD_PIRATE_J1, count: 2180 },
		{ build: BUILD_PIRATE_J1, count: 2180 },
		{ build: BUILD_PIRATE_J1, count: 2180 },
		{ build: BUILD_PIRATE_J1, count: 2180 }
	]
};
fleets[FLEET_UNKNOWN_186] = {
	name: 'Unknown 186',
	commander: FLEET_COMMANDER_RAYO_5,
	stacks: [
		{ build: BUILD_PIRATE_J2, count: 2180 },
		{ build: BUILD_PIRATE_J2, count: 2180 },
		{ build: BUILD_PIRATE_J2, count: 2180 },
		{ build: BUILD_PIRATE_J2, count: 2180 },
		{ build: BUILD_PIRATE_J2, count: 2180 },
		{ build: BUILD_PIRATE_J2, count: 2180 },
		{ build: BUILD_PIRATE_J2, count: 2180 },
		{ build: BUILD_PIRATE_J2, count: 2180 },
		{ build: BUILD_PIRATE_J2, count: 2180 }
	]
};
fleets[FLEET_UNKNOWN_189] = {
	name: 'Unknown 189',
	commander: FLEET_COMMANDER_AILEEN_5,
	stacks: [
		{ build: BUILD_PIRATE_J1, count: 2210 },
		{ build: BUILD_PIRATE_J1, count: 2210 },
		{ build: BUILD_PIRATE_J1, count: 2210 },
		{ build: BUILD_PIRATE_J1, count: 2210 },
		{ build: BUILD_PIRATE_J1, count: 2210 },
		{ build: BUILD_PIRATE_J1, count: 2210 },
		{ build: BUILD_PIRATE_J1, count: 2210 },
		{ build: BUILD_PIRATE_J1, count: 2210 },
		{ build: BUILD_PIRATE_J1, count: 2210 }
	]
};
fleets[FLEET_UNKNOWN_190] = {
	name: 'Unknown 190',
	commander: FLEET_COMMANDER_AILEEN_5,
	stacks: [
		{ build: BUILD_PIRATE_J2, count: 2210 },
		{ build: BUILD_PIRATE_J2, count: 2210 },
		{ build: BUILD_PIRATE_J2, count: 2210 },
		{ build: BUILD_PIRATE_J2, count: 2210 },
		{ build: BUILD_PIRATE_J2, count: 2210 },
		{ build: BUILD_PIRATE_J2, count: 2210 },
		{ build: BUILD_PIRATE_J2, count: 2210 },
		{ build: BUILD_PIRATE_J2, count: 2210 },
		{ build: BUILD_PIRATE_J2, count: 2210 }
	]
};
fleets[FLEET_UNKNOWN_191] = {
	name: 'Unknown 191',
	commander: FLEET_COMMANDER_AILEEN_5,
	stacks: [
		{ build: BUILD_PIRATE_J3, count: 2210 },
		{ build: BUILD_PIRATE_J3, count: 2210 },
		{ build: BUILD_PIRATE_J3, count: 2210 },
		{ build: BUILD_PIRATE_J3, count: 2210 },
		{ build: BUILD_PIRATE_J3, count: 2210 },
		{ build: BUILD_PIRATE_J3, count: 2210 },
		{ build: BUILD_PIRATE_J3, count: 2210 },
		{ build: BUILD_PIRATE_J3, count: 2210 },
		{ build: BUILD_PIRATE_J3, count: 2210 }
	]
};
fleets[FLEET_UNKNOWN_192] = {
	name: 'Unknown 192',
	commander: FLEET_COMMANDER_STANI_5,
	stacks: [
		{ build: BUILD_PIRATE_J4, count: 2210 },
		{ build: BUILD_PIRATE_J4, count: 2210 },
		{ build: BUILD_PIRATE_J4, count: 2210 },
		{ build: BUILD_PIRATE_J4, count: 2210 },
		{ build: BUILD_PIRATE_J4, count: 2210 },
		{ build: BUILD_PIRATE_J4, count: 2210 },
		{ build: BUILD_PIRATE_J4, count: 2210 },
		{ build: BUILD_PIRATE_J4, count: 2210 },
		{ build: BUILD_PIRATE_J4, count: 2210 }
	]
};
fleets[FLEET_UNKNOWN_193] = {
	name: 'Unknown 193',
	commander: FLEET_COMMANDER_BART_5,
	stacks: [
		{ build: BUILD_PIRATE_J1, count: 2240 },
		{ build: BUILD_PIRATE_J1, count: 2240 },
		{ build: BUILD_PIRATE_J1, count: 2240 },
		{ build: BUILD_PIRATE_J1, count: 2240 },
		{ build: BUILD_PIRATE_J1, count: 2240 },
		{ build: BUILD_PIRATE_J1, count: 2240 },
		{ build: BUILD_PIRATE_J1, count: 2240 },
		{ build: BUILD_PIRATE_J1, count: 2240 },
		{ build: BUILD_PIRATE_J1, count: 2240 }
	]
};
fleets[FLEET_UNKNOWN_194] = {
	name: 'Unknown 194',
	commander: FLEET_COMMANDER_BART_5,
	stacks: [
		{ build: BUILD_PIRATE_J2, count: 2240 },
		{ build: BUILD_PIRATE_J2, count: 2240 },
		{ build: BUILD_PIRATE_J2, count: 2240 },
		{ build: BUILD_PIRATE_J2, count: 2240 },
		{ build: BUILD_PIRATE_J2, count: 2240 },
		{ build: BUILD_PIRATE_J2, count: 2240 },
		{ build: BUILD_PIRATE_J2, count: 2240 },
		{ build: BUILD_PIRATE_J2, count: 2240 },
		{ build: BUILD_PIRATE_J2, count: 2240 }
	]
};
fleets[FLEET_UNKNOWN_195] = {
	name: 'Unknown 195',
	commander: FLEET_COMMANDER_BART_5,
	stacks: [
		{ build: BUILD_PIRATE_J3, count: 2240 },
		{ build: BUILD_PIRATE_J3, count: 2240 },
		{ build: BUILD_PIRATE_J3, count: 2240 },
		{ build: BUILD_PIRATE_J3, count: 2240 },
		{ build: BUILD_PIRATE_J3, count: 2240 },
		{ build: BUILD_PIRATE_J3, count: 2240 },
		{ build: BUILD_PIRATE_J3, count: 2240 },
		{ build: BUILD_PIRATE_J3, count: 2240 },
		{ build: BUILD_PIRATE_J3, count: 2240 }
	]
};
fleets[FLEET_UNKNOWN_196] = {
	name: 'Unknown 196',
	commander: FLEET_COMMANDER_STANI_5,
	stacks: [
		{ build: BUILD_PIRATE_J4, count: 2240 },
		{ build: BUILD_PIRATE_J4, count: 2240 },
		{ build: BUILD_PIRATE_J4, count: 2240 },
		{ build: BUILD_PIRATE_J4, count: 2240 },
		{ build: BUILD_PIRATE_J4, count: 2240 },
		{ build: BUILD_PIRATE_J4, count: 2240 },
		{ build: BUILD_PIRATE_J4, count: 2240 },
		{ build: BUILD_PIRATE_J4, count: 2240 },
		{ build: BUILD_PIRATE_J4, count: 2240 }
	]
};
fleets[FLEET_UNKNOWN_197] = {
	name: 'Unknown 197',
	commander: FLEET_COMMANDER_MARCUS_5,
	stacks: [
		{ build: BUILD_PIRATE_J1, count: 2270 },
		{ build: BUILD_PIRATE_J1, count: 2270 },
		{ build: BUILD_PIRATE_J1, count: 2270 },
		{ build: BUILD_PIRATE_J1, count: 2270 },
		{ build: BUILD_PIRATE_J1, count: 2270 },
		{ build: BUILD_PIRATE_J1, count: 2270 },
		{ build: BUILD_PIRATE_J1, count: 2270 },
		{ build: BUILD_PIRATE_J1, count: 2270 },
		{ build: BUILD_PIRATE_J1, count: 2270 }
	]
};
fleets[FLEET_UNKNOWN_198] = {
	name: 'Unknown 198',
	commander: FLEET_COMMANDER_ROBERT_5,
	stacks: [
		{ build: BUILD_PIRATE_J2, count: 2270 },
		{ build: BUILD_PIRATE_J2, count: 2270 },
		{ build: BUILD_PIRATE_J2, count: 2270 },
		{ build: BUILD_PIRATE_J2, count: 2270 },
		{ build: BUILD_PIRATE_J2, count: 2270 },
		{ build: BUILD_PIRATE_J2, count: 2270 },
		{ build: BUILD_PIRATE_J2, count: 2270 },
		{ build: BUILD_PIRATE_J2, count: 2270 },
		{ build: BUILD_PIRATE_J2, count: 2270 }
	]
};
fleets[FLEET_UNKNOWN_199] = {
	name: 'Unknown 199',
	commander: FLEET_COMMANDER_SANDORA_5,
	stacks: [
		{ build: BUILD_PIRATE_J3, count: 2270 },
		{ build: BUILD_PIRATE_J3, count: 2270 },
		{ build: BUILD_PIRATE_J3, count: 2270 },
		{ build: BUILD_PIRATE_J3, count: 2270 },
		{ build: BUILD_PIRATE_J3, count: 2270 },
		{ build: BUILD_PIRATE_J3, count: 2270 },
		{ build: BUILD_PIRATE_J3, count: 2270 },
		{ build: BUILD_PIRATE_J3, count: 2270 },
		{ build: BUILD_PIRATE_J3, count: 2270 }
	]
};
fleets[FLEET_UNKNOWN_200] = {
	name: 'Unknown 200',
	commander: FLEET_COMMANDER_HELLEN_5,
	stacks: [
		{ build: BUILD_PIRATE_J4, count: 2270 },
		{ build: BUILD_PIRATE_J4, count: 2270 },
		{ build: BUILD_PIRATE_J4, count: 2270 },
		{ build: BUILD_PIRATE_J4, count: 2270 },
		{ build: BUILD_PIRATE_J4, count: 2270 },
		{ build: BUILD_PIRATE_J4, count: 2270 },
		{ build: BUILD_PIRATE_J4, count: 2270 },
		{ build: BUILD_PIRATE_J4, count: 2270 },
		{ build: BUILD_PIRATE_J4, count: 2270 }
	]
};
fleets[FLEET_CAPRICORN_01] = {
	name: 'Capricornus-A',
	commander: FLEET_COMMANDER_IMPENDING_DOOM_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_1, count: 900 },
		{ build: BUILD_CAPRICORNUS_1, count: 900 },
		{ build: BUILD_CAPRICORNUS_1, count: 900 },
		{ build: BUILD_CAPRICORNUS_1, count: 900 },
		{ build: BUILD_CAPRICORNUS_1, count: 900 },
		{ build: BUILD_CAPRICORNUS_1, count: 900 },
		{ build: BUILD_CAPRICORNUS_1, count: 900 },
		{ build: BUILD_CAPRICORNUS_1, count: 900 },
		{ build: BUILD_CAPRICORNUS_1, count: 900 }
	]
};
fleets[FLEET_CAPRICORN_02] = {
	name: 'Capricornus-B',
	commander: FLEET_COMMANDER_IMPENDING_DOOM_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_2, count: 900 },
		{ build: BUILD_CAPRICORNUS_2, count: 900 },
		{ build: BUILD_CAPRICORNUS_2, count: 900 },
		{ build: BUILD_CAPRICORNUS_2, count: 900 },
		{ build: BUILD_CAPRICORNUS_2, count: 900 },
		{ build: BUILD_CAPRICORNUS_2, count: 900 },
		{ build: BUILD_CAPRICORNUS_2, count: 900 },
		{ build: BUILD_CAPRICORNUS_2, count: 900 },
		{ build: BUILD_CAPRICORNUS_2, count: 900 }
	]
};
fleets[FLEET_CAPRICORN_03] = {
	name: 'Capricornus-C',
	commander: FLEET_COMMANDER_IMPENDING_DOOM_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 }
	]
};
fleets[FLEET_CAPRICORN_04] = {
	name: 'Capricornus-D',
	commander: FLEET_COMMANDER_IMPENDING_DOOM_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 }
	]
};
fleets[FLEET_CAPRICORN_05] = {
	name: 'Capricornus-E',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_1, count: 800 },
		{ build: BUILD_CAPRICORNUS_1, count: 800 },
		{ build: BUILD_CAPRICORNUS_1, count: 800 },
		{ build: BUILD_CAPRICORNUS_1, count: 800 },
		{ build: BUILD_CAPRICORNUS_1, count: 800 },
		{ build: BUILD_CAPRICORNUS_1, count: 800 },
		{ build: BUILD_CAPRICORNUS_1, count: 800 },
		{ build: BUILD_CAPRICORNUS_1, count: 800 },
		{ build: BUILD_CAPRICORNUS_1, count: 800 }
	]
};
fleets[FLEET_CAPRICORN_06] = {
	name: 'Capricornus-F',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_2, count: 800 },
		{ build: BUILD_CAPRICORNUS_2, count: 800 },
		{ build: BUILD_CAPRICORNUS_2, count: 800 },
		{ build: BUILD_CAPRICORNUS_2, count: 800 },
		{ build: BUILD_CAPRICORNUS_2, count: 800 },
		{ build: BUILD_CAPRICORNUS_2, count: 800 },
		{ build: BUILD_CAPRICORNUS_2, count: 800 },
		{ build: BUILD_CAPRICORNUS_2, count: 800 },
		{ build: BUILD_CAPRICORNUS_2, count: 800 }
	]
};
fleets[FLEET_CAPRICORN_07] = {
	name: 'Capricornus-G',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3, count: 800 },
		{ build: BUILD_CAPRICORNUS_3, count: 800 },
		{ build: BUILD_CAPRICORNUS_3, count: 800 },
		{ build: BUILD_CAPRICORNUS_3, count: 800 },
		{ build: BUILD_CAPRICORNUS_3, count: 800 },
		{ build: BUILD_CAPRICORNUS_3, count: 800 },
		{ build: BUILD_CAPRICORNUS_3, count: 800 },
		{ build: BUILD_CAPRICORNUS_3, count: 800 },
		{ build: BUILD_CAPRICORNUS_3, count: 800 }
	]
};
fleets[FLEET_CAPRICORN_08] = {
	name: 'Capricornus-H',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_4, count: 800 },
		{ build: BUILD_CAPRICORNUS_4, count: 800 },
		{ build: BUILD_CAPRICORNUS_4, count: 800 },
		{ build: BUILD_CAPRICORNUS_4, count: 800 },
		{ build: BUILD_CAPRICORNUS_4, count: 800 },
		{ build: BUILD_CAPRICORNUS_4, count: 800 },
		{ build: BUILD_CAPRICORNUS_4, count: 800 },
		{ build: BUILD_CAPRICORNUS_4, count: 800 },
		{ build: BUILD_CAPRICORNUS_4, count: 800 }
	]
};
fleets[FLEET_CAPRICORN_09] = {
	name: 'Capricornus-I',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 }
	]
};
fleets[FLEET_CAPRICORN_10] = {
	name: 'Capricornus-J',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 }
	]
};
fleets[FLEET_CAPRICORN_11] = {
	name: 'Capricornus-K',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 }
	]
};
fleets[FLEET_CAPRICORN_12] = {
	name: 'Capricornus-L',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 }
	]
};
fleets[FLEET_CAPRICORN_13] = {
	name: 'Capricornus-M',
	commander: FLEET_COMMANDER_DEADLY_DUO_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 },
		{ build: BUILD_CAPRICORNUS_1, count: 1200 }
	]
};
fleets[FLEET_CAPRICORN_14] = {
	name: 'Capricornus-N',
	commander: FLEET_COMMANDER_DEADLY_DUO_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 },
		{ build: BUILD_CAPRICORNUS_2, count: 1200 }
	]
};
fleets[FLEET_CAPRICORN_15] = {
	name: 'Capricornus-O',
	commander: FLEET_COMMANDER_DEADLY_DUO_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 }
	]
};
fleets[FLEET_CAPRICORN_16] = {
	name: 'Capricornus-P',
	commander: FLEET_COMMANDER_DEADLY_DUO_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 },
		{ build: BUILD_CAPRICORNUS_4, count: 1200 }
	]
};
fleets[FLEET_AQUARIUS_01] = {
	name: 'Capricornus-A1',
	commander: FLEET_COMMANDER_INDOMITABLE_DUO_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5, count: 900 },
		{ build: BUILD_CAPRICORNUS_5, count: 900 },
		{ build: BUILD_CAPRICORNUS_5, count: 900 },
		{ build: BUILD_CAPRICORNUS_5, count: 900 },
		{ build: BUILD_CAPRICORNUS_5, count: 900 },
		{ build: BUILD_CAPRICORNUS_5, count: 900 },
		{ build: BUILD_CAPRICORNUS_5, count: 900 },
		{ build: BUILD_CAPRICORNUS_5, count: 900 },
		{ build: BUILD_CAPRICORNUS_5, count: 900 }
	]
};
fleets[FLEET_AQUARIUS_03] = {
	name: 'Capricornus-A3',
	commander: FLEET_COMMANDER_INDOMITABLE_DUO_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 },
		{ build: BUILD_CAPRICORNUS_3, count: 900 }
	]
};
fleets[FLEET_AQUARIUS_04] = {
	name: 'Capricornus-A4',
	commander: FLEET_COMMANDER_INDOMITABLE_DUO_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 },
		{ build: BUILD_CAPRICORNUS_4, count: 900 }
	]
};
fleets[FLEET_AQUARIUS_05] = {
	name: 'Capricornus-A5',
	commander: FLEET_COMMANDER_FATAL_FURIES_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5, count: 1000 },
		{ build: BUILD_CAPRICORNUS_5, count: 1000 },
		{ build: BUILD_CAPRICORNUS_5, count: 1000 },
		{ build: BUILD_CAPRICORNUS_5, count: 1000 },
		{ build: BUILD_CAPRICORNUS_5, count: 1000 },
		{ build: BUILD_CAPRICORNUS_5, count: 1000 },
		{ build: BUILD_CAPRICORNUS_5, count: 1000 },
		{ build: BUILD_CAPRICORNUS_5, count: 1000 },
		{ build: BUILD_CAPRICORNUS_5, count: 1000 }
	]
};
fleets[FLEET_AQUARIUS_06] = {
	name: 'Capricornus-A6',
	commander: FLEET_COMMANDER_FATAL_FURIES_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_2, count: 1000 },
		{ build: BUILD_CAPRICORNUS_2, count: 1000 },
		{ build: BUILD_CAPRICORNUS_2, count: 1000 },
		{ build: BUILD_CAPRICORNUS_2, count: 1000 },
		{ build: BUILD_CAPRICORNUS_2, count: 1000 },
		{ build: BUILD_CAPRICORNUS_2, count: 1000 },
		{ build: BUILD_CAPRICORNUS_2, count: 1000 },
		{ build: BUILD_CAPRICORNUS_2, count: 1000 },
		{ build: BUILD_CAPRICORNUS_2, count: 1000 }
	]
};
fleets[FLEET_AQUARIUS_07] = {
	name: 'Capricornus-A7',
	commander: FLEET_COMMANDER_FATAL_FURIES_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3, count: 1000 },
		{ build: BUILD_CAPRICORNUS_3, count: 1000 },
		{ build: BUILD_CAPRICORNUS_3, count: 1000 },
		{ build: BUILD_CAPRICORNUS_3, count: 1000 },
		{ build: BUILD_CAPRICORNUS_3, count: 1000 },
		{ build: BUILD_CAPRICORNUS_3, count: 1000 },
		{ build: BUILD_CAPRICORNUS_3, count: 1000 },
		{ build: BUILD_CAPRICORNUS_3, count: 1000 },
		{ build: BUILD_CAPRICORNUS_3, count: 1000 }
	]
};
fleets[FLEET_AQUARIUS_09] = {
	name: 'Capricornus-A9',
	commander: FLEET_COMMANDER_ETERNAL_TERRORS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5, count: 1200 },
		{ build: BUILD_CAPRICORNUS_5, count: 1200 },
		{ build: BUILD_CAPRICORNUS_5, count: 1200 },
		{ build: BUILD_CAPRICORNUS_5, count: 1200 },
		{ build: BUILD_CAPRICORNUS_5, count: 1200 },
		{ build: BUILD_CAPRICORNUS_5, count: 1200 },
		{ build: BUILD_CAPRICORNUS_5, count: 1200 },
		{ build: BUILD_CAPRICORNUS_5, count: 1200 },
		{ build: BUILD_CAPRICORNUS_5, count: 1200 }
	]
};
fleets[FLEET_AQUARIUS_11] = {
	name: 'Capricornus-A11',
	commander: FLEET_COMMANDER_ETERNAL_TERRORS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 },
		{ build: BUILD_CAPRICORNUS_3, count: 1200 }
	]
};
fleets[FLEET_AQUARIUS_13] = {
	name: 'Capricornus-A13',
	commander: FLEET_COMMANDER_KISMET_BEAMS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5, count: 1400 },
		{ build: BUILD_CAPRICORNUS_5, count: 1400 },
		{ build: BUILD_CAPRICORNUS_5, count: 1400 },
		{ build: BUILD_CAPRICORNUS_5, count: 1400 },
		{ build: BUILD_CAPRICORNUS_5, count: 1400 },
		{ build: BUILD_CAPRICORNUS_5, count: 1400 },
		{ build: BUILD_CAPRICORNUS_5, count: 1400 },
		{ build: BUILD_CAPRICORNUS_5, count: 1400 },
		{ build: BUILD_CAPRICORNUS_5, count: 1400 }
	]
};
fleets[FLEET_AQUARIUS_14] = {
	name: 'Capricornus-A14',
	commander: FLEET_COMMANDER_KISMET_BEAMS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_2, count: 1400 },
		{ build: BUILD_CAPRICORNUS_2, count: 1400 },
		{ build: BUILD_CAPRICORNUS_2, count: 1400 },
		{ build: BUILD_CAPRICORNUS_2, count: 1400 },
		{ build: BUILD_CAPRICORNUS_2, count: 1400 },
		{ build: BUILD_CAPRICORNUS_2, count: 1400 },
		{ build: BUILD_CAPRICORNUS_2, count: 1400 },
		{ build: BUILD_CAPRICORNUS_2, count: 1400 },
		{ build: BUILD_CAPRICORNUS_2, count: 1400 }
	]
};
fleets[FLEET_AQUARIUS_15] = {
	name: 'Capricornus-A15',
	commander: FLEET_COMMANDER_KISMET_BEAMS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3, count: 1400 },
		{ build: BUILD_CAPRICORNUS_3, count: 1400 },
		{ build: BUILD_CAPRICORNUS_3, count: 1400 },
		{ build: BUILD_CAPRICORNUS_3, count: 1400 },
		{ build: BUILD_CAPRICORNUS_3, count: 1400 },
		{ build: BUILD_CAPRICORNUS_3, count: 1400 },
		{ build: BUILD_CAPRICORNUS_3, count: 1400 },
		{ build: BUILD_CAPRICORNUS_3, count: 1400 },
		{ build: BUILD_CAPRICORNUS_3, count: 1400 }
	]
};
fleets[FLEET_AQUARIUS_16] = {
	name: 'Capricornus-A16',
	commander: FLEET_COMMANDER_KISMET_BEAMS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_4, count: 1400 },
		{ build: BUILD_CAPRICORNUS_4, count: 1400 },
		{ build: BUILD_CAPRICORNUS_4, count: 1400 },
		{ build: BUILD_CAPRICORNUS_4, count: 1400 },
		{ build: BUILD_CAPRICORNUS_4, count: 1400 },
		{ build: BUILD_CAPRICORNUS_4, count: 1400 },
		{ build: BUILD_CAPRICORNUS_4, count: 1400 },
		{ build: BUILD_CAPRICORNUS_4, count: 1400 },
		{ build: BUILD_CAPRICORNUS_4, count: 1400 }
	]
};
fleets[FLEET_LEO_01] = {
	name: 'Leo-1',
	commander: FLEET_COMMANDER_PERNICIOUS_PRINCES_2,
	stacks: [
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_FLAGSHIP_1, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 }
	]
};
fleets[FLEET_LEO_02] = {
	name: 'Leo-2',
	commander: FLEET_COMMANDER_FEARMONGERS_1,
	stacks: [
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_FLAGSHIP_1, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 }
	]
};
fleets[FLEET_LEO_04] = {
	name: 'Leo-4',
	commander: FLEET_COMMANDER_ENDURING_CHORUS_1,
	stacks: [
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_FLAGSHIP_2, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 }
	]
};
fleets[FLEET_LEO_05] = {
	name: 'Leo-5',
	commander: FLEET_COMMANDER_PERNICIOUS_PRINCES_2,
	stacks: [
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_FLAGSHIP_3, count: 2400 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 }
	]
};
fleets[FLEET_LEO_06] = {
	name: 'Leo-6',
	commander: FLEET_COMMANDER_FEARMONGERS_1,
	stacks: [
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_FLAGSHIP_3, count: 2400 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 }
	]
};
fleets[FLEET_LEO_07] = {
	name: 'Leo-7',
	commander: FLEET_COMMANDER_CARBUNCLE_COHORT_2,
	stacks: [
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_FLAGSHIP_4, count: 2400 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 }
	]
};
fleets[FLEET_LEO_09] = {
	name: 'Leo-9',
	commander: FLEET_COMMANDER_PERNICIOUS_PRINCES_2,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_FLAGSHIP_20, count: 2700 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 }
	]
};
fleets[FLEET_LEO_10] = {
	name: 'Leo-10',
	commander: FLEET_COMMANDER_FEARMONGERS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_FLAGSHIP_15, count: 2700 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 }
	]
};
fleets[FLEET_LEO_11] = {
	name: 'Leo-11',
	commander: FLEET_COMMANDER_CARBUNCLE_COHORT_2,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_FLAGSHIP_5, count: 2700 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 }
	]
};
fleets[FLEET_LEO_12] = {
	name: 'Leo-12',
	commander: FLEET_COMMANDER_ENDURING_CHORUS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_FLAGSHIP_10, count: 2700 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 }
	]
};
fleets[FLEET_LEO_13] = {
	name: 'Leo-13',
	commander: FLEET_COMMANDER_PERNICIOUS_PRINCES_2,
	stacks: [
		{ build: BUILD_CAPRICORNUS_1, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_CAPRICORNUS_1, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1, count: 2700 }
	]
};
fleets[FLEET_LEO_14] = {
	name: 'Leo-14',
	commander: FLEET_COMMANDER_FEARMONGERS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_CAPRICORNUS_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2, count: 2700 }
	]
};
fleets[FLEET_LEO_15] = {
	name: 'Leo-15',
	commander: FLEET_COMMANDER_THE_RAVAGERS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_CAPRICORNUS_3, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3, count: 2700 }
	]
};
fleets[FLEET_LEO_16] = {
	name: 'Leo-16',
	commander: FLEET_COMMANDER_THE_RAVAGERS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_4, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_CAPRICORNUS_4, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4, count: 2700 }
	]
};
fleets[FLEET_VIRGO_01] = {
	name: 'Virgo-1',
	target: TARGET_CLOSEST,
	commander: FLEET_COMMANDER_PERNICIOUS_PRINCES_1,
	stacks: [
		{ build: BUILD_VIRGO_4, count: 2500 },
		{ build: BUILD_VIRGO_4, count: 2500 },
		{ build: BUILD_VIRGO_1, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_4, count: 2500 },
		{ build: BUILD_VIRGO_1, count: 2500 },
		{ build: BUILD_VIRGO_4, count: 2500 },
		{ build: BUILD_VIRGO_4, count: 2500 },
		{ build: BUILD_VIRGO_1, count: 2500 }
	]
};
fleets[FLEET_VIRGO_02] = {
	name: 'Virgo-2',
	target: TARGET_CLOSEST,
	commander: FLEET_COMMANDER_CARBUNCLE_COHORT_1,
	stacks: [
		{ build: BUILD_VIRGO_3, count: 2500 },
		{ build: BUILD_VIRGO_3, count: 2500 },
		{ build: BUILD_VIRGO_1, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_3, count: 2500 },
		{ build: BUILD_VIRGO_1, count: 2500 },
		{ build: BUILD_VIRGO_3, count: 2500 },
		{ build: BUILD_VIRGO_3, count: 2500 },
		{ build: BUILD_VIRGO_1, count: 2500 }
	]
};
fleets[FLEET_VIRGO_03] = {
	name: 'Virgo-3',
	target: TARGET_MAX_ATTACK,
	commander: FLEET_COMMANDER_ENDURING_CHORUS_1,
	stacks: [
		{ build: BUILD_VIRGO_5, count: 2500 },
		{ build: BUILD_VIRGO_5, count: 2500 },
		{ build: BUILD_VIRGO_2, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_5, count: 2500 },
		{ build: BUILD_VIRGO_2, count: 2500 },
		{ build: BUILD_VIRGO_5, count: 2500 },
		{ build: BUILD_VIRGO_5, count: 2500 },
		{ build: BUILD_VIRGO_2, count: 2500 }
	]
};
fleets[FLEET_VIRGO_05] = {
	name: 'Virgo-5',
	target: TARGET_CLOSEST,
	commander: FLEET_COMMANDER_PERNICIOUS_PRINCES_1,
	stacks: [
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_1, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_1, count: 2700 },
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_1, count: 2700 }
	]
};
fleets[FLEET_VIRGO_06] = {
	name: 'Virgo-6',
	target: TARGET_CLOSEST,
	commander: FLEET_COMMANDER_CARBUNCLE_COHORT_1,
	stacks: [
		{ build: BUILD_VIRGO_3, count: 2700 },
		{ build: BUILD_VIRGO_3, count: 2700 },
		{ build: BUILD_VIRGO_1, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_3, count: 2700 },
		{ build: BUILD_VIRGO_1, count: 2700 },
		{ build: BUILD_VIRGO_3, count: 2700 },
		{ build: BUILD_VIRGO_3, count: 2700 },
		{ build: BUILD_VIRGO_1, count: 2700 }
	]
};
fleets[FLEET_VIRGO_07] = {
	name: 'Virgo-7',
	target: TARGET_MAX_ATTACK,
	commander: FLEET_COMMANDER_ENDURING_CHORUS_1,
	stacks: [
		{ build: BUILD_VIRGO_5, count: 2700 },
		{ build: BUILD_VIRGO_5, count: 2700 },
		{ build: BUILD_VIRGO_2, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_5, count: 2700 },
		{ build: BUILD_VIRGO_2, count: 2700 },
		{ build: BUILD_VIRGO_5, count: 2700 },
		{ build: BUILD_VIRGO_5, count: 2700 },
		{ build: BUILD_VIRGO_2, count: 2700 }
	]
};
fleets[FLEET_VIRGO_08] = {
	name: 'Virgo-8',
	target: TARGET_MAX_DURABILITY,
	commander: FLEET_COMMANDER_THE_RAVAGERS_1,
	stacks: [
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_2, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_2, count: 2700 },
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_4, count: 2700 },
		{ build: BUILD_VIRGO_2, count: 2700 }
	]
};
fleets[FLEET_VIRGO_09] = {
	name: 'Virgo-9',
	target: TARGET_CLOSEST,
	commander: FLEET_COMMANDER_PERNICIOUS_PRINCES_1,
	stacks: [
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 }
	]
};
fleets[FLEET_VIRGO_10] = {
	name: 'Virgo-10',
	target: TARGET_CLOSEST,
	commander: FLEET_COMMANDER_CARBUNCLE_COHORT_1,
	stacks: [
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 },
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 }
	]
};
fleets[FLEET_VIRGO_11] = {
	name: 'Virgo-11',
	target: TARGET_MAX_ATTACK,
	commander: FLEET_COMMANDER_ENDURING_CHORUS_1,
	stacks: [
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 },
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 }
	]
};
fleets[FLEET_VIRGO_12] = {
	name: 'Virgo-12',
	target: TARGET_MAX_DURABILITY,
	commander: FLEET_COMMANDER_THE_RAVAGERS_1,
	stacks: [
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 }
	]
};


var
	DIRECTION_DR = 0,
	DIRECTION_UL = 1,
	DIRECTION_DL = 2,
	DIRECTION_UR = 3
;

fleets[FLEET_SAGITARIUS_01] = {
	name: 'Virgo-9',
	target: TARGET_CLOSEST,
	commander: FLEET_COMMANDER_FATAL_FURIES_1,
	direction: DIRECTION_UL,
	stacks: [
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 }
	]
};
fleets[FLEET_SAGITARIUS_02] = {
	name: 'Virgo-10',
	target: TARGET_CLOSEST,
	direction: DIRECTION_UR,
	commander: FLEET_COMMANDER_ETERNAL_TERRORS_1,
	stacks: [
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 },
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_3, count: 2900 },
		{ build: BUILD_VIRGO_1, count: 2900 }
	]
};

fleets[FLEET_SAGITARIUS_03] = {
	name: 'Virgo-11',
	target: TARGET_MAX_ATTACK,
	direction: DIRECTION_DL,
	commander: FLEET_COMMANDER_INDOMITABLE_DUO_1,
	stacks: [
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 },
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_5, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 }
	]
};

fleets[FLEET_SAGITARIUS_04] = {
	name: 'Virgo-12',
	target: TARGET_MAX_DURABILITY,
	direction: DIRECTION_DR,
	commander: FLEET_COMMANDER_LEECH_LURKERS_1,
	stacks: [
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_4, count: 2900 },
		{ build: BUILD_VIRGO_2, count: 2900 }
	]
};
fleets[FLEET_THE_GUARDIANS_01] = {
	name: 'The Guardians-01',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_2,
	stacks: [
		{ build: BUILD_FRIGATE, count: 300 },
		{ build: BUILD_FRIGATE, count: 300 },
		{ build: BUILD_FRIGATE, count: 300 },
		{ build: BUILD_FLAGSHIP_16, count: 300 },
		{ build: BUILD_FRIGATE, count: 300 },
		{ build: BUILD_FRIGATE, count: 300 },
		{ build: BUILD_FRIGATE, count: 300 },
		{ build: BUILD_FRIGATE, count: 300 },
		{ build: BUILD_FRIGATE, count: 300 }
	]
};
fleets[FLEET_THE_GUARDIANS_02] = {
	name: 'The Guardians-02',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_2,
	stacks: [
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_FLAGSHIP_16, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 },
		{ build: BUILD_TRACKER_A, count: 300 }
	]
};
fleets[FLEET_THE_GUARDIANS_03] = {
	name: 'The Guardians-03',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_2,
	stacks: [
		{ build: BUILD_CRUISING, count: 300 },
		{ build: BUILD_CRUISING, count: 300 },
		{ build: BUILD_CRUISING, count: 300 },
		{ build: BUILD_FLAGSHIP_17, count: 300 },
		{ build: BUILD_CRUISING, count: 300 },
		{ build: BUILD_CRUISING, count: 300 },
		{ build: BUILD_CRUISING, count: 300 },
		{ build: BUILD_CRUISING, count: 300 },
		{ build: BUILD_CRUISING, count: 300 }
	]
};
fleets[FLEET_THE_GUARDIANS_04] = {
	name: 'The Guardians-04',
	commander: FLEET_COMMANDER_FATAL_FURIES_3,
	stacks: [
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_FLAGSHIP_17, count: 300 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_TRACKER_B, count: 300 },
		{ build: BUILD_TRACKER_B, count: 300 }
	]
};
fleets[FLEET_THE_GUARDIANS_05] = {
	name: 'The Guardians-05',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_3,
	stacks: [
		{ build: BUILD_REDWOLF, count: 600 },
		{ build: BUILD_REDWOLF, count: 600 },
		{ build: BUILD_REDWOLF, count: 600 },
		{ build: BUILD_FLAGSHIP_17, count: 600 },
		{ build: BUILD_REDWOLF, count: 600 },
		{ build: BUILD_REDWOLF, count: 600 },
		{ build: BUILD_REDWOLF, count: 600 },
		{ build: BUILD_REDWOLF, count: 600 },
		{ build: BUILD_REDWOLF, count: 600 }
	]
};
fleets[FLEET_THE_GUARDIANS_06] = {
	name: 'The Guardians-06',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_3,
	stacks: [
		{ build: BUILD_GHOSTY, count: 600 },
		{ build: BUILD_GHOSTY, count: 600 },
		{ build: BUILD_GHOSTY, count: 600 },
		{ build: BUILD_FLAGSHIP_17, count: 600 },
		{ build: BUILD_GHOSTY, count: 600 },
		{ build: BUILD_GHOSTY, count: 600 },
		{ build: BUILD_GHOSTY, count: 600 },
		{ build: BUILD_GHOSTY, count: 600 },
		{ build: BUILD_GHOSTY, count: 600 }
	]
};
fleets[FLEET_THE_GUARDIANS_07] = {
	name: 'The Guardians-07',
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_3,
	stacks: [
		{ build: BUILD_VORTEX_A, count: 600 },
		{ build: BUILD_VORTEX_A, count: 600 },
		{ build: BUILD_VORTEX_A, count: 600 },
		{ build: BUILD_FLAGSHIP_19, count: 600 },
		{ build: BUILD_VORTEX_A, count: 600 },
		{ build: BUILD_VORTEX_A, count: 600 },
		{ build: BUILD_VORTEX_A, count: 600 },
		{ build: BUILD_VORTEX_A, count: 600 },
		{ build: BUILD_VORTEX_A, count: 600 }
	]
};
fleets[FLEET_THE_GUARDIANS_08] = {
	name: 'The Guardians-08',
	commander: FLEET_COMMANDER_FATAL_FURIES_3,
	stacks: [
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_FLAGSHIP_19, count: 600 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_VORTEX_B, count: 600 },
		{ build: BUILD_VORTEX_B, count: 600 }
	]
};
fleets[FLEET_THE_GUARDIANS_09] = {
	name: 'The Guardians-09',
	commander: FLEET_COMMANDER_FATAL_FURIES_3,
	stacks: [
		{ build: BUILD_ENCRATOS_A, count: 900 },
		{ build: BUILD_ENCRATOS_A, count: 900 },
		{ build: BUILD_ENCRATOS_A, count: 900 },
		{ build: BUILD_FLAGSHIP_7, count: 900 },
		{ build: BUILD_ENCRATOS_A, count: 900 },
		{ build: BUILD_ENCRATOS_A, count: 900 },
		{ build: BUILD_ENCRATOS_A, count: 900 },
		{ build: BUILD_ENCRATOS_A, count: 900 },
		{ build: BUILD_ENCRATOS_A, count: 900 }
	]
};
fleets[FLEET_THE_GUARDIANS_10] = {
	name: 'The Guardians-10',
	commander: FLEET_COMMANDER_FATAL_FURIES_3,
	stacks: [
		{ build: BUILD_CERBERUS, count: 900 },
		{ build: BUILD_CERBERUS, count: 900 },
		{ build: BUILD_CERBERUS, count: 900 },
		{ build: BUILD_FLAGSHIP_7, count: 900 },
		{ build: BUILD_CERBERUS, count: 900 },
		{ build: BUILD_CERBERUS, count: 900 },
		{ build: BUILD_CERBERUS, count: 900 },
		{ build: BUILD_CERBERUS, count: 900 },
		{ build: BUILD_CERBERUS, count: 900 }
	]
};
fleets[FLEET_THE_GUARDIANS_11] = {
	name: 'The Guardians-11',
	commander: FLEET_COMMANDER_FATAL_FURIES_3,
	stacks: [
		{ build: BUILD_PROMETHEUS, count: 900 },
		{ build: BUILD_PROMETHEUS, count: 900 },
		{ build: BUILD_PROMETHEUS, count: 900 },
		{ build: BUILD_FLAGSHIP_8, count: 900 },
		{ build: BUILD_PROMETHEUS, count: 900 },
		{ build: BUILD_PROMETHEUS, count: 900 },
		{ build: BUILD_PROMETHEUS, count: 900 },
		{ build: BUILD_PROMETHEUS, count: 900 },
		{ build: BUILD_PROMETHEUS, count: 900 }
	]
};
fleets[FLEET_THE_GUARDIANS_12] = {
	name: 'The Guardians-12',
	commander: FLEET_COMMANDER_FATAL_FURIES_3,
	stacks: [
		{ build: BUILD_ENCRATOS_B, count: 900 },
		{ build: BUILD_ENCRATOS_B, count: 900 },
		{ build: BUILD_ENCRATOS_B, count: 900 },
		{ build: BUILD_FLAGSHIP_8, count: 900 },
		{ build: BUILD_ENCRATOS_B, count: 900 },
		{ build: BUILD_ENCRATOS_B, count: 900 },
		{ build: BUILD_ENCRATOS_B, count: 900 },
		{ build: BUILD_ENCRATOS_B, count: 900 },
		{ build: BUILD_ENCRATOS_B, count: 900 }
	]
};
fleets[FLEET_THE_GUARDIANS_13] = {
	name: 'The Guardians-13',
	commander: FLEET_COMMANDER_FATAL_FURIES_2,
	stacks: [
		{ build: BUILD_HAWK, count: 1200 },
		{ build: BUILD_HAWK, count: 1200 },
		{ build: BUILD_HAWK, count: 1200 },
		{ build: BUILD_FLAGSHIP_8, count: 1200 },
		{ build: BUILD_HAWK, count: 1200 },
		{ build: BUILD_HAWK, count: 1200 },
		{ build: BUILD_HAWK, count: 1200 },
		{ build: BUILD_HAWK, count: 1200 },
		{ build: BUILD_HAWK, count: 1200 }
	]
};
fleets[FLEET_THE_GUARDIANS_14] = {
	name: 'The Guardians-14',
	commander: FLEET_COMMANDER_FATAL_FURIES_2,
	stacks: [
		{ build: BUILD_NYX_A, count: 1200 },
		{ build: BUILD_NYX_A, count: 1200 },
		{ build: BUILD_NYX_A, count: 1200 },
		{ build: BUILD_FLAGSHIP_8, count: 1200 },
		{ build: BUILD_NYX_A, count: 1200 },
		{ build: BUILD_NYX_A, count: 1200 },
		{ build: BUILD_NYX_A, count: 1200 },
		{ build: BUILD_NYX_A, count: 1200 },
		{ build: BUILD_NYX_A, count: 1200 }
	]
};
fleets[FLEET_THE_GUARDIANS_15] = {
	name: 'The Guardians-15',
	commander: FLEET_COMMANDER_FATAL_FURIES_2,
	stacks: [
		{ build: BUILD_THE_HEAVENLY_START, count: 1200 },
		{ build: BUILD_THE_HEAVENLY_START, count: 1200 },
		{ build: BUILD_THE_HEAVENLY_START, count: 1200 },
		{ build: BUILD_FLAGSHIP_9, count: 1200 },
		{ build: BUILD_THE_HEAVENLY_START, count: 1200 },
		{ build: BUILD_THE_HEAVENLY_START, count: 1200 },
		{ build: BUILD_THE_HEAVENLY_START, count: 1200 },
		{ build: BUILD_THE_HEAVENLY_START, count: 1200 },
		{ build: BUILD_THE_HEAVENLY_START, count: 1200 }
	]
};
fleets[FLEET_THE_GUARDIANS_16] = {
	name: 'The Guardians-16',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_2,
	stacks: [
		{ build: BUILD_NYX_B, count: 1200 },
		{ build: BUILD_NYX_B, count: 1200 },
		{ build: BUILD_NYX_B, count: 1200 },
		{ build: BUILD_FLAGSHIP_9, count: 1200 },
		{ build: BUILD_NYX_B, count: 1200 },
		{ build: BUILD_NYX_B, count: 1200 },
		{ build: BUILD_NYX_B, count: 1200 },
		{ build: BUILD_NYX_B, count: 1200 },
		{ build: BUILD_NYX_B, count: 1200 }
	]
};
fleets[FLEET_THE_GUARDIANS_17] = {
	name: 'The Guardians-17',
	commander: FLEET_COMMANDER_VICTORY_ROAR_3,
	stacks: [
		{ build: BUILD_MAX_A, count: 1500 },
		{ build: BUILD_MAX_A, count: 1500 },
		{ build: BUILD_MAX_A, count: 1500 },
		{ build: BUILD_FLAGSHIP_11, count: 1500 },
		{ build: BUILD_MAX_A, count: 1500 },
		{ build: BUILD_MAX_A, count: 1500 },
		{ build: BUILD_MAX_A, count: 1500 },
		{ build: BUILD_MAX_A, count: 1500 },
		{ build: BUILD_MAX_A, count: 1500 }
	]
};
fleets[FLEET_THE_GUARDIANS_18] = {
	name: 'The Guardians-18',
	commander: FLEET_COMMANDER_VICTORY_ROAR_3,
	stacks: [
		{ build: BUILD_MAX_B, count: 1500 },
		{ build: BUILD_MAX_B, count: 1500 },
		{ build: BUILD_MAX_B, count: 1500 },
		{ build: BUILD_FLAGSHIP_11, count: 1500 },
		{ build: BUILD_MAX_B, count: 1500 },
		{ build: BUILD_MAX_B, count: 1500 },
		{ build: BUILD_MAX_B, count: 1500 },
		{ build: BUILD_MAX_B, count: 1500 },
		{ build: BUILD_MAX_B, count: 1500 }
	]
};
fleets[FLEET_THE_GUARDIANS_19] = {
	name: 'The Guardians-19',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_2,
	stacks: [
		{ build: BUILD_MAX_C, count: 1500 },
		{ build: BUILD_MAX_C, count: 1500 },
		{ build: BUILD_MAX_C, count: 1500 },
		{ build: BUILD_FLAGSHIP_12, count: 1500 },
		{ build: BUILD_MAX_C, count: 1500 },
		{ build: BUILD_MAX_C, count: 1500 },
		{ build: BUILD_MAX_C, count: 1500 },
		{ build: BUILD_MAX_C, count: 1500 },
		{ build: BUILD_MAX_C, count: 1500 }
	]
};
fleets[FLEET_THE_GUARDIANS_20] = {
	name: 'The Guardians-20',
	commander: FLEET_COMMANDER_VICTORY_ROAR_3,
	stacks: [
		{ build: BUILD_MAX_D, count: 1500 },
		{ build: BUILD_MAX_D, count: 1500 },
		{ build: BUILD_MAX_D, count: 1500 },
		{ build: BUILD_FLAGSHIP_12, count: 1500 },
		{ build: BUILD_MAX_D, count: 1500 },
		{ build: BUILD_MAX_D, count: 1500 },
		{ build: BUILD_MAX_D, count: 1500 },
		{ build: BUILD_MAX_D, count: 1500 },
		{ build: BUILD_MAX_D, count: 1500 }
	]
};
fleets[FLEET_THE_GUARDIANS_21] = {
	name: 'The Guardians-21',
	commander: FLEET_COMMANDER_VICTORY_ROAR_1,
	stacks: [
		{ build: BUILD_NEW_A, count: 1800 },
		{ build: BUILD_NEW_A, count: 1800 },
		{ build: BUILD_NEW_A, count: 1800 },
		{ build: BUILD_FLAGSHIP_13, count: 1800 },
		{ build: BUILD_NEW_A, count: 1800 },
		{ build: BUILD_NEW_A, count: 1800 },
		{ build: BUILD_NEW_A, count: 1800 },
		{ build: BUILD_NEW_A, count: 1800 },
		{ build: BUILD_NEW_A, count: 1800 }
	]
};
fleets[FLEET_THE_GUARDIANS_22] = {
	name: 'The Guardians-22',
	commander: FLEET_COMMANDER_FATAL_FURIES_2,
	stacks: [
		{ build: BUILD_NEW_B, count: 1800 },
		{ build: BUILD_NEW_B, count: 1800 },
		{ build: BUILD_NEW_B, count: 1800 },
		{ build: BUILD_FLAGSHIP_13, count: 1800 },
		{ build: BUILD_NEW_B, count: 1800 },
		{ build: BUILD_NEW_B, count: 1800 },
		{ build: BUILD_NEW_B, count: 1800 },
		{ build: BUILD_NEW_B, count: 1800 },
		{ build: BUILD_NEW_B, count: 1800 }
	]
};
fleets[FLEET_THE_GUARDIANS_23] = {
	name: 'The Guardians-23',
	commander: FLEET_COMMANDER_VICTORY_ROAR_1,
	stacks: [
		{ build: BUILD_NEW_C, count: 1800 },
		{ build: BUILD_NEW_C, count: 1800 },
		{ build: BUILD_NEW_C, count: 1800 },
		{ build: BUILD_FLAGSHIP_14, count: 1800 },
		{ build: BUILD_NEW_C, count: 1800 },
		{ build: BUILD_NEW_C, count: 1800 },
		{ build: BUILD_NEW_C, count: 1800 },
		{ build: BUILD_NEW_C, count: 1800 },
		{ build: BUILD_NEW_C, count: 1800 }
	]
};
fleets[FLEET_THE_GUARDIANS_24] = {
	name: 'The Guardians-24',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_2,
	stacks: [
		{ build: BUILD_NEW_D, count: 1800 },
		{ build: BUILD_NEW_D, count: 1800 },
		{ build: BUILD_NEW_D, count: 1800 },
		{ build: BUILD_FLAGSHIP_14, count: 1800 },
		{ build: BUILD_NEW_D, count: 1800 },
		{ build: BUILD_NEW_D, count: 1800 },
		{ build: BUILD_NEW_D, count: 1800 },
		{ build: BUILD_NEW_D, count: 1800 },
		{ build: BUILD_NEW_D, count: 1800 }
	]
};
fleets[FLEET_THE_GUARDIANS_25] = {
	name: 'The Guardians-25',
	commander: FLEET_COMMANDER_VICTORY_ROAR_1,
	stacks: [
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_FLAGSHIP_1, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 },
		{ build: BUILD_NEW_E, count: 2100 }
	]
};
fleets[FLEET_THE_GUARDIANS_26] = {
	name: 'The Guardians-26',
	commander: FLEET_COMMANDER_VICTORY_ROAR_2,
	stacks: [
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_FLAGSHIP_1, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 }
	]
};
fleets[FLEET_THE_GUARDIANS_27] = {
	name: 'The Guardians-27',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_2,
	stacks: [
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_FLAGSHIP_2, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 }
	]
};
fleets[FLEET_THE_GUARDIANS_28] = {
	name: 'The Guardians-28',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_2,
	stacks: [
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_FLAGSHIP_2, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 }
	]
};
fleets[FLEET_THE_GUARDIANS_29] = {
	name: 'The Guardians-29',
	commander: FLEET_COMMANDER_FATAL_FURIES_1,
	stacks: [
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_FLAGSHIP_3, count: 2400 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 }
	]
};
fleets[FLEET_THE_GUARDIANS_30] = {
	name: 'The Guardians-30',
	commander: FLEET_COMMANDER_VICTORY_ROAR_1,
	stacks: [
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_FLAGSHIP_3, count: 2400 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 },
		{ build: BUILD_NEW_J, count: 2300 }
	]
};
fleets[FLEET_THE_GUARDIANS_31] = {
	name: 'The Guardians-31',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_1,
	stacks: [
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_FLAGSHIP_4, count: 2400 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 }
	]
};
fleets[FLEET_THE_GUARDIANS_32] = {
	name: 'The Guardians-32',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_1,
	stacks: [
		{ build: BUILD_NEW_L, count: 2300 },
		{ build: BUILD_NEW_L, count: 2300 },
		{ build: BUILD_NEW_L, count: 2300 },
		{ build: BUILD_FLAGSHIP_4, count: 2400 },
		{ build: BUILD_NEW_L, count: 2300 },
		{ build: BUILD_NEW_L, count: 2300 },
		{ build: BUILD_NEW_L, count: 2300 },
		{ build: BUILD_NEW_L, count: 2300 },
		{ build: BUILD_NEW_L, count: 2300 }
	]
};
fleets[FLEET_THE_GUARDIANS_33] = {
	name: 'The Guardians-33',
	commander: FLEET_COMMANDER_FATAL_FURIES_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_FLAGSHIP_20, count: 2700 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5, count: 2500 }
	]
};
fleets[FLEET_THE_GUARDIANS_34] = {
	name: 'The Guardians-34',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_FLAGSHIP_15, count: 2700 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_2, count: 2500 }
	]
};
fleets[FLEET_THE_GUARDIANS_35] = {
	name: 'The Guardians-35',
	commander: FLEET_COMMANDER_VICTORY_ROAR_2,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_FLAGSHIP_5, count: 2700 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_3, count: 2500 }
	]
};
fleets[FLEET_THE_GUARDIANS_36] = {
	name: 'The Guardians-36',
	target: TARGET_CLOSEST,
	commander: FLEET_COMMANDER_FRONTLINE_SURGE_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_FLAGSHIP_10, count: 2700 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 },
		{ build: BUILD_CAPRICORNUS_5_4, count: 2500 }
	]
};
fleets[FLEET_THE_GUARDIANS_37] = {
	name: 'The Guardians-37',
	commander: FLEET_COMMANDER_FATAL_FURIES_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_1_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1_2, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_CAPRICORNUS_1_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_1_2, count: 2700 }
	]
};
fleets[FLEET_THE_GUARDIANS_38] = {
	name: 'The Guardians-38',
	commander: FLEET_COMMANDER_VICTORY_ROAR_2,
	stacks: [
		{ build: BUILD_CAPRICORNUS_2_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2_2, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_CAPRICORNUS_2_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_2_2, count: 2700 }
	]
};
fleets[FLEET_THE_GUARDIANS_39] = {
	name: 'The Guardians-39',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_3_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3_2, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_CAPRICORNUS_3_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_3_2, count: 2700 }
	]
};
fleets[FLEET_THE_GUARDIANS_40] = {
	name: 'The Guardians-40',
	commander: FLEET_COMMANDER_RAYS_OF_DESTINY_1,
	stacks: [
		{ build: BUILD_CAPRICORNUS_4_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4_2, count: 2700 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_CAPRICORNUS_4_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4_2, count: 2700 },
		{ build: BUILD_CAPRICORNUS_4_2, count: 2700 }
	]
};
fleets[FLEET_KILLER_01] = {
	name: 'Killer-1',
	target: TARGET_MAX_ATTACK,
	commander: FLEET_COMMANDER_ESCHATON_ADVENTISTS_1,
	stacks: [
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_KILLER_02] = {
	name: 'Killer-2',
	target: TARGET_MAX_ATTACK,
	commander: FLEET_COMMANDER_HEKATIAN_WITNESSES_1,
	stacks: [
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_KILLER_03] = {
	name: 'Killer-3',
	target: TARGET_MAX_ATTACK,
	commander: FLEET_COMMANDER_HAND_OF_LELANTOS_1,
	stacks: [
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_PISCES_01] = {
	name: 'The Guardians-25',
	commander: FLEET_COMMANDER_VICTORY_ROAR_1,
	stacks: [
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_FLAGSHIP_1, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 }
	]
};
fleets[FLEET_PISCES_02] = {
	name: 'The Guardians-28',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_2,
	stacks: [
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_FLAGSHIP_2, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 },
		{ build: BUILD_NEW_H, count: 2100 }
	]
};
fleets[FLEET_PISCES_03] = {
	name: 'The Guardians-29',
	commander: FLEET_COMMANDER_FATAL_FURIES_1,
	stacks: [
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_FLAGSHIP_3, count: 2400 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 },
		{ build: BUILD_NEW_I, count: 2300 }
	]
};
fleets[FLEET_PISCES_04] = {
	name: 'The Guardians-26',
	commander: FLEET_COMMANDER_VICTORY_ROAR_2,
	stacks: [
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_FLAGSHIP_1, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 },
		{ build: BUILD_NEW_F, count: 2100 }
	]
};
fleets[FLEET_PISCES_05] = {
	name: 'The Guardians-27',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_2,
	stacks: [
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_FLAGSHIP_2, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 },
		{ build: BUILD_NEW_G, count: 2100 }
	]
};
fleets[FLEET_PISCES_06] = {
	name: 'The Guardians-30',
	commander: FLEET_COMMANDER_VICTORY_ROAR_1,
	stacks: [
		{ build: BUILD_NEW_E, count: 2300 },
		{ build: BUILD_NEW_E, count: 2300 },
		{ build: BUILD_NEW_E, count: 2300 },
		{ build: BUILD_FLAGSHIP_3, count: 2400 },
		{ build: BUILD_NEW_E, count: 2300 },
		{ build: BUILD_NEW_E, count: 2300 },
		{ build: BUILD_NEW_E, count: 2300 },
		{ build: BUILD_NEW_E, count: 2300 },
		{ build: BUILD_NEW_E, count: 2300 }
	]
};
fleets[FLEET_PISCES_07] = {
	name: 'The Guardians-31',
	commander: FLEET_COMMANDER_LIGHT_AND_DARKNESS_1,
	stacks: [
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_FLAGSHIP_4, count: 2400 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 },
		{ build: BUILD_NEW_K, count: 2300 }
	]
};
fleets[FLEET_TAURUS_01] = {
	name: 'Taurus-1',
	commander: FLEET_COMMANDER_ESCHATON_ADVENTISTS_2,
	stacks: [
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_02] = {
	name: 'Taurus-2',
	commander: FLEET_COMMANDER_ESCHATON_ADVENTISTS_2,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_03] = {
	name: 'Taurus-3',
	commander: FLEET_COMMANDER_ESCHATON_ADVENTISTS_2,
	stacks: [
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_04] = {
	name: 'Taurus-4',
	commander: FLEET_COMMANDER_HAND_OF_LELANTOS_2,
	stacks: [
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_05] = {
	name: 'Taurus-5',
	commander: FLEET_COMMANDER_HAND_OF_LELANTOS_2,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_06] = {
	name: 'Taurus-6',
	commander: FLEET_COMMANDER_HAND_OF_LELANTOS_2,
	stacks: [
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_07] = {
	name: 'Taurus-7',
	commander: FLEET_COMMANDER_HEKATIAN_WITNESSES_2,
	stacks: [
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_08] = {
	name: 'Taurus-8',
	commander: FLEET_COMMANDER_HEKATIAN_WITNESSES_2,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_09] = {
	name: 'Taurus-9',
	commander: FLEET_COMMANDER_HEKATIAN_WITNESSES_2,
	stacks: [
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_10] = {
	name: 'Taurus-10',
	commander: FLEET_COMMANDER_ESCHATON_ADVENTISTS_1,
	stacks: [
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_11] = {
	name: 'Taurus-11',
	commander: FLEET_COMMANDER_ESCHATON_ADVENTISTS_1,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_12] = {
	name: 'Taurus-12',
	commander: FLEET_COMMANDER_ESCHATON_ADVENTISTS_1,
	target: TARGET_CLOSEST,
	stacks: [
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_13] = {
	name: 'Taurus-13',
	commander: FLEET_COMMANDER_HAND_OF_LELANTOS_1,
	stacks: [
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_14] = {
	name: 'Taurus-14',
	commander: FLEET_COMMANDER_HAND_OF_LELANTOS_1,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_15] = {
	name: 'Taurus-15',
	commander: FLEET_COMMANDER_HAND_OF_LELANTOS_1,
	stacks: [
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_16] = {
	name: 'Taurus-16',
	commander: FLEET_COMMANDER_HEKATIAN_WITNESSES_1,
	stacks: [
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_2, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_17] = {
	name: 'Taurus-17',
	commander: FLEET_COMMANDER_HEKATIAN_WITNESSES_1,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_3, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_TAURUS_18] = {
	name: 'Taurus-18',
	commander: FLEET_COMMANDER_HEKATIAN_WITNESSES_1,
	stacks: [
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_FLAGSHIP_25, count: 3000 },
		{ build: BUILD_KILLER_1, count: 3000 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_4, count: 2500 },
		{ build: BUILD_KILLER_1, count: 3000 }
	]
};
fleets[FLEET_STAR_1] = {
	name: 'Star-01',
	commander: FLEET_COMMANDER_THE_HEARTLESS_ONES_1,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_1, count: 3000 },
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_4, count: 3000 },
		{ build: BUILD_STAR_1, count: 3000 },
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_1, count: 3000 },
	]
};
fleets[FLEET_STAR_2] = {
	name: 'Star-02',
	commander: FLEET_COMMANDER_HOMERIC_HELLIONS_1,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_STAR_3, count: 3000 },
		{ build: BUILD_STAR_3, count: 3000 },
		{ build: BUILD_STAR_1, count: 3000 },
		{ build: BUILD_STAR_3, count: 3000 },
		{ build: BUILD_STAR_4, count: 3000 },
		{ build: BUILD_STAR_1, count: 3000 },
		{ build: BUILD_STAR_3, count: 3000 },
		{ build: BUILD_STAR_3, count: 3000 },
		{ build: BUILD_STAR_1, count: 3000 },
	]
};
fleets[FLEET_STAR_3] = {
	name: 'Star-03',
	commander: FLEET_COMMANDER_THE_FORSAKEN_1,
	stacks: [
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_1, count: 3000 },
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_4, count: 3000 },
		{ build: BUILD_STAR_1, count: 3000 },
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_2, count: 3000 },
		{ build: BUILD_STAR_1, count: 3000 },
	]
};
fleets[FLEET_STAR_4] = {
	name: 'Star-04',
	commander: FLEET_COMMANDER_THE_PIONEERS_1,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_STAR_5, count: 3000 },
		{ build: BUILD_STAR_5, count: 3000 },
		{ build: BUILD_STAR_10, count: 3000 },
		{ build: BUILD_STAR_5, count: 3000 },
		{ build: BUILD_STAR_5, count: 3000 },
		{ build: BUILD_STAR_10, count: 3000 },
		{ build: BUILD_STAR_5, count: 3000 },
		{ build: BUILD_STAR_5, count: 3000 },
		{ build: BUILD_STAR_10, count: 3000 }
	]
};
fleets[FLEET_STAR_5] = {
	name: 'Star-05',
	commander: FLEET_COMMANDER_TECHNOMANCERS_1,
	target: TARGET_MAX_DURABILITY,
	stacks: [
		{ build: BUILD_STAR_6, count: 3000 },
		{ build: BUILD_STAR_6, count: 3000 },
		{ build: BUILD_STAR_10, count: 3000 },
		{ build: BUILD_STAR_6, count: 3000 },
		{ build: BUILD_STAR_6, count: 3000 },
		{ build: BUILD_STAR_10, count: 3000 },
		{ build: BUILD_STAR_6, count: 3000 },
		{ build: BUILD_STAR_6, count: 3000 },
		{ build: BUILD_STAR_10, count: 3000 }
	]
};
fleets[FLEET_STAR_6] = {
	name: 'Star-06',
	commander: FLEET_COMMANDER_QUEENS_OF_BLADES_1,
	target: TARGET_CLOSEST,
	stacks: [
		{ build: BUILD_STAR_7, count: 3000 },
		{ build: BUILD_STAR_7, count: 3000 },
		{ build: BUILD_STAR_11, count: 3000 },
		{ build: BUILD_STAR_7, count: 3000 },
		{ build: BUILD_STAR_7, count: 3000 },
		{ build: BUILD_STAR_11, count: 3000 },
		{ build: BUILD_STAR_7, count: 3000 },
		{ build: BUILD_STAR_7, count: 3000 },
		{ build: BUILD_STAR_11, count: 3000 }
	]
};
fleets[FLEET_STAR_7] = {
	name: 'Star-07',
	commander: FLEET_COMMANDER_THE_DICTATORS_1,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_STAR_8, count: 3000 },
		{ build: BUILD_STAR_8, count: 3000 },
		{ build: BUILD_STAR_11, count: 3000 },
		{ build: BUILD_STAR_8, count: 3000 },
		{ build: BUILD_STAR_8, count: 3000 },
		{ build: BUILD_STAR_11, count: 3000 },
		{ build: BUILD_STAR_8, count: 3000 },
		{ build: BUILD_STAR_8, count: 3000 },
		{ build: BUILD_STAR_11, count: 3000 }
	]
};
fleets[FLEET_STAR_8] = {
	name: 'Star-08',
	commander: FLEET_COMMANDER_DUNE_ENFORCERS_1,
	target: TARGET_MIN_ATTACK,
	stacks: [
		{ build: BUILD_STAR_9, count: 3000 },
		{ build: BUILD_STAR_9, count: 3000 },
		{ build: BUILD_STAR_12, count: 3000 },
		{ build: BUILD_STAR_9, count: 3000 },
		{ build: BUILD_STAR_9, count: 3000 },
		{ build: BUILD_STAR_12, count: 3000 },
		{ build: BUILD_STAR_9, count: 3000 },
		{ build: BUILD_STAR_9, count: 3000 },
		{ build: BUILD_STAR_12, count: 3000 }
	]
};
fleets[FLEET_STAR_9] = {
	name: 'Star-09',
	commander: FLEET_COMMANDER_SLAYER_BAEL_1,
	target: TARGET_CLOSEST,
	stacks: [
		{ build: BUILD_STAR_7, count: 3000 },
		{ build: BUILD_STAR_5, count: 3000 },
		{ build: BUILD_STAR_14, count: 3000 },
		{ build: BUILD_STAR_7, count: 3000 },
		{ build: BUILD_STAR_5, count: 3000 },
		{ build: BUILD_STAR_14, count: 3000 },
		{ build: BUILD_STAR_7, count: 3000 },
		{ build: BUILD_STAR_5, count: 3000 },
		{ build: BUILD_STAR_14, count: 3000 }
	]
};
fleets[FLEET_STAR_10] = {
	name: 'Star-10',
	commander: FLEET_COMMANDER_LUNA_SILVESTRI_1,
	target: TARGET_MAX_DURABILITY,
	stacks: [
		{ build: BUILD_STAR_8, count: 3000 },
		{ build: BUILD_STAR_6, count: 3000 },
		{ build: BUILD_STAR_13, count: 3000 },
		{ build: BUILD_STAR_8, count: 3000 },
		{ build: BUILD_STAR_6, count: 3000 },
		{ build: BUILD_STAR_13, count: 3000 },
		{ build: BUILD_STAR_8, count: 3000 },
		{ build: BUILD_STAR_6, count: 3000 },
		{ build: BUILD_STAR_13, count: 3000 }
	]
};
fleets[FLEET_STAR_11] = {
	name: 'Star-11',
	commander: FLEET_COMMANDER_LUNA_SILVESTRI_1,
	target: TARGET_MAX_DURABILITY,
	stacks: [
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_18, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_18, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_18, count: 3000 },
	]
};
fleets[FLEET_STAR_12] = {
	name: 'Star-12',
	commander: FLEET_COMMANDER_THE_PIONEERS_1,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_15, count: 3000 },
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_15, count: 3000 },
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_15, count: 3000 },
	]
};
fleets[FLEET_STAR_13] = {
	name: 'Star-13',
	commander: FLEET_COMMANDER_TECHNOMANCERS_1,
	target: TARGET_MAX_DURABILITY,
	stacks: [
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_15, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_15, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_15, count: 3000 },
	]
};
fleets[FLEET_STAR_14] = {
	name: 'Star-14',
	commander: FLEET_COMMANDER_QUEENS_OF_BLADES_1,
	target: TARGET_CLOSEST,
	stacks: [
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_16, count: 3000 },
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_16, count: 3000 },
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_16, count: 3000 },
	]
};
fleets[FLEET_STAR_15] = {
	name: 'Star-15',
	commander: FLEET_COMMANDER_THE_DICTATORS_1,
	target: TARGET_MAX_ATTACK,
	stacks: [
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_16, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_16, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_16, count: 3000 },
	]
};
fleets[FLEET_STAR_16] = {
	name: 'Star-16',
	commander: FLEET_COMMANDER_DUNE_ENFORCERS_1,
	target: TARGET_MIN_ATTACK,
	stacks: [
		{ build: BUILD_STAR_23, count: 3000 },
		{ build: BUILD_STAR_23, count: 3000 },
		{ build: BUILD_STAR_17, count: 3000 },
		{ build: BUILD_STAR_23, count: 3000 },
		{ build: BUILD_STAR_23, count: 3000 },
		{ build: BUILD_STAR_17, count: 3000 },
		{ build: BUILD_STAR_23, count: 3000 },
		{ build: BUILD_STAR_23, count: 3000 },
		{ build: BUILD_STAR_17, count: 3000 },
	]
};
fleets[FLEET_STAR_17] = {
	name: 'Star-17',
	commander: FLEET_COMMANDER_SLAYER_BAEL_1,
	target: TARGET_CLOSEST,
	stacks: [
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_19, count: 3000 },
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_19, count: 3000 },
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_19, count: 3000 },
	]
};


fleets[FLEET_STAR_TEST] = {
	name: 'Star-10',
	commander: FLEET_COMMANDER_LUNA_SILVESTRI_1,
	target: TARGET_MAX_DURABILITY,
	stacks: [
		{ build: BUILD_STAR_15, count: 3000 },
		{ build: BUILD_STAR_16, count: 3000 },
		{ build: BUILD_STAR_17, count: 3000 },
		{ build: BUILD_STAR_18, count: 3000 },
		{ build: BUILD_STAR_19, count: 3000 },
		{ build: BUILD_STAR_20, count: 3000 },
		{ build: BUILD_STAR_21, count: 3000 },
		{ build: BUILD_STAR_22, count: 3000 },
		{ build: BUILD_STAR_23, count: 3000 }
	]
};


/*
     FILE ARCHIVED ON 19:08:18 Nov 16, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:03:38 Jul 22, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 191.513 (3)
  esindex: 0.017
  captures_list: 248.355
  CDXLines.iter: 14.602 (3)
  PetaboxLoader3.datanode: 276.565 (5)
  exclusion.robots: 0.341
  exclusion.robots.policy: 0.319
  RedisCDXSource: 34.904
  PetaboxLoader3.resolve: 141.304 (2)
  load_resource: 319.674
*/