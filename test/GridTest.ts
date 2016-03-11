'use strict';

import { expect } from 'chai';
import Grid from '../src/Grid';

describe("Minesweeper Kata", () => {

    describe("Given we create a grid", () => {
        it("Should initialize a grid with 1 row and 1 column", () => {
            let grid: Grid = new Grid(1, 1);
            expect(grid.size()).to.be.eq(1);
            expect(grid.hasMineAt(0, 0)).to.be.eq(false);
        });
        it("Should initialize a grid with 2 row and 2 column", () => {
            let grid: Grid = new Grid(2, 2);

            expect(grid.size()).to.be.eq(4);
            for (let r = 0; r < 2; r++) {
                for (let c = 0; c < 2; c++) {
                    expect(grid.hasMineAt(r, c)).to.be.eq(false);
                }
            }
        });
    });
    describe("Given a grid", () => {
        it("Should update the grid when adding a  mine", () => {
            let grid: Grid = new Grid(1, 1);
            grid.addMineAt(0, 0);
            expect(grid.hasMineAt(0, 0)).to.be.eq(true);
        });
    });
    describe("Given 2 adjacent cells", () => {
        let grid: Grid;
        beforeEach(function() {
            grid = new Grid(1, 2);
        });
        it("Should return 0 if the other cell is not mined", () => {
            expect(grid.countAdjacentMinesAt(0, 0)).to.be.eq(0);
        });
        it("Should return 1 if the other cell is mined", () => {
            grid.addMineAt(0, 1);
            expect(grid.countAdjacentMinesAt(0, 0)).to.be.eq(1);
        });
    });
    describe("Given a cell with other adjacent cells", () => {
        let grid: Grid;
        beforeEach(function() {
            grid = new Grid(3, 3);
        });
        it("Should return 0 if no mine on adjacent cells", () => {
            expect(grid.countAdjacentMinesAt(1, 1)).to.be.eq(0);
        });
        it("Should return 8 if mines on every adjacent cells", () => {
            grid.addMineAt(0, 0).addMineAt(0, 1).addMineAt(0, 2)
                .addMineAt(1, 0).addMineAt(1, 2)
                .addMineAt(2, 0).addMineAt(2, 1).addMineAt(2, 2);
            expect(grid.countAdjacentMinesAt(1, 1)).to.be.eq(8);
        });
    });
    
    describe("Given a 4 rows 4 columns grid", () => {
        let grid: Grid;
        beforeEach(function() {
            grid = new Grid(4, 4);
        });
        it("Should compute cells counts for 2 mines at (0,0) and (2,1)", () => {
            grid.addMineAt(0, 0).addMineAt(2, 1);
            
            let formatedAdjacentMineCounts: string[] = grid.formatAdjacentMineCounts();
            
            expect(formatedAdjacentMineCounts[0]).to.be.eq("*100");
            expect(formatedAdjacentMineCounts[1]).to.be.eq("2210");
            expect(formatedAdjacentMineCounts[2]).to.be.eq("1*10");
            expect(formatedAdjacentMineCounts[3]).to.be.eq("1110");
        });
    });
});
