const tags = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
    // this part rensponsible for picking up the keys and sending 
    //its values for creation
textarea.addEventListener('keyup', (e) => {

        createTags(e.target.value)
        if (e.key === 'Enter') {

            setTimeout(() => {
                e.target.value = '' //clear text area on enter

            }, 10);
            randomSelect();
        }
    })
    //this part creates tags
function createTags(input) {
    //split function sagregates two words where filter doesnt allow space
    //where map trims extra space
    const tage = input.split(',').filter(tag => tag !==
            '').map(tag => tag.trim())
        //prevents piling_up
    tags.innerHTML = '';

    //go through entire inputed data
    tage.forEach(tag => {
        //for each element in tagee
        const tages = document.createElement('span'); //created new element
        tages.classList.add('tag') //gave her new class
        tages.innerText = tag //gave her value
        tags.appendChild(tages) //added in main doc
    })

}

function randomSelect() {
    const times = 30; //number of times of engaging

    const engage = setInterval(() => { //infinite until clear interval
        const randomtag = pickRandomTag() //taking rand tag

        highlightTag(randomtag)

        setTimeout(() => {
            unhighlightTag(randomtag)
        }, 100)
    }, 100);

    setTimeout(() => { //for landing value
        clearInterval(engage)
        setTimeout(() => {
            const randomLanding = pickRandomTag()
            highlightTag(randomLanding)
        }), 0
    }, times * 100)

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}