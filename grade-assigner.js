
function assignGrade(score){
            if (score > 90){
    return 'A';
    } else if (score > 80){
        return 'B';
    } else if (score > 70){
        return 'C';
    } else if (score > 65){
        return 'D';
    } else {
        return 'E';
    }
 for (var i =80; i <= 100; i++){
console.log('For scoring' + i  + ',you get a' + assignGrade(i));
 }
}
 assignGrade(90);