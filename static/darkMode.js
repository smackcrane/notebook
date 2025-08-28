// toggle CSS custom properties between light mode and dark mode

let toggleCounter = 0

function toggleDarkMode() {
    // check counter to see if we're currently in light or dark mode
    if (toggleCounter++ % 2 === 0) {
        // toggle colors to dark mode
        document.documentElement.style.setProperty('--text-color', '#DDD')
        document.documentElement.style.setProperty('--background-color', '#000')
        document.documentElement.style.setProperty('--low-contrast', '#222')
        document.documentElement.style.setProperty('--medium-contrast', '#888') // same for light and dark
        document.documentElement.style.setProperty('--main-color', '#5FA4B3') // same for light and dark
        document.documentElement.style.setProperty(
            '--highlight-contrast',
            '#FF7700'
        ) // same for light and dark
        document.documentElement.style.setProperty(
            '--footnote-background',
            '#022'
        )
        document.documentElement.style.setProperty('--radio-hover', '#333')
        document.documentElement.style.setProperty('--radio-checked', '#432')
        document.documentElement.style.setProperty(
            '--footnote-brightness',
            '130%'
        )

        // toggle switch to dark mode
        document.getElementById('darkModeSwitch').setAttribute('cx', '20')
        document.getElementById('darkModeSwitch').setAttribute('fill', 'black')

        // add darkMode cookie (or update if it already exists)
        document.cookie =
            'darkMode=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;' // remove, in case it already exists
        document.cookie = 'darkMode=true; path=/;'
    } else {
        // toggle colors to light mode
        document.documentElement.style.setProperty('--text-color', '#222')
        document.documentElement.style.setProperty('--background-color', '#FFF')
        document.documentElement.style.setProperty('--low-contrast', '#EEE')
        document.documentElement.style.setProperty('--medium-contrast', '#888')
        document.documentElement.style.setProperty('--main-color', '#5FA4B3')
        document.documentElement.style.setProperty(
            '--highlight-contrast',
            '#FF7700'
        )
        document.documentElement.style.setProperty(
            '--footnote-background',
            '#EFF'
        )
        document.documentElement.style.setProperty('--radio-hover', '#DDD')
        document.documentElement.style.setProperty('--radio-checked', '#FDB')
        document.documentElement.style.setProperty(
            '--footnote-brightness',
            '90%'
        )

        // toggle switch to light mode
        document.getElementById('darkModeSwitch').setAttribute('cx', '10')
        document.getElementById('darkModeSwitch').setAttribute('fill', 'white')

        // remove darkMode cookie
        document.cookie =
            'darkMode=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;'
    }
}

// attach to dark mode switch
document.getElementById('darkMode').addEventListener('click', toggleDarkMode)

// check for darkMode cookie and if so toggle to dark mode
if (document.cookie.split(';').some((c) => c.trim().startsWith('darkMode'))) {
    toggleDarkMode()
}
