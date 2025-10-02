// Google Apps Script code for contact form integration
// Copy this code into your Google Apps Script project

function doPost(e) {
  try {
    // Get the active spreadsheet (create one if it doesn't exist)
    const sheet = getOrCreateSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Map enquiry type values to full names
    const enquiryTypeMap = {
      'order': 'Make an order',
      'assembly': 'Assembly/Disassembly',
      'rental': 'Rental Quote',
      'distributor': 'Distributor Inquiry',
      'maintenance': 'Furniture Maintenance',
      'general': 'General Enquiries'
    };
    
    const enquiryTypeFullName = enquiryTypeMap[data.enquiryType] || data.enquiryType || '';
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toLocaleString(),
      data.firstName || '',
      data.lastName || '',
      data.phone || '',
      data.whatsapp || '',
      data.email || '',
      enquiryTypeFullName,
      data.additionalInfo || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  // Replace 'Contact Form Responses' with your desired sheet name
  const sheetName = 'Contact Form Responses';
  
  // Try to get the active spreadsheet
  let spreadsheet;
  try {
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  } catch (e) {
    // If no active spreadsheet, create a new one
    spreadsheet = SpreadsheetApp.create('Contact Form Responses');
  }
  
  // Try to get the sheet by name
  let sheet = spreadsheet.getSheetByName(sheetName);
  
  if (!sheet) {
    // Create the sheet if it doesn't exist
    sheet = spreadsheet.insertSheet(sheetName);
    
    // Add headers
    const headers = [
      'Timestamp',
      'First Name',
      'Last Name',
      'Phone',
      'WhatsApp',
      'Email',
      'Enquiry Type',
      'Additional Info'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#f0f0f0');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
  }
  
  return sheet;
}

// Test function to verify the setup
function testFunction() {
  const testData = {
    timestamp: new Date().toLocaleString(),
    firstName: 'Test',
    lastName: 'User',
    phone: '+1234567890',
    whatsapp: '+1234567890',
    email: 'test@example.com',
    enquiryType: 'general',
    additionalInfo: 'This is a test submission'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}


