console.log('%c HI THERE 👋🏾', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/9" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
const ul = document.getElementById(`dog-breeds`)
const select = document.querySelector("#breed-dropdown")

const grabImg = () => {
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const images = data.message
        images.forEach(element => {
            const div = document.getElementById(`dog-image-container`)
            const img = document.createElement(`img`)
            img.setAttribute('id', 'image_id')
            img.src = element
            document.getElementById(`image_id`)
            div.appendChild(img)
        })
    })
}

const addBreeds = () => {
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        // converts data.message from the key of an object to an array of 95 els
        const breedsList = Object.keys(data.message)
        // for each array el:
        // (1) create an li whose inner text = data.message aka element
        // (2) append to ul parent node
        // (3) run changeColor function if clicked
        // (4) set CSS style color to black
        breedsList.forEach(function (element) {

            let li = document.createElement(`li`)
            li.setAttribute(`id`, `list-el`)
            li.innerText = element
            li.style.color = `black`
            ul.appendChild(li)

            const changeColor = () => {
                if (li.style.color === `black`) {
                    li.style.color = `blue`
                    console.log(`Turn Blue.`)
                } else {
                    li.style.color = `black`
                    console.log(`Turn Black.`)
                }
            }

            li.addEventListener(`click`, changeColor)
        })

        select.addEventListener(`change`, () => {
            document.querySelectorAll('#list-el').forEach((elem) => elem.remove())
            breedsList.forEach(function(element) {
                if((element.charAt(0)==`a`)&&(select.value == `a`)){
                    let li = document.createElement(`li`)
                    li.setAttribute(`id`, `list-el`)
                    li.innerText = element
                    li.style.color = `black`
                    ul.appendChild(li)

                    const changeColor = () => {
                        if (li.style.color === `black`) {
                            li.style.color = `blue`
                            console.log(`Turn Blue.`)
                        } else {
                            li.style.color = `black`
                            console.log(`Turn Black.`)
                        }
                    }

                    li.addEventListener(`click`, changeColor)
                    console.log(element)
                } if((element.charAt(0)==`b`)&&(select.value == `b`)){
                    let li = document.createElement(`li`)
                    li.setAttribute(`id`, `list-el`)
                    li.innerText = element
                    li.style.color = `black`
                    ul.appendChild(li)

                    const changeColor = () => {
                        if (li.style.color === `black`) {
                            li.style.color = `blue`
                            console.log(`Turn Blue.`)
                        } else {
                            li.style.color = `black`
                            console.log(`Turn Black.`)
                        }
                    }

                    li.addEventListener(`click`, changeColor)
                    console.log(element)
                } if((element.charAt(0)==`c`)&&(select.value == `c`)){
                    let li = document.createElement(`li`)
                    li.setAttribute(`id`, `list-el`)
                    li.innerText = element
                    li.style.color = `black`
                    ul.appendChild(li)

                    const changeColor = () => {
                        if (li.style.color === `black`) {
                            li.style.color = `blue`
                            console.log(`Turn Blue.`)
                        } else {
                            li.style.color = `black`
                            console.log(`Turn Black.`)
                        }
                    }

                    li.addEventListener(`click`, changeColor)
                    console.log(element)
                } if((element.charAt(0)==`d`)&&(select.value == `d`)){
                    let li = document.createElement(`li`)
                    li.setAttribute(`id`, `list-el`)
                    li.innerText = element
                    li.style.color = `black`
                    ul.appendChild(li)

                    const changeColor = () => {
                        if (li.style.color === `black`) {
                            li.style.color = `blue`
                            console.log(`Turn Blue.`)
                        } else {
                            li.style.color = `black`
                            console.log(`Turn Black.`)
                        }
                    }

                    li.addEventListener(`click`, changeColor)
                }
            })
        })
    })
}

document.addEventListener(`DOMContentLoaded`, grabImg(), addBreeds())