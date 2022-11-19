var arr=[[1,2,3],
        [4,5,6],
        [7,8,9]];

var row=[];
sumr=0;
for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length;j++)
    {
        sumr=sumr+arr[i][j]
    }
    row.push(sumr);
    sumr=0;
    //console.log(row);
}
console.log(row);

var column=[];
var sumc=0;
for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length;j++)
    {
        //console.log(arr[j][i]);
        sumc=sumc+arr[j][i];
    }
    column.push(sumc);
    sumc=0;
}
console.log(column);

for(i=0;i<row.length;i++)
{
    if(row[i]==column[i])
    {
        console.log('same');
    }
    else
    {
        console.log('not');
    }
}
