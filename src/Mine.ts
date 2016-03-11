export class Minesweeper {
  private rows:number;
  private columns:number;
  private grid:string[];

  constructor(rows:number, columns:number) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];
    var size = rows * columns;
    for (var i = 0; i < size; i++) {
      this.grid[i] = '.';
    }
  }

  getMinesAround(row:number, column:number):string {
    var result = 0;

    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        var mineCase = this.getCase(row + j, column + i);
        if (mineCase == '*') {
          result++;
        }
      }
    }

    return '' + result;
  }

  putMine(row:number, column:number):void {
    this.grid[this.columns * row + column] = '*';
  }

  getCase(row:number, column:number):string {
    if (row < 0 || column < 0 || row >= this.rows || column >= this.columns) {
      return '';
    }

    return this.grid[this.columns * row + column];
  }

  initGrid():void {
    for (var i = 0; i < this.columns; i++) {
      for (var j = 0; j < this.rows; j++) {
        var idx = this.columns * i + j;
        if (this.grid[idx] != '*') {
          this.grid[idx] = this.getMinesAround(i, j);
        }
      }
    }
  }
}
