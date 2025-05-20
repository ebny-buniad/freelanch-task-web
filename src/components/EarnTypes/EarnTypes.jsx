import React from 'react';

const EarnTypes = () => {
    return (
        <div>
            <h3 className='text-3xl font-semibold py-5'>Explore the different ways to earn</h3>
            <h4 className='text-xl font-light text-gray-400'>Talent Marketplace</h4>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='shadow p-10 rounded-xl'>
                    <img className='w-28' src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e3d8559eba7192888b368_profile-edit.svg" alt="" />
                    <h4 className='font-semibold'>1. Create a profile</h4>
                    <p className='text-gray-400'>Highlight your skills and experience, show your portfolio, and set your ideal pay rate.</p>
                </div>
                <div className='shadow p-10 rounded-xl'>
                    <img className='w-28' src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/628b70ff8caffb0a880e38ce_search-jobs.png" alt="" />
                    <h4 className='font-semibold'>2. Search for jobs</h4>
                    <p className='text-gray-400'>Search on Talent Marketplace™ for the hourly or fixed-price work you’re looking for.</p>
                </div>
                <div className='shadow p-10 rounded-xl'>
                    <img className='w-28' src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/628b70ff12a4d6087877a56a_proposal.png" alt="" />
                    <h4 className='font-semibold'>3. Submit a proposal</h4>
                    <p className='text-gray-400'>Set your rate and tell clients why you’re the right person for the job!</p>
                </div>
                <div className='shadow p-10 rounded-xl'>
                    <img className='w-28' src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/628b70ff95df086266bde27f_contract-sent.png" alt="" />
                    <h4 className='font-semibold'>4. Get contract</h4>
                    <p className='text-gray-400'>If the client likes your proposal they’ll send you a contract to begin working.</p>
                </div>
                <div className='shadow p-10 rounded-xl'>
                    <img className='w-28' src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/628b70ffa31b5531f443a64a_welcome-freelancer.png" alt="" />
                    <h4 className='font-semibold'>5. Complete the work</h4>
                    <p className='text-gray-400'>Check steps off as you finish and work with your client if you have questions.</p>
                </div>
                <div className='shadow p-10 rounded-xl'>
                    <img className='w-28' src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/628b70ff95df086266bde27f_contract-sent.png" alt="" />
                    <h4 className='font-semibold'>6. Get paid securely</h4>
                    <p className='text-gray-400'>Once the client approves your work, you'll get paid and they can leave you feedback.</p>
                </div>
            </div>

            <div>
                <h3 className='text-3xl font-semibold py-10'>Our support</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='flex gap-4 p-10'>
                        <img src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e95a9c221d8b56973cb9f_overview.svg" alt="" />
                        <div>
                            <h4 className='text-xl'>Client reviews</h4>
                            <p className='text-gray-400'>Read client details and feedback from professionals like you.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 p-10'>
                        <img src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e9675f8ac0adbf8832c42_payment-funded.svg" alt="" />
                        <div>
                            <h4 className='text-xl'>Protected payments</h4>
                            <p className='text-gray-400'>Get paid the way you want, secure and fully protected.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 p-10'>
                        <img src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e9675c0540ad7e44f747a_message-question.svg" alt="" />
                        <div>
                            <h4 className='text-xl'>Answers to questions</h4>
                            <p className='text-gray-400'>Everything you need in our help center, resources, and community.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 p-10'>
                        <img src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e96755f4c3853d183647d_job-complete.svg" alt="" />
                        <div>
                            <h4 className='text-xl'>Trusted jobs</h4>
                            <p className='text-gray-400'>We use various tools to detect and reduce fraud with a dedicated team 24/7.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 p-10'>
                        <img src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e96756f12f5305e1adae7_disputes.svg" alt="" />
                        <div>
                            <h4 className='text-xl'>Help with disputes</h4>
                            <p className='text-gray-400'>Read client details and feedback from professionals like you.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EarnTypes;