function RemoveSubString(str)
{
 return str.slice(1,str.length-1)
 
}

//First Test
var checkstring='Javascript';
console.log('String after Removal:'+' '+RemoveSubString(checkstring));

//Second Test
var checkstring2='FullStack';
console.log('String after Removal:'+' '+RemoveSubString(checkstring2));