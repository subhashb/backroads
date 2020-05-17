import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum sint,
        veniam magnam libero, nesciunt ea maxime ab magni reiciendis
        reprehenderit explicabo quidem? Aliquam veritatis neque in error
        repellendus officia!"
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
