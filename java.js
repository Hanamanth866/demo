function doPost(e) {
  const sheet = SpreadsheetApp
    .openById("YOUR_SHEET_ID")
    .getSheetByName("Sheet1");

  const d = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    d.orderId,
    d.name,
    d.phone,
    d.type,
    d.items,
    d.total
  ]);

  return ContentService.createTextOutput("OK");
}
