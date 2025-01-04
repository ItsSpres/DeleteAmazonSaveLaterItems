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
