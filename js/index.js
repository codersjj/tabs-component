// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const tabButtons = document.querySelectorAll('.tabs__button')
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value')

    // Update selected state for buttons
    tabButtons.forEach(btn => {
      const isSelected = btn.getAttribute('data-value') === value
      btn.setAttribute('aria-selected', isSelected)
    })

    // Show the corresponding tab panel
    document.querySelectorAll('.tabs__panel').forEach(panel => {
      const isSelected = panel.getAttribute('data-value') === value
      panel.classList.toggle('hidden', !isSelected)
    })
  })
})