import { useSelector } from "react-redux"

export default function Preview() {

    const tabsState = useSelector(state => state.tabs)

    function getCode(lang){
        return tabsState.find(obj => obj.lang === lang).code
    }

    const srcDoc = `
    <!DOCTYPE html>
        <head>
            <style>${getCode("css")}</style>
        </head>
        <body>
            ${getCode("html")}
            <script>${getCode("javascript")}</script>
        </body>
    </html>
    `
    return (
        <div className="left-0 top-0 absolute w-full h-full bg-zinc-900">
            <iframe className="block w-full h-full " srcDoc={srcDoc} sandbox="allow-scripts"></iframe>
        </div>
    )
}