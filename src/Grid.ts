const EMPTY_CELL: string = ".";
const MINED_CELL: string = "*";

export default class Grid {
    public cells: string[][] = [];
    public cellCount:number;

    constructor(rows: number, cols: number) {
        for (let r = 0; r < rows; r++) {
            this.cells[r] = [];
            for (let c = 0; c < cols; c++) {
                this.cells[r][c] = EMPTY_CELL;
            }
        }
        this.cellCount = rows * cols;
    }

    public cellAt(row:number, col:number): string {
        return this.cells[row][col];
    }
    
    public addMine(row:number, col:number): Grid {
        this.cells[row][col] = MINED_CELL;
        return this;
    }
    
    public cellMines(row:number, col:number): number {
        let count = 0;
        let minRow:number = (row > 0) ? row - 1 : row;
        let maxRow:number = (row < this.cells.length-1) ? row + 1 : row;
        let minCol:number = (col > 0) ? col - 1 : col;
        let maxCol:number = (col  < this.cells[0].length-1) ? col + 1 : col;
        
        for (let r=minRow; r<=maxRow; r++) {
            for (let c=minCol; c<=maxCol; c++) {
                if (this.cellAt(r, c) === MINED_CELL && (c !== col || r !== row)) {
                    count++;
                }
            }
        }
        return count;
    }

    
}