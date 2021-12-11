/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { Center, useGLTF } from '@react-three/drei';

const SimpleModel = ({ ...props }) => {
	const group = useRef();
	const { nodes, materials } = useGLTF('/house-model.glb');
	return (
		<Center>
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.windows.geometry}
				material={nodes.windows.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			/>
			<mesh geometry={nodes.roof.geometry} material={nodes.roof.material} scale={0.01} />
			<mesh
				geometry={nodes.room_2.geometry}
				material={nodes.room_2.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			>
				<mesh
					geometry={nodes.chair_formation_circle001.geometry}
					material={nodes.chair_formation_circle001.material}
					position={[-718.56, 101.64, -169.61]}
					rotation={[-Math.PI / 2, 0, Math.PI]}
					scale={0.9}
				/>
				<mesh
					geometry={nodes.chair_formation_shuffle001.geometry}
					material={nodes.chair_formation_shuffle001.material}
					position={[-632.55, 101.64, -166.29]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={[0.9, 0.9, 0.9]}
				/>
				<mesh
					geometry={nodes.chair_formation_square001.geometry}
					material={nodes.chair_formation_square001.material}
					position={[-677.8, 101.64, -140.07]}
					rotation={[-Math.PI / 2, 0, -Math.PI]}
					scale={0.9}
				/>
			</mesh>
			<mesh
				geometry={nodes.room_4.geometry}
				material={nodes.room_4.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			>
				<mesh
					geometry={nodes.chair_formation_shuffle002.geometry}
					material={nodes.chair_formation_shuffle002.material}
					position={[-239.8, 101.64, 223.15]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={0.77}
				/>
				<mesh
					geometry={nodes.chair_formation_square002.geometry}
					material={nodes.chair_formation_square002.material}
					position={[-272.8, 101.64, 246.25]}
					rotation={[-Math.PI / 2, 0, -Math.PI]}
					scale={0.77}
				/>
			</mesh>
			<mesh
				geometry={nodes.room_5.geometry}
				material={nodes.room_5.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.room_3.geometry}
				material={nodes.room_3.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.room_6.geometry}
				material={nodes.room_6.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.walls.geometry}
				material={nodes.walls.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.doors.geometry}
				material={nodes.doors.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.entry.geometry}
				material={nodes.entry.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.room_1.geometry}
				material={nodes.room_1.material}
				position={[0.08, 0.08, 0.04]}
				scale={0.01}
			>
				<mesh
					geometry={nodes.chair_formation_circle.geometry}
					material={nodes.chair_formation_circle.material}
					position={[-591.99, 101.64, 452.57]}
					rotation={[-Math.PI / 2, 0, Math.PI]}
					scale={0.79}
				/>
				<mesh
					geometry={nodes.chair_formation_square.geometry}
					material={nodes.chair_formation_square.material}
					position={[-637.93, 101.64, 520.98]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}
					scale={[0.79, 0.79, 0.79]}
				/>
				<mesh
					geometry={nodes.equipment_podium002.geometry}
					material={materials['Material.018']}
					position={[-628.54, 89.68, 731.01]}
					rotation={[-1.51, 0, 0]}
					scale={1.16}
				/>
				<mesh
					geometry={nodes.equipment_stage.geometry}
					material={materials.lambert2}
					position={[-694.09, 102.02, 315.05]}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={5.51}
					
				/>
			</mesh>
		</group>
		</Center>
	);
};

export default SimpleModel;

useGLTF.preload('/house-model.glb');