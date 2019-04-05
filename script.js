function summation(start, stop, f) {
    let x = 0;
    
    for (let i = start; i < stop; i++) {
        let y = f(i);
        
        x += y;
    }
    
    return x;
}

function bbpFormula(digit) {
    let pi = summation(0, digit, function(x) {
        let a = (1 / 16^x);
        let b = (4 / ((8 * x) + 1));
        let c = (2 / ((8 * x) + 4));
        let d = (1 / ((8 * x) + 5));
        let e = (1 / ((8 * x) + 6));
        
        let approx = a * (b - c - d - e);
        
        return approx; 
    }); 
    
    alert(pi);
}

bbpFormula(100);
