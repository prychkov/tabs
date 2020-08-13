Usage
In the variable "tabs" you should specify tabs-class.<br>
In the variable "parentTabs" you should specify parent-tabs-class.<br>
In the variable "tabContent" you should specify tab-content-class.<br>
Function hideTabContent hids the tab contents, by removing class "show-class" and adding "hide-class".
The argument "a" is passed when the function starts and indicates which "tabContent" will not be hidden. In the code "hideTabContent(1);".<br>
Function showTabContent shows the tab contents, which will be indicated in the argument "b", argument "b" will be passed from the event listener for element "parentTabs".<br>
The event listener for element parentTabs selects the tab that was clicked, checks for the presence of the tabs-class in this element,
checks the current tab with the tab in the loop for, if they match, hides the all tab content and shows the tab content passed to the showTabContent function with number i.<br>
Thus, content with number i is shown if you clicked on the tab with number i.
