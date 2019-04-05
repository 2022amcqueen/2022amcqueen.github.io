function summation(start, stop, f) {
    let x = 0;
    
    for (let i = start; i < stop; i++) {
        let y = f(i); 
        
        x += y; 
    }
    
    return x; 
}

function bbpFormula(digit) {
    let pi = summation(0, digit, function(i) {
        ((1 / (16^i)) * ((4 / ((8 * i) + 1)) - (2 / ((8 * i) + 4)) - (1 / ((8 * i) + 5)) - (1 / ((8 * i) + 6)))); 
    }); 
    
    alert(pi); 
}

bbpFormula(100); 
