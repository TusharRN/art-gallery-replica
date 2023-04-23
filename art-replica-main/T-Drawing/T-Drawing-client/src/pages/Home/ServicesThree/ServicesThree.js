import React from 'react';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';

const ServicesThree = ({ services}) => {
    
    return (
      <div>
        <div className="mt-16 mb-10">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-500">Services</p>
            <h2 className="text-5xl font-semibold">Arts We Create</h2>
            <p className="py-5">
              There are so many different kinds of painting styles and not to
              mention the different kinds of paints, <br />
              that it can be difficult for someone who wants to choose their own
              painting styles.
            </p>
          </div>

          {services ? (
            <div  className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-6 mt-10 mx-2">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))}
            </div>
          ) : (
            <progress className="progress w-full"></progress>
          )}
        </div>
      </div>
    );
};

export default ServicesThree;