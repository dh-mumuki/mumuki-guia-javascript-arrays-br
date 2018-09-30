var personas = ["mara", "julian"];

function arraysIguais (unArray, otroArray) {
if (unArray.length! = otroArray.length)
    return false;
for (var i = 0; i <unArray.length; i ++) {
    if (unArray [i] instanceOf Array && otroArray [i] instanceOf Array) {
        if (! arraysIguais (unArray [i], otroArray [i]))
          return false;
    }
    else if (unArray [i]! = otroArray [i])
      return false;
}
return true;
}

