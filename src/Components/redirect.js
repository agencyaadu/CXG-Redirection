import React, {useEffect} from "react";

const Redirect = () => {

    const url = process.env.REACT_APP_REDIRECT_URL
    const [seconds, setSeconds] = React.useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    window.location.href = url;
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);

        return () => clearInterval(timer);
    }, [url]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-customGray">We are yet to rebrand . . .</p>
            <h1 className="text-2xl">Redirecting to our former website in {seconds} seconds...</h1>
            <a href={url} className="text-blue-500 ml-2">{url}</a>
        </div>
    )
}

export default Redirect;