# Google Sheets Integration Setup

## Step 1: Create Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the contents of `google-apps-script.js`
4. Save the project (Ctrl+S or Cmd+S)
5. Give it a name like "Contact Form Handler"

## Step 2: Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Click the gear icon next to "Type" and select "Web app"
3. Set the following:
   - **Description**: Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for the contact form

## Step 3: Update Contact Form

1. Open `/src/components/contact/ContactForm.tsx`
2. Find the line: `const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web App URL from Step 2

## Step 4: Test the Integration

1. Save all files
2. Submit a test form on your website
3. Check your Google Sheet for the new entry
4. The sheet will be automatically created with proper headers if it doesn't exist

## Sheet Structure

The Google Sheet will have the following columns:
- Timestamp
- First Name
- Last Name
- Phone
- WhatsApp
- Email
- Enquiry Type
- Additional Info

## Troubleshooting

- If submissions aren't appearing, check the browser console for errors
- Make sure the Web App URL is correct and accessible
- Verify that the Google Apps Script has the necessary permissions
- Check that the sheet name matches "Contact Form Responses"

## Security Notes

- The web app is set to "Anyone" access for public form submissions
- All form data is stored in your Google Sheet
- Consider adding validation or rate limiting if needed
