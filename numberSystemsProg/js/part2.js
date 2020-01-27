function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);

    var baseTen = SignedDecimalInt;

    var outputValue = 0;
    var remainder = 0;
    var baseTwo = "";

    //Base Ten to Base Two
    while (baseTen>0)
    {
      remainder = baseTen%2;
      baseTen = Math.floor((baseTen-remainder)/2);
      baseTwo = (remainder+baseTwo);
    }

    //Making 32 Bits
    while (baseTwo.length != 32)
    {
      baseTwo="0"+baseTwo;
    }
    outputValue=baseTwo;
    console.log(baseTwo);

    //Flip All
    var k=0;
    for (k=0; k<baseTwo.length; k++)
    {
      if (baseTwo.charAt(k)=="0")
      {
        baseTwo=baseTwo.substring (0,k)+"1"+baseTwo.substring(k+1,33);
      }
      else if (baseTwo.charAt(k)=="1")
      {
        baseTwo=baseTwo.substring (0,k)+"0"+baseTwo.substring(k+1,33);
      }
    }
    k=0;

    console.log(baseTwo);
    //Adding 1 at the right most.
    var i = 0;
    for (i=31; i>=0; i--)
    {
      if (baseTwo.charAt(i)=="1")
      {
        baseTwo=baseTwo.substring (0,i)+"0"+baseTwo.substring(i+1,33);
      }
      else if(baseTwo.charAt(i)=="0")
      {
        baseTwo=baseTwo.substring (0,i)+"1"+baseTwo.substring(i+1,33);
        break;
      }
    }

    var outputValueTwosComplement = baseTwo;

    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
