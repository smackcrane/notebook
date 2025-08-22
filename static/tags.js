// Dynamically insert radio buttons to show/hide tagged elements
// elements <div class='tag-TAGNAME'> ... </div>
// create radio button for each TAGNAME which toggle showing only those elements

const tagDivs = document.querySelectorAll('div[tag][class~=page]') // get divs that have tags that are pages (as opposed to series)
const tagNames = Array.from(tagDivs).map((div) => div.getAttribute('tag')) // get tag names
const total = tagNames.length // total number of tags

// get unique tags and counts of each
const tags = {}
for (const tag of tagNames) {
    tags[tag] = tags[tag] ? ++tags[tag] : 1
}

// create css style for hiding or showing tags based on radio buttons
// if a radio button is checked, hide all tags
rules = `input[type=radio][id|=tag]:checked ~ div[tag] {display: none;}`
for (tag in tags) {
    // then show the tags corresponding to the checked button
    rules += `\ninput[type=radio][id="tag-${tag}"]:checked ~ div[tag="${tag}"] {display: block}`
}
// slap it in a style element and add to head
const style = document.createElement('style')
style.type = 'text/css'
style.textContent = rules
document.head.appendChild(style)

// create radio buttons
const rbAnchor = document.getElementById('radio-button-anchor') // div to attach before
for (const tag in tags) {
    tags[tag] = Math.round((100 * tags[tag]) / total) // convert counts to percentages
    // make the button and label elements
    const button = Object.assign(document.createElement('input'), {
        type: 'radio',
        id: 'tag-' + tag,
        name: 'tags',
        style: 'display: none;',
    })
    const label = Object.assign(document.createElement('label'), {
        innerHTML: `${tags[tag]}% ${tag}`,
    })
    label.setAttribute('for', 'tag-' + tag)
    // add them to the document
    rbAnchor.before(button)
    rbAnchor.before(label)
}
