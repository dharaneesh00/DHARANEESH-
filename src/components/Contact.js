export default function Contact () {

    const config = {
        email : 'rmdharaneeshh@gmail.com',
        
    }

    return <section id='contact' className='flex flex-col bg-secondary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-white mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'> If you'd like to explore this in more detail , feel free to connect with me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
           
        </div>
    </section>
}