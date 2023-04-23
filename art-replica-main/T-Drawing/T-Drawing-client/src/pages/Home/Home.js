import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../utilities/Hook/useTitle';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import ServicesThree from './ServicesThree/ServicesThree';
import Stats from './Stats/Stats';

const Home = () => {
  const services = useLoaderData();
    useTitle('Home')
    return (
      <div>
        <Banner></Banner>
        <ServicesThree services={services}></ServicesThree>
        <div className="flex justify-center mb-20">
          <Link to="/services">
            <button className="btn btn-outline text-green-500 hover:bg-green-400 hover:border-none ml-3">
              see more
            </button>
          </Link>
            </div>
            <Stats></Stats>
            <AboutUs></AboutUs>
      </div>
    );
};

export default Home;