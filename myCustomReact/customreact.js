function customRender(reactElement, container) {
    reactElement = document.createElement(myElement.type);
    for (const key in myElement.props) {
        if (key === "children") continue
        reactElement.setAttribute(key, myElement.props[key])
    }
    reactElement.innerText = myElement.children
    container.appendChild(reactElement)
}

const myElement = {
    type: "a",
    props: {
        href: "https://jw.org",
        target: "blank"
    },
    children: "Click to visit Jehovah's Witness official website"
}

const mainCOntainer = document.getElementById("root")

customRender(myElement, mainCOntainer)