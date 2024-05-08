
export default function HomeButton({background, value, textCol, textHov, bgHover, }) {
    return(
        <>
            <button className={`${background} ${textCol} font-bold p-2 sm:px-5 text-xs sm:text-sm rounded-lg sm:rounded-2xl border-2 border-gray-600 m-2 ${bgHover} ${textHov} ease-in-out duration-300`} >
            {value}
            </button>
        </>
    )
}