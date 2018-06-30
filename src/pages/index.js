import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import BannerLanding from '../components/BannerLanding'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/badal.png'
import pic03 from '../assets/images/tantan.png'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/cow.png'
import pic06 from '../assets/images/pic06.jpg'
import pic08 from '../assets/images/tantan.png'
import pic09 from '../assets/images/badal.png'
import pic10 from '../assets/images/gabbu.png'
import bulla from '../assets/images/cow.png'
import shoora from '../assets/images/cub.png'
import fifi from '../assets/images/fifi.png'
import kit from '../assets/images/kit.jpg'
import kuhoo from '../assets/images/kuhoo.png'
import nip from '../assets/images/nip.jpg'
import nap from '../assets/images/nap.jpg'
import bubbly from '../assets/images/bubbly.png'
import piki from '../assets/images/piki.png'
import ranga from '../assets/images/ranga.jpg'
import ranga2 from '../assets/images/ranga2.png'
import tuff from '../assets/images/tuff.jpg'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
            <Helmet>
                <title>Tan Tan</title>
                <meta name="description" content="Tan Tan" />
            </Helmet>
    
            <BannerLanding />
    
            <div id="main">
                {/* <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Tan Tan</h2>
                        </header>
                        <p>Tan Tan is a 4 year old bell hanging in a school. Post school he comes to life and sets on an exploratory fulfilled journey.  His journey is full of life, fun and adventure which results into a lot of incidental learning.</p>
                    </div>
                </section> */}
                <section id="two" className="spotlights">
                    <section>
                        <Link to="/generic" className="image">
                            <img src={pic08} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Tan Tan</h3>
                                </header>
                                <p>Tan Tan is a 4 year old bell hanging in a school. Post school he comes to life and sets on an exploratory fulfilled journey.  His journey is full of life, fun and adventure which results into a lot of incidental learning.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={pic09} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Badal</h3>
                                </header>
                                <p>Badal is a baby elephant who throws tantrums most of the times. He loves splashing water on others to grab their attention. He is very friendly by nature. He wears spectacles due to poor vision but is able to observe and analyse minute details.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={pic10} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Gabbu</h3>
                                </header>
                                <p>Gabbu is a 5 year old kid who is very inquisitive and witty. He is exploratory by nature who loves trying out things on his own. He loves to fantasize and create his own stories. Most of the times he ends up breaking things to understand how they work. He behaves like a leader preaching to his friends whatever he has learnt at home or school. He loves riding cycle and playing hide and seek.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={bulla} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Bulla - the COW</h3>
                                </header>
                                <p>Bulla the cow is a lazy animal who keeps chewing food slowly the whole day. He is very intelligent and has a sharp memory.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={shoora} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Shoora</h3>
                                </header>
                                <p>Shoora the tiger cub is a very playful animal. He is very active and keeps jumping around. He loves to dance.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={fifi} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Fifi</h3>
                                </header>
                                <p>Fifi is a 2 year old chubby kid. She loves dancing. She has a pretty smiling face and makes the environment lively by her innocent actions. She wears colourful shoes which are very attractive and make noise every time she walks.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={tuff} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Tuff</h3>
                                </header>
                                <p>Tuff the cat is a friendly, fun loving and independent animal who keeps running around always. She is very inquisitive and tries to poke her nose in everything.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={ranga2} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>RANGA - the chameleon</h3>
                                </header>
                                <p>Ranga the chameleon is a mischievous animal who keeps playing pranks on everyone. His ability to change colour helps in not getting caught. He loves playing pee-ka-boo with his friends.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={kuhoo} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Kuhoo</h3>
                                </header>
                                <p>Kuhoo is a 5 year old shy girl who is quiet most of the times. She is comfortable only in the vicinity of family and close friends. She is very observant and loves spending time playing with colours, clay and kitchen set. She has a doll which she carries everywhere.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={piki} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Piki</h3>
                                </header>
                                <p>Piki is a baby peacock with only one feather attached to him. He is highly self obsessed and proud of his beauty. He is very lazy by nature. In the process of showing off his beauty he ends up accidentally doing things which create funny moments.</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={kit} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Kit</h3>
                                </header>
                                <p></p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={nip} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Nip</h3>
                                </header>
                                <p></p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={nap} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Nap</h3>
                                </header>
                                <p></p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/generic" className="image">
                            <img src={bubbly} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Bubbly</h3>
                                </header>
                                <p></p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                </section>
            </div>
    
        </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`