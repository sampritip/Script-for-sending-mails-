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
