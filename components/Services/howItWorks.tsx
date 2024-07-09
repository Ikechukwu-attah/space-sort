import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-3xl font-bold text-center mb-8">How It Works</h1>
      <div className="flex flex-col gap-6">
        {/* Consultation Card */}
        <div className="bg-blue-100 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Consultation</h2>
          <p>{`Let's meet!`}</p>
          <p>Feel free to contact me to arrange a 30-minute complimentary consultation so we can walk through your space together and discuss your goals. All good things start with a first step.</p>
          <p><a href="#" className="text-blue-500 underline">Book here!</a></p>
        </div>

        {/* Organizing Card */}
        <div className="bg-blue-100 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Organizing</h2>
          <p>{`Let's create a unique plan to maximize your space and create a system that works for you. Whatever the scope and size of your project, I can work within your budget to get you living in the space(s) you deserve!`}</p>
          <p>Service options may include: decluttering, downsizing, re-purposing, & purging.</p>
          <p className="font-bold">{`What's included:`}</p>
          <ul className="list-disc list-inside">
            <li>Space planning</li>
            <li>Standard labels, if desired</li>
            <li>Packing & unpacking are available</li>
            <li>Product recommendations (shopping extra)</li>
            <li>Donations will be taken after each session and donated to local charities & organizations.</li>
          </ul>
          <p>Hourly rate: $60 (3-hour minimum)</p>
          <p>Shopping rate: $20/hour (up to 3 hours)</p>
          <p>Customized labels: varies</p>
        </div>

        {/* Refresh Service Card */}
        <div className="bg-blue-100 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Refresh Service</h2>
          <p>A monthly service you {`can't`} resist! My monthly {`tune-up`} service will help you keep focused on the things that matter while I focus on refreshing different areas in your home.</p>
          <p>(Note: for existing clients only)</p>
          <p>Pricing based on your specific requirements</p>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <p>If you are looking for something more specific or specialized, feel free to reach out.</p>
          <p>Pricing includes travel/mileage within all M postal codes. Other postal codes are subject to an additional $8.00 charge per 10 minutes (the first half hour each way is free).</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
