export default function Footer() {
    return(
        <div className="w-full text-center text-sm md:text-base">
            <p>This Website is built with <a className="underline font-bold text-black" href="https://nextjs.org/" target="blank">Next.js</a>.</p>
            <p>{`© Irzi Rahmatullah  ${new Date().getFullYear()}`}</p>
            <p><b>All right reserved.</b></p>
        </div>
    )
}