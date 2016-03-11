'use strict';

import { expect } from 'chai';
import { Minesweeper } from '../src/Mine';

describe('Minesweeper', () => {
  it('should return 0 if no mines are around', () => {
    var minesweeper = new Minesweeper(5, 5);

    var result = minesweeper.getMinesAround(1, 1);
    expect(result).to.be.equal('0');
  });

  it('should be able to contain a mine', () => {
    var minesweeper = new Minesweeper(5, 5);

    minesweeper.putMine(0, 0);
    expect(minesweeper.getCase(0, 0)).to.be.equal('*');
  });

  it('should be able to be empty', () => {
    var minesweeper = new Minesweeper(5, 5);
    expect(minesweeper.getCase(0, 0)).to.be.equal('.');
  });

  it('should be in contact with 1 mine', () => {
    var minesweeper = new Minesweeper(5, 5);
    minesweeper.putMine(2, 2);
    minesweeper.initGrid();
    expect(minesweeper.getCase(1, 2)).to.be.equal('1');
    expect(minesweeper.getCase(1, 1)).to.be.equal('1');
    expect(minesweeper.getCase(1, 3)).to.be.equal('1');
    expect(minesweeper.getCase(2, 1)).to.be.equal('1');
    expect(minesweeper.getCase(2, 3)).to.be.equal('1');
    expect(minesweeper.getCase(3, 1)).to.be.equal('1');
    expect(minesweeper.getCase(3, 2)).to.be.equal('1');
    expect(minesweeper.getCase(3, 3)).to.be.equal('1');
  });

  it('should be in contact with 2 mine', () => {
    var minesweeper = new Minesweeper(5, 5);
    minesweeper.putMine(2, 2);
    minesweeper.putMine(2, 4);
    minesweeper.initGrid();
    expect(minesweeper.getCase(1, 3)).to.be.equal('2');
  });
});
