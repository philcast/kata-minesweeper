const EMPTY_CELL: string = ".";
const MINED_CELL: string = "*";

export default class Grid {
    private cells: string[][] = [];

    constructor(public rows: number, public cols: number) {
        for (let r = 0; r < rows; r++) {
            this.cells[r] = [];
            for (let c = 0; c < cols; c++) {
                this.cells[r][c] = EMPTY_CELL;
            }
        }
    }
    
    public size(): number {
        return this.rows * this.cols;
    }

    public hasMineAt(row: number, col: number): boolean {
        return this.cells[row][col] === MINED_CELL;
    }
    
    public addMineAt(row: number, col: number): Grid {
        this.cells[row][col] = MINED_CELL;
        return this;
    }
    
    public countAdjacentMinesAt(row: number, col: number): number {
        let count = 0;
        let minRow: number = (row > 0) ? row - 1 : row;
        let maxRow: number = (row < this.cells.length-1) ? row + 1 : row;
        let minCol: number = (col > 0) ? col - 1 : col;
        let maxCol: number = (col  < this.cells[0].length-1) ? col + 1 : col;
        
        for (let r = minRow; r <= maxRow; r++) {
            for (let c = minCol; c <= maxCol; c++) {
                if (this.hasMineAt(r, c) && (c !== col || r !== row)) {
                    count++;
                }
            }
        }
        return count;
    }

    public formatAdjacentMineCounts(): string[] {
        let resultLines: string[] = [];
        for (let r = 0; r < this.cells.length; r++) {
            let line: string = "";
            for (let c = 0; c < this.cells[r].length; c++) {
                line += (this.hasMineAt(r, c) ? MINED_CELL : this.countAdjacentMinesAt(r, c).toString());
            }
            resultLines.push(line);
        }
        return resultLines;
    }
}