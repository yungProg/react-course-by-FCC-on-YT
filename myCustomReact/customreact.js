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
        href: "https://google.com",
        target: "blank"
    },
    children: "visit Google"
}

const mainCOntainer = document.getElementById("root")

customRender(myElement, mainCOntainer)