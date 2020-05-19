function gorUpdater() {
  
  var ss = SpreadsheetApp.openById("1jYv5VzmQIHE572kRBmLouLXMCBddzGyy4ydWGehzLWQ"); //Handicap Group A
  var sheets = ss.getSheets();
  
  for(i = 2; i <= 45; i++) {
    
    var str = "D" + String(i);
    
    var pin = sheets[2].getRange(str).getValue();
  
    var url = "https://www.europeangodatabase.eu/EGD/GetPlayerDataByPIN.php?pin=" + pin;
  
    var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  
    var json = response.getContentText();
    var list = JSON.parse(json);
    
    str2 = "O" + String(i);
  
    sheets[2].getRange(str2).setValue(list.Gor);
    
  }
  
  var ss = SpreadsheetApp.openById("1neFq-utdwVBPwfE9BKVxiAiORw8ablCKBQb3nuVfOtM"); //Handicap Group B
  var sheets = ss.getSheets();
  
  for(i = 2; i <= 45; i++) {
    
    var str = "D" + String(i);
    
    var pin = sheets[2].getRange(str).getValue();
  
    var url = "https://www.europeangodatabase.eu/EGD/GetPlayerDataByPIN.php?pin=" + pin;
  
    var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  
    var json = response.getContentText();
    var list = JSON.parse(json);
    
    str2 = "O" + String(i);
  
    sheets[2].getRange(str2).setValue(list.Gor);
    
  }
  
  var ss = SpreadsheetApp.openById("1J9s0tq8MKPOckoaJCU9oUgu6TyHuI_a-ydgtQEEt_QQ"); //Group A
  var sheets = ss.getSheets();
  
  for(i = 2; i <= 53; i++) {
    
    var str = "D" + String(i);
    
    var pin = sheets[2].getRange(str).getValue();
  
    var url = "https://www.europeangodatabase.eu/EGD/GetPlayerDataByPIN.php?pin=" + pin;
  
    var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  
    var json = response.getContentText();
    var list = JSON.parse(json);
    
    str2 = "O" + String(i);
  
    sheets[2].getRange(str2).setValue(list.Gor);
    
  }
  
  var ss = SpreadsheetApp.openById("1zLHxxP20goVDXN39FHGihQDdXcsbZbToVJLDJwwqMvU"); //Group B
  var sheets = ss.getSheets();
  
  for(i = 2; i <= 53; i++) {
    
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
