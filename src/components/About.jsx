import aboutSvg from '../assets/about.svg';
import Section from './Section';
const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} alt="AboutIMG" className='w-full h-64' />
                <article>
                    <Section text='About ME' />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        A passionate and innovative Front End Developer seeking opportunities to transform visionary designs into seamless, user-centric web experiences. Eager to leverage expertise in HTML, CSS, JavaScript, ReactJS to craft visually stunning and highly functional interfaces that elevate user experience.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About;
