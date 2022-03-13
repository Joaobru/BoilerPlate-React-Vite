import create from 'zustand';

type User = {
	name: string;
	age: number;
};

export const useUserData = create<User>(() => ({
	name: 'João',
	age: 18,
}));
