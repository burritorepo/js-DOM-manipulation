var number = function () {
    let array1 = [[10, 0], [3, 5], [5, 8]];
    let array2 = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]];
    let array3 = [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]];
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;


    for (let i = 0; i < array1.length; i++) {

        for (let x = 0; x < array1[i].length; x++) {
            if (x == 100) {
                break;
            }
            if (x == 0) {
                a += array1[i][x];

            }
            else if (x == 1) {
                b += array1[i][x];

            }
        }

    }
    for (let i = 0; i < array2.length; i++) {

        for (let x = 0; x < array2[i].length; x++) {
            if (x == 100) {
                break;
            }
            if (x == 0) {
                c += array2[i][x];

            }
            else if (x == 1) {
                d += array2[i][x];

            }
        }

    }
    for (let i = 0; i < array3.length; i++) {
    }

    return a-b, c-d, e-f;
}

number();