function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

    var UnsignedIntOut = UnsignedInt;
    var sizeNumber = UnsignedInt.length;
    var baseTen = 0;

    if (UnsignedIntBaseFrom != 10)
    {
      for (var k=sizeNumber-1; k>=0; k--)
      {
        var val = parseInt(UnsignedInt.charAt(k));
        baseTen = (baseTen*UnsignedIntBaseFrom+val);
        UnsignedInt = UnsignedInt.substring(0,k);
      }
      //baseTen = baseTen + UnsignedInt;
    }
    else {
      baseTen = UnsignedInt;
    }

    var outputValue = 0;
    var remainder = 0;

    if (UnsignedIntBaseTo!=10)
    {
      while (baseTen>0)
      {
        remainder = baseTen%UnsignedIntBaseTo;
        baseTen = (baseTen-remainder)/UnsignedIntBaseTo;
        outputValue = (outputValue*10+remainder);
      }
    }
    else
    {
      outputValue = baseTen;
    }
  // Show the output on the screen
  FormatAndShowOutput([UnsignedIntOut, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
