'use strict';

import { expect } from 'chai';
import Grid from '../src/Grid';

describe("Minesweeper Kata", () => {

    describe("Given we create a grid", () => {
        it("Should initialize a grid with 1 row and 1 column", () => {
            let grid: Grid = new Grid(1, 1);
            expect(grid.cellCount).to.be.eq(1);
            expect(grid.cellAt(0, 0)).to.be.eq(".");
        });
        it("Should initialize a grid with 2 row and 2 column", () => {
            let grid: Grid = new Grid(2, 2);

            expect(grid.cellCount).to.be.eq(4);
            for (let r = 0; r < 2; r++) {
                for (let c = 0; c < 2; c++) {
                    expect(grid.cellAt(r, c)).to.be.eq(".");
                }
            }
        });
    });
    describe("Given a grid", () => {
        it("Should update the grid when adding a  mine", () => {
            let grid: Grid = new Grid(1, 1);
            grid.addMine(0, 0);
            expect(grid.cellAt(0, 0)).to.be.eq("*");
        });
    });

    describe("Given 2 adjacent cells", () => {
        let grid: Grid;
        beforeEach(function() {
            grid = new Grid(1, 2);
        });
        it("Should return 0 the other cell is not mined", () => {
            expect(grid.cellMines(0, 0)).to.be.eq(0);
        })
        it("Should return 1 the other cell is mined", () => {
            grid.addMine(0, 1);
            expect(grid.cellMines(0, 0)).to.be.eq(1);
        })
    })
    // describe("Given a cell with neighbours ", () => {

    //     it("Should return 0 if no mine on adjacent cells", () => {
    //        expect(true).to.be.eq(true);
    //     })
    //     it("Should return 8 if mines every adjacent cells", () => {
    //        expect(true).to.be.eq(true);
    //     })
    // })
});
