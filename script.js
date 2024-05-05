document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('preferences-form');
  const fontSizeInput = document.getElementById('font-size');
  const fontColorInput = document.getElementById('font-color');

  // Load saved preferences
  loadPreferences();

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user preferences
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Save preferences as cookies
    document.cookie = `fontSize=${fontSize}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `fontColor=${fontColor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

    // Apply preferences immediately
    applyPreferences(fontSize, fontColor);
  });

  // Function to load saved preferences
  function loadPreferences() {
    const cookies = document.cookie.split(';');
    const preferences = {};
    cookies.forEach(cookie => {
      const [key, value] = cookie.split('=').map(item => item.trim());
      preferences[key] = value;
    });

    if (preferences.fontSize && preferences.fontColor) {
      applyPreferences(preferences.fontSize, preferences.fontColor);
    }
  }

  // Function to apply preferences
  function applyPreferences(fontSize, fontColor) {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.color = fontColor;
    fontSizeInput.value = fontSize;
    fontColorInput.value = fontColor;
  }
});
