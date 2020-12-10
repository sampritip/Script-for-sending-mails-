//https://docs.google.com/spreadsheets/d/1uczNVcEgl7_A6BZ9DIareW1oaqjjibxBJsWbFzHd4Uk/edit#gid=0
//1. open excel sheet in your browser
//2. Save the data in the format as in the sample excel sheet
//3. go to tools -> Script Editor -> and copy-paste this script
//4. Run.
//5. edit the script according to your needs

function myFunction() {
  var sheet = SpreadsheetApp.getActive();
  var address;
  var email;
  var map;
  var i;
  for(i=1 ; i<= sheet.getLastRow() ; i++)
  {
    email = sheet.getSheetValues(i, 1, 1, 1);
    address = sheet.getSheetValues(i, 2, 1, 1);
    map = Maps.newStaticMap().addMarker(address);
    GmailApp.sendEmail(email,'SUBJECT','BODY',{attachments: [map]});
  }
  
}
