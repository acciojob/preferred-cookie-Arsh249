document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('preferences-form');
  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  // Load saved preferences
  loadPreferences();

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user preferences
    const fontsize = fontSizeInput.value;
    const fontcolor = fontColorInput.value;

    // Save preferences as cookies
    document.cookie = `fontSize=${fontsize}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `fontColor=${fontcolor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

    // Apply preferences immediately
    applyPreferences(fontsize, fontcolor);
  });

  // Function to load saved preferences
  function loadPreferences() {
    const cookies = document.cookie.split(';');
    const preferences = {};
    cookies.forEach(cookie => {
      const [key, value] = cookie.split('=').map(item => item.trim());
      preferences[key] = value;
    });

    if (preferences.fontsize && preferences.fontcolor) {
      applyPreferences(preferences.fontsize, preferences.fontcolor);
    }
  }

  // Function to apply preferences
  function applyPreferences(fontsize, fontcolor) {
    document.body.style.fontSize = `${fontsize}px`;
    document.body.style.color = fontcolor;
    fontSizeInput.value = fontsize;
    fontColorInput.value = fontcolor;
  }
});
