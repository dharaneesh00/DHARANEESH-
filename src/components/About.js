import PhotoImg from '../assets/Photo 4.25.31 PM.jpg'


export default function About(){
    let config = {
        subtitle: 'concentrating in Software development.'

    }
    return <section className="  flex flex-col  md:flex-row px-5 py-36 bg-secondary  justify-center id" id="about">
        <div className="  md: w-1/2 flex-col">
        <h1 className=" text-white text-8xl font-hero-font ">HELLO, <br/> WORLD! <br/><br/>
        <p className ="text-3xl ">I'm Dharaneesh studying CSE(IoT) <br></br>
            in KSR College of Engineering,</p>
            <p className="text-xl">{config.subtitle}</p>
        
        </h1>
        </div>

        <img  className="  w-1/3 md: w-1/2"src={PhotoImg} />
        
    </section>
}   