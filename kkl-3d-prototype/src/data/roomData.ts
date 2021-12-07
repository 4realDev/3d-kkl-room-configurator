import * as THREE from 'three';
import { camHeightOffset } from '../store/useCameraStore';
// npm install three

export type RoomItemsList = {
	model: {
		meshName: string;
		camPos: THREE.Vector3;
		camTarget: THREE.Vector3;
		camAngle: number;
	};
	info: {
		id: number;
		title: string;
		seats: number;
		area: number;
		height: number;
		chairFormations?: string[];
		equipment?: string[];
		fittings: {
			hasBuffet: boolean;
			hasService: boolean;
			hasDrinks: boolean;
			hasInvalid: boolean;
			hasSeats: boolean;
		};
	};
};

export type RoomModelsList = {
	meshName: string;
	camPos: THREE.Vector3;
	camTarget: THREE.Vector3;
	camAngle: number;
};

export type RoomInfosList = {
	id: number;
	title: string;
	seats: number;
	area: number;
	height: number;
	chairFormations?: string[];
	equipment?: string[];
	fittings: {
		hasBuffet: boolean;
		hasService: boolean;
		hasDrinks: boolean;
		hasInvalid: boolean;
		hasSeats: boolean;
	};
};

export const CHAIR_FORMATION = {
	shuffle: 'chair_formation_shuffle',
	square: 'chair_formation_square',
	circle: 'chair_formation_circle',
};

export const EQUIPMENT = {
	stage: 'equipment_stage',
	podium: 'equipment_podium',
};

export const ROOM_ADDITIONS_CATEGORY = {
	chairFormation: 'chair_formation',
	equipment: 'equipment',
};

export const roomList = [
	{
		model: {
			meshName: 'room_1',
			camPos: new THREE.Vector3(-3.8, -0.5 + camHeightOffset, 2),
			camTarget: new THREE.Vector3(-3.8, -0.5, 2),
			camAngle: 0,
		},
		info: {
			id: 1,
			title: 'LUZERNER SAAL',
			seats: 1989,
			area: 760,
			height: 12,
			chairFormations: [CHAIR_FORMATION.square, CHAIR_FORMATION.circle],
			equipment: [EQUIPMENT.stage, EQUIPMENT.podium],
			fittings: {
				hasBuffet: false,
				hasService: true,
				hasDrinks: false,
				hasInvalid: true,
				hasSeats: true,
			},
		},
	},
	{
		model: {
			meshName: 'room_2',
			camPos: new THREE.Vector3(-3.8, -0.5 + camHeightOffset, -4),
			camTarget: new THREE.Vector3(-3.8, -0.5, -4),
			camAngle: 90,
		},
		info: {
			id: 2,
			title: 'KONZERTSAAL',
			seats: 1989,
			area: 760,
			height: 12,
			fittings: {
				hasBuffet: true,
				hasService: false,
				hasDrinks: false,
				hasInvalid: true,
				hasSeats: false,
			},
		},
	},
	{
		model: {
			meshName: 'room_3',
			camPos: new THREE.Vector3(0.4, -0.5 + camHeightOffset, 4),
			camTarget: new THREE.Vector3(0.4, -0.5, 4),
			camAngle: 0,
		},
		info: {
			id: 3,
			title: 'AUDITORIUM',
			seats: 1989,
			area: 760,
			height: 12,
			chairFormations: [CHAIR_FORMATION.shuffle, CHAIR_FORMATION.square, CHAIR_FORMATION.circle],
			fittings: {
				hasBuffet: true,
				hasService: true,
				hasDrinks: true,
				hasInvalid: true,
				hasSeats: true,
			},
		},
	},
	{
		model: {
			meshName: 'room_4',
			camPos: new THREE.Vector3(0.4, -0.5 + camHeightOffset, 0),
			camTarget: new THREE.Vector3(0.4, -0.5, 0),
			camAngle: 90,
		},
		info: {
			id: 4,
			title: 'BREAKOUT ROOM 1',
			seats: 1989,
			area: 760,
			height: 12,
			fittings: {
				hasBuffet: false,
				hasService: false,
				hasDrinks: true,
				hasInvalid: true,
				hasSeats: false,
			},
		},
	},
	{
		model: {
			meshName: 'room_5',
			camPos: new THREE.Vector3(0.4, -0.5 + camHeightOffset, -4),
			camTarget: new THREE.Vector3(0.4, -0.5, -4),
			camAngle: 180,
		},
		info: {
			id: 5,
			title: 'BREAKOUT ROOM 2',
			seats: 1989,
			area: 760,
			height: 12,
			chairFormations: [CHAIR_FORMATION.shuffle, CHAIR_FORMATION.square],
			fittings: {
				hasBuffet: true,
				hasService: true,
				hasDrinks: false,
				hasInvalid: true,
				hasSeats: true,
			},
		},
	},
	{
		model: {
			meshName: 'room_6',
			camPos: new THREE.Vector3(3.9, -0.5 + camHeightOffset, -4),
			camTarget: new THREE.Vector3(3.9, -0.5, -4),
			camAngle: 90,
		},
		info: {
			id: 6,
			title: 'BREAKOUT ROOM 3',
			seats: 1989,
			area: 760,
			height: 12,
			fittings: {
				hasBuffet: true,
				hasService: false,
				hasDrinks: true,
				hasInvalid: false,
				hasSeats: true,
			},
		},
	},
];

export const roomModelList = roomList.map((room) => room.model);
export const roomInfoList = roomList.map((room) => room.info);
