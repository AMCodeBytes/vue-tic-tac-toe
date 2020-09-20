import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Board from '@/components/Board'

Vue.config.silent = true;

describe('Board', () => {
	it('Reset the board to null with expected data', () => {
		const initBoard = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];

		const testBoard = [
			['X', 'O', 'O'],
			['X', 'X', 'O'],
			['O', 'X', 'X']
		];

		const wrapper = shallowMount(Board, {
			propsData: {
				testBoard
			}
		});

		wrapper.vm.boardLayout = testBoard;
		wrapper.vm.resetBoard();

		expect(wrapper.vm.boardLayout).toEqual(initBoard);
	});

	it('Reset the board to null with invalid data', () => {
		const initBoard = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];

		const testBoard = [
			['x', 1, 'o'],
			['X', true, '0'],
			['This is mess up', false, {help: 'test'}]
		];

		const wrapper = shallowMount(Board, {
			propsData: {
				testBoard
			}
		});

		wrapper.vm.boardLayout = testBoard;
		wrapper.vm.resetBoard();

		expect(wrapper.vm.boardLayout).toEqual(initBoard);
	});

	it('Check diagonal win using expected data', () => {
		const testBoard = [
			['X', 'O', 'O'],
			['X', 'X', 'O'],
			['O', 'X', 'X']
		];

		const wrapper = shallowMount(Board, {
			propsData: {
				testBoard
			}
		});

		wrapper.vm.boardLayout = testBoard;

		expect(wrapper.vm.winCheck()).toBeTruthy();
	});

	it('Check row win using expected data', () => {
		const testBoard = [
			['X', 'O', 'O'],
			['X', 'X', 'X'],
			['O', 'X', 'O']
		];

		const wrapper = shallowMount(Board, {
			propsData: {
				testBoard
			}
		});

		wrapper.vm.boardLayout = testBoard;

		expect(wrapper.vm.winCheck()).toBeTruthy();
	});

	it('Check column win using expected data', () => {
		const testBoard = [
			['X', 'X', 'O'],
			['O', 'X', 'X'],
			['O', 'X', 'O']
		];

		const wrapper = shallowMount(Board, {
			propsData: {
				testBoard
			}
		});

		wrapper.vm.boardLayout = testBoard;

		expect(wrapper.vm.winCheck()).toBeTruthy();
	});

	it('Test win check for a draw', () => {
		const testBoard = [
			['X', 'O', 'X'],
			['X', 'O', 'X'],
			['O', 'X', 'O']
		];

		const wrapper = shallowMount(Board, {
			propsData: {
				testBoard
			}
		});

		wrapper.vm.boardLayout = testBoard;

		expect(wrapper.vm.winCheck()).toBeFalsy();
	});
});
