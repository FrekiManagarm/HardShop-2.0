import React from 'react'
import { Link } from 'react-router-dom'
import Header from './NavBar'
import Footer from './Footer'
import Slid from '../Slider'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <div>
            <Header />
         <div>
{/* hero */}
<section className="bg-primary pt-4">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-10 text-white text-center">
      <h1 className="font-weight-light"><b>Ici se trouve tout ce dont vous avez besoin.</b> Les composants, les configs et les News en lien avec le Hardware.</h1>
    </div>
  </div>
  <div className="row">
  </div>
</div>
</section>
{/* / hero */}
<section className="half bg-primary">
<div className="container-full mb-5">
  <div className="row gutter-0 justify-content-center">
    <div className="col-12">
      <div className="owl-carousel owl-carousel-showcase owl-carousel-fluid" data-items="[3,2,1]" data-center="true" data-margin={30} data-nav="true" data-loop="true">            
          <Slid/>            
      </div>
    </div>
  </div>
</div>
</section>
{/* components */}

<section className="pt-2">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6 text-center">
      <h2><b>Tout ce qu'il faut retenir !</b></h2>
      <p></p>
    </div>
  </div>
  <div className="row gutter-3 align-items-center">
    <div className="col-lg-2">
      <div className="row justify-content-center justify-content-lg-end">
        <div className="col-8">
        </div>
      </div>
    </div>
    <div className="col-lg-7">
      <div className="row mt-2">
          
      </div>
      <div className="row mt-3 justify-content-center justify-content-lg-start">
        <div className="col-md-6">
        </div>
      </div>
    </div>
  </div>
</div>
</section>
{/* / components */}
{/* categories */}
<section className="bg-white pt-3">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6 text-center">
      <h2>Tout <b>est ici</b> !</h2>
      <p>Il manque quelque chose ? Faites-le nous savoir ! 
        <Link href="mailto:geek2nerd2019@gmail.com" className="action text-dark">Request</Link></p>
    </div>
  </div>
  <div className="row gutter-1">
    <Link to="/CPU" className="col-6 col-md-4 col-lg-2">
        <div title="CPU" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">Processeur</h5>
        </div>
    </Link>
    <Link to="" className="col-6 col-md-4 col-lg-2">
        <div title="Carte Graphique" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">Carte Graphiques</h5>
        </div>
    </Link>
    <Link to="/CarteMère" className="col-6 col-md-4 col-lg-2">
        <div title="Carte Mère" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">Carte Mère</h5>
        </div>
    </Link>
    <Link to="/Mémoire" className="col-6 col-md-4 col-lg-2">
        <div title="RAM" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">RAM</h5>
        </div>
    </Link>
    <Link to="/Refroidissement" className="col-6 col-md-4 col-lg-2">
        <div title="Refroidissement" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">Refroidissement</h5>
        </div>
    </Link>
    <Link to="/SSD"className="col-6 col-md-4 col-lg-2">
        <div title="SSD" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">SSD</h5>
        </div>
    </Link>
    <Link to="/PSU" className="col-6 col-md-4 col-lg-2">
        <div title="Alimentation" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">Alimentation</h5>
        </div>
    </Link>
    <Link to="/Boitier" className="col-6 col-md-4 col-lg-2">
        <div title="Boîtier" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">Boîtier</h5>
        </div>
    </Link>
    <Link to="/HDD"className="col-6 col-md-4 col-lg-2">
        <div title="HDD" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">HDD</h5>
        </div>
    </Link>
    <Link to="/OS" className="col-6 col-md-4 col-lg-2">
        <div title="OS" className="card-body text-center px-0 py-1 py-md-2 py-lg-3 card bordered highlight">
          <h5 className="fs-18">OS</h5>
        </div>
    </Link>
    <Link to="/Viewall" className="col-6 col-md-4 col-lg-2">
        <div title="voir plus" className="card-body text-center py-1 py-md-2 py-lg-3 action card bordered highlight">
          <h5 className="fs-18 text-primary">voir plus</h5>
        </div>
    </Link>
  </div>
</div>
</section>
{/* / categories */}
{/* cta */}
<div className="half bg-white">
<span className="half-bg bg-dark" />
<div className="container">
  <div className="row">
    <div className="col">
      <div className="cta boxed no-border bg-primary p-3 p-md-5">
        <i className="icon-shopping-cart2 icon-background text-white" />
        <div className="row">
          <div className="col text-white">
            <h2>Next Level of <b>Documentation</b></h2>
            <div className="lead">Purchase Guidebook now, and make documenting your project piece of cake. <div className="action text-white">Buy Now</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* / cta */}

</div>

            <Footer />
        </div>
        )
    }
}

export default Home