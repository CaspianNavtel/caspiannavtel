
// import MapImage from '../../../public/gps.png' // şəkili öz map mockup ilə əvəz et


function Hero() {
    return (
        <section className="bg-gradient-to-r from-primary to-primaryDark text-white">
            <div className="max-w-[1440px] mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">

                {/* Left Side */}
                <div className="flex-1">
                    <h1 className="font-poppins font-bold text-4xl lg:text-5xl mb-6">
                        Real-time GPS & GIS software
                    </h1>
                    <p className="font-inter text-lg mb-8 max-w-lg">
                        Vehicle tracking, mapping and digital-twin services — secure and scalable
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <button className="bg-accent text-white font-poppins font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
                            Get a demo
                        </button>
                        <button className="border border-white text-white font-poppins font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition">
                            Contact
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex-1 flex justify-center">
                    {/* <img
                        
                        alt="Map Illustration"
                        className="max-w-sm w-full drop-shadow-lg"
                    /> */}
                </div>

            </div>
        </section>
    )
}

export default Hero
