var a = +prompt("Kvadrat tomoni uzunligini kiriting")
while(isNaN(a) || a==0){
    a = +prompt("Xato! Qaytadan urinib, son kiriting")
}

let square = ""
for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {
        if(i==j || (i%2==1 && j==0) || (i%2==0 && j==0) || (i%2==1 && j==a-1) || (i%2==0 && j==a-1) || (i==0 && j%2==0) || (i==0 && j%2==1) || (i==a-1 && j%2==0) || (i==a-1 && j%2==1)){
            square = square + "🌸"
            
        } 
        else{
            square = square + "◻️"
        }
        
    }
    
    console.log(square);
    square = ""
    
    
    
}
