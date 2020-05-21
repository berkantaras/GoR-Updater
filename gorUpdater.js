// below code was found on StackOverflow and modified to suit
// this function replaces formulas with values so that older submitted values
// will not be changed with new updates
function makeValuesConstant(sourceSheet,strSource) {
  var source = sourceSheet.getRange(strSource);
  source.copyTo(sourceSheet.getRange(strSource), {contentsOnly: true});
}

// below code was found on StackOverflow and modified to suit
// this function allows to determine the limit of our list for the makeValuesConstant call
function getLastDataRow(sheet) {
  var lastRow = sheet.getRange('G:G').getLastRow();
  var range = sheet.getRange('G' + lastRow);
  if (range.getValue() !== "") {
    return lastRow;
  } else {
    return range.getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
  }              
}

// below code was first written by Berkant Aras and later modified to suit.
function gorUpdater(ssID) {
  var ss = SpreadsheetApp.openById(ssID); //Enter the spreadsheet id number here
//  var ss = SpreadsheetApp.getActiveSpreadsheet(); //This could work too if we have triggers for all the spreadsheets.
  var sheets = ss.getSheets();
  var iMax = sheets[2].getLastRow(); //since the data is contigous and there are no gaps this sets our limit.
// make values from formulas constant to keep records in line with history  
  var sourceSheet = ss.getSheetByName('Sonuçlar');
  var rMax = getLastDataRow(sourceSheet);
  var strSource1 = 'e2:f' + String(rMax);
  var strSource2 = 'h2:i' + String(rMax);
  makeValuesConstant(sourceSheet,strSource1);
  makeValuesConstant(sourceSheet,strSource2);    
  
  for(i = 2; i <= iMax; i++) { //53 for the Go League, 45 for the Handicap Go League - deprecated, number is now iMax
    
    var str = "D" + String(i);
    
    var pin = sheets[2].getRange(str).getValue();
  
    var url = "https://www.europeangodatabase.eu/EGD/GetPlayerDataByPIN.php?pin=" + pin;
  
    var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  
    var json = response.getContentText();
    var list = JSON.parse(json);
    
    var str2 = "O" + String(i);
    var str3 = "P" + String(i);
  
    sheets[2].getRange(str3).setValue(list.Gor);
    sheets[2].getRange(str2).setValue(list.Grade.replace(/k/g, " Kyu").replace(/d/g, " Dan")); //formating EGD values to human readable
    
  }
}

// this is the main function to run, makes sure all the files are updated.
function doGorUpdate(){
  var spreadsheetList = [
    "1jYv5VzmQIHE572kRBmLouLXMCBddzGyy4ydWGehzLWQ", //Handicap Group A
    "1neFq-utdwVBPwfE9BKVxiAiORw8ablCKBQb3nuVfOtM", //Handicap Group B
    "1J9s0tq8MKPOckoaJCU9oUgu6TyHuI_a-ydgtQEEt_QQ", //Group A
    "1zLHxxP20goVDXN39FHGihQDdXcsbZbToVJLDJwwqMvU" //Group B
  ];
  for(k=0; k<=spreadsheetList.length; k++){
    gorUpdater(spreadsheetList[k]);
  }
}
// this is now the main function
function onEdit(e){
  // Set a comment on the edited cell to indicate when it was changed.
  var range = e.range;
  if (range.getSheet().getName() == 'FormAT' && range.getA1Notation() == 'K1' && range.isChecked()){
    doGorUpdate();
    range.setNote('Last modified: ' + new Date());
    range.uncheck();
  }
}
