console.log("Inserting CRNs")

checkChangeTab();

insertCRNs();

checkPreferences();



//addToSummary(); // addCRNbutton


function insertCRNs() {
  var tempCRNs = tempCRNs || [];

  chrome.storage.sync.get("CRNs", ({ CRNs }) => {
      tempCRNs = [];
      for (i = 0; i < CRNs.length; i++) {
        tempCRNs.push(CRNs[i]);
      }

      try {

        numInputs = 0;

        for (i = 1; i<99; i++) {
          if (document.getElementById('txt_crn' + i) == null)
            break;
          numInputs++;
        }

        //console.log(tempCRNs.length)
        //console.log(numInputs)

        for (i = 0; i < tempCRNs.length - numInputs; i++) {
          document.getElementById('addAnotherCRN').click();
        }

        //console.log("HELLO")

        for (i = 1; i <= tempCRNs.length; i++) {
          //console.log(document.getElementById('txt_crn' + i).value)
          document.getElementById('txt_crn' + i).value = tempCRNs[i-1]
        }

      } catch (error) {

      }

  });
}

function delay(time) {
  //console.log("Trying to delay")
  return new Promise(resolve => setTimeout(resolve, time));
}


function doAsync1() {
  //console.log('Inside Async AAAAA');
  setTimeout(() => {
    //console.log('Async 1 complete');
    //console.log(document.getElementById('saveButton').className)
    //console.log("Pending classes", document.getElementsByClassName('odd schedule-class-pending').length)
    if (document.getElementsByClassName('odd schedule-class-pending').length == 0 || document.getElementById('saveButton').className === "primary-button disabled") {
      //odd schedule-class-pending
      //console.log("Not fast enough")
      doAsync1();
    }
    else {
      document.getElementById('saveButton').click();
    }

  }, 100);
}

function checkPreferences() {
  //console.log("Checking Preferences")
  chrome.storage.sync.get("preferences", ({ preferences }) => {

    // enterCRNs-tab switchToEnterCRNsTabCheckBox
    if (preferences['switchToEnterCRNsTabCheckBox']) {
      document.getElementById('enterCRNs-tab').click();
    }

    document.getElementById('conditionalAddDrop').checked = preferences['conditionalAddAndDropCheckBox'];

    if (preferences['addToSummaryCheckBox']) {
      document.getElementById('addCRNbutton').click();


    }

    //delay(1000).then(() => console.log('ran after 1 second1 passed'));

    //saveButton
    if (preferences['submitCheckBox']) { // Classes will only be submit
      //delay(1000).then(() => document.getElementById('saveButton').click());
      doAsync1()
      //console.log("Is this before")
    }

  });
}



function checkChangeTab() {
  chrome.storage.sync.get("preferences", ({ preferences }) => {

    // enterCRNs-tab switchToEnterCRNsTabCheckBox
    if (preferences['switchToEnterCRNsTabCheckBox']) {
      document.getElementById('enterCRNs-tab').click();
    }

  });
}
