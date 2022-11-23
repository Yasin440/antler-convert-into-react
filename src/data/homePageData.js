export const packages = [
    {
        title: 'Shared Hosting',
        img: './img/svg/cloudfiber.svg',
        time: 'Starting at:',
        currency: '$',
        price: '8.19',
        timeUnit: 'month',
        btnContent: 'All Plans',
        btnLink: '/hosting',
        batch: null,
        lists: [
            { title: 'DISK', amount: '250GB SSD', icon: 'icon-drives' },
            { title: 'DATA', amount: '1T Bandwidth', icon: 'icon-speed' },
            { title: 'EMAIL', amount: '120 Emails', icon: 'icon-emailopen' },
            { title: 'TCD', amount: '30 Domains', icon: 'icon-domains' },
        ]
    },
    {
        title: 'Dedicated Server',
        img: './img/svg/dedicated.svg',
        time: 'annually get (20% discount)',
        currency: '$',
        price: '82.00',
        timeUnit: 'month',
        btnContent: 'Configure',
        btnLink: '/configarator',
        batch: 'recommended',
        lists: [
            { title: 'CPU', amount: '4x 3.20Ghz 2 Cores', icon: 'icon-cpu' },
            { title: 'RAM', amount: '16GB (up to 32GB)', icon: 'icon-ram' },
            { title: 'DRIVES', amount: '2 x 1TB SATA 3.5', icon: 'icon-drivessd' },
            { title: 'UPLINK', amount: '1Gbps - 20TB', icon: 'icon-git' },
        ]
    },
    {
        title: 'Cloud VPS',
        img: './img/svg/vps.svg',
        time: 'Starting at:',
        currency: '$',
        price: '9.99',
        timeUnit: 'month',
        btnContent: 'All Plans',
        btnLink: '/vps',
        batch: null,
        lists: [
            { title: 'DISK', amount: '250GB SSD', icon: 'icon-drives' },
            { title: 'DATA', amount: '1T Bandwidth', icon: 'icon-speed' },
            { title: 'EMAIL', amount: '120 Emails', icon: 'icon-emailopen' },
            { title: 'TCD', amount: '30 Domains', icon: 'icon-domains' },
        ]
    },
]
export const feature = [{
    title: 'Why Choose Antler?',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    cards: [
        {
            img: './img/svg/helpdesk.svg',
            title: 'Support 24x7x365',
            details: 'Excepteur sint occaecat cupidatat non proident voluptate',
            batch: 'Premium',
            readMorUrl: '',
        },
        {
            img: './img/svg/window.svg',
            title: 'Free WHM & cPanel',
            details: 'Excepteur sint occaecat cupidatat non proident dolor',
            batch: 'Control Panal',
            readMorUrl: '',
        },
        {
            img: './img/svg/cloudmanaged.svg',
            title: 'Perfomance Optimized',
            details: 'Excepteur sint occaecat cupidatat non proident voluptate',
            batch: null,
            readMorUrl: '',
        },
    ]
}]
export const homeHelpCards = [
    { img: './img/svg/livechat.svg', url: '/livechat', title: 'Live Chat', details: 'Lorem Ipsum is simply dummy text printing.' },
    { img: './img/svg/emailopen.svg', url: '/contact-us', title: 'Send Ticket', details: 'Lorem Ipsum is simply dummy text printing.' },
    { img: './img/svg/book.svg', url: '/knowledgebase', title: 'Knowledge base', details: 'Lorem Ipsum is simply dummy text printing.' }
]