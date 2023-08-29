function canMove(piece, startPos, targetPos) {
    const startCol = startPos[0].charCodeAt(0) - 'A'.charCodeAt(0);
    const startRow = parseInt(startPos[1]) - 1;
    const targetCol = targetPos[0].charCodeAt(0) - 'A'.charCodeAt(0);
    const targetRow = parseInt(targetPos[1]) - 1;

    const dx = Math.abs(targetCol - startCol);
    const dy = Math.abs(targetRow - startRow);

    if (piece === "Rook") {
        return startCol === targetCol || startRow === targetRow;
    } else if (piece === "Bishop") {
        return dx === dy;
    } else if (piece === "Queen") {
        return startCol === targetCol || startRow === targetRow || dx === dy;
    }

    return false; // กรณีอื่น ๆ ที่ไม่รองรับชนิดของชิ้นหมาย
}

console.log(canMove("Rook", "A8", "H8")); // true
console.log(canMove("Bishop", "A7", "G1")); // true
console.log(canMove("Queen", "C4", "D6")); // false

