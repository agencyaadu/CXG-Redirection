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
        <>
            {url === url ? (
                <div className="flex flex-col items-center justify-center h-screen">
                    <p className="text-customGray">Website under contruction . . .</p>
                    <h1 className="text-2xl">
                        Redirecting to our checkout website in {seconds} seconds...
                    </h1>
                    <a href={url} className="text-blue-500 ml-2">{url}</a>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-2xl">
                        Redirecting in {seconds} seconds...
                    </h1>
                    <a href={url} className="text-blue-500 ml-2">{url}</a>
                </div>
            )}
        </>
    
    )
}

export default Redirect;