# kata-minesweeper

The goal here is to implement a typescript implementation of the [Minesweeper game](https://birrell.org/andrew/minesweeper/)

## Goal

You should write a program that, given an arbitrary field with mines, outputs the field where each empty space contains the number of mines it is adjacent to.

For example, for a given field: 
```
*...
....
.*..
....
```

The program should output:
```
*100
2210
1*10
1110
```

## Prerequisites

You need typescript and tsd installed:

    npm install typescript -g
    npm install tsd -g

## Running the example

    npm i
    gulp

Gulp will start watching changes to your code and execute the unit tests automatically.

Enjoy.
