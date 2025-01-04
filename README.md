# Amazon Saved Items Remover

This JavaScript script automates the removal of all "Saved for Later" items on Amazon's cart page. It iterates through each visible item, clicking the "Delete" button until no items remain.  

---

## Features
- Automatically removes all visible "Saved for Later" items from the Amazon cart page.
- Waits for the page to update after each item removal to ensure consistency.
- Provides a log in the console to track progress.

---

## Instructions

### Using the Script on Desktop
1. **Open the Amazon Cart Page**:
   - Log in to your Amazon account and navigate to your cart page.
   - Ensure the "Saved for Later" section is visible.

2. **Scroll Down**:
   - Scroll through the page to load all "Saved for Later" items. The script only works on items currently visible.

3. **Open the Developer Console**:
   - On **Windows/Linux**: Press `Ctrl + Shift + J` in Chrome or Edge.
   - On **Mac**: Press `Cmd + Opt + J`.

4. **Paste the Script**:
   - Copy the script below and paste it into the developer console:
     ```javascript
     async function deleteSavedItems() {
         while (true) {
             const deleteButtons = document.querySelectorAll("#sc-saved-cart input[value=Delete]");
             
             if (deleteButtons.length === 0) {
                 console.log("No more items to delete. Finished!");
                 break;
             }

             // Click the first delete button
             deleteButtons[0].click();

             console.log("Deleted an item. Remaining items:", deleteButtons.length - 1);

             // Wait for the page to update before proceeding
             await new Promise(resolve => setTimeout(resolve, 1000));
         }
     }

     deleteSavedItems();
     ```

5. **Execute the Script**:
   - Press **Enter**. The script will begin removing items one by one, logging progress in the console.

6. **Repeat if Necessary**:
   - If not all items were visible initially, scroll further down and re-run the script to remove additional items.

---

### Using the Script on iPhone

To execute the script on an iPhone, you'll need the [**Web Inspector** app](https://apps.apple.com/us/app/web-inspector/id1584825745) to access the command console within Safari.

#### Steps:
1. **Install the Web Inspector App**:
   - Download and install [Web Inspector](https://apps.apple.com/us/app/web-inspector/id1584825745) from the App Store.

2. **Open the Amazon Cart Page**:
   - In Safari, log in to Amazon and navigate to your cart.

3. **Scroll to Load All Items**:
   - Scroll through the page to load all "Saved for Later" items.

4. **Launch Web Inspector**:
   - Open the Web Inspector app and connect it to the Safari session.

5. **Execute the Script**:
   - In the app's command console, paste the script and execute it:
     ```javascript
     async function deleteSavedItems() {
         while (true) {
             const deleteButtons = document.querySelectorAll("#sc-saved-cart input[value=Delete]");
             
             if (deleteButtons.length === 0) {
                 console.log("No more items to delete. Finished!");
                 break;
             }

             // Click the first delete button
             deleteButtons[0].click();

             console.log("Deleted an item. Remaining items:", deleteButtons.length - 1);

             // Wait for the page to update before proceeding
             await new Promise(resolve => setTimeout(resolve, 1000));
         }
     }

     deleteSavedItems();
     ```

6. **Monitor Progress**:
   - The app will run the script, and you can monitor its progress in the console.

---

## Troubleshooting
- If the script stops working partway:
  - Scroll further down to load more items.
  - Re-run the script.
- If you encounter any errors, try increasing the delay in the script (`setTimeout`) to account for slower page updates.

---

## Disclaimer
This script is intended for personal use to help manage your Amazon cart efficiently. Use responsibly, and ensure you understand the effects of deleting items from your "Saved for Later" list.

--- 
