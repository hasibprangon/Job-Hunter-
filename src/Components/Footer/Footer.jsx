import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mt-10 mx-4 md:mx-10'>
                <div className='md:col-span-1'>
                    <h1 className='text-2xl font-semibold mb-3 mt-5 md:mt-24'>Job-Hunter</h1>
                    <p className='mb-3'><small>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</small></p>
                    <div className='flex mb-5'>
                        <FontAwesomeIcon icon={faFacebookF} className='bg-white text-blue-400 h-6 w-6 p-3 mr-3 border rounded-full fa-3x' />
                        <FontAwesomeIcon icon={faTwitter} className='bg-white text-blue-400 h-6 w-6 p-3 mr-3 border rounded-full fa-3x' />
                        <FontAwesomeIcon icon={faInstagram} className='bg-white text-orange-600 h-6 w-6 p-3 mr-3 border rounded-full fa-3x' />
                    </div>
                </div>
                <div className='md:col-span-1'>
                    <h1 className='text-2xl font-semibold mb-3 mt-5 md:mt-24'>Company</h1>
                    <p className='mb-3'><small>About Us</small></p>
                    <p className='mb-3'><small>Work</small></p>
                    <p className='mb-3'><small>Latest News</small></p>
                    <p className='mb-3'><small>Careers</small></p>
                </div>
                <div className='md:col-span-1'>
                    <h1 className='text-2xl font-semibold mb-3 mt-5 md:mt-24'>Product</h1>
                    <p className='mb-3'><small>Prototype</small></p>
                    <p className='mb-3'><small>Plans & Pricing</small></p>
                    <p className='mb-3'><small>Customers</small></p>
                    <p className='mb-3'><small>Integrations</small></p>
                </div>
                <div className='md:col-span-1'>
                    <h1 className='text-2xl font-semibold mb-3 mt-5 md:mt-24'>Support</h1>
                    <p className='mb-3'><small>Help Desk</small></p>
                    <p className='mb-3'><small>Sales</small></p>
                    <p className='mb-3'><small>Become a Partner</small></p>
                    <p className='mb-3'><small>Developers</small></p>
                </div>
                <div className='md:col-span-1'>
                    <h1 className='text-2xl font-semibold mb-3 mt-5 md:mt-24'>Contact</h1>
                    <p className='mb-3'><small>524 Broadway, NYC</small></p>
                    <p className='mb-3'><small>+1 777 - 978 - 5570</small></p>
                </div>
            </div>
            <hr className='mx-4 md:mr-10 md:ml-10 mt-5 mb-5' />
            <div className='grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-10'>
                <div className='mb-3 md:mb-24'>
                    <p><small>@2023 Job-Hunter. All Rights Reserved</small></p>
                </div>
                <div className='mb-24'>
                    <p><small>Powered by Job-Hunter</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
