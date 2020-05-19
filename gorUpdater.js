function createAndSendDocument() {
  
  var ss = SpreadsheetApp.openById("1zLHxxP20goVDXN39FHGihQDdXcsbZbToVJLDJwwqMvU"); //Enter the spreadsheet id number here
  var sheets = ss.getSheets();
  
  for(i = 2; i <= 53; i++) { //53 for the Go League, 45 for the Handicap Go League
    
    var str = "D" + String(i);
    
    var pin = sheets[2].getRange(str).getValue();
  
    var url = "https://www.europeangodatabase.eu/EGD/GetPlayerDataByPIN.php?pin=" + pin;
  
    var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  
    var json = response.getContentText();
    var list = JSON.parse(json);
    
    str2 = "O" + String(i);
  
    sheets[2].getRange(str2).setValue(list.Gor);
    
  }
  
}
