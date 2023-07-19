var arr=[1,2,22,13,12,55,3,4,45,54];

document.write("The Given Number:"+arr);
document.write("<br>");
document.write("The two digit Number is:"+"<br>");
for(let i=0;i<arr.length;i++)
{
	if((arr[i]>=10)&&(arr[i]<=99))
	{
		document.write(arr[i]+"<br>");
		
	}
}