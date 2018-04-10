var tabs = document.getElementsByClassName('tab-header')[0].children[0].children;

var tabContents = document.getElementsByClassName('tab-content');

var tabLength = tabs.length;

for (let i = 0; i < tabLength; i++) {
  tabs[i].addEventListener('click', function (e) {
    selectTab(i);
    selectTabContent(i);
  });
}

function selectTab(selectedIndex) {
  for (let i = 0; i < tabLength; i++) {
    if (selectedIndex === i) {
      tabs[i].className = 'selected-tab';
    } else {
      tabs[i].className = '';
    }
  }
}

function selectTabContent(selectedIndex) {
  for (let i = 0; i < tabLength; i++) {
    if (selectedIndex === i) {
      tabContents[i].className = 'tab-content selected-tab-content';
    } else {
      tabContents[i].className = 'tab-content';
    }
  }
}